/**
 * Ngân hàng 36 câu hỏi viết lại câu – Tiếng Anh 11 (Global Success)
 * Bám sát Unit 4: ASEAN and Viet Nam (Gerunds) & Unit 5: Global warming (Participle Clauses)
 */
(function (global) {
  const QUESTIONS = [
    // ================= UNIT 4: GERUNDS (12 câu) =================
    {
      id: 1,
      unit: 'unit4',
      unitLabel: 'Unit 4: ASEAN & Viet Nam',
      topic: 'Gerund as Subject',
      prompt: 'It is necessary for young people to develop leadership skills for future careers.',
      cue: '',
      prefix: 'Developing',
      suffix: '',
      acceptedAnswers: [
        'leadership skills is necessary for young people for future careers',
        'leadership skills for future careers is necessary for young people'
      ],
      displayAnswer: 'Developing leadership skills is necessary for young people for future careers.',
      hint: 'Cấu trúc: V-ing + is + adj (+ for sb) ...',
      explanation:
        'Biến mệnh đề chủ ngữ giả "It is + adj + (for sb) + to V" thành danh động từ làm chủ ngữ: "Developing leadership skills is necessary..." (chủ ngữ là danh động từ luôn chia động từ số ít "is").'
    },
    {
      id: 2,
      unit: 'unit4',
      unitLabel: 'Unit 4: ASEAN & Viet Nam',
      topic: 'Gerund after Verb (mind)',
      prompt: 'Could you check the details of the ASEAN School Tour Programme for me?',
      cue: '',
      prefix: 'Do you mind',
      suffix: '?',
      acceptedAnswers: [
        'checking the details of the ASEAN School Tour Programme for me',
        'checking the details of the ASEAN School Tour Programme'
      ],
      displayAnswer: 'Do you mind checking the details of the ASEAN School Tour Programme for me?',
      hint: 'Dùng cấu trúc yêu cầu lịch sự: Do you mind + V-ing ...?',
      explanation:
        'Sau động từ "mind" ta dùng danh động từ (V-ing). Câu đề nghị lịch sự "Could you...?" viết lại thành "Do you mind + V-ing...?".'
    },
    {
      id: 3,
      unit: 'unit4',
      unitLabel: 'Unit 4: ASEAN & Viet Nam',
      topic: 'Gerund after Preposition (succeed in)',
      prompt: 'My cousin managed to propose a community project for the ASEAN Youth Volunteer Programme.',
      cue: '',
      prefix: 'My cousin succeeded',
      suffix: '',
      acceptedAnswers: [
        'in proposing a community project for the ASEAN Youth Volunteer Programme'
      ],
      displayAnswer:
        'My cousin succeeded in proposing a community project for the ASEAN Youth Volunteer Programme.',
      hint: 'managed to V = succeeded in + V-ing',
      explanation:
        'Cụm "succeed in + V-ing" mang nghĩa thành công làm việc gì, đồng nghĩa với "manage to V".'
    },
    {
      id: 4,
      unit: 'unit4',
      unitLabel: 'Unit 4: ASEAN & Viet Nam',
      topic: 'Gerund after Adj + Prep (keen on)',
      prompt: 'Mai really wants to take part in cultural exchanges with ASEAN youths.',
      cue: '',
      prefix: 'Mai is very keen',
      suffix: '',
      acceptedAnswers: [
        'on taking part in cultural exchanges with ASEAN youths',
        'on participating in cultural exchanges with ASEAN youths'
      ],
      displayAnswer: 'Mai is very keen on taking part in cultural exchanges with ASEAN youths.',
      hint: 'Cấu trúc: be keen on + V-ing',
      explanation:
        'Sau cụm tính từ + giới từ "be keen on" (rất hào hứng, mong muốn) ta phải dùng danh động từ (V-ing).'
    },
    {
      id: 5,
      unit: 'unit4',
      unitLabel: 'Unit 4: ASEAN & Viet Nam',
      topic: 'Gerund as Complement after be',
      prompt: 'Phong usually reads news items about ASEAN countries in his free time.',
      cue: '',
      prefix: "Phong's hobby",
      suffix: '',
      acceptedAnswers: [
        'is reading news items about ASEAN countries in his free time',
        'in his free time is reading news items about ASEAN countries'
      ],
      displayAnswer: "Phong's hobby is reading news items about ASEAN countries in his free time.",
      hint: "S's hobby is + V-ing ...",
      explanation:
        'Danh động từ đứng sau động từ "be" làm bổ ngữ để miêu tả sở thích hoặc công việc ("hobby is reading...").'
    },
    {
      id: 6,
      unit: 'unit4',
      unitLabel: 'Unit 4: ASEAN & Viet Nam',
      topic: 'Gerund after Verb (suggest)',
      prompt: '"Why don\'t we organise a Vietnamese Traditional Games Festival to welcome the guests?" said Hoa.',
      cue: '',
      prefix: 'Hoa suggested',
      suffix: '',
      acceptedAnswers: [
        'organising a Vietnamese Traditional Games Festival to welcome the guests'
      ],
      displayAnswer:
        'Hoa suggested organising a Vietnamese Traditional Games Festival to welcome the guests.',
      hint: 'Câu đề nghị "Why don\'t we + V?" → suggested + V-ing',
      explanation:
        'Tường thuật câu đề nghị có người nói cùng tham gia bằng "suggest + V-ing".'
    },
    {
      id: 7,
      unit: 'unit4',
      unitLabel: 'Unit 4: ASEAN & Viet Nam',
      topic: 'Negative Gerund (apologise for not V-ing)',
      prompt: "Nam didn't attend the Youth Union meeting yesterday, and he said sorry for that.",
      cue: '',
      prefix: 'Nam apologised',
      suffix: '',
      acceptedAnswers: [
        'for not attending the Youth Union meeting yesterday'
      ],
      displayAnswer: 'Nam apologised for not attending the Youth Union meeting yesterday.',
      hint: 'Cấu trúc: apologise for + not + V-ing',
      explanation:
        'Cấu trúc xin lỗi vì đã không làm gì: "apologise for + not + V-ing". Dạng phủ định của danh động từ thêm "not" ngay trước V-ing.'
    },
    {
      id: 8,
      unit: 'unit4',
      unitLabel: 'Unit 4: ASEAN & Viet Nam',
      topic: 'Gerund after Verb (involve)',
      prompt: 'Her job requires her to communicate with volunteers from different ASEAN countries.',
      cue: '',
      prefix: 'Her job involves',
      suffix: '',
      acceptedAnswers: [
        'communicating with volunteers from different ASEAN countries'
      ],
      displayAnswer: 'Her job involves communicating with volunteers from different ASEAN countries.',
      hint: 'Động từ involve + V-ing (bao gồm / đòi hỏi việc gì)',
      explanation:
        'Theo sau động từ "involve" (liên quan đến, đòi hỏi) là danh động từ (V-ing), không dùng to-infinitive.'
    },
    {
      id: 9,
      unit: 'unit4',
      unitLabel: 'Unit 4: ASEAN & Viet Nam',
      topic: 'Gerund after Phrasal Verb (look forward to)',
      prompt: 'Linda cannot wait to watch the live-streamed talk show on women in sport.',
      cue: '',
      prefix: 'Linda is looking forward',
      suffix: '',
      acceptedAnswers: [
        'to watching the live-streamed talk show on women in sport'
      ],
      displayAnswer:
        'Linda is looking forward to watching the live-streamed talk show on women in sport.',
      hint: 'Cụm "look forward to + V-ing" (lưu ý "to" là giới từ)',
      explanation:
        'Trong cụm "look forward to" (háo hức mong chờ), "to" là giới từ nên động từ theo sau phải chia ở dạng V-ing ("to watching").'
    },
    {
      id: 10,
      unit: 'unit4',
      unitLabel: 'Unit 4: ASEAN & Viet Nam',
      topic: 'Gerund as Subject',
      prompt: "Minh can't forget the cultural festival he joined in Singapore last year.",
      cue: '',
      prefix: 'Joining',
      suffix: 'was an unforgettable experience for Minh.',
      acceptedAnswers: [
        'the cultural festival in Singapore last year'
      ],
      displayAnswer:
        'Joining the cultural festival in Singapore last year was an unforgettable experience for Minh.',
      hint: 'Joining + cụm danh từ chỉ sự kiện, địa điểm, thời gian + was an unforgettable experience...',
      explanation:
        'Danh động từ "Joining the cultural festival in Singapore last year" làm chủ ngữ, đi với động từ số ít "was".'
    },
    {
      id: 11,
      unit: 'unit4',
      unitLabel: 'Unit 4: ASEAN & Viet Nam',
      topic: 'Gerund after Preposition (thank sb for)',
      prompt: 'Mai was very grateful because Ms Pang met her at the AYVP office.',
      cue: '',
      prefix: 'Mai thanked Ms Pang',
      suffix: '',
      acceptedAnswers: [
        'for meeting her at the AYVP office'
      ],
      displayAnswer: 'Mai thanked Ms Pang for meeting her at the AYVP office.',
      hint: 'Cấu trúc: thank + O + for + V-ing',
      explanation:
        'Cấu trúc cảm ơn ai về việc gì: "thank sb for + V-ing".'
    },
    {
      id: 12,
      unit: 'unit4',
      unitLabel: 'Unit 4: ASEAN & Viet Nam',
      topic: 'Gerund after Preposition (focus on)',
      prompt: 'The ASEAN talk show aims to promote gender equality in and through sport.',
      cue: 'FOCUSES',
      prefix: 'The ASEAN talk show focuses',
      suffix: '',
      acceptedAnswers: [
        'on promoting gender equality in and through sport'
      ],
      displayAnswer:
        'The ASEAN talk show focuses on promoting gender equality in and through sport.',
      hint: 'Cấu trúc: focus on + V-ing (tập trung vào việc gì)',
      explanation:
        'Động từ "focus" đi với giới từ "on", theo sau giới từ là danh động từ ("focus on promoting...").'
    },

    // ================= UNIT 5: PARTICIPLE CLAUSES (14 câu) =================
    {
      id: 13,
      unit: 'unit5',
      unitLabel: 'Unit 5: Global warming',
      topic: 'Present Participle Clause (Reason)',
      prompt: 'Because rice farms produce a lot of methane, they have a strong warming effect on the atmosphere.',
      cue: '',
      prefix: 'Producing',
      suffix: '',
      acceptedAnswers: [
        'a lot of methane, rice farms have a strong warming effect on the atmosphere'
      ],
      displayAnswer:
        'Producing a lot of methane, rice farms have a strong warming effect on the atmosphere.',
      hint: 'Bỏ "Because", đưa động từ về V-ing và thay "they" bằng chủ ngữ "rice farms".',
      explanation:
        'Mệnh đề lý do ở thể chủ động và cùng chủ ngữ "rice farms" → rút gọn thành mệnh đề hiện tại phân từ "Producing a lot of methane,", giữ nguyên chủ ngữ "rice farms" ở mệnh đề chính.'
    },
    {
      id: 14,
      unit: 'unit5',
      unitLabel: 'Unit 5: Global warming',
      topic: 'Present Participle Clause (Negative Reason)',
      prompt: "As Minh didn't know about the dangers of black carbon, he continued burning coal indoors.",
      cue: '',
      prefix: 'Not knowing',
      suffix: '',
      acceptedAnswers: [
        'about the dangers of black carbon, Minh continued burning coal indoors'
      ],
      displayAnswer:
        'Not knowing about the dangers of black carbon, Minh continued burning coal indoors.',
      hint: 'Dạng phủ định: Not + V-ing, S + V...',
      explanation:
        'Khi mệnh đề nguyên nhân ở dạng phủ định ("didn\'t know") và cùng chủ ngữ "Minh", ta đặt "Not" ngay trước hiện tại phân từ: "Not knowing..., Minh continued...".'
    },
    {
      id: 15,
      unit: 'unit5',
      unitLabel: 'Unit 5: Global warming',
      topic: 'Present Participle Clause (Simultaneous Actions)',
      prompt: 'The students walked around their neighbourhood and carried out a survey on daily green habits.',
      cue: '',
      prefix: 'Walking',
      suffix: '',
      acceptedAnswers: [
        'around their neighbourhood, the students carried out a survey on daily green habits'
      ],
      displayAnswer:
        'Walking around their neighbourhood, the students carried out a survey on daily green habits.',
      hint: 'Walking around ..., the students ...',
      explanation:
        'Hai hành động chủ động diễn ra đồng thời của cùng một chủ ngữ ("The students") → rút gọn hành động thứ nhất thành "Walking around their neighbourhood,".'
    },
    {
      id: 16,
      unit: 'unit5',
      unitLabel: 'Unit 5: Global warming',
      topic: 'Present Participle Clause (Result)',
      prompt: 'People cut down trees for farmland and destroy the natural habitats of wild animals.',
      cue: '',
      prefix: 'People cut down trees for farmland,',
      suffix: '',
      acceptedAnswers: [
        'destroying the natural habitats of wild animals'
      ],
      displayAnswer:
        'People cut down trees for farmland, destroying the natural habitats of wild animals.',
      hint: 'Thay "and destroy..." bằng mệnh đề phân từ chỉ hệ quả ", destroying...".',
      explanation:
        'Khi hành động sau là hệ quả trực tiếp của hành động trước (cùng chủ ngữ), ta bỏ "and" và dùng dấu phẩy + hiện tại phân từ (", destroying...").'
    },
    {
      id: 17,
      unit: 'unit5',
      unitLabel: 'Unit 5: Global warming',
      topic: 'Present Participle Clause (Reason)',
      prompt: 'Since Mai wanted to persuade students to switch to renewable energy, she designed a colourful leaflet.',
      cue: '',
      prefix: 'Wanting',
      suffix: '',
      acceptedAnswers: [
        'to persuade students to switch to renewable energy, Mai designed a colourful leaflet'
      ],
      displayAnswer:
        'Wanting to persuade students to switch to renewable energy, Mai designed a colourful leaflet.',
      hint: 'Lược bỏ "Since", thay "she" bằng "Mai" ở mệnh đề chính.',
      explanation:
        '"Since Mai wanted..." là mệnh đề chỉ nguyên nhân chủ động cùng chủ ngữ "Mai", rút gọn thành "Wanting to persuade..., Mai designed...".'
    },
    {
      id: 18,
      unit: 'unit5',
      unitLabel: 'Unit 5: Global warming',
      topic: 'Present Participle Clause (Simultaneous Actions)',
      prompt: 'While the volunteers were collecting landfill waste, they discussed ways to reduce global warming.',
      cue: '',
      prefix: 'Collecting',
      suffix: '',
      acceptedAnswers: [
        'landfill waste, the volunteers discussed ways to reduce global warming'
      ],
      displayAnswer:
        'Collecting landfill waste, the volunteers discussed ways to reduce global warming.',
      hint: 'Collecting ..., the volunteers ...',
      explanation:
        'Hai hành động cùng chủ ngữ ("the volunteers") xảy ra song song → bỏ "While ... were" và dùng V-ing ("Collecting landfill waste, the volunteers...").'
    },
    {
      id: 19,
      unit: 'unit5',
      unitLabel: 'Unit 5: Global warming',
      topic: 'Present Participle Clause (Reason)',
      prompt: 'Because renewable energy comes from natural sources, it will never run out.',
      cue: '',
      prefix: 'Coming',
      suffix: '',
      acceptedAnswers: [
        'from natural sources, renewable energy will never run out'
      ],
      displayAnswer: 'Coming from natural sources, renewable energy will never run out.',
      hint: 'Coming from ..., renewable energy ...',
      explanation:
        'Mệnh đề lý do chủ động "Because renewable energy comes..." → rút gọn thành "Coming from natural sources, renewable energy will never run out."'
    },
    {
      id: 20,
      unit: 'unit5',
      unitLabel: 'Unit 5: Global warming',
      topic: 'Past Participle Clause (Passive Reason)',
      prompt: 'Because the villagers were warned about the health risks of soot, they stopped using solid fuels at home.',
      cue: '',
      prefix: 'Warned',
      suffix: '',
      acceptedAnswers: [
        'about the health risks of soot, the villagers stopped using solid fuels at home'
      ],
      displayAnswer:
        'Warned about the health risks of soot, the villagers stopped using solid fuels at home.',
      hint: 'Bỏ "Because ... were", giữ quá khứ phân từ V3/-ed: Warned ..., the villagers ...',
      explanation:
        'Mệnh đề nguyên nhân mang nghĩa bị động ("were warned") và cùng chủ ngữ "the villagers" → rút gọn thành mệnh đề quá khứ phân từ "Warned about the health risks of soot,".'
    },
    {
      id: 21,
      unit: 'unit5',
      unitLabel: 'Unit 5: Global warming',
      topic: 'Past Participle Clause (Passive Condition)',
      prompt: 'If renewable energy sources are used widely, they can replace fossil fuels in the future.',
      cue: '',
      prefix: 'Used',
      suffix: '',
      acceptedAnswers: [
        'widely, renewable energy sources can replace fossil fuels in the future'
      ],
      displayAnswer:
        'Used widely, renewable energy sources can replace fossil fuels in the future.',
      hint: 'Điều kiện bị động: bỏ "If ... are", dùng Used ..., renewable energy sources ...',
      explanation:
        'Mệnh đề điều kiện bị động ("If ... are used") rút gọn bằng quá khứ phân từ đứng đầu câu ("Used widely,") với chủ ngữ "renewable energy sources" ở mệnh đề chính.'
    },
    {
      id: 22,
      unit: 'unit5',
      unitLabel: 'Unit 5: Global warming',
      topic: 'Past Participle Clause (Passive Reason)',
      prompt: 'Many coastal cities are threatened by rising sea levels, so they are building stronger sea walls.',
      cue: '',
      prefix: 'Threatened',
      suffix: '',
      acceptedAnswers: [
        'by rising sea levels, many coastal cities are building stronger sea walls'
      ],
      displayAnswer:
        'Threatened by rising sea levels, many coastal cities are building stronger sea walls.',
      hint: 'Threatened by ..., many coastal cities ...',
      explanation:
        'Vế đầu chỉ nguyên nhân bị động ("are threatened") dẫn đến kết quả ở vế sau ("so they are building...") → rút gọn vế nguyên nhân thành "Threatened by rising sea levels, many coastal cities...".'
    },
    {
      id: 23,
      unit: 'unit5',
      unitLabel: 'Unit 5: Global warming',
      topic: 'Past Participle Clause (Negative Condition)',
      prompt: 'If organic waste is not treated properly, it releases methane into the air.',
      cue: '',
      prefix: 'Not treated',
      suffix: '',
      acceptedAnswers: [
        'properly, organic waste releases methane into the air'
      ],
      displayAnswer: 'Not treated properly, organic waste releases methane into the air.',
      hint: 'Phủ định điều kiện bị động: Not + V3/-ed, S + V...',
      explanation:
        'Câu điều kiện bị động ở dạng phủ định ("is not treated") rút gọn thành "Not treated properly, organic waste releases methane into the air."'
    },
    {
      id: 24,
      unit: 'unit5',
      unitLabel: 'Unit 5: Global warming',
      topic: 'Past Participle Clause (Passive)',
      prompt: 'The local forest was destroyed by a wildfire and looked completely empty.',
      cue: '',
      prefix: 'Destroyed',
      suffix: '',
      acceptedAnswers: [
        'by a wildfire, the local forest looked completely empty'
      ],
      displayAnswer: 'Destroyed by a wildfire, the local forest looked completely empty.',
      hint: 'Destroyed by ..., the local forest ...',
      explanation:
        'Vế đầu mang nghĩa bị động ("was destroyed") có cùng chủ ngữ "the local forest" với vế sau → rút gọn thành "Destroyed by a wildfire, the local forest looked completely empty."'
    },
    {
      id: 25,
      unit: 'unit5',
      unitLabel: 'Unit 5: Global warming',
      topic: 'Past Participle Clause (Passive Reason)',
      prompt: "As Nga was encouraged by her teacher's advice, she joined the school's Green Fair project.",
      cue: '',
      prefix: 'Encouraged',
      suffix: '',
      acceptedAnswers: [
        "by her teacher's advice, Nga joined the school's Green Fair project"
      ],
      displayAnswer:
        "Encouraged by her teacher's advice, Nga joined the school's Green Fair project.",
      hint: 'Encouraged by ..., Nga ...',
      explanation:
        'Mệnh đề nguyên nhân bị động ("As Nga was encouraged...") rút gọn thành "Encouraged by her teacher\'s advice, Nga joined...".'
    },
    {
      id: 26,
      unit: 'unit5',
      unitLabel: 'Unit 5: Global warming',
      topic: 'Past Participle Clause (Passive Condition)',
      prompt: 'When carbon is stored in trees and soil, it helps reduce the global temperature.',
      cue: '',
      prefix: 'Stored',
      suffix: '',
      acceptedAnswers: [
        'in trees and soil, carbon helps reduce the global temperature'
      ],
      displayAnswer: 'Stored in trees and soil, carbon helps reduce the global temperature.',
      hint: 'Stored in ..., carbon ...',
      explanation:
        'Mệnh đề bị động ("When carbon is stored...") cùng chủ ngữ "carbon" rút gọn thành quá khứ phân từ "Stored in trees and soil, carbon helps reduce the global temperature."'
    },

    // ================= MIXED PRACTICE: UNIT 4 & UNIT 5 (10 câu) =================
    {
      id: 27,
      unit: 'mixed',
      unitLabel: 'Tổng hợp Unit 4 & 5',
      topic: 'Vocabulary + Gerund (make a contribution to)',
      prompt: 'ASEAN countries have helped a lot to promote peace and development in the region.',
      cue: 'CONTRIBUTION',
      prefix: 'ASEAN countries have made',
      suffix: '',
      acceptedAnswers: [
        'a major contribution to promoting peace and development in the region',
        'a great contribution to promoting peace and development in the region',
        'a big contribution to promoting peace and development in the region',
        'a significant contribution to promoting peace and development in the region',
        'a contribution to promoting peace and development in the region'
      ],
      displayAnswer:
        'ASEAN countries have made a major contribution to promoting peace and development in the region.',
      hint: 'Cụm từ Unit 4: make a (major/great) contribution to + V-ing',
      explanation:
        'Trong cụm "make a major contribution to + V-ing", từ "to" là giới từ nên động từ theo sau phải chia ở dạng danh động từ ("promoting").'
    },
    {
      id: 28,
      unit: 'mixed',
      unitLabel: 'Tổng hợp Unit 4 & 5',
      topic: 'Active vs Passive Participle',
      prompt: 'Because black carbon is produced from burning coal and crop waste, it harms human health and the climate.',
      cue: '',
      prefix: '',
      suffix: ', black carbon harms human health and the climate.',
      acceptedAnswers: [
        'Produced from burning coal and crop waste'
      ],
      displayAnswer:
        'Produced from burning coal and crop waste, black carbon harms human health and the climate.',
      hint: 'Xác định vế đầu là chủ động hay bị động ("is produced").',
      explanation:
        'Vì "black carbon" chịu tác động ("is produced" = được tạo ra), ta phải dùng mệnh đề quá khứ phân từ (V3/-ed): "Produced from burning coal and crop waste".'
    },
    {
      id: 29,
      unit: 'mixed',
      unitLabel: 'Tổng hợp Unit 4 & 5',
      topic: 'Warning + Gerund (warn against)',
      prompt: 'Jane told Nga not to stand too close to the coal-burning stove.',
      cue: 'AGAINST',
      prefix: 'Jane warned Nga',
      suffix: '',
      acceptedAnswers: [
        'against standing too close to the coal-burning stove'
      ],
      displayAnswer: 'Jane warned Nga against standing too close to the coal-burning stove.',
      hint: 'Cấu trúc: warn sb against + V-ing',
      explanation:
        'Sau giới từ "against" trong cấu trúc "warn sb against + V-ing" (cảnh báo ai không nên làm gì), động từ chia ở dạng danh động từ ("standing").'
    },
    {
      id: 30,
      unit: 'mixed',
      unitLabel: 'Tổng hợp Unit 4 & 5',
      topic: 'Gerund as Subject',
      prompt: 'It is not easy to achieve a balance between greenhouse gas emissions and removals by 2050.',
      cue: '',
      prefix: 'Achieving',
      suffix: '',
      acceptedAnswers: [
        'a balance between greenhouse gas emissions and removals by 2050 is not easy'
      ],
      displayAnswer:
        'Achieving a balance between greenhouse gas emissions and removals by 2050 is not easy.',
      hint: 'Dùng danh động từ "Achieving..." làm chủ ngữ.',
      explanation:
        'Biến đổi cấu trúc chủ ngữ giả "It is not easy to achieve..." thành danh động từ làm chủ ngữ "Achieving ... is not easy."'
    },
    {
      id: 31,
      unit: 'mixed',
      unitLabel: 'Tổng hợp Unit 4 & 5',
      topic: 'Active vs Passive Participle',
      prompt: 'When world leaders met at the UN Climate Change Conference, they agreed to reduce methane emissions.',
      cue: '',
      prefix: '',
      suffix: ', world leaders agreed to reduce methane emissions.',
      acceptedAnswers: [
        'Meeting at the UN Climate Change Conference'
      ],
      displayAnswer:
        'Meeting at the UN Climate Change Conference, world leaders agreed to reduce methane emissions.',
      hint: 'Chủ ngữ "world leaders" tự thực hiện hành động "met" → chủ động hay bị động?',
      explanation:
        '"World leaders" là người trực tiếp thực hiện hành động ("met" = gặp gỡ), nên dùng hiện tại phân từ (V-ing): "Meeting at the UN Climate Change Conference".'
    },
    {
      id: 32,
      unit: 'mixed',
      unitLabel: 'Tổng hợp Unit 4 & 5',
      topic: 'Active vs Passive Participle',
      prompt: 'Because the AYVP volunteers are trained carefully before the trip, they can handle community projects well.',
      cue: '',
      prefix: '',
      suffix: ', the AYVP volunteers can handle community projects well.',
      acceptedAnswers: [
        'Trained carefully before the trip',
        'Carefully trained before the trip'
      ],
      displayAnswer:
        'Trained carefully before the trip, the AYVP volunteers can handle community projects well.',
      hint: 'Động từ ở vế nguyên nhân là "are trained" (bị động).',
      explanation:
        'Vế nguyên nhân ở thể bị động ("are trained") cùng chủ ngữ "the AYVP volunteers" → rút gọn thành quá khứ phân từ "Trained carefully before the trip".'
    },
    {
      id: 33,
      unit: 'mixed',
      unitLabel: 'Tổng hợp Unit 4 & 5',
      topic: 'Gerund after Verb (avoid)',
      prompt: 'We should not burn crop waste in open fields to reduce soot emissions.',
      cue: 'AVOID',
      prefix: 'We should',
      suffix: '',
      acceptedAnswers: [
        'avoid burning crop waste in open fields to reduce soot emissions'
      ],
      displayAnswer: 'We should avoid burning crop waste in open fields to reduce soot emissions.',
      hint: 'Cấu trúc: avoid + V-ing (tránh làm gì)',
      explanation:
        'Theo sau động từ "avoid" là danh động từ (V-ing): "avoid burning...".'
    },
    {
      id: 34,
      unit: 'mixed',
      unitLabel: 'Tổng hợp Unit 4 & 5',
      topic: 'Negative Present Participle',
      prompt: "Because Mai didn't want to miss the ASEAN School Tour meeting, she arrived at the hall early.",
      cue: '',
      prefix: '',
      suffix: ', Mai arrived at the hall early.',
      acceptedAnswers: [
        'Not wanting to miss the ASEAN School Tour meeting'
      ],
      displayAnswer:
        'Not wanting to miss the ASEAN School Tour meeting, Mai arrived at the hall early.',
      hint: 'Lý do phủ định ở thể chủ động: Not + V-ing.',
      explanation:
        '"didn\'t want" là hành động chủ động ở dạng phủ định, cùng chủ ngữ "Mai" → rút gọn thành "Not wanting to miss the ASEAN School Tour meeting".'
    },
    {
      id: 35,
      unit: 'mixed',
      unitLabel: 'Tổng hợp Unit 4 & 5',
      topic: 'Negative Past Participle',
      prompt: 'Because the students were not informed about the schedule change, they arrived late for the workshop.',
      cue: '',
      prefix: '',
      suffix: ', the students arrived late for the workshop.',
      acceptedAnswers: [
        'Not informed about the schedule change'
      ],
      displayAnswer:
        'Not informed about the schedule change, the students arrived late for the workshop.',
      hint: 'Lý do phủ định ở thể bị động: Not + V3/-ed.',
      explanation:
        'Mệnh đề lý do ở thể bị động phủ định ("were not informed") cùng chủ ngữ "the students" → rút gọn thành "Not informed about the schedule change".'
    },
    {
      id: 36,
      unit: 'mixed',
      unitLabel: 'Tổng hợp Unit 4 & 5',
      topic: 'Participle + Gerund (prevent ... from)',
      prompt: 'Greenhouse gases trap too much heat, so the heat cannot escape back into space.',
      cue: 'PREVENT',
      prefix: 'Trapping too much heat, greenhouse gases',
      suffix: '',
      acceptedAnswers: [
        'prevent the heat from escaping back into space',
        'prevent it from escaping back into space',
        'stop the heat from escaping back into space'
      ],
      displayAnswer:
        'Trapping too much heat, greenhouse gases prevent the heat from escaping back into space.',
      hint: 'Cấu trúc: prevent + O + from + V-ing',
      explanation:
        'Kết hợp mệnh đề phân từ hiện tại ("Trapping too much heat") với danh động từ sau giới từ trong cấu trúc "prevent + O + from + V-ing" (ngăn cản cái gì làm gì).'
    }
  ];

  global.REWRITE_QUESTIONS = QUESTIONS;
})(typeof window !== 'undefined' ? window : globalThis);
