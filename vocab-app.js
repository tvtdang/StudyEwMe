/**
 * VOCAB-APP.JS
 * Bộ điều khiển ứng dụng học từ vựng theo ngữ cảnh bài đọc hiểu (Chuẩn CEFR A2)
 * Tính năng:
 * - Trình đọc tương tác với âm thanh Web Speech API & karaoke highlight
 * - Tra cứu từ vựng tức thì (Modal Inspector) với IPA, Collocations & Mẹo ngữ cảnh
 * - Chế độ luyện đoán nghĩa qua manh mối ngữ cảnh (Context Clues)
 * - Chế độ điền từ vào ngữ cảnh mới (Cloze Word Bank)
 * - Thẻ ghi nhớ 3D (Spaced Repetition Flashcards)
 * - Trò chơi ghép từ & tình huống (Interactive Match Game)
 * - Bài kiểm tra đọc hiểu chuẩn Cambridge A2 Key (KET)
 * - Sổ tay từ vựng cá nhân & Xuất tài liệu học tập
 * - Bảng theo dõi năng lực A2 & Giấy chứng nhận hoàn thành
 */

(function () {
  'use strict';

  // State
  const AppState = {
    currentUnitId: 'unit-1',
    currentTab: 'reading',
    currentUnit: null,
    savedWordIds: new Set(),
    masteredWordIds: new Set(),
    unitProgress: {},
    audio: {
      synth: window.speechSynthesis,
      utterance: null,
      isPlaying: false,
      currentParagraphIndex: -1,
      speed: 1.0,
      voice: null
    },
    contextClueIndex: 0,
    contextClueScore: 0,
    flashcardIndex: 0,
    isCardFlipped: false,
    matchGame: {
      firstTile: null,
      matchedCount: 0,
      moves: 0,
      timerSec: 0,
      timerInterval: null
    },
    readingFontSize: 'normal',
    readingTheme: 'light'
  };

  // LocalStorage keys
  const LS_KEYS = {
    SAVED_WORDS: 'a2_vocab_saved_words',
    MASTERED_WORDS: 'a2_vocab_mastered_words',
    PROGRESS: 'a2_vocab_unit_progress',
    SETTINGS: 'a2_vocab_settings'
  };

  // DOM Elements cache
  const DOM = {};

  // Initialize
  function init() {
    loadSavedState();
    cacheDOMElements();
    setupSpeechVoices();
    bindGlobalEvents();
    populateUnitSelector();
    loadUnit(AppState.currentUnitId);
    renderNotebook();
    renderDashboard();
  }

  // Load state from localStorage
  function loadSavedState() {
    try {
      const saved = JSON.parse(localStorage.getItem(LS_KEYS.SAVED_WORDS) || '[]');
      AppState.savedWordIds = new Set(saved);

      const mastered = JSON.parse(localStorage.getItem(LS_KEYS.MASTERED_WORDS) || '[]');
      AppState.masteredWordIds = new Set(mastered);

      AppState.unitProgress = JSON.parse(localStorage.getItem(LS_KEYS.PROGRESS) || '{}');

      const settings = JSON.parse(localStorage.getItem(LS_KEYS.SETTINGS) || '{}');
      if (settings.theme) AppState.readingTheme = settings.theme;
      if (settings.fontSize) AppState.readingFontSize = settings.fontSize;
    } catch (e) {
      console.warn('Error loading localStorage state:', e);
    }
  }

  function saveState() {
    try {
      localStorage.setItem(LS_KEYS.SAVED_WORDS, JSON.stringify(Array.from(AppState.savedWordIds)));
      localStorage.setItem(LS_KEYS.MASTERED_WORDS, JSON.stringify(Array.from(AppState.masteredWordIds)));
      localStorage.setItem(LS_KEYS.PROGRESS, JSON.stringify(AppState.unitProgress));
      localStorage.setItem(LS_KEYS.SETTINGS, JSON.stringify({
        theme: AppState.readingTheme,
        fontSize: AppState.readingFontSize
      }));
    } catch (e) {
      console.warn('Error saving to localStorage:', e);
    }
  }

  // Cache DOM references
  function cacheDOMElements() {
    DOM.unitSelect = document.getElementById('unit-select');
    DOM.unitMetaChips = document.getElementById('unit-meta-chips');
    DOM.tabs = document.querySelectorAll('.tab-btn');
    DOM.tabPanes = document.querySelectorAll('.tab-pane');

    // Reading pane
    DOM.readingTopic = document.getElementById('reading-topic');
    DOM.readingTitleEn = document.getElementById('reading-title-en');
    DOM.readingTitleVi = document.getElementById('reading-title-vi');
    DOM.readingSummary = document.getElementById('reading-summary');
    DOM.readingPassage = document.getElementById('reading-passage');
    DOM.sidebarWordList = document.getElementById('sidebar-word-list');
    DOM.sidebarWordCount = document.getElementById('sidebar-word-count');

    // Audio controls
    DOM.btnPlayAudio = document.getElementById('btn-play-audio');
    DOM.btnStopAudio = document.getElementById('btn-stop-audio');
    DOM.speedSelect = document.getElementById('speed-select');
    DOM.themeSelect = document.getElementById('theme-select');
    DOM.btnTextSmaller = document.getElementById('btn-text-smaller');
    DOM.btnTextLarger = document.getElementById('btn-text-larger');

    // Modal Inspector
    DOM.modalOverlay = document.getElementById('word-modal-overlay');
    DOM.modalCloseBtn = document.getElementById('modal-close-btn');
    DOM.modalWord = document.getElementById('modal-word');
    DOM.modalIpa = document.getElementById('modal-ipa');
    DOM.modalPos = document.getElementById('modal-pos');
    DOM.modalMeaningVi = document.getElementById('modal-meaning-vi');
    DOM.modalDefEn = document.getElementById('modal-def-en');
    DOM.modalQuote = document.getElementById('modal-quote');
    DOM.modalClue = document.getElementById('modal-clue');
    DOM.modalCollocations = document.getElementById('modal-collocations');
    DOM.modalExampleEn = document.getElementById('modal-example-en');
    DOM.modalBtnSpeak = document.getElementById('modal-btn-speak');
    DOM.modalBtnBookmark = document.getElementById('modal-btn-bookmark');

    // Context Clues
    DOM.cluesContainer = document.getElementById('clues-pane-content');

    // Cloze
    DOM.clozeBankChips = document.getElementById('cloze-bank-chips');
    DOM.clozeList = document.getElementById('cloze-list');
    DOM.btnCheckCloze = document.getElementById('btn-check-cloze');
    DOM.btnResetCloze = document.getElementById('btn-reset-cloze');
    DOM.clozeScoreNotice = document.getElementById('cloze-score-notice');

    // Flashcards
    DOM.flashcardInner = document.getElementById('flashcard-inner');
    DOM.cardCounter = document.getElementById('card-counter');
    DOM.cardWordFront = document.getElementById('card-word-front');
    DOM.cardIpaFront = document.getElementById('card-ipa-front');
    DOM.cardContextFront = document.getElementById('card-context-front');
    DOM.cardWordBack = document.getElementById('card-word-back');
    DOM.cardMeaningBack = document.getElementById('card-meaning-back');
    DOM.cardDefBack = document.getElementById('card-def-back');
    DOM.cardCollocBack = document.getElementById('card-colloc-back');
    DOM.btnCardPrev = document.getElementById('btn-card-prev');
    DOM.btnCardNext = document.getElementById('btn-card-next');
    DOM.btnCardFlip = document.getElementById('btn-card-flip');
    DOM.btnCardSpeak = document.getElementById('btn-card-speak');
    DOM.btnCardPass = document.getElementById('btn-card-pass');
    DOM.btnCardFail = document.getElementById('btn-card-fail');

    // Match Game
    DOM.matchGrid = document.getElementById('match-grid');
    DOM.matchTimer = document.getElementById('match-timer');
    DOM.matchMoves = document.getElementById('match-moves');
    DOM.matchMatched = document.getElementById('match-matched');
    DOM.btnRestartMatch = document.getElementById('btn-restart-match');
    DOM.matchWinNotice = document.getElementById('match-win-notice');

    // Reading Quiz
    DOM.quizForm = document.getElementById('reading-quiz-form');
    DOM.quizQuestionsList = document.getElementById('quiz-questions-list');
    DOM.btnSubmitQuiz = document.getElementById('btn-submit-quiz');
    DOM.quizResultCard = document.getElementById('quiz-result-card');

    // Notebook
    DOM.notebookGrid = document.getElementById('notebook-grid');
    DOM.notebookSearch = document.getElementById('notebook-search');
    DOM.notebookSavedCount = document.getElementById('notebook-saved-count');
    DOM.btnExportCsv = document.getElementById('btn-export-csv');
    DOM.btnPrintSheet = document.getElementById('btn-print-sheet');

    // Dashboard
    DOM.dashMasteredCount = document.getElementById('dash-mastered-count');
    DOM.dashMasteredPct = document.getElementById('dash-mastered-pct');
    DOM.dashProgressBar = document.getElementById('dash-progress-bar');
    DOM.dashBadgesGrid = document.getElementById('dash-badges-grid');
    DOM.btnGenerateCert = document.getElementById('btn-generate-cert');
    DOM.certModal = document.getElementById('cert-modal-overlay');
  }

  // Speech synthesis setup
  function setupSpeechVoices() {
    if (!AppState.audio.synth) return;
    function pickVoice() {
      const voices = AppState.audio.synth.getVoices();
      // Prefer standard English (en-US or en-GB)
      const enVoice = voices.find(v => v.lang === 'en-US' || v.lang === 'en-GB') ||
                      voices.find(v => v.lang && v.lang.startsWith('en'));
      if (enVoice) AppState.audio.voice = enVoice;
    }
    pickVoice();
    if (AppState.audio.synth.onvoiceschanged !== undefined) {
      AppState.audio.synth.onvoiceschanged = pickVoice;
    }
  }

  function speakText(text, rate = 1.0) {
    if (!AppState.audio.synth) return;
    AppState.audio.synth.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = 'en-US';
    utt.rate = rate;
    if (AppState.audio.voice) utt.voice = AppState.audio.voice;
    AppState.audio.synth.speak(utt);
  }

  // Populate Unit selector dropdown
  function populateUnitSelector() {
    if (!DOM.unitSelect) return;
    DOM.unitSelect.innerHTML = '';
    window.A2_VOCAB_DATA.units.forEach(unit => {
      const opt = document.createElement('option');
      opt.value = unit.id;
      opt.textContent = `Unit ${unit.unitNumber}: ${unit.title} (${unit.vietnameseTitle})`;
      DOM.unitSelect.appendChild(opt);
    });
  }

  // Load a specific Unit
  function loadUnit(unitId) {
    const unit = window.A2_VOCAB_DATA.units.find(u => u.id === unitId) || window.A2_VOCAB_DATA.units[0];
    AppState.currentUnit = unit;
    AppState.currentUnitId = unit.id;
    if (DOM.unitSelect) DOM.unitSelect.value = unit.id;

    stopAudioReading();

    // Render Unit Metadata
    if (DOM.unitMetaChips) {
      DOM.unitMetaChips.innerHTML = `
        <span class="meta-chip">🏷️ ${unit.level}</span>
        <span class="meta-chip">⏱️ ${unit.readingTime}</span>
        <span class="meta-chip">📖 ${unit.wordCount} từ</span>
        <span class="meta-chip">✨ 8 từ vựng mục tiêu</span>
      `;
    }

    renderReadingPane(unit);
    renderContextCluesPane(unit);
    renderClozePane(unit);
    setupFlashcards(unit);
    setupMatchGame(unit);
    renderReadingQuiz(unit);
    renderDashboard();
  }

  // Bind UI Events
  function bindGlobalEvents() {
    // Unit change
    if (DOM.unitSelect) {
      DOM.unitSelect.addEventListener('change', (e) => {
        loadUnit(e.target.value);
      });
    }

    // Tab switching
    DOM.tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const tabId = tab.dataset.tab;
        switchTab(tabId);
      });
    });

    // Theme select
    if (DOM.themeSelect) {
      DOM.themeSelect.value = AppState.readingTheme;
      applyTheme(AppState.readingTheme);
      DOM.themeSelect.addEventListener('change', (e) => {
        AppState.readingTheme = e.target.value;
        applyTheme(e.target.value);
        saveState();
      });
    }

    // Font size controls
    if (DOM.btnTextSmaller) {
      DOM.btnTextSmaller.addEventListener('click', () => adjustFontSize(-1));
    }
    if (DOM.btnTextLarger) {
      DOM.btnTextLarger.addEventListener('click', () => adjustFontSize(1));
    }

    // Audio passage controls
    if (DOM.btnPlayAudio) {
      DOM.btnPlayAudio.addEventListener('click', toggleAudioReading);
    }
    if (DOM.btnStopAudio) {
      DOM.btnStopAudio.addEventListener('click', stopAudioReading);
    }
    if (DOM.speedSelect) {
      DOM.speedSelect.addEventListener('change', (e) => {
        AppState.audio.speed = parseFloat(e.target.value) || 1.0;
        if (AppState.audio.isPlaying) {
          stopAudioReading();
          playAudioReading();
        }
      });
    }

    // Modal close
    if (DOM.modalCloseBtn) {
      DOM.modalCloseBtn.addEventListener('click', closeModal);
    }
    if (DOM.modalOverlay) {
      DOM.modalOverlay.addEventListener('click', (e) => {
        if (e.target === DOM.modalOverlay) closeModal();
      });
    }
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });

    // Cloze buttons
    if (DOM.btnCheckCloze) DOM.btnCheckCloze.addEventListener('click', checkClozeAnswers);
    if (DOM.btnResetCloze) DOM.btnResetCloze.addEventListener('click', () => renderClozePane(AppState.currentUnit));

    // Flashcard controls
    if (DOM.btnCardFlip) DOM.btnCardFlip.addEventListener('click', flipCard);
    if (DOM.flashcardInner) DOM.flashcardInner.addEventListener('click', flipCard);
    if (DOM.btnCardPrev) DOM.btnCardPrev.addEventListener('click', prevCard);
    if (DOM.btnCardNext) DOM.btnCardNext.addEventListener('click', nextCard);
    if (DOM.btnCardSpeak) DOM.btnCardSpeak.addEventListener('click', (e) => {
      e.stopPropagation();
      const word = AppState.currentUnit.vocabulary[AppState.flashcardIndex];
      if (word) speakText(word.word);
    });
    if (DOM.btnCardPass) DOM.btnCardPass.addEventListener('click', (e) => {
      e.stopPropagation();
      markCardMastered(true);
    });
    if (DOM.btnCardFail) DOM.btnCardFail.addEventListener('click', (e) => {
      e.stopPropagation();
      markCardMastered(false);
    });

    // Match Game restart
    if (DOM.btnRestartMatch) {
      DOM.btnRestartMatch.addEventListener('click', () => setupMatchGame(AppState.currentUnit));
    }

    // Quiz form submit
    if (DOM.quizForm) {
      DOM.quizForm.addEventListener('submit', (e) => {
        e.preventDefault();
        gradeReadingQuiz();
      });
    }

    // Notebook search & filter
    if (DOM.notebookSearch) {
      DOM.notebookSearch.addEventListener('input', renderNotebook);
    }
    document.querySelectorAll('.btn-filter-pill').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.btn-filter-pill').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        renderNotebook();
      });
    });

    if (DOM.btnExportCsv) DOM.btnExportCsv.addEventListener('click', exportVocabCsv);
    if (DOM.btnPrintSheet) DOM.btnPrintSheet.addEventListener('click', () => window.print());

    // Certificate
    if (DOM.btnGenerateCert) {
      DOM.btnGenerateCert.addEventListener('click', openCertModal);
    }
  }

  function applyTheme(theme) {
    document.body.classList.remove('theme-sepia', 'theme-dark');
    if (theme === 'sepia') document.body.classList.add('theme-sepia');
    if (theme === 'dark') document.body.classList.add('theme-dark');
  }

  function adjustFontSize(delta) {
    const sizes = ['normal', 'large', 'xlarge'];
    let idx = sizes.indexOf(AppState.readingFontSize);
    idx = Math.max(0, Math.min(sizes.length - 1, idx + delta));
    AppState.readingFontSize = sizes[idx];
    if (DOM.readingPassage) {
      DOM.readingPassage.classList.remove('font-size-large', 'font-size-xlarge');
      if (AppState.readingFontSize === 'large') DOM.readingPassage.classList.add('font-size-large');
      if (AppState.readingFontSize === 'xlarge') DOM.readingPassage.classList.add('font-size-xlarge');
    }
    saveState();
  }

  function switchTab(tabId) {
    AppState.currentTab = tabId;
    DOM.tabs.forEach(t => t.classList.toggle('active', t.dataset.tab === tabId));
    DOM.tabPanes.forEach(pane => pane.classList.toggle('active', pane.id === `tab-${tabId}`));
    if (tabId === 'match' && AppState.matchGame.matchedCount === 0 && AppState.matchGame.timerSec === 0) {
      setupMatchGame(AppState.currentUnit);
    }
    if (tabId === 'notebook') renderNotebook();
    if (tabId === 'dashboard') renderDashboard();
  }

  // ==================== 1. Reading View Renderer ====================
  function renderReadingPane(unit) {
    if (DOM.readingTopic) DOM.readingTopic.textContent = unit.topic;
    if (DOM.readingTitleEn) DOM.readingTitleEn.textContent = unit.title;
    if (DOM.readingTitleVi) DOM.readingTitleVi.textContent = unit.vietnameseTitle;
    if (DOM.readingSummary) DOM.readingSummary.textContent = unit.summary;

    if (DOM.readingPassage) {
      DOM.readingPassage.innerHTML = unit.passageHtml;

      // Attach click events on all target-word tags
      DOM.readingPassage.querySelectorAll('.target-word').forEach(el => {
        el.addEventListener('click', (e) => {
          e.stopPropagation();
          const wordId = el.dataset.wordId;
          openWordModal(wordId);
        });
      });
    }

    // Render Sidebar List of Words
    if (DOM.sidebarWordList) {
      DOM.sidebarWordList.innerHTML = '';
      if (DOM.sidebarWordCount) DOM.sidebarWordCount.textContent = `${unit.vocabulary.length} từ`;

      unit.vocabulary.forEach(vocab => {
        const item = document.createElement('div');
        item.className = 'word-list-item';
        item.dataset.wordId = vocab.id;

        const isSaved = AppState.savedWordIds.has(vocab.id);
        const isMastered = AppState.masteredWordIds.has(vocab.id);

        item.innerHTML = `
          <div class="item-word-info">
            <span class="item-word-en">${vocab.word} <small style="color:var(--text-muted); font-weight:normal;">${vocab.ipa}</small></span>
            <span class="item-word-vi">${vocab.vietnamese}</span>
          </div>
          <div class="item-actions">
            ${isMastered ? '<span title="Đã thành thạo" style="font-size:0.85rem">✅</span>' : ''}
            <button class="btn-speaker-mini" title="Nghe phát âm" type="button" aria-label="Phát âm">🔊</button>
            <button class="btn-bookmark-mini ${isSaved ? 'bookmarked' : ''}" title="${isSaved ? 'Bỏ lưu' : 'Lưu vào sổ tay'}" type="button" aria-label="Lưu từ">
              ${isSaved ? '⭐' : '☆'}
            </button>
          </div>
        `;

        // Click on item opens inspector
        item.addEventListener('click', (e) => {
          if (!e.target.closest('button')) {
            openWordModal(vocab.id);
          }
        });

        // Click speaker
        const btnSpeak = item.querySelector('.btn-speaker-mini');
        btnSpeak.addEventListener('click', (e) => {
          e.stopPropagation();
          speakText(vocab.word);
        });

        // Click bookmark
        const btnBookmark = item.querySelector('.btn-bookmark-mini');
        btnBookmark.addEventListener('click', (e) => {
          e.stopPropagation();
          toggleBookmarkWord(vocab.id);
          renderReadingPane(unit);
        });

        DOM.sidebarWordList.appendChild(item);
      });
    }
  }

  // Text to speech for full reading
  function toggleAudioReading() {
    if (AppState.audio.isPlaying) {
      stopAudioReading();
    } else {
      playAudioReading();
    }
  }

  function playAudioReading() {
    if (!AppState.audio.synth || !AppState.currentUnit) return;
    AppState.audio.synth.cancel();

    const paragraphs = AppState.currentUnit.paragraphs;
    let pIndex = 0;
    AppState.audio.isPlaying = true;
    if (DOM.btnPlayAudio) DOM.btnPlayAudio.innerHTML = '⏸️ Tạm dừng';

    const pDoms = DOM.readingPassage ? DOM.readingPassage.querySelectorAll('p') : [];

    function speakNextParagraph() {
      if (!AppState.audio.isPlaying || pIndex >= paragraphs.length) {
        stopAudioReading();
        return;
      }

      // Highlight active paragraph
      pDoms.forEach((el, idx) => {
        el.classList.toggle('karaoke-active', idx === pIndex);
      });

      const utt = new SpeechSynthesisUtterance(paragraphs[pIndex]);
      utt.lang = 'en-US';
      utt.rate = AppState.audio.speed;
      if (AppState.audio.voice) utt.voice = AppState.audio.voice;

      utt.onend = () => {
        pIndex++;
        speakNextParagraph();
      };
      utt.onerror = () => {
        stopAudioReading();
      };

      AppState.audio.synth.speak(utt);
    }

    speakNextParagraph();
  }

  function stopAudioReading() {
    if (AppState.audio.synth) AppState.audio.synth.cancel();
    AppState.audio.isPlaying = false;
    if (DOM.btnPlayAudio) DOM.btnPlayAudio.innerHTML = '▶️ Nghe bài đọc';
    if (DOM.readingPassage) {
      DOM.readingPassage.querySelectorAll('p').forEach(p => p.classList.remove('karaoke-active'));
    }
  }

  // ==================== Modal Word Inspector ====================
  function openWordModal(wordId) {
    const vocab = AppState.currentUnit.vocabulary.find(v => v.id === wordId);
    if (!vocab) return;

    if (DOM.modalWord) DOM.modalWord.textContent = vocab.word;
    if (DOM.modalIpa) DOM.modalIpa.textContent = vocab.ipa;
    if (DOM.modalPos) DOM.modalPos.textContent = `${vocab.posVi} (${vocab.pos})`;
    if (DOM.modalMeaningVi) DOM.modalMeaningVi.textContent = vocab.vietnamese;
    if (DOM.modalDefEn) DOM.modalDefEn.textContent = `"${vocab.definition}"`;
    if (DOM.modalQuote) DOM.modalQuote.textContent = `“${vocab.contextQuote}”`;
    if (DOM.modalClue) DOM.modalClue.textContent = vocab.contextClue;

    // Collocations
    if (DOM.modalCollocations) {
      DOM.modalCollocations.innerHTML = '';
      (vocab.collocations || []).forEach(col => {
        const span = document.createElement('span');
        span.className = 'colloc-chip';
        span.textContent = col;
        DOM.modalCollocations.appendChild(span);
      });
    }

    // Example
    if (DOM.modalExampleEn) {
      DOM.modalExampleEn.textContent = vocab.additionalExample || '';
    }

    // Speak Button
    if (DOM.modalBtnSpeak) {
      DOM.modalBtnSpeak.onclick = () => speakText(vocab.word);
    }

    // Bookmark Button
    updateModalBookmarkBtn(vocab.id);
    if (DOM.modalBtnBookmark) {
      DOM.modalBtnBookmark.onclick = () => {
        toggleBookmarkWord(vocab.id);
        updateModalBookmarkBtn(vocab.id);
        renderReadingPane(AppState.currentUnit);
      };
    }

    // Highlight word in passage
    if (DOM.readingPassage) {
      DOM.readingPassage.querySelectorAll('.target-word').forEach(el => {
        el.classList.toggle('active-inspect', el.dataset.wordId === wordId);
      });
    }

    if (DOM.modalOverlay) {
      DOM.modalOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function updateModalBookmarkBtn(wordId) {
    if (!DOM.modalBtnBookmark) return;
    const isSaved = AppState.savedWordIds.has(wordId);
    DOM.modalBtnBookmark.classList.toggle('active', isSaved);
    DOM.modalBtnBookmark.innerHTML = isSaved ? '⭐ Đã lưu vào sổ tay' : '☆ Lưu vào sổ tay từ vựng';
  }

  function closeModal() {
    if (DOM.modalOverlay) {
      DOM.modalOverlay.classList.remove('open');
      document.body.style.overflow = '';
    }
    if (DOM.readingPassage) {
      DOM.readingPassage.querySelectorAll('.target-word').forEach(el => {
        el.classList.remove('active-inspect');
      });
    }
  }

  function toggleBookmarkWord(wordId) {
    if (AppState.savedWordIds.has(wordId)) {
      AppState.savedWordIds.delete(wordId);
    } else {
      AppState.savedWordIds.add(wordId);
    }
    saveState();
    renderNotebook();
  }

  // ==================== 2. Context Clues Practice ====================
  function renderContextCluesPane(unit) {
    if (!DOM.cluesContainer) return;
    const questions = unit.contextQuestions || [];
    if (questions.length === 0) {
      DOM.cluesContainer.innerHTML = '<p class="muted">Chưa có câu hỏi cho bài này.</p>';
      return;
    }

    DOM.cluesContainer.innerHTML = `
      <div class="quiz-container">
        <div class="quiz-card">
          <div class="quiz-card-header">
            <span class="quiz-progress-text" id="clue-step-counter">Câu hỏi 1 / ${questions.length}</span>
            <span class="clue-type-badge" id="clue-type-badge">Mẹo suy luận ngữ cảnh</span>
          </div>
          <div class="context-quote-box" id="clue-quote-box"></div>
          <h4 class="quiz-question-title" id="clue-question-text"></h4>
          <div class="options-list" id="clue-options-list"></div>
          <div class="feedback-box" id="clue-feedback-box" style="display:none;"></div>
          <div class="quiz-nav-actions">
            <button class="btn-nav-action" id="btn-clue-prev" type="button">← Câu trước</button>
            <button class="btn-quiz-primary" id="btn-clue-next" type="button">Câu tiếp theo →</button>
          </div>
        </div>
      </div>
    `;

    AppState.contextClueIndex = 0;
    loadContextQuestion(AppState.contextClueIndex, questions);

    const btnPrev = document.getElementById('btn-clue-prev');
    const btnNext = document.getElementById('btn-clue-next');

    btnPrev.addEventListener('click', () => {
      if (AppState.contextClueIndex > 0) {
        AppState.contextClueIndex--;
        loadContextQuestion(AppState.contextClueIndex, questions);
      }
    });

    btnNext.addEventListener('click', () => {
      if (AppState.contextClueIndex < questions.length - 1) {
        AppState.contextClueIndex++;
        loadContextQuestion(AppState.contextClueIndex, questions);
      } else {
        alert(`Chúc mừng bạn đã hoàn thành phần luyện đoán nghĩa qua ngữ cảnh của Unit ${unit.unitNumber}!`);
      }
    });
  }

  function loadContextQuestion(index, questions) {
    const q = questions[index];
    const counterEl = document.getElementById('clue-step-counter');
    const quoteBox = document.getElementById('clue-quote-box');
    const questionText = document.getElementById('clue-question-text');
    const optionsList = document.getElementById('clue-options-list');
    const feedbackBox = document.getElementById('clue-feedback-box');
    const btnPrev = document.getElementById('btn-clue-prev');
    const btnNext = document.getElementById('btn-clue-next');

    if (counterEl) counterEl.textContent = `Câu hỏi ${index + 1} / ${questions.length}`;
    if (btnPrev) btnPrev.style.visibility = index === 0 ? 'hidden' : 'visible';
    if (btnNext) btnNext.textContent = index === questions.length - 1 ? 'Hoàn thành 🎉' : 'Câu tiếp theo →';

    // Highlight target word in quote
    const highlightedQuote = q.quote.replace(
      new RegExp(`\\b${q.targetWord}\\b`, 'gi'),
      `<span class="quote-highlight">${q.targetWord}</span>`
    );
    if (quoteBox) quoteBox.innerHTML = `“${highlightedQuote}”`;
    if (questionText) questionText.textContent = q.question;

    if (feedbackBox) feedbackBox.style.display = 'none';

    if (optionsList) {
      optionsList.innerHTML = '';
      const letters = ['A', 'B', 'C', 'D'];
      q.options.forEach((optText, i) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'option-btn';
        btn.innerHTML = `
          <span class="option-letter">${letters[i]}</span>
          <span class="option-text">${optText}</span>
        `;

        btn.addEventListener('click', () => {
          // Disable all options
          optionsList.querySelectorAll('.option-btn').forEach((b, bIdx) => {
            b.disabled = true;
            if (bIdx === q.answer) b.classList.add('correct');
          });

          if (i === q.answer) {
            btn.classList.add('correct');
            feedbackBox.className = 'feedback-box correct';
            feedbackBox.innerHTML = `
              <div class="feedback-header">✅ Chính xác!</div>
              <div class="feedback-body">${q.explanation}</div>
              ${q.clueTip ? `<div style="margin-top:0.5rem; font-style:italic;">💡 ${q.clueTip}</div>` : ''}
            `;
          } else {
            btn.classList.add('incorrect');
            feedbackBox.className = 'feedback-box incorrect';
            feedbackBox.innerHTML = `
              <div class="feedback-header">❌ Chưa chính xác!</div>
              <div class="feedback-body">${q.explanation}</div>
              ${q.clueTip ? `<div style="margin-top:0.5rem; font-style:italic;">💡 ${q.clueTip}</div>` : ''}
            `;
          }
          feedbackBox.style.display = 'block';
        });

        optionsList.appendChild(btn);
      });
    }
  }

  // ==================== 3. Cloze Fill-in Practice ====================
  function renderClozePane(unit) {
    if (!DOM.clozeList || !DOM.clozeBankChips) return;
    const clozeItems = unit.clozeExercises || [];

    // Reset score notice
    if (DOM.clozeScoreNotice) DOM.clozeScoreNotice.style.display = 'none';

    // Word Bank
    DOM.clozeBankChips.innerHTML = '';
    const shuffledWords = [...unit.vocabulary].map(v => v.word).sort(() => Math.random() - 0.5);

    shuffledWords.forEach(word => {
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'bank-chip';
      chip.textContent = word;
      chip.addEventListener('click', () => {
        // Find first empty cloze input
        const emptyInput = Array.from(DOM.clozeList.querySelectorAll('.cloze-input')).find(inp => !inp.value.trim());
        if (emptyInput) {
          emptyInput.value = word;
          chip.classList.add('used');
          emptyInput.focus();
        }
      });
      DOM.clozeBankChips.appendChild(chip);
    });

    // Sentences
    DOM.clozeList.innerHTML = '';
    clozeItems.forEach((item, idx) => {
      const card = document.createElement('div');
      card.className = 'cloze-item-card';

      const sentenceWithInput = item.sentence.replace('_______', `
        <input type="text" class="cloze-input" data-index="${idx}" data-answer="${item.targetWord}" placeholder="..." autocomplete="off" autocorrect="off" spellcheck="false" />
      `);

      card.innerHTML = `
        <div class="cloze-sentence">${idx + 1}. ${sentenceWithInput}</div>
        <div class="cloze-hint">💡 Gợi ý: ${item.hint}</div>
        <div class="cloze-answer-reveal" id="cloze-ans-${idx}">Đáp án đúng: <strong>${item.targetWord}</strong></div>
      `;

      // Input listener to update bank chips
      const inputEl = card.querySelector('.cloze-input');
      inputEl.addEventListener('input', () => {
        inputEl.classList.remove('correct', 'incorrect');
        updateUsedBankChips();
      });

      DOM.clozeList.appendChild(card);
    });
  }

  function updateUsedBankChips() {
    if (!DOM.clozeList || !DOM.clozeBankChips) return;
    const currentValues = Array.from(DOM.clozeList.querySelectorAll('.cloze-input'))
      .map(i => i.value.trim().toLowerCase())
      .filter(Boolean);

    DOM.clozeBankChips.querySelectorAll('.bank-chip').forEach(chip => {
      const chipWord = chip.textContent.trim().toLowerCase();
      chip.classList.toggle('used', currentValues.includes(chipWord));
    });
  }

  function checkClozeAnswers() {
    if (!DOM.clozeList) return;
    const inputs = DOM.clozeList.querySelectorAll('.cloze-input');
    let correctCount = 0;

    inputs.forEach((inp, idx) => {
      const userVal = inp.value.trim().toLowerCase();
      const correctVal = inp.dataset.answer.trim().toLowerCase();
      const revealEl = document.getElementById(`cloze-ans-${idx}`);

      inp.classList.remove('correct', 'incorrect');
      if (userVal === correctVal) {
        inp.classList.add('correct');
        correctCount++;
        if (revealEl) revealEl.style.display = 'none';
      } else {
        inp.classList.add('incorrect');
        if (revealEl) revealEl.style.display = 'block';
      }
    });

    if (DOM.clozeScoreNotice) {
      DOM.clozeScoreNotice.style.display = 'block';
      DOM.clozeScoreNotice.className = correctCount === inputs.length ? 'feedback-box correct' : 'feedback-box incorrect';
      DOM.clozeScoreNotice.innerHTML = `
        <div class="feedback-header">
          ${correctCount === inputs.length ? '🎉 Hoàn hảo!' : '📊 Kết quả điền từ:'} ${correctCount} / ${inputs.length} câu đúng
        </div>
        <div class="feedback-body">
          ${correctCount === inputs.length
            ? 'Bạn đã làm chủ toàn bộ từ vựng trong các ngữ cảnh câu mới!'
            : 'Hãy xem lại các câu báo đỏ và chú ý gợi ý để ghi nhớ từ tốt hơn nhé.'}
        </div>
      `;
    }
  }

  // ==================== 4. 3D Flashcards ====================
  function setupFlashcards(unit) {
    AppState.flashcardIndex = 0;
    AppState.isCardFlipped = false;
    renderFlashcard(unit);
  }

  function renderFlashcard(unit) {
    if (!DOM.flashcardInner) return;
    const vocabs = unit.vocabulary;
    const vocab = vocabs[AppState.flashcardIndex];
    if (!vocab) return;

    AppState.isCardFlipped = false;
    DOM.flashcardInner.classList.remove('flipped');

    if (DOM.cardCounter) DOM.cardCounter.textContent = `${AppState.flashcardIndex + 1} / ${vocabs.length}`;
    if (DOM.cardWordFront) DOM.cardWordFront.textContent = vocab.word;
    if (DOM.cardIpaFront) DOM.cardIpaFront.textContent = vocab.ipa;
    if (DOM.cardContextFront) DOM.cardContextFront.textContent = `“${vocab.contextQuote}”`;

    if (DOM.cardWordBack) DOM.cardWordBack.textContent = vocab.word;
    if (DOM.cardMeaningBack) DOM.cardMeaningBack.textContent = vocab.vietnamese;
    if (DOM.cardDefBack) DOM.cardDefBack.textContent = `"${vocab.definition}"`;
    if (DOM.cardCollocBack) {
      DOM.cardCollocBack.textContent = `Cụm từ: ${(vocab.collocations || []).join(' • ')}`;
    }

    const isMastered = AppState.masteredWordIds.has(vocab.id);
    if (DOM.btnCardPass) {
      DOM.btnCardPass.innerHTML = isMastered ? '✅ Đã thuộc' : '👍 Đã nhớ từ này';
    }
  }

  function flipCard() {
    if (!DOM.flashcardInner) return;
    AppState.isCardFlipped = !AppState.isCardFlipped;
    DOM.flashcardInner.classList.toggle('flipped', AppState.isCardFlipped);
  }

  function prevCard() {
    const vocabs = AppState.currentUnit.vocabulary;
    AppState.flashcardIndex = (AppState.flashcardIndex - 1 + vocabs.length) % vocabs.length;
    renderFlashcard(AppState.currentUnit);
  }

  function nextCard() {
    const vocabs = AppState.currentUnit.vocabulary;
    AppState.flashcardIndex = (AppState.flashcardIndex + 1) % vocabs.length;
    renderFlashcard(AppState.currentUnit);
  }

  function markCardMastered(isMastered) {
    const vocab = AppState.currentUnit.vocabulary[AppState.flashcardIndex];
    if (!vocab) return;

    if (isMastered) {
      AppState.masteredWordIds.add(vocab.id);
    } else {
      AppState.masteredWordIds.delete(vocab.id);
    }
    saveState();
    renderFlashcard(AppState.currentUnit);
    renderDashboard();
    nextCard();
  }

  // ==================== 5. Match Game ====================
  function setupMatchGame(unit) {
    if (!DOM.matchGrid) return;
    clearInterval(AppState.matchGame.timerInterval);

    AppState.matchGame.firstTile = null;
    AppState.matchGame.matchedCount = 0;
    AppState.matchGame.moves = 0;
    AppState.matchGame.timerSec = 0;

    if (DOM.matchTimer) DOM.matchTimer.textContent = '00:00';
    if (DOM.matchMoves) DOM.matchMoves.textContent = '0';
    if (DOM.matchMatched) DOM.matchMatched.textContent = `0 / ${unit.matchPairs.length}`;
    if (DOM.matchWinNotice) DOM.matchWinNotice.style.display = 'none';

    // Start timer
    AppState.matchGame.timerInterval = setInterval(() => {
      AppState.matchGame.timerSec++;
      const m = String(Math.floor(AppState.matchGame.timerSec / 60)).padStart(2, '0');
      const s = String(AppState.matchGame.timerSec % 60).padStart(2, '0');
      if (DOM.matchTimer) DOM.matchTimer.textContent = `${m}:${s}`;
    }, 1000);

    // Build items
    const tiles = [];
    unit.matchPairs.forEach((pair, idx) => {
      tiles.push({ id: idx, type: 'word', text: pair.word });
      tiles.push({ id: idx, type: 'match', text: pair.match });
    });

    // Shuffle
    tiles.sort(() => Math.random() - 0.5);

    DOM.matchGrid.innerHTML = '';
    tiles.forEach(tileData => {
      const tileEl = document.createElement('div');
      tileEl.className = 'match-tile';
      tileEl.textContent = tileData.text;
      tileEl.dataset.id = tileData.id;
      tileEl.dataset.type = tileData.type;

      tileEl.addEventListener('click', () => handleMatchTileClick(tileEl, tileData));
      DOM.matchGrid.appendChild(tileEl);
    });
  }

  function handleMatchTileClick(tileEl, tileData) {
    if (tileEl.classList.contains('matched') || tileEl.classList.contains('selected')) return;

    if (!AppState.matchGame.firstTile) {
      AppState.matchGame.firstTile = { el: tileEl, data: tileData };
      tileEl.classList.add('selected');
      if (tileData.type === 'word') speakText(tileData.text);
    } else {
      const first = AppState.matchGame.firstTile;
      if (first.el === tileEl) return;

      AppState.matchGame.moves++;
      if (DOM.matchMoves) DOM.matchMoves.textContent = String(AppState.matchGame.moves);

      // Check match
      if (first.data.id === tileData.id && first.data.type !== tileData.type) {
        // Matched!
        first.el.classList.remove('selected');
        first.el.classList.add('matched');
        tileEl.classList.add('matched');
        AppState.matchGame.firstTile = null;
        AppState.matchGame.matchedCount++;
        if (DOM.matchMatched) {
          DOM.matchMatched.textContent = `${AppState.matchGame.matchedCount} / ${AppState.currentUnit.matchPairs.length}`;
        }

        // Check Win
        if (AppState.matchGame.matchedCount === AppState.currentUnit.matchPairs.length) {
          clearInterval(AppState.matchGame.timerInterval);
          if (DOM.matchWinNotice) {
            DOM.matchWinNotice.style.display = 'block';
            DOM.matchWinNotice.innerHTML = `
              🎉 Xuất sắc! Bạn đã ghép đúng tất cả các từ trong ${AppState.matchGame.timerSec} giây với ${AppState.matchGame.moves} lượt chọn!
            `;
          }
          triggerConfetti();
        }
      } else {
        // Error shake
        tileEl.classList.add('shake-error');
        first.el.classList.add('shake-error');
        setTimeout(() => {
          first.el.classList.remove('selected', 'shake-error');
          tileEl.classList.remove('shake-error');
          AppState.matchGame.firstTile = null;
        }, 500);
      }
    }
  }

  // ==================== 6. Reading Comprehension Quiz ====================
  function renderReadingQuiz(unit) {
    if (!DOM.quizQuestionsList) return;
    const questions = unit.readingQuiz || [];

    if (DOM.quizResultCard) DOM.quizResultCard.style.display = 'none';
    if (DOM.btnSubmitQuiz) DOM.btnSubmitQuiz.style.display = 'inline-flex';

    DOM.quizQuestionsList.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];

    questions.forEach((q, qIdx) => {
      const qCard = document.createElement('div');
      qCard.className = 'quiz-card';
      qCard.style.marginBottom = '1.25rem';

      const optionsHtml = q.options.map((opt, oIdx) => `
        <label class="option-btn" style="cursor:pointer;">
          <input type="radio" name="quiz_q_${qIdx}" value="${oIdx}" style="display:none;" />
          <span class="option-letter">${letters[oIdx]}</span>
          <span class="option-text">${opt}</span>
        </label>
      `).join('');

      qCard.innerHTML = `
        <h4 class="quiz-question-title">Câu ${qIdx + 1}: ${q.question}</h4>
        <div class="options-list">${optionsHtml}</div>
        <div class="feedback-box" id="quiz-feedback-${qIdx}" style="display:none;"></div>
      `;

      // Selection effect
      qCard.querySelectorAll('label.option-btn').forEach(lbl => {
        lbl.addEventListener('click', () => {
          qCard.querySelectorAll('label.option-btn').forEach(l => l.classList.remove('selected'));
          lbl.classList.add('selected');
        });
      });

      DOM.quizQuestionsList.appendChild(qCard);
    });
  }

  function gradeReadingQuiz() {
    const questions = AppState.currentUnit.readingQuiz || [];
    let correctCount = 0;

    questions.forEach((q, qIdx) => {
      const selected = document.querySelector(`input[name="quiz_q_${qIdx}"]:checked`);
      const feedbackEl = document.getElementById(`quiz-feedback-${qIdx}`);
      const parentCard = feedbackEl.closest('.quiz-card');

      const userChoice = selected ? parseInt(selected.value, 10) : -1;
      const options = parentCard.querySelectorAll('label.option-btn');

      options.forEach((opt, oIdx) => {
        if (oIdx === q.answer) opt.classList.add('correct');
        if (userChoice === oIdx && userChoice !== q.answer) opt.classList.add('incorrect');
      });

      if (userChoice === q.answer) {
        correctCount++;
        feedbackEl.className = 'feedback-box correct';
        feedbackEl.innerHTML = `<strong>✅ Chính xác:</strong> ${q.explanation}`;
      } else {
        feedbackEl.className = 'feedback-box incorrect';
        feedbackEl.innerHTML = `<strong>❌ Chưa đúng:</strong> ${q.explanation}`;
      }
      feedbackEl.style.display = 'block';
    });

    // Save unit progress
    AppState.unitProgress[AppState.currentUnitId] = {
      score: correctCount,
      total: questions.length,
      passed: correctCount >= 4,
      completedAt: new Date().toISOString()
    };
    saveState();
    renderDashboard();

    // Show result card
    if (DOM.quizResultCard) {
      DOM.quizResultCard.style.display = 'block';
      const pct = Math.round((correctCount / questions.length) * 100);
      DOM.quizResultCard.innerHTML = `
        <div class="quiz-score-badge">${pct}%</div>
        <h3>Kết quả: ${correctCount} / ${questions.length} câu đúng</h3>
        <p style="color:var(--text-muted); margin: 0.5rem 0 1.25rem;">
          ${correctCount >= 4 ? 'Xuất sắc! Bạn đã vượt qua bài đọc hiểu đạt chuẩn đầu ra A2.' : 'Hãy đọc lại bài đọc và phần giải thích chi tiết phía trên để cải thiện điểm số nhé!'}
        </p>
        <button class="btn-quiz-primary" onclick="window.scrollTo({top:0, behavior:'smooth'})" type="button">Xem lại các câu trả lời ↑</button>
      `;
      if (pct >= 80) triggerConfetti();
    }
  }

  // ==================== 7. Vocabulary Notebook ====================
  function renderNotebook() {
    if (!DOM.notebookGrid) return;
    const allUnits = window.A2_VOCAB_DATA.units;
    let allVocabs = [];
    allUnits.forEach(u => {
      u.vocabulary.forEach(v => allVocabs.push({ ...v, unitNumber: u.unitNumber, unitTitle: u.title }));
    });

    const activeFilter = document.querySelector('.btn-filter-pill.active')?.dataset.filter || 'all';
    const keyword = (DOM.notebookSearch?.value || '').trim().toLowerCase();

    // Filter
    let filtered = allVocabs.filter(v => {
      if (activeFilter === 'saved' && !AppState.savedWordIds.has(v.id)) return false;
      if (activeFilter === 'need-review' && AppState.masteredWordIds.has(v.id)) return false;
      if (activeFilter === 'mastered' && !AppState.masteredWordIds.has(v.id)) return false;
      if (keyword) {
        return v.word.toLowerCase().includes(keyword) ||
               v.vietnamese.toLowerCase().includes(keyword) ||
               v.definition.toLowerCase().includes(keyword);
      }
      return true;
    });

    if (DOM.notebookSavedCount) {
      DOM.notebookSavedCount.textContent = `${AppState.savedWordIds.size} từ đã lưu • ${AppState.masteredWordIds.size} từ đã thuộc`;
    }

    if (filtered.length === 0) {
      DOM.notebookGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
          <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">📖</div>
          <p>Không tìm thấy từ vựng nào phù hợp với bộ lọc hiện tại.</p>
        </div>
      `;
      return;
    }

    DOM.notebookGrid.innerHTML = '';
    filtered.forEach(vocab => {
      const card = document.createElement('div');
      card.className = 'notebook-card';

      const isSaved = AppState.savedWordIds.has(vocab.id);
      const isMastered = AppState.masteredWordIds.has(vocab.id);

      card.innerHTML = `
        <div>
          <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.5rem;">
            <span style="font-size:0.75rem; font-weight:700; color:var(--primary); background:var(--primary-light); padding:2px 8px; border-radius:999px;">
              Unit ${vocab.unitNumber}
            </span>
            <span style="font-size:0.75rem; color:var(--text-muted);">${vocab.posVi}</span>
          </div>
          <h4 style="font-size:1.35rem; font-weight:800; color:var(--text-main); margin-bottom:0.25rem;">
            ${vocab.word} <small style="font-weight:normal; font-size:0.85rem; color:var(--text-muted); font-family:monospace;">${vocab.ipa}</small>
          </h4>
          <p style="font-weight:700; color:var(--secondary); font-size:0.95rem; margin-bottom:0.4rem;">${vocab.vietnamese}</p>
          <p style="font-size:0.82rem; color:var(--text-muted); font-style:italic; margin-bottom:0.75rem;">"${vocab.definition}"</p>
          <div style="font-size:0.82rem; background:var(--bg-surface); padding:0.5rem 0.75rem; border-radius:8px; margin-bottom:0.75rem;">
            <strong>Ngữ cảnh:</strong> “${vocab.contextQuote}”
          </div>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid var(--border-color); padding-top:0.75rem;">
          <button class="btn-speaker-mini" type="button" title="Nghe phát âm">🔊</button>
          <div style="display:flex; gap:0.4rem;">
            <button class="btn-nav-action btn-toggle-master" type="button" style="font-size:0.78rem; padding:0.3rem 0.6rem;">
              ${isMastered ? '✅ Đã thuộc' : '⚪ Đánh dấu thuộc'}
            </button>
            <button class="btn-bookmark-mini ${isSaved ? 'bookmarked' : ''}" type="button" title="${isSaved ? 'Bỏ lưu' : 'Lưu'}">
              ${isSaved ? '⭐' : '☆'}
            </button>
          </div>
        </div>
      `;

      card.querySelector('.btn-speaker-mini').addEventListener('click', () => speakText(vocab.word));
      card.querySelector('.btn-bookmark-mini').addEventListener('click', () => {
        toggleBookmarkWord(vocab.id);
        renderNotebook();
      });
      card.querySelector('.btn-toggle-master').addEventListener('click', () => {
        if (AppState.masteredWordIds.has(vocab.id)) {
          AppState.masteredWordIds.delete(vocab.id);
        } else {
          AppState.masteredWordIds.add(vocab.id);
        }
        saveState();
        renderNotebook();
        renderDashboard();
      });

      DOM.notebookGrid.appendChild(card);
    });
  }

  function exportVocabCsv() {
    const allUnits = window.A2_VOCAB_DATA.units;
    const rows = [['Unit', 'Word', 'IPA', 'Part of Speech', 'Vietnamese', 'English Definition', 'Context Quote']];
    allUnits.forEach(u => {
      u.vocabulary.forEach(v => {
        rows.push([
          `Unit ${u.unitNumber}`,
          `"${v.word}"`,
          `"${v.ipa}"`,
          `"${v.pos}"`,
          `"${v.vietnamese.replace(/"/g, '""')}"`,
          `"${v.definition.replace(/"/g, '""')}"`,
          `"${v.contextQuote.replace(/"/g, '""')}"`
        ]);
      });
    });

    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + rows.map(e => e.join(',')).join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'A2_Context_Vocabulary_Bank.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // ==================== 8. A2 Dashboard & Badges ====================
  function renderDashboard() {
    const totalWords = 48;
    const masteredCount = AppState.masteredWordIds.size;
    const pct = Math.round((masteredCount / totalWords) * 100);

    if (DOM.dashMasteredCount) DOM.dashMasteredCount.textContent = `${masteredCount} / ${totalWords}`;
    if (DOM.dashMasteredPct) DOM.dashMasteredPct.textContent = `${pct}%`;
    if (DOM.dashProgressBar) DOM.dashProgressBar.style.width = `${pct}%`;

    // Badges
    if (DOM.dashBadgesGrid) {
      const badges = [
        { id: 'unit-1', name: 'Sống Xanh', icon: '🌿', desc: 'Hoàn thành Unit 1' },
        { id: 'unit-2', name: 'Cộng Đồng', icon: '🤝', desc: 'Hoàn thành Unit 2' },
        { id: 'unit-3', name: 'Công Nghệ', icon: '💻', desc: 'Hoàn thành Unit 3' },
        { id: 'unit-4', name: 'Sức Khỏe', icon: '🏃', desc: 'Hoàn thành Unit 4' },
        { id: 'unit-5', name: 'Khám Phá', icon: '🧭', desc: 'Hoàn thành Unit 5' },
        { id: 'unit-6', name: 'Sự Nghiệp', icon: '🎯', desc: 'Hoàn thành Unit 6' },
        { id: 'master', name: 'A2 Master', icon: '🏆', desc: 'Làm chủ 40+ từ vựng' }
      ];

      DOM.dashBadgesGrid.innerHTML = '';
      badges.forEach(b => {
        let isUnlocked = false;
        if (b.id === 'master') {
          isUnlocked = masteredCount >= 40;
        } else {
          isUnlocked = AppState.unitProgress[b.id] && AppState.unitProgress[b.id].passed;
        }

        const el = document.createElement('div');
        el.className = `badge-item ${isUnlocked ? 'unlocked' : ''}`;
        el.innerHTML = `
          <div class="badge-icon">${b.icon}</div>
          <div class="badge-name">${b.name}</div>
          <div style="font-size:0.72rem; color:var(--text-muted); margin-top:2px;">${b.desc}</div>
        `;
        DOM.dashBadgesGrid.appendChild(el);
      });
    }
  }

  // Certificate Modal
  function openCertModal() {
    const name = prompt('Nhập họ và tên học sinh để in trên Giấy chứng nhận:', 'Nguyễn Văn A');
    if (!name) return;

    const certWin = window.open('', '_blank');
    if (!certWin) return;

    const masteredCount = AppState.masteredWordIds.size;
    const dateStr = new Date().toLocaleDateString('vi-VN');

    certWin.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Giấy Chứng Nhận Chuẩn A2 - ${name}</title>
        <style>
          body { font-family: 'Georgia', serif; text-align: center; padding: 40px; background: #fdfaf6; }
          .cert-box { border: 10px double #2563eb; padding: 50px 30px; max-width: 800px; margin: 0 auto; background: #fff; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
          h1 { font-size: 2.4rem; color: #1e3a8a; margin-bottom: 5px; text-transform: uppercase; }
          .sub { font-size: 1.1rem; color: #64748b; margin-bottom: 30px; }
          .name { font-size: 2.2rem; color: #d97706; font-weight: bold; border-bottom: 2px solid #e2e8f0; display: inline-block; padding: 5px 40px; margin: 20px 0; }
          .desc { font-size: 1.1rem; line-height: 1.8; color: #334155; margin: 20px 40px; }
          .meta { display: flex; justify-content: space-between; margin-top: 50px; padding: 0 50px; font-size: 0.95rem; color: #64748b; }
          @media print { body { background: white; padding: 0; } .cert-box { border: 6px double #2563eb; box-shadow: none; } }
        </style>
      </head>
      <body>
        <div class="cert-box">
          <h1>Giấy Chứng Nhận Hoàn Thành</h1>
          <div class="sub">Chương Trình Học Từ Vựng Ngữ Cảnh Bài Đọc Hiểu Chuẩn CEFR A2</div>
          <p>Chứng nhận học sinh:</p>
          <div class="name">${name}</div>
          <div class="desc">
            Đã hoàn thành xuất sắc các bài đọc hiểu chuyên sâu và làm chủ <strong>${masteredCount}/48 từ vựng mục tiêu</strong> chuẩn Khung tham chiếu Châu Âu (CEFR A2) trên nền tảng <strong>LexiRead A2</strong>.
          </div>
          <div class="meta">
            <div>Ngày cấp: ${dateStr}</div>
            <div>Hệ thống khảo thí: <strong>LexiRead A2</strong></div>
          </div>
        </div>
        <script>window.print();</script>
      </body>
      </html>
    `);
    certWin.document.close();
  }

  // Lightweight Confetti
  function triggerConfetti() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '9999';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pieces = [];
    const colors = ['#2563eb', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6'];
    for (let i = 0; i < 80; i++) {
      pieces.push({
        x: Math.random() * canvas.width,
        y: Math.random() * -canvas.height,
        w: Math.random() * 8 + 4,
        h: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        vy: Math.random() * 3 + 2,
        vx: (Math.random() - 0.5) * 2,
        rot: Math.random() * 360
      });
    }

    let frame = 0;
    function anim() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pieces.forEach(p => {
        p.y += p.vy;
        p.x += p.vx;
        p.rot += 2;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rot * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      });
      frame++;
      if (frame < 180) {
        requestAnimationFrame(anim);
      } else {
        document.body.removeChild(canvas);
      }
    }
    requestAnimationFrame(anim);
  }

  // Bootstrap when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
