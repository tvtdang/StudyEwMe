/**
 * Bộ chuẩn hóa & chấm điểm thông minh cho bài tập viết lại câu tiếng Anh.
 * Hỗ trợ:
 * - Gõ phần điền khuyết HOẶC gõ nguyên câu đầy đủ (tự nhận diện)
 * - Chính tả Anh-Anh & Anh-Mỹ (organise/organize, neighbourhood/neighborhood, ...)
 * - Dạng viết tắt (didn't / did not, can't / cannot, ...)
 * - Nhắc nhẹ khi đúng ngữ pháp nhưng thiếu dấu phẩy giữa mệnh đề phân từ
 * - So sánh khác biệt từng từ (word-level diff) khi câu trả lời chưa đúng
 */
(function (global) {
  const UK_US_MAP = {
    organise: 'organize',
    organising: 'organizing',
    organised: 'organized',
    apologise: 'apologize',
    apologising: 'apologizing',
    apologised: 'apologized',
    realise: 'realize',
    realising: 'realizing',
    realised: 'realized',
    programme: 'program',
    programmes: 'programs',
    neighbour: 'neighbor',
    neighbours: 'neighbors',
    neighbourhood: 'neighborhood',
    colourful: 'colorful',
    colour: 'color',
    learnt: 'learned',
    burnt: 'burned',
    centre: 'center',
    favourite: 'favorite',
    practise: 'practice',
    travelling: 'traveling',
    travelled: 'traveled'
  };

  const CONTRACTIONS = [
    [/\bdidn't\b/g, 'did not'],
    [/\bdon't\b/g, 'do not'],
    [/\bdoesn't\b/g, 'does not'],
    [/\bcan't\b/g, 'cannot'],
    [/\bcan not\b/g, 'cannot'],
    [/\bwon't\b/g, 'will not'],
    [/\bisn't\b/g, 'is not'],
    [/\baren't\b/g, 'are not'],
    [/\bwasn't\b/g, 'was not'],
    [/\bweren't\b/g, 'were not'],
    [/\bhaven't\b/g, 'have not'],
    [/\bhasn't\b/g, 'has not'],
    [/\bshouldn't\b/g, 'should not'],
    [/\bwouldn't\b/g, 'would not'],
    [/\bcouldn't\b/g, 'could not'],
    [/\bit's\b/g, 'it is']
  ];

  function joinParts(prefix, middle, suffix) {
    let left = (prefix || '').trim();
    let mid = (middle || '').trim();
    let right = (suffix || '').trim();

    // Tránh lặp dấu phẩy khi người dùng gõ kèm dấu phẩy ở cuối phần điền khuyết
    if (mid && right.startsWith(',') && mid.endsWith(',')) {
      mid = mid.slice(0, -1).trim();
    }
    // Tránh lặp dấu kết thúc câu với suffix
    if (mid && (right === '?' || right === '.') && (mid.endsWith('?') || mid.endsWith('.'))) {
      mid = mid.slice(0, -1).trim();
    }

    let combined = [left, mid].filter(Boolean).join(' ');
    if (right) {
      if (/^[,.;:!?]/.test(right)) {
        combined = combined.replace(/[,.;:!?]+$/, '') + right;
      } else {
        combined = [combined, right].filter(Boolean).join(' ');
      }
    }
    return combined.replace(/\s+/g, ' ').trim();
  }

  function normalizeText(text, options) {
    const stripCommas = Boolean(options && options.stripCommas);
    let s = String(text || '')
      .replace(/[\u2018\u2019`]/g, "'")
      .replace(/[\u201C\u201D]/g, '"')
      .trim()
      .toLowerCase();

    // Bỏ dấu kết thúc câu (., ?, !) ở cuối
    s = s.replace(/[.?!]+$/g, '').trim();

    // Chuẩn hóa khoảng trắng quanh dấu phẩy
    s = s.replace(/\s*,\s*/g, stripCommas ? ' ' : ', ');

    // Chuẩn hóa viết tắt
    for (const [pattern, replacement] of CONTRACTIONS) {
      s = s.replace(pattern, replacement);
    }

    // Chuẩn hóa chính tả Anh-Anh / Anh-Mỹ theo từng từ
    s = s.replace(/\b[a-z]+\b/g, (word) => UK_US_MAP[word] || word);

    // Gộp khoảng trắng thừa
    s = s.replace(/\s+/g, ' ').trim();
    return s;
  }

  function tokenizeWords(sentence) {
    return String(sentence || '')
      .replace(/[\u2018\u2019`]/g, "'")
      .trim()
      .replace(/[.?!]+$/g, '')
      .replace(/\s*,\s*/g, ' , ')
      .split(/\s+/)
      .filter(Boolean);
  }

  function computeWordDiff(expectedSentence, actualSentence) {
    const expTokens = tokenizeWords(expectedSentence);
    const actTokens = tokenizeWords(actualSentence);
    const expNorm = expTokens.map((t) => normalizeText(t));
    const actNorm = actTokens.map((t) => normalizeText(t));

    const m = expNorm.length;
    const n = actNorm.length;
    const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

    for (let i = m - 1; i >= 0; i--) {
      for (let j = n - 1; j >= 0; j--) {
        if (expNorm[i] === actNorm[j]) {
          dp[i][j] = 1 + dp[i + 1][j + 1];
        } else {
          dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1]);
        }
      }
    }

    const diff = [];
    let i = 0;
    let j = 0;
    while (i < m && j < n) {
      if (expNorm[i] === actNorm[j]) {
        diff.push({ type: 'match', text: actTokens[j] });
        i++;
        j++;
      } else if (dp[i + 1][j] >= dp[i][j + 1]) {
        diff.push({ type: 'missing', text: expTokens[i] });
        i++;
      } else {
        diff.push({ type: 'extra', text: actTokens[j] });
        j++;
      }
    }
    while (i < m) {
      diff.push({ type: 'missing', text: expTokens[i++] });
    }
    while (j < n) {
      diff.push({ type: 'extra', text: actTokens[j++] });
    }
    return diff;
  }

  function scoreOverlap(expectedSentence, actualSentence) {
    const diff = computeWordDiff(expectedSentence, actualSentence);
    let matches = 0;
    let errors = 0;
    for (const item of diff) {
      if (item.type === 'match') matches++;
      else errors++;
    }
    return matches * 2 - errors;
  }

  function gradeQuestion(question, rawInput) {
    const trimmedInput = String(rawInput || '').trim();
    if (!trimmedInput) {
      return {
        isEmpty: true,
        isCorrect: false,
        punctuationTip: false,
        userFull: '',
        matchedAnswer: question.displayAnswer,
        diff: []
      };
    }

    // Các cách hiểu câu trả lời của học sinh:
    // 1. Học sinh gõ phần điền khuyết để ghép với prefix & suffix
    // 2. Học sinh gõ lại toàn bộ cả câu
    const candidateUserForms = [
      joinParts(question.prefix, trimmedInput, question.suffix),
      trimmedInput
    ];
    // Nếu có prefix mà học sinh gõ thiếu suffix nhưng đã gõ prefix
    if (question.prefix && question.suffix) {
      candidateUserForms.push(joinParts('', trimmedInput, question.suffix));
    }

    const fullAcceptedForms = question.acceptedAnswers.map((ans) =>
      joinParts(question.prefix, ans, question.suffix)
    );

    // Kiểm tra khớp chính xác (có xét dấu phẩy)
    for (const userForm of candidateUserForms) {
      const normUser = normalizeText(userForm, { stripCommas: false });
      for (const accForm of fullAcceptedForms) {
        if (normUser && normUser === normalizeText(accForm, { stripCommas: false })) {
          return {
            isEmpty: false,
            isCorrect: true,
            punctuationTip: false,
            userFull: userForm,
            matchedAnswer: question.displayAnswer,
            diff: []
          };
        }
      }
    }

    // Kiểm tra khớp khi bỏ qua dấu phẩy (đúng ngữ pháp nhưng thiếu/thừa dấu phẩy)
    for (const userForm of candidateUserForms) {
      const normUserNoComma = normalizeText(userForm, { stripCommas: true });
      for (const accForm of fullAcceptedForms) {
        if (normUserNoComma && normUserNoComma === normalizeText(accForm, { stripCommas: true })) {
          return {
            isEmpty: false,
            isCorrect: true,
            punctuationTip: true,
            userFull: userForm,
            matchedAnswer: question.displayAnswer,
            diff: []
          };
        }
      }
    }

    // Chưa đúng -> chọn phương án hiển thị gần nhất để tạo word diff
    // Ưu tiên dạng ghép prefix + input nếu học sinh không tự gõ lại prefix/suffix
    const normInputNoComma = normalizeText(trimmedInput, { stripCommas: true });
    const normPrefixNoComma = normalizeText(question.prefix, { stripCommas: true });
    const normSuffixNoComma = normalizeText(question.suffix, { stripCommas: true });

    const startsWithPrefix =
      Boolean(normPrefixNoComma) && normInputNoComma.startsWith(normPrefixNoComma);
    const endsWithSuffix =
      Boolean(normSuffixNoComma) && normInputNoComma.endsWith(normSuffixNoComma);

    const displayUserFull = joinParts(
      startsWithPrefix ? '' : question.prefix,
      trimmedInput,
      endsWithSuffix ? '' : question.suffix
    );

    let bestTarget = question.displayAnswer;
    let bestScore = -Infinity;
    for (const accForm of fullAcceptedForms) {
      const sc = scoreOverlap(accForm, displayUserFull);
      if (sc > bestScore) {
        bestScore = sc;
        bestTarget = accForm;
      }
    }

    return {
      isEmpty: false,
      isCorrect: false,
      punctuationTip: false,
      userFull: displayUserFull,
      matchedAnswer: bestTarget,
      diff: computeWordDiff(bestTarget, displayUserFull)
    };
  }

  global.RewriteGrader = {
    joinParts,
    normalizeText,
    gradeQuestion,
    computeWordDiff
  };
})(typeof window !== 'undefined' ? window : globalThis);
