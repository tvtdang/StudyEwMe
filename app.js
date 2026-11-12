(function () {
  const HISTORY_KEY = 'en11_u4_u5_rewrite_history_v1';

  const SCOPE_LABELS = {
    all: 'Tất cả (Unit 4 + 5)',
    unit4: 'Unit 4: Gerunds',
    unit5: 'Unit 5: Participles',
    mixed: 'Tổng hợp Unit 4 & 5'
  };

  const state = {
    mode: 'practice',
    scope: 'all',
    countOption: 'all',
    shuffle: false,
    userTouchedShuffle: false,
    timerMinutes: 15,

    questions: [],
    currentIndex: 0,
    answers: {},
    checked: {},
    flagged: {},
    hintShown: {},

    startedAt: 0,
    durationSeconds: 0,
    timerRemaining: 0,
    timerId: null,
    autoSubmittedMessage: '',
    activeFilter: 'all',
    lastConfigQuestions: []
  };

  // DOM helpers
  const $ = (id) => document.getElementById(id);
  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };

  function shuffleArray(arr) {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function formatDuration(totalSec) {
    const sec = Math.max(0, Math.floor(totalSec));
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
  }

  function getScopedPool(scope) {
    const all = window.REWRITE_QUESTIONS || [];
    if (scope === 'all') return all.slice();
    return all.filter((q) => q.unit === scope);
  }

  // ==================== VIEW SWITCHING ====================
  function showView(viewId) {
    ['setup-view', 'quiz-view', 'results-view'].forEach((id) => {
      $(id).classList.toggle('hidden', id !== viewId);
    });
    const isSetup = viewId === 'setup-view';
    $('btn-back-home').classList.toggle('hidden', isSetup);

    const grammarBtn = $('btn-open-grammar');
    if (viewId === 'quiz-view' && state.mode === 'exam') {
      grammarBtn.disabled = true;
      grammarBtn.title = 'Tóm tắt ngữ pháp bị khóa trong chế độ Thi thật';
      grammarBtn.innerHTML = '<span aria-hidden="true">🔒</span> Ngữ pháp (khóa)';
    } else {
      grammarBtn.disabled = false;
      grammarBtn.title = 'Xem tóm tắt ngữ pháp Unit 4 & Unit 5';
      grammarBtn.innerHTML = '<span aria-hidden="true">📘</span> Tóm tắt ngữ pháp';
    }
  }

  // ==================== SETUP VIEW LOGIC ====================
  function updateSetupUI() {
    document.querySelectorAll('.mode-card').forEach((card) => {
      const m = card.getAttribute('data-mode');
      const isSelected = m === state.mode;
      card.classList.toggle('selected', isSelected);
      card.querySelector('input[type="radio"]').checked = isSelected;
    });

    const isExam = state.mode === 'exam';
    $('timer-config-group').classList.toggle('hidden', !isExam);
    $('btn-start').textContent = isExam ? 'Bắt đầu Thi thật →' : 'Bắt đầu Luyện tập →';
    $('btn-start').classList.toggle('btn-accent', isExam);
    $('btn-start').classList.toggle('btn-primary', !isExam);

    const pool = getScopedPool(state.scope);
    const countSelect = $('select-count');
    const allOpt = countSelect.querySelector('option[value="all"]');
    if (allOpt) {
      allOpt.textContent = `Tất cả câu trong phạm vi (${pool.length} câu)`;
    }

    Array.from(countSelect.options).forEach((opt) => {
      if (opt.value === 'all') return;
      const n = Number(opt.value);
      opt.disabled = n > pool.length;
    });

    if (
      state.countOption !== 'all' &&
      Number(state.countOption) > pool.length
    ) {
      state.countOption = 'all';
      countSelect.value = 'all';
    }
  }

  function loadHistory() {
    try {
      const raw = localStorage.getItem(HISTORY_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (_) {
      return [];
    }
  }

  function saveHistoryEntry(entry) {
    const list = loadHistory();
    list.unshift(entry);
    const trimmed = list.slice(0, 8);
    try {
      localStorage.setItem(HISTORY_KEY, JSON.stringify(trimmed));
    } catch (_) {
      // Bỏ qua nếu trình duyệt chặn localStorage
    }
    renderHistory();
  }

  function renderHistory() {
    const list = loadHistory();
    const section = $('history-section');
    const container = $('history-list');
    container.innerHTML = '';

    if (!list.length) {
      section.classList.add('hidden');
      return;
    }

    section.classList.remove('hidden');
    list.forEach((item) => {
      const row = el('div', 'history-item');
      const left = el('div', 'history-meta');

      const pill = el(
        'span',
        item.mode === 'exam' ? 'pill pill-amber' : 'pill pill-green',
        item.mode === 'exam' ? 'Thi thật' : 'Luyện tập'
      );
      left.appendChild(pill);
      left.appendChild(el('strong', '', item.scopeLabel));
      left.appendChild(el('span', 'muted', `• ${item.dateStr}`));

      const right = el('div', 'history-meta');
      right.appendChild(
        el('span', 'history-score', `${item.scoreTen} điểm (${item.correct}/${item.total})`)
      );
      right.appendChild(el('span', 'muted', `• ${item.durationText}`));

      row.appendChild(left);
      row.appendChild(right);
      container.appendChild(row);
    });
  }

  // ==================== SESSION INITIALIZATION ====================
  function buildQuestionList() {
    let pool = getScopedPool(state.scope);
    if (state.shuffle) {
      pool = shuffleArray(pool);
    }
    if (state.countOption !== 'all') {
      const limit = Number(state.countOption);
      if (limit > 0 && limit < pool.length) {
        pool = pool.slice(0, limit);
      }
    }
    return pool;
  }

  function startSession(customQuestions, forcedMode) {
    stopTimer();
    if (forcedMode) {
      state.mode = forcedMode;
    }

    const chosenQuestions = customQuestions && customQuestions.length
      ? customQuestions.slice()
      : buildQuestionList();

    if (!chosenQuestions.length) return;

    state.questions = chosenQuestions;
    state.lastConfigQuestions = chosenQuestions.slice();
    state.currentIndex = 0;
    state.answers = {};
    state.checked = {};
    state.flagged = {};
    state.hintShown = {};
    state.startedAt = Date.now();
    state.durationSeconds = 0;
    state.autoSubmittedMessage = '';

    if (state.mode === 'exam' && state.timerMinutes > 0) {
      state.timerRemaining = state.timerMinutes * 60;
      startTimer();
    } else {
      state.timerRemaining = 0;
    }

    showView('quiz-view');
    renderQuizChrome();
    renderCurrentQuestion();
    renderNavigator();
  }

  function startTimer() {
    updateTimerUI();
    state.timerId = setInterval(() => {
      state.timerRemaining -= 1;
      updateTimerUI();
      if (state.timerRemaining <= 0) {
        stopTimer();
        state.autoSubmittedMessage =
          'Hết thời gian làm bài! Hệ thống đã tự động nộp bài thi của bạn.';
        finalizeSession();
      }
    }, 1000);
  }

  function stopTimer() {
    if (state.timerId) {
      clearInterval(state.timerId);
      state.timerId = null;
    }
  }

  function updateTimerUI() {
    const timerPill = $('exam-timer-pill');
    if (state.mode !== 'exam') {
      timerPill.classList.add('hidden');
      return;
    }
    timerPill.classList.remove('hidden');
    if (state.timerMinutes === 0) {
      $('timer-display').textContent = 'Không giới hạn';
      timerPill.classList.remove('danger');
      return;
    }
    $('timer-display').textContent = formatDuration(state.timerRemaining);
    timerPill.classList.toggle('danger', state.timerRemaining <= 120);
  }

  // ==================== QUIZ RENDERING ====================
  function renderQuizChrome() {
    const isExam = state.mode === 'exam';
    const badge = $('badge-mode');
    badge.textContent = isExam ? 'Chế độ Thi thật' : 'Chế độ Luyện tập';
    badge.className = isExam ? 'pill pill-amber' : 'pill pill-green';

    $('practice-score-pill').classList.toggle('hidden', isExam);
    $('exam-summary-box').classList.toggle('hidden', !isExam);

    const finishBtn = $('btn-finish-early');
    finishBtn.textContent = isExam ? 'Nộp bài thi' : 'Xem tổng kết';

    updateTimerUI();
    renderNavigatorLegend();
  }

  function renderNavigatorLegend() {
    const legend = $('navigator-legend');
    legend.innerHTML = '';

    const items =
      state.mode === 'exam'
        ? [
            { bg: '#dbeafe', border: '#3b82f6', label: 'Đã nhập' },
            { bg: '#ffffff', border: '#cbd5e1', label: 'Chưa làm' },
            { bg: '#fef3c7', border: '#f59e0b', label: 'Có chấm cam: Đánh dấu' }
          ]
        : [
            { bg: '#dcfce7', border: '#15803d', label: 'Đúng' },
            { bg: '#fee2e2', border: '#b91c1c', label: 'Sai' },
            { bg: '#ffffff', border: '#cbd5e1', label: 'Chưa kiểm tra' }
          ];

    items.forEach((it) => {
      const span = el('span', 'nav-legend-item');
      const sw = el('i', 'nav-swatch');
      sw.style.background = it.bg;
      sw.style.borderColor = it.border;
      span.appendChild(sw);
      span.appendChild(document.createTextNode(it.label));
      legend.appendChild(span);
    });
  }

  function renderCurrentQuestion() {
    const q = state.questions[state.currentIndex];
    const total = state.questions.length;
    const isExam = state.mode === 'exam';

    // Topbar progress
    $('progress-text').textContent = `Câu ${state.currentIndex + 1} / ${total}`;
    const pct = Math.round(((state.currentIndex + 1) / total) * 100);
    $('progress-fill').style.width = `${pct}%`;

    if (!isExam) {
      const checkedVals = Object.values(state.checked);
      const correctCount = checkedVals.filter((r) => r.isCorrect).length;
      $('practice-correct-count').textContent = String(correctCount);
      $('practice-checked-count').textContent = String(checkedVals.length);
    } else {
      const answeredCount = state.questions.filter(
        (item) => String(state.answers[item.id] || '').trim().length > 0
      ).length;
      const flaggedCount = state.questions.filter((item) => state.flagged[item.id]).length;
      $('exam-answered-count').textContent = `${answeredCount}/${total}`;
      $('exam-flagged-count').textContent = String(flaggedCount);
    }

    // Meta badges
    $('q-unit-badge').textContent = q.unitLabel;
    const topicBadge = $('q-topic-badge');
    if (isExam) {
      // Không tiết lộ tên cấu trúc ngữ pháp cụ thể trong khi thi thật
      topicBadge.classList.add('hidden');
    } else {
      topicBadge.classList.remove('hidden');
      topicBadge.textContent = q.topic;
    }

    const flagBtn = $('btn-flag');
    const isFlagged = Boolean(state.flagged[q.id]);
    flagBtn.classList.toggle('flagged', isFlagged);
    flagBtn.textContent = isFlagged ? '⚑ Đã đánh dấu' : '⚑ Đánh dấu';

    // Prompt & cue
    $('q-prompt').textContent = q.prompt;
    const cueWrap = $('q-cue-wrap');
    if (q.cue) {
      cueWrap.classList.remove('hidden');
      $('q-cue').textContent = q.cue;
    } else {
      cueWrap.classList.add('hidden');
    }

    // Fixed prefix / suffix & input
    const prefixEl = $('q-prefix');
    const suffixEl = $('q-suffix');
    if (q.prefix) {
      prefixEl.textContent = q.prefix;
      prefixEl.classList.remove('hidden');
    } else {
      prefixEl.classList.add('hidden');
    }

    if (q.suffix) {
      suffixEl.textContent = q.suffix;
      suffixEl.classList.remove('hidden');
    } else {
      suffixEl.classList.add('hidden');
    }

    const input = $('answer-input');
    input.value = state.answers[q.id] || '';
    const isLockedInPractice = !isExam && Boolean(state.checked[q.id]);
    input.disabled = isLockedInPractice;

    // Placeholder ngữ cảnh
    if (q.prefix || q.suffix) {
      input.placeholder = 'Nhập phần còn thiếu (hoặc gõ cả câu)...';
    } else {
      input.placeholder = 'Nhập câu viết lại của bạn...';
    }

    // Hint visibility
    const hintBtn = $('btn-hint');
    const hintBox = $('hint-box');
    if (isExam) {
      hintBtn.classList.add('hidden');
      hintBox.classList.add('hidden');
    } else {
      hintBtn.classList.remove('hidden');
      const showingHint = Boolean(state.hintShown[q.id]);
      hintBox.classList.toggle('hidden', !showingHint);
      $('hint-text').textContent = q.hint;
      hintBtn.textContent = showingHint ? 'Ẩn gợi ý' : '💡 Xem gợi ý';
    }

    // Nav buttons
    $('btn-prev').disabled = state.currentIndex === 0;
    const nextBtn = $('btn-next');
    if (state.currentIndex === total - 1) {
      nextBtn.textContent = isExam ? 'Nộp bài thi →' : 'Xem tổng kết →';
    } else {
      nextBtn.textContent = 'Câu tiếp →';
    }

    // Action buttons for Practice vs Exam
    const checkBtn = $('btn-check');
    const retryBtn = $('btn-retry-question');
    if (isExam) {
      checkBtn.classList.add('hidden');
      retryBtn.classList.add('hidden');
      $('feedback-box').classList.add('hidden');
    } else {
      const result = state.checked[q.id];
      checkBtn.classList.toggle('hidden', Boolean(result));
      retryBtn.classList.toggle('hidden', !result);
      renderPracticeFeedback(q, result);
    }

    renderNavigator();
  }

  function renderDiffTokens(container, diffList) {
    container.innerHTML = '';
    diffList.forEach((tok) => {
      const span = el('span', `diff-tok diff-${tok.type}`, tok.text);
      container.appendChild(span);
    });
  }

  function renderPracticeFeedback(q, result) {
    const box = $('feedback-box');
    if (!result) {
      box.classList.add('hidden');
      return;
    }

    box.classList.remove('hidden');
    const banner = $('feedback-banner');
    banner.className = 'feedback-banner ' + (result.isCorrect ? 'correct' : 'wrong');

    if (result.isEmpty) {
      banner.textContent = '✗ Bạn chưa nhập câu trả lời cho câu này.';
    } else if (result.isCorrect) {
      banner.textContent = '✓ Chính xác! Bạn đã viết lại câu đúng cấu trúc.';
    } else {
      banner.textContent = '✗ Chưa chính xác. Hãy xem phần so sánh và giải thích bên dưới.';
    }

    $('feedback-punctuation-note').classList.toggle('hidden', !result.punctuationTip);

    const diffWrap = $('feedback-diff-wrap');
    if (!result.isCorrect && !result.isEmpty && result.diff.length) {
      diffWrap.classList.remove('hidden');
      renderDiffTokens($('feedback-diff'), result.diff);
    } else {
      diffWrap.classList.add('hidden');
    }

    $('feedback-answer').textContent = q.displayAnswer;

    // Phương án thay thế khác nếu có
    const altWrap = $('feedback-alt-wrap');
    const altList = $('feedback-alt-list');
    altList.innerHTML = '';
    const fullAlts = q.acceptedAnswers
      .map((a) => window.RewriteGrader.joinParts(q.prefix, a, q.suffix))
      .filter((full) => full !== q.displayAnswer);

    if (fullAlts.length) {
      altWrap.classList.remove('hidden');
      fullAlts.forEach((alt) => {
        altList.appendChild(el('li', '', alt));
      });
    } else {
      altWrap.classList.add('hidden');
    }

    $('feedback-explanation').textContent = q.explanation;
  }

  function renderNavigator() {
    const grid = $('question-grid');
    grid.innerHTML = '';
    const isExam = state.mode === 'exam';

    state.questions.forEach((q, idx) => {
      const btn = el('button', 'nav-dot', String(idx + 1));
      btn.type = 'button';

      if (idx === state.currentIndex) {
        btn.classList.add('current');
      }
      if (state.flagged[q.id]) {
        btn.classList.add('flagged');
      }

      if (isExam) {
        const hasText = String(state.answers[q.id] || '').trim().length > 0;
        if (hasText) btn.classList.add('state-answered');
      } else {
        const res = state.checked[q.id];
        if (res) {
          btn.classList.add(res.isCorrect ? 'state-correct' : 'state-wrong');
        }
      }

      btn.addEventListener('click', () => {
        saveCurrentInput();
        state.currentIndex = idx;
        renderCurrentQuestion();
        $('answer-input').focus();
      });

      grid.appendChild(btn);
    });
  }

  function saveCurrentInput() {
    const q = state.questions[state.currentIndex];
    if (!q) return;
    state.answers[q.id] = $('answer-input').value;
  }

  // ==================== ACTIONS ====================
  function checkCurrentQuestion() {
    saveCurrentInput();
    const q = state.questions[state.currentIndex];
    const raw = state.answers[q.id] || '';
    if (!raw.trim()) {
      $('answer-input').focus();
      const result = window.RewriteGrader.gradeQuestion(q, '');
      state.checked[q.id] = result;
      renderCurrentQuestion();
      return;
    }
    state.checked[q.id] = window.RewriteGrader.gradeQuestion(q, raw);
    renderCurrentQuestion();
  }

  function retryCurrentQuestion() {
    const q = state.questions[state.currentIndex];
    delete state.checked[q.id];
    renderCurrentQuestion();
    $('answer-input').focus();
  }

  function toggleFlagCurrent() {
    const q = state.questions[state.currentIndex];
    state.flagged[q.id] = !state.flagged[q.id];
    renderCurrentQuestion();
  }

  function toggleHintCurrent() {
    const q = state.questions[state.currentIndex];
    state.hintShown[q.id] = !state.hintShown[q.id];
    renderCurrentQuestion();
  }

  function requestSubmitOrFinish() {
    saveCurrentInput();
    const total = state.questions.length;

    if (state.mode === 'exam') {
      const unanswered = state.questions.filter(
        (q) => !String(state.answers[q.id] || '').trim()
      ).length;
      const flagged = state.questions.filter((q) => state.flagged[q.id]).length;

      let msg = `Bạn chuẩn bị nộp bài thi gồm ${total} câu.`;
      if (unanswered > 0) {
        msg += ` Hiện còn ${unanswered} câu chưa trả lời.`;
      }
      if (flagged > 0) {
        msg += ` Có ${flagged} câu bạn đã đánh dấu xem lại.`;
      }
      msg += ' Sau khi nộp, bạn sẽ xem được điểm số và giải thích chi tiết.';

      $('confirm-message').textContent = msg;
      $('btn-confirm-submit').textContent = 'Nộp bài ngay';
      $('confirm-modal').classList.remove('hidden');
      return;
    }

    // Practice mode: kiểm tra xem có câu nào chưa làm/chưa kiểm tra không
    const unchecked = state.questions.filter((q) => !state.checked[q.id]).length;
    if (unchecked > 0) {
      $('confirm-message').textContent =
        `Bạn còn ${unchecked}/${total} câu chưa bấm kiểm tra. Nếu xem tổng kết ngay, hệ thống sẽ tự chấm các câu bạn đã nhập (câu bỏ trống tính là chưa đạt).`;
      $('btn-confirm-submit').textContent = 'Xem tổng kết';
      $('confirm-modal').classList.remove('hidden');
      return;
    }

    finalizeSession();
  }

  function finalizeSession() {
    stopTimer();
    $('confirm-modal').classList.add('hidden');
    $('btn-confirm-submit').textContent = 'Nộp bài ngay';

    state.durationSeconds = Math.max(1, Math.round((Date.now() - state.startedAt) / 1000));

    // Chấm tất cả câu hỏi
    state.questions.forEach((q) => {
      if (!state.checked[q.id]) {
        state.checked[q.id] = window.RewriteGrader.gradeQuestion(q, state.answers[q.id] || '');
      }
    });

    const total = state.questions.length;
    const correctCount = state.questions.filter((q) => state.checked[q.id].isCorrect).length;
    const scoreTen = ((correctCount / total) * 10).toFixed(1);

    // Lưu lịch sử
    const now = new Date();
    const dateStr = now.toLocaleDateString('vi-VN') + ' ' +
      now.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });

    saveHistoryEntry({
      mode: state.mode,
      scopeLabel: SCOPE_LABELS[state.scope] || 'Tùy chọn',
      scoreTen,
      correct: correctCount,
      total,
      durationText: formatDuration(state.durationSeconds),
      dateStr
    });

    renderResultsView();
    showView('results-view');
  }

  // ==================== RESULTS VIEW ====================
  function classifyTopicBucket(q) {
    if (q.unit === 'unit4') return 'Unit 4: Gerunds (Danh động từ)';
    if (q.unit === 'unit5') {
      return q.topic.includes('Present')
        ? 'Unit 5: Present Participle (V-ing)'
        : 'Unit 5: Past Participle (V3/-ed)';
    }
    return 'Tổng hợp & Nâng cao (Unit 4 + 5)';
  }

  function renderResultsView() {
    const total = state.questions.length;
    const correctCount = state.questions.filter((q) => state.checked[q.id].isCorrect).length;
    const wrongQuestions = state.questions.filter((q) => !state.checked[q.id].isCorrect);
    const pct = Math.round((correctCount / total) * 100);
    const scoreTen = ((correctCount / total) * 10).toFixed(1);

    $('res-score-ten').textContent = scoreTen;
    const badge = $('res-mode-badge');
    badge.textContent = state.mode === 'exam' ? 'Kết quả Thi thật' : 'Tổng kết Luyện tập';
    badge.className = state.mode === 'exam' ? 'pill pill-amber' : 'pill pill-green';

    let headline = 'Cần ôn tập thêm!';
    if (pct >= 90) headline = 'Xuất sắc! Nắm rất vững cấu trúc!';
    else if (pct >= 75) headline = 'Làm rất tốt! Chỉ còn vài điểm nhỏ.';
    else if (pct >= 50) headline = 'Khá ổn! Hãy xem kỹ phần giải thích bên dưới.';

    $('res-headline').textContent = headline;
    $('res-subtext').textContent =
      state.autoSubmittedMessage ||
      `Phạm vi: ${SCOPE_LABELS[state.scope] || 'Bộ đề ôn tập'} • ${total} câu hỏi`;

    $('res-correct-ratio').textContent = `${correctCount} / ${total}`;
    $('res-percent').textContent = `${pct}%`;
    $('res-duration').textContent = formatDuration(state.durationSeconds);

    const retryWrongBtn = $('btn-retry-wrong');
    retryWrongBtn.classList.toggle('hidden', wrongQuestions.length === 0);
    retryWrongBtn.textContent = `↻ Luyện lại ${wrongQuestions.length} câu sai`;

    // Topic breakdown
    const buckets = {};
    state.questions.forEach((q) => {
      const key = classifyTopicBucket(q);
      if (!buckets[key]) buckets[key] = { total: 0, correct: 0 };
      buckets[key].total += 1;
      if (state.checked[q.id].isCorrect) buckets[key].correct += 1;
    });

    const breakdownEl = $('topic-breakdown');
    breakdownEl.innerHTML = '';
    Object.entries(buckets).forEach(([label, stat]) => {
      const item = el('div', 'breakdown-item');
      const top = el('div', 'breakdown-top');
      top.appendChild(el('span', '', label));
      const rate = Math.round((stat.correct / stat.total) * 100);
      top.appendChild(el('strong', '', `${stat.correct}/${stat.total} (${rate}%)`));

      const bar = el('div', 'mini-bar');
      const fill = el('div', 'mini-bar-fill');
      fill.style.width = `${rate}%`;
      bar.appendChild(fill);

      item.appendChild(top);
      item.appendChild(bar);
      breakdownEl.appendChild(item);
    });

    state.activeFilter = 'all';
    document.querySelectorAll('.filter-tab').forEach((tab) => {
      tab.classList.toggle('active', tab.getAttribute('data-filter') === 'all');
    });
    renderReviewList();
  }

  function renderReviewList() {
    const container = $('review-list');
    container.innerHTML = '';

    const filtered = state.questions.filter((q) => {
      const res = state.checked[q.id];
      if (state.activeFilter === 'correct') return res.isCorrect;
      if (state.activeFilter === 'wrong') return !res.isCorrect;
      if (state.activeFilter === 'flagged') return Boolean(state.flagged[q.id]);
      return true;
    });

    if (!filtered.length) {
      container.appendChild(
        el('p', 'muted', 'Không có câu hỏi nào trong mục lọc này.')
      );
      return;
    }

    filtered.forEach((q) => {
      const origIndex = state.questions.indexOf(q) + 1;
      const res = state.checked[q.id];
      const item = el('div', `review-item ${res.isCorrect ? 'is-correct' : 'is-wrong'}`);

      const head = el('div', 'review-item-head');
      const leftMeta = el('div', 'history-meta');
      leftMeta.appendChild(el('strong', '', `Câu ${origIndex}`));
      leftMeta.appendChild(el('span', 'unit-tag', q.unitLabel));
      leftMeta.appendChild(el('span', 'topic-tag', q.topic));
      if (state.flagged[q.id]) {
        leftMeta.appendChild(el('span', 'pill pill-amber', '⚑ Đã đánh dấu'));
      }

      const statusBadge = el(
        'span',
        res.isCorrect ? 'pill pill-green' : 'pill',
        res.isCorrect ? '✓ Đúng' : res.isEmpty ? '— Bỏ trống' : '✗ Chưa đúng'
      );
      if (!res.isCorrect) {
        statusBadge.style.background = '#fee2e2';
        statusBadge.style.color = '#b91c1c';
      }

      head.appendChild(leftMeta);
      head.appendChild(statusBadge);
      item.appendChild(head);

      item.appendChild(el('p', 'review-prompt', `Câu gốc: ${q.prompt}${q.cue ? ` (${q.cue})` : ''}`));

      // Câu trả lời của học sinh
      const userRow = el('div', 'review-row');
      userRow.appendChild(el('strong', '', 'Bài làm của bạn: '));
      if (res.isEmpty) {
        userRow.appendChild(el('span', 'muted', '(Chưa trả lời)'));
      } else if (res.isCorrect) {
        userRow.appendChild(document.createTextNode(res.userFull));
        if (res.punctuationTip) {
          userRow.appendChild(
            el('div', 'punctuation-note', '⚠️ Đúng ngữ pháp! Lưu ý bổ sung dấu phẩy (,) ngăn cách mệnh đề phân từ.')
          );
        }
      } else {
        const diffBox = el('div', 'diff-tokens');
        diffBox.style.marginTop = '6px';
        renderDiffTokens(diffBox, res.diff);
        userRow.appendChild(diffBox);
      }
      item.appendChild(userRow);

      // Đáp án chuẩn
      const ansRow = el('div', 'review-row');
      ansRow.appendChild(el('strong', '', 'Đáp án chuẩn: '));
      const ansSpan = el('span', '', q.displayAnswer);
      ansSpan.style.color = 'var(--primary-text)';
      ansSpan.style.fontWeight = '700';
      ansRow.appendChild(ansSpan);
      item.appendChild(ansRow);

      // Giải thích
      const expRow = el('div', 'review-row');
      expRow.appendChild(el('strong', '', 'Giải thích: '));
      expRow.appendChild(document.createTextNode(q.explanation));
      item.appendChild(expRow);

      container.appendChild(item);
    });
  }

  // ==================== EVENT BINDING ====================
  function bindEvents() {
    // Mode radio cards
    document.querySelectorAll('.mode-card').forEach((card) => {
      card.addEventListener('click', () => {
        state.mode = card.getAttribute('data-mode');
        if (!state.userTouchedShuffle) {
          state.shuffle = state.mode === 'exam';
          $('chk-shuffle').checked = state.shuffle;
        }
        updateSetupUI();
      });
    });

    $('select-scope').addEventListener('change', (e) => {
      state.scope = e.target.value;
      updateSetupUI();
    });

    $('select-count').addEventListener('change', (e) => {
      state.countOption = e.target.value;
    });

    $('select-timer').addEventListener('change', (e) => {
      state.timerMinutes = Number(e.target.value);
    });

    $('chk-shuffle').addEventListener('change', (e) => {
      state.userTouchedShuffle = true;
      state.shuffle = e.target.checked;
    });

    $('btn-start').addEventListener('click', () => startSession());

    $('btn-clear-history').addEventListener('click', () => {
      try {
        localStorage.removeItem(HISTORY_KEY);
      } catch (_) {}
      renderHistory();
    });

    $('btn-back-home').addEventListener('click', () => {
      stopTimer();
      showView('setup-view');
      renderHistory();
    });

    // Quiz actions
    $('answer-input').addEventListener('input', () => {
      saveCurrentInput();
      renderNavigator();
      if (state.mode === 'exam') {
        const answeredCount = state.questions.filter(
          (item) => String(state.answers[item.id] || '').trim().length > 0
        ).length;
        $('exam-answered-count').textContent = `${answeredCount}/${state.questions.length}`;
      }
    });

    $('answer-input').addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        if (state.mode === 'practice') {
          const q = state.questions[state.currentIndex];
          if (!state.checked[q.id]) {
            checkCurrentQuestion();
          } else if (state.currentIndex < state.questions.length - 1) {
            state.currentIndex += 1;
            renderCurrentQuestion();
            $('answer-input').focus();
          }
        } else {
          if (state.currentIndex < state.questions.length - 1) {
            saveCurrentInput();
            state.currentIndex += 1;
            renderCurrentQuestion();
            $('answer-input').focus();
          }
        }
      }
    });

    $('btn-prev').addEventListener('click', () => {
      if (state.currentIndex > 0) {
        saveCurrentInput();
        state.currentIndex -= 1;
        renderCurrentQuestion();
        $('answer-input').focus();
      }
    });

    $('btn-next').addEventListener('click', () => {
      saveCurrentInput();
      if (state.currentIndex < state.questions.length - 1) {
        state.currentIndex += 1;
        renderCurrentQuestion();
        $('answer-input').focus();
      } else {
        requestSubmitOrFinish();
      }
    });

    $('btn-check').addEventListener('click', checkCurrentQuestion);
    $('btn-retry-question').addEventListener('click', retryCurrentQuestion);
    $('btn-flag').addEventListener('click', toggleFlagCurrent);
    $('btn-hint').addEventListener('click', toggleHintCurrent);
    $('btn-finish-early').addEventListener('click', requestSubmitOrFinish);
    $('btn-submit-exam-side').addEventListener('click', requestSubmitOrFinish);

    // Confirm modal
    $('btn-cancel-confirm').addEventListener('click', () => {
      $('confirm-modal').classList.add('hidden');
    });
    $('btn-confirm-stay').addEventListener('click', () => {
      $('confirm-modal').classList.add('hidden');
    });
    $('btn-confirm-submit').addEventListener('click', finalizeSession);

    // Grammar modal
    $('btn-open-grammar').addEventListener('click', () => {
      if (!$('btn-open-grammar').disabled) {
        $('grammar-modal').classList.remove('hidden');
      }
    });
    $('btn-close-grammar').addEventListener('click', () => {
      $('grammar-modal').classList.add('hidden');
    });
    $('grammar-modal').addEventListener('click', (e) => {
      if (e.target === $('grammar-modal')) {
        $('grammar-modal').classList.add('hidden');
      }
    });

    // Results actions
    $('btn-retry-wrong').addEventListener('click', () => {
      const wrongQs = state.questions.filter((q) => !state.checked[q.id].isCorrect);
      if (wrongQs.length) {
        startSession(wrongQs, 'practice');
      }
    });

    $('btn-restart-same').addEventListener('click', () => {
      startSession(state.lastConfigQuestions, state.mode);
    });

    $('btn-new-session').addEventListener('click', () => {
      showView('setup-view');
      renderHistory();
    });

    // Filter tabs
    document.querySelectorAll('.filter-tab').forEach((tab) => {
      tab.addEventListener('click', () => {
        state.activeFilter = tab.getAttribute('data-filter');
        document.querySelectorAll('.filter-tab').forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');
        renderReviewList();
      });
    });

    // Escape key closes modals
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        $('grammar-modal').classList.add('hidden');
        $('confirm-modal').classList.add('hidden');
      }
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    bindEvents();
    updateSetupUI();
    renderHistory();
    showView('setup-view');
  });
})();
