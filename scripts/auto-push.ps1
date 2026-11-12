param(
  [string]$Message = "",
  [switch]$Watch,
  [int]$DebounceSeconds = 5
)

$ErrorActionPreference = "Continue"

# Ensure Git is in PATH even in fresh shells
$gitCmdDir = "C:\Program Files\Git\cmd"
if ((Test-Path $gitCmdDir) -and ($env:Path -notlike "*$gitCmdDir*")) {
  $env:Path = "$env:Path;$gitCmdDir"
}

$repoRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
Set-Location $repoRoot

function Invoke-SyncPush {
  param([string]$CommitMsg)

  $status = (& git status --porcelain) 2>&1
  $hasChanges = ($status | Where-Object { $_ -and $_.ToString().Trim() -ne "" }).Count -gt 0

  if ($hasChanges) {
    $finalMsg = if ($CommitMsg) {
      $CommitMsg
    } else {
      "chore: auto-update $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
    }

    & git add -A
    if ($LASTEXITCODE -ne 0) {
      Write-Warning "git add failed (exit $LASTEXITCODE)."
      return
    }

    # Skip hook push inside commit so we push once cleanly below
    $prevSkip = $env:GIT_NO_AUTOPUSH
    $env:GIT_NO_AUTOPUSH = "1"
    & git commit -m $finalMsg
    $commitExit = $LASTEXITCODE
    $env:GIT_NO_AUTOPUSH = $prevSkip

    if ($commitExit -ne 0) {
      Write-Warning "git commit exited with code $commitExit."
      return
    }
  }

  # Push if local branch is ahead of upstream (or no upstream yet)
  $aheadRaw = (& git rev-list --count "@{u}..HEAD" 2>$null)
  $hasUpstream = ($LASTEXITCODE -eq 0)
  $aheadCount = if ($hasUpstream) { [int]$aheadRaw } else { 1 }

  if ($aheadCount -gt 0) {
    $branch = (& git rev-parse --abbrev-ref HEAD).Trim()
    Write-Host "[auto-push] Pushing $aheadCount commit(s) to origin/$branch..." -ForegroundColor Cyan
    if ($hasUpstream) {
      & git push origin $branch
    } else {
      & git push -u origin $branch
    }

    if ($LASTEXITCODE -eq 0) {
      Write-Host "[auto-push] Pushed successfully -> GitHub & Vercel will sync." -ForegroundColor Green
    } else {
      Write-Warning "[auto-push] git push failed (exit $LASTEXITCODE)."
    }
  } elseif (-not $hasChanges) {
    Write-Host "[auto-push] Working tree clean. Nothing to push." -ForegroundColor DarkGray
  }
}

function Get-RepoSnapshot {
  Get-ChildItem -Path $repoRoot -Recurse -File -Force |
    Where-Object {
      $_.FullName -notmatch "\\(\.git|node_modules|\.vercel)(\\|$)"
    } |
    ForEach-Object { "$($_.FullName)|$($_.LastWriteTimeUtc.Ticks)|$($_.Length)" } |
    Sort-Object
}

if (-not $Watch) {
  Invoke-SyncPush -CommitMsg $Message
  exit 0
}

Write-Host "[auto-push] Watching $repoRoot for changes (Ctrl+C to stop)..." -ForegroundColor Cyan
# Sync any pending changes on startup
Invoke-SyncPush -CommitMsg $Message

$lastSnapshot = (Get-RepoSnapshot) -join "`n"
$pendingChangeAt = $null

while ($true) {
  Start-Sleep -Seconds 2
  $currentSnapshot = (Get-RepoSnapshot) -join "`n"

  if ($currentSnapshot -ne $lastSnapshot) {
    $lastSnapshot = $currentSnapshot
    $pendingChangeAt = Get-Date
    Write-Host "[auto-push] Change detected, waiting ${DebounceSeconds}s before commit & push..." -ForegroundColor Yellow
  }

  if ($pendingChangeAt -and ((Get-Date) - $pendingChangeAt).TotalSeconds -ge $DebounceSeconds) {
    $pendingChangeAt = $null
    Invoke-SyncPush -CommitMsg $Message
    $lastSnapshot = (Get-RepoSnapshot) -join "`n"
  }
}
