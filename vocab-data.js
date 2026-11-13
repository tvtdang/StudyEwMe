/**
 * VOCAB-DATA.JS
 * Ngân hàng dữ liệu bài đọc hiểu & từ vựng ngữ cảnh chuẩn CEFR A2
 * 6 Chủ đề chuẩn Cambridge A2 Key (KET) & Chương trình Tiếng Anh THCS/THPT
 * Tổng cộng 48 từ vựng mục tiêu với đầy đủ phiên âm IPA, nghĩa tiếng Việt,
 * định nghĩa giản dị, cụm từ đi kèm, mẹo ngữ cảnh và câu hỏi tương tác.
 */

window.A2_VOCAB_DATA = {
  units: [
    {
      id: "unit-1",
      unitNumber: 1,
      title: "Elena's Green Morning Routine",
      vietnameseTitle: "Thói quen buổi sáng sống xanh của Elena",
      topic: "Everyday Life & Green Habits (Đời sống & Môi trường)",
      level: "A2 (Waystage / Elementary)",
      readingTime: "3 phút đọc",
      wordCount: 165,
      summary: "Khám phá thói quen hàng ngày của Elena trong việc giảm rác thải, tiết kiệm năng lượng và xây dựng lối sống bền vững bảo vệ môi trường.",
      passageHtml: `
        <p>Elena lives in a cozy apartment in the city center. Every morning, she prepares her breakfast with <span class="target-word" data-word-id="u1_organic">organic</span> vegetables bought from the local farmers' market. She believes that natural food gives her more energy for the whole day.</p>
        <p>Instead of taking <span class="target-word" data-word-id="u1_disposable">disposable</span> plastic bags, Elena always brings several <span class="target-word" data-word-id="u1_reusable">reusable</span> cloth bags whenever she goes shopping. She tries hard to <span class="target-word" data-word-id="u1_reduce">reduce</span> the amount of daily trash produced by her household.</p>
        <p>Before leaving for work, she checks every room to switch off electric <span class="target-word" data-word-id="u1_appliances">appliances</span> like the television and toaster. Elena knows that small actions can help protect the <span class="target-word" data-word-id="u1_environment">environment</span>. Her goal is to build a truly <span class="target-word" data-word-id="u1_sustainable">sustainable</span> <span class="target-word" data-word-id="u1_lifestyle">lifestyle</span> and inspire her friends to do the same.</p>
      `,
      paragraphs: [
        "Elena lives in a cozy apartment in the city center. Every morning, she prepares her breakfast with organic vegetables bought from the local farmers' market. She believes that natural food gives her more energy for the whole day.",
        "Instead of taking disposable plastic bags, Elena always brings several reusable cloth bags whenever she goes shopping. She tries hard to reduce the amount of daily trash produced by her household.",
        "Before leaving for work, she checks every room to switch off electric appliances like the television and toaster. Elena knows that small actions can help protect the environment. Her goal is to build a truly sustainable lifestyle and inspire her friends to do the same."
      ],
      vocabulary: [
        {
          id: "u1_organic",
          word: "organic",
          ipa: "/ɔːˈɡæn.ɪk/",
          pos: "adjective",
          posVi: "Tính từ",
          vietnamese: "hữu cơ, tự nhiên không dùng hóa chất",
          definition: "produced or grown without using artificial chemicals or pesticides",
          contextQuote: "Every morning, she prepares her breakfast with organic vegetables bought from the local farmers' market.",
          contextClue: "Từ 'organic' đứng trước danh từ 'vegetables' và liên kết với câu tiếp theo nói về 'natural food' (thực phẩm tự nhiên). Điều này chỉ ra rau củ được trồng tự nhiên, không hóa chất.",
          collocations: ["organic food", "organic vegetables", "organic farming"],
          additionalExample: "Eating organic fruit is good for your health, but it often costs more.",
          synonyms: ["natural", "chemical-free"],
          antonyms: ["chemical", "processed"]
        },
        {
          id: "u1_disposable",
          word: "disposable",
          ipa: "/dɪˈspəʊ.zə.bəl/",
          pos: "adjective",
          posVi: "Tính từ",
          vietnamese: "dùng một lần rồi vứt",
          definition: "made to be thrown away after being used once or a few times",
          contextQuote: "Instead of taking disposable plastic bags, Elena always brings several reusable cloth bags...",
          contextClue: "Cấu trúc tương phản 'Instead of taking... Elena always brings reusable cloth bags' (Thay vì... Elena luôn mang túi vải tái sử dụng). 'Reusable' đối lập trực tiếp với 'disposable'.",
          collocations: ["disposable bags", "disposable cups", "disposable cameras"],
          additionalExample: "The coffee shop stopped giving customers disposable plastic spoons.",
          synonyms: ["single-use", "throwaway"],
          antonyms: ["reusable", "durable"]
        },
        {
          id: "u1_reusable",
          word: "reusable",
          ipa: "/riːˈjuː.zə.bəl/",
          pos: "adjective",
          posVi: "Tính từ",
          vietnamese: "có thể tái sử dụng nhiều lần",
          definition: "able to be used again, rather than thrown away",
          contextQuote: "...Elena always brings several reusable cloth bags whenever she goes shopping.",
          contextClue: "Tiền tố 're-' có nghĩa là 'lặp lại' + 'usable' (có thể dùng). Túi vải (cloth bags) dùng khi đi chợ nhiều lần thay cho túi nilon.",
          collocations: ["reusable bags", "reusable bottle", "reusable containers"],
          additionalExample: "Always carry a reusable water bottle when going to school.",
          synonyms: ["recyclable", "multi-use"],
          antonyms: ["disposable", "single-use"]
        },
        {
          id: "u1_reduce",
          word: "reduce",
          ipa: "/rɪˈdjuːs/",
          pos: "verb",
          posVi: "Động từ",
          vietnamese: "giảm bớt, cắt giảm",
          definition: "to make something smaller in size, amount, or price",
          contextQuote: "She tries hard to reduce the amount of daily trash produced by her household.",
          contextClue: "Hành động mang túi vải và tiết kiệm điện nhằm làm cho 'amount of daily trash' (lượng rác thải hàng ngày) ít đi.",
          collocations: ["reduce waste", "reduce pollution", "reduce costs"],
          additionalExample: "We can reduce energy consumption by turning off the lights when leaving.",
          synonyms: ["cut down", "decrease", "lower"],
          antonyms: ["increase", "expand"]
        },
        {
          id: "u1_appliances",
          word: "appliances",
          ipa: "/əˈplaɪ.ən.sɪz/",
          pos: "noun (plural)",
          posVi: "Danh từ số nhiều",
          vietnamese: "thiết bị gia dụng, đồ điện trong nhà",
          definition: "devices or machines, usually electrical, used in people's homes (e.g., cooker, fridge)",
          contextQuote: "Before leaving for work, she checks every room to switch off electric appliances like the television and toaster.",
          contextClue: "Cụm 'electric appliances like the television and toaster' đưa ra ví dụ minh họa trực tiếp (tivi, máy nướng bánh mì), giúp nhận biết ngay đây là các thiết bị gia dụng.",
          collocations: ["electrical appliances", "household appliances", "kitchen appliances"],
          additionalExample: "Modern household appliances save us a great deal of time doing chores.",
          synonyms: ["devices", "gadgets", "equipment"],
          antonyms: []
        },
        {
          id: "u1_environment",
          word: "environment",
          ipa: "/ɪnˈvaɪ.rən.mənt/",
          pos: "noun",
          posVi: "Danh từ",
          vietnamese: "môi trường tự nhiên",
          definition: "the natural world, including land, water, air, plants, and animals",
          contextQuote: "Elena knows that small actions can help protect the environment.",
          contextClue: "Đi kèm động từ 'protect' (bảo vệ) và các hành vi tắt điện, giảm rác thải, giữ gìn trái đất trong sạch.",
          collocations: ["protect the environment", "damage the environment", "environment friendly"],
          additionalExample: "Planting more green trees helps keep our environment fresh and clean.",
          synonyms: ["nature", "surroundings", "ecosystem"],
          antonyms: []
        },
        {
          id: "u1_sustainable",
          word: "sustainable",
          ipa: "/səˈsteɪ.nə.bəl/",
          pos: "adjective",
          posVi: "Tính từ",
          vietnamese: "bền vững, thân thiện và lâu dài cho môi trường",
          definition: "causing little or no damage to the environment and able to continue for a long time",
          contextQuote: "Her goal is to build a truly sustainable lifestyle and inspire her friends to do the same.",
          contextClue: "Đứng trước danh từ 'lifestyle'. Kết hợp việc giảm rác, dùng đồ hữu cơ và bảo vệ môi trường để tạo nên một lối sống bền vững, duy trì lâu dài.",
          collocations: ["sustainable lifestyle", "sustainable energy", "sustainable development"],
          additionalExample: "Solar power is a clean and sustainable source of energy for the future.",
          synonyms: ["eco-friendly", "green", "long-lasting"],
          antonyms: ["unsustainable", "harmful"]
        },
        {
          id: "u1_lifestyle",
          word: "lifestyle",
          ipa: "/ˈlaɪf.staɪl/",
          pos: "noun",
          posVi: "Danh từ",
          vietnamese: "lối sống, phong cách sống",
          definition: "the way a person or group lives and behaves day to day",
          contextQuote: "Her goal is to build a truly sustainable lifestyle and inspire her friends to do the same.",
          contextClue: "Tổng hợp toàn bộ các thói quen hàng ngày của Elena: ăn uống, mua sắm, dùng điện, bảo vệ thiên nhiên.",
          collocations: ["healthy lifestyle", "active lifestyle", "simple lifestyle"],
          additionalExample: "Cycling to school every day is part of his active lifestyle.",
          synonyms: ["way of life", "routine"],
          antonyms: []
        }
      ],
      contextQuestions: [
        {
          id: "u1_cq1",
          targetWord: "organic",
          quote: "Every morning, she prepares her breakfast with organic vegetables bought from the local farmers' market.",
          question: "Dựa vào ngữ cảnh đoạn văn và liên hệ với cụm 'natural food', từ 'organic' có nghĩa gần nhất với:",
          options: [
            "Rau củ tự nhiên, không dùng phân bón hay thuốc trừ sâu hóa học",
            "Rau củ nhập khẩu từ nước ngoài với giá thành rất đắt đỏ",
            "Rau củ đông lạnh để được trong tủ lạnh nhiều tháng",
            "Rau củ được chế biến sẵn thành đồ ăn nhanh"
          ],
          answer: 0,
          explanation: "Từ 'organic' trong bài miêu tả rau củ mua ở chợ nông dân, câu tiếp theo gọi là 'natural food'. Do đó, 'organic' mang nghĩa là rau củ hữu cơ, trồng tự nhiên không hóa chất.",
          clueTip: "Mẹo: Chú ý liên kết câu - câu sau giải thích 'natural food gives her more energy'."
        },
        {
          id: "u1_cq2",
          targetWord: "disposable",
          quote: "Instead of taking disposable plastic bags, Elena always brings several reusable cloth bags...",
          question: "Trong câu trên, từ 'disposable' tương phản trực tiếp với từ 'reusable'. Vậy 'disposable' chỉ loại đồ vật nào?",
          options: [
            "Đồ dùng đắt tiền làm bằng vải lụa",
            "Đồ dùng một lần rồi bỏ đi vào thùng rác",
            "Đồ vật có thể giặt sạch và sử dụng lại cả năm",
            "Đồ vật làm bằng kim loại rất bền"
          ],
          answer: 1,
          explanation: "Cụm 'Instead of taking disposable... Elena brings reusable cloth bags' cho thấy 'disposable' (dùng 1 lần rồi vứt) đối lập hoàn toàn với 'reusable' (tái sử dụng nhiều lần).",
          clueTip: "Mẹo tương phản: Cụm từ 'Instead of X, she does Y' luôn biểu thị hai hành động hoặc thuộc tính đối lập nhau."
        },
        {
          id: "u1_cq3",
          targetWord: "appliances",
          quote: "...switch off electric appliances like the television and toaster.",
          question: "Tác giả dùng cụm từ 'like the television and toaster' nhằm mục đích gì?",
          options: [
            "Nêu giá thành của các thiết bị này tại siêu thị điện máy",
            "Đưa ra ví dụ cụ thể để giải thích cho từ 'electric appliances' (thiết bị điện gia dụng)",
            "Kể tên những đồ chơi giải trí yêu thích của Elena",
            "Cảnh báo nguy cơ cháy nổ của các thiết bị hư hỏng"
          ],
          answer: 1,
          explanation: "Cụm từ 'like' (như là) giới thiệu các ví dụ minh họa: ti vi và máy nướng bánh mì là những 'appliances' (thiết bị điện gia dụng).",
          clueTip: "Mẹo ví dụ: 'such as' hoặc 'like' thường giới thiệu ví dụ điển hình giúp đoán nghĩa từ bao hàm phía trước."
        },
        {
          id: "u1_cq4",
          targetWord: "sustainable",
          quote: "Her goal is to build a truly sustainable lifestyle and inspire her friends to do the same.",
          question: "Dựa vào các hành động của Elena (tiết kiệm điện, giảm rác, dùng đồ tái chế), lối sống 'sustainable' là lối sống thế nào?",
          options: [
            "Lối sống chi tiêu xa hoa và mua sắm liên tục",
            "Lối sống bận rộn, không có thời gian quan tâm xung quanh",
            "Lối sống bền vững, thân thiện với thiên nhiên và duy trì lâu dài",
            "Lối sống khép kín, không giao tiếp với bạn bè hàng xóm"
          ],
          answer: 2,
          explanation: "Tất cả hành động của Elena đều hướng đến bảo vệ môi trường lâu dài, do đó 'sustainable lifestyle' là lối sống bền vững, giảm thiểu tác hại đến hệ sinh thái.",
          clueTip: "Mẹo tổng hợp ý: Nhìn lại các hành động cụ thể trong toàn bộ đoạn văn để suy ra ý nghĩa bao quát."
        }
      ],
      clozeExercises: [
        {
          sentence: "Farmers who practice _______ farming never spray poisonous chemicals on their crops.",
          targetWord: "organic",
          hint: "Tính từ: hữu cơ, tự nhiên"
        },
        {
          sentence: "Coffee shops encourage customers not to use _______ cups to protect the planet.",
          targetWord: "disposable",
          hint: "Tính từ: dùng một lần rồi vứt"
        },
        {
          sentence: "I always bring my _______ bottle to school so that I do not need to buy bottled water.",
          targetWord: "reusable",
          hint: "Tính từ: có thể tái sử dụng"
        },
        {
          sentence: "Switching off unnecessary lamps will _______ your monthly electricity bill significantly.",
          targetWord: "reduce",
          hint: "Động từ: cắt giảm, làm giảm bớt"
        },
        {
          sentence: "Modern kitchen _______ such as microwaves and dishwashers make cooking much easier.",
          targetWord: "appliances",
          hint: "Danh từ số nhiều: các thiết bị gia dụng"
        },
        {
          sentence: "Every citizen has a duty to keep the _______ clean and plant more trees.",
          targetWord: "environment",
          hint: "Danh từ: môi trường sống tự nhiên"
        },
        {
          sentence: "Wind and sunlight are famous examples of clean and _______ sources of energy.",
          targetWord: "sustainable",
          hint: "Tính từ: bền vững, lâu dài"
        },
        {
          sentence: "Eating fresh fruits and doing regular yoga helps maintain a healthy _______.",
          targetWord: "lifestyle",
          hint: "Danh từ: lối sống, phong cách sống"
        }
      ],
      readingQuiz: [
        {
          question: "What is the main topic of the reading text?",
          options: [
            "How to cook traditional breakfast dishes in a city apartment",
            "Elena's daily eco-friendly habits and sustainable lifestyle",
            "The high cost of buying electric appliances in modern cities",
            "How to become a famous farmer in the local market"
          ],
          answer: 1,
          explanation: "Bài đọc xoay quanh các thói quen sống xanh mỗi sáng của Elena (ăn đồ hữu cơ, mang túi vải, tắt thiết bị điện) nhằm xây dựng lối sống bền vững."
        },
        {
          question: "Where does Elena get the vegetables for her breakfast?",
          options: [
            "From a large supermarket near her office",
            "From an online delivery mobile app",
            "From the local farmers' market",
            "From her family's garden in the countryside"
          ],
          answer: 2,
          explanation: "Đoạn 1 nêu rõ: 'she prepares her breakfast with organic vegetables bought from the local farmers' market'."
        },
        {
          question: "Why does Elena bring cloth bags when she goes shopping?",
          options: [
            "Because she wants to reduce trash and avoid disposable plastic bags",
            "Because the supermarket forbids people from buying food",
            "Because cloth bags are cheaper than vegetables",
            "Because she uses them to carry her books to work"
          ],
          answer: 0,
          explanation: "Đoạn 2 nêu rõ: 'Instead of taking disposable plastic bags, Elena always brings several reusable cloth bags... to reduce the amount of daily trash'."
        },
        {
          question: "The word 'appliances' in paragraph 3 refers to:",
          options: [
            "Clothing items like jackets and hats",
            "Electrical devices such as the television and toaster",
            "Different types of reusable plastic boxes",
            "Fresh organic fruits and vegetables"
          ],
          answer: 1,
          explanation: "Đoạn 3 viết: 'switch off electric appliances like the television and toaster'."
        },
        {
          question: "What can we infer about Elena from the text?",
          options: [
            "She dislikes cooking her own meals at home",
            "She cares deeply about nature and wants to positively influence others",
            "She never uses electricity in her apartment",
            "She plans to move to the countryside next month"
          ],
          answer: 1,
          explanation: "Câu cuối cùng của bài: 'Elena knows that small actions can help protect the environment. Her goal is to build a truly sustainable lifestyle and inspire her friends to do the same'."
        }
      ],
      matchPairs: [
        { word: "organic", match: "Rau củ sạch trồng tự nhiên không hóa chất" },
        { word: "disposable", match: "Đồ vật dùng một lần rồi vứt bỏ" },
        { word: "reusable", match: "Vật dụng dùng lại được nhiều lần" },
        { word: "reduce", match: "Làm giảm bớt số lượng hoặc mức độ" },
        { word: "appliances", match: "Thiết bị điện gia dụng trong nhà" },
        { word: "environment", match: "Môi trường tự nhiên xung quanh ta" },
        { word: "sustainable", match: "Bền vững, không gây hại cho tương lai" },
        { word: "lifestyle", match: "Lối sống và thói quen sinh hoạt" }
      ]
    },

    {
      id: "unit-2",
      unitNumber: 2,
      title: "A Day at the Community Garden",
      vietnameseTitle: "Một ngày tại khu vườn cộng đồng",
      topic: "Community & Volunteer Work (Cộng đồng & Hoạt động tình nguyện)",
      level: "A2 (Waystage / Elementary)",
      readingTime: "3.5 phút đọc",
      wordCount: 172,
      summary: "Liam tham gia dự án làm sạch công viên khu phố, vượt qua sự rụt rè ban đầu để học kỹ năng làm việc nhóm và cảm nhận niềm vui sẻ chia.",
      passageHtml: `
        <p>Last Saturday morning, Liam decided to <span class="target-word" data-word-id="u2_participate">participate</span> in a volunteer project organized by his local neighborhood. The project aimed to <span class="target-word" data-word-id="u2_improve">improve</span> the public park, which had become neglected and dirty.</p>
        <p>Liam and twenty other helpers planted colorful flowers, collected plastic bottles, and repaired several wooden <span class="target-word" data-word-id="u2_benches">benches</span>. At first, Liam felt a little <span class="target-word" data-word-id="u2_nervous">nervous</span> because he did not know anyone there. However, the team leader was extremely <span class="target-word" data-word-id="u2_welcoming">welcoming</span> and introduced him to friendly teenagers his age.</p>
        <p>Working together gave Liam great personal <span class="target-word" data-word-id="u2_satisfaction">satisfaction</span>. He also learned useful communication and gardening <span class="target-word" data-word-id="u2_skills">skills</span>. By noon, the whole park looked bright and inviting. Liam made a sincere <span class="target-word" data-word-id="u2_promise">promise</span> to return next month for another community day.</p>
      `,
      paragraphs: [
        "Last Saturday morning, Liam decided to participate in a volunteer project organized by his local neighborhood. The project aimed to improve the public park, which had become neglected and dirty.",
        "Liam and twenty other helpers planted colorful flowers, collected plastic bottles, and repaired several wooden benches. At first, Liam felt a little nervous because he did not know anyone there. However, the team leader was extremely welcoming and introduced him to friendly teenagers his age.",
        "Working together gave Liam great personal satisfaction. He also learned useful communication and gardening skills. By noon, the whole park looked bright and inviting. Liam made a sincere promise to return next month for another community day."
      ],
      vocabulary: [
        {
          id: "u2_participate",
          word: "participate",
          ipa: "/pɑːˈtɪs.ɪ.peɪt/",
          pos: "verb",
          posVi: "Động từ",
          vietnamese: "tham gia, góp mặt",
          definition: "to take part in an activity or event with others",
          contextQuote: "Last Saturday morning, Liam decided to participate in a volunteer project...",
          contextClue: "Cụm 'participate in a volunteer project' (tham gia một dự án tình nguyện) cùng 20 người khác (twenty other helpers).",
          collocations: ["participate in an event", "participate actively", "participate in sports"],
          additionalExample: "All students are encouraged to participate in extracurricular clubs.",
          synonyms: ["take part in", "join in", "attend"],
          antonyms: ["withdraw", "avoid"]
        },
        {
          id: "u2_improve",
          word: "improve",
          ipa: "/ɪmˈpruːv/",
          pos: "verb",
          posVi: "Động từ",
          vietnamese: "cải thiện, làm cho tốt hơn",
          definition: "to make something better, or to become better",
          contextQuote: "The project aimed to improve the public park, which had become neglected and dirty.",
          contextClue: "Công viên trước đó bị bỏ bê và dơ bẩn ('neglected and dirty'). Mục tiêu của dự án là 'improve' để công viên sạch đẹp trở lại.",
          collocations: ["improve skills", "improve health", "improve conditions"],
          additionalExample: "If you practice reading every day, your English will improve rapidly.",
          synonyms: ["make better", "enhance", "upgrade"],
          antonyms: ["worsen", "damage"]
        },
        {
          id: "u2_benches",
          word: "benches",
          ipa: "/ˈben.tʃɪz/",
          pos: "noun (plural)",
          posVi: "Danh từ số nhiều",
          vietnamese: "những chiếc ghế dài (thường ở công viên)",
          definition: "long seats made of wood or stone for two or more people, typically outdoors",
          contextQuote: "...planted colorful flowers, collected plastic bottles, and repaired several wooden benches.",
          contextClue: "Đứng cạnh tính từ 'wooden' (làm bằng gỗ) và nằm trong công viên công cộng để mọi người ngồi nghỉ ngơi.",
          collocations: ["park benches", "wooden benches", "sit on a bench"],
          additionalExample: "Elderly people love sitting on the park benches to feed pigeons in the morning.",
          synonyms: ["seats"],
          antonyms: []
        },
        {
          id: "u2_nervous",
          word: "nervous",
          ipa: "/ˈnɜː.vəs/",
          pos: "adjective",
          posVi: "Tính từ",
          vietnamese: "lo lắng, bồn chồn, hồi hộp",
          definition: "worried and anxious, especially about something that is happening or will happen",
          contextQuote: "At first, Liam felt a little nervous because he did not know anyone there.",
          contextClue: "Mệnh đề nguyên nhân chỉ rõ lý do: 'because he did not know anyone there' (vì anh ấy không quen biết ai ở đó). Khi đến nơi lạ một mình, tâm lý thường là 'nervous'.",
          collocations: ["feel nervous", "nervous about an exam", "get nervous"],
          additionalExample: "She felt nervous before walking onto the stage to sing.",
          synonyms: ["anxious", "worried", "uneasy"],
          antonyms: ["calm", "confident", "relaxed"]
        },
        {
          id: "u2_welcoming",
          word: "welcoming",
          ipa: "/ˈwel.kəm.ɪŋ/",
          pos: "adjective",
          posVi: "Tính từ",
          vietnamese: "niềm nở, hiếu khách, cởi mở đón chào",
          definition: "friendly and making someone feel welcome and comfortable",
          contextQuote: "However, the team leader was extremely welcoming and introduced him to friendly teenagers...",
          contextClue: "Từ nối 'However' tương phản với cảm giác 'nervous' của Liam. Trưởng nhóm nhiệt tình giới thiệu anh với bạn mới để Liam thấy an tâm.",
          collocations: ["welcoming atmosphere", "warm and welcoming", "welcoming smile"],
          additionalExample: "The villagers gave us a very welcoming smile when we arrived.",
          synonyms: ["friendly", "hospitable", "warm"],
          antonyms: ["cold", "unfriendly", "hostile"]
        },
        {
          id: "u2_satisfaction",
          word: "satisfaction",
          ipa: "/ˌsæt.ɪsˈfæk.ʃən/",
          pos: "noun",
          posVi: "Danh từ",
          vietnamese: "sự hài lòng, niềm thỏa mãn",
          definition: "a pleasant feeling of happiness when you have achieved something good",
          contextQuote: "Working together gave Liam great personal satisfaction.",
          contextClue: "Sau một buổi sáng làm việc chăm chỉ và thấy công viên sạch đẹp ('bright and inviting'), cảm xúc đọng lại là sự thỏa mãn và vui mừng.",
          collocations: ["job satisfaction", "deep satisfaction", "give satisfaction"],
          additionalExample: "Finishing a difficult puzzle brings a deep sense of satisfaction.",
          synonyms: ["contentment", "happiness", "pleasure"],
          antonyms: ["dissatisfaction", "disappointment"]
        },
        {
          id: "u2_skills",
          word: "skills",
          ipa: "/skɪlz/",
          pos: "noun (plural)",
          posVi: "Danh từ số nhiều",
          vietnamese: "kỹ năng, khả năng làm việc thành thạo",
          definition: "abilities to do an activity or job well, especially because you have practiced it",
          contextQuote: "He also learned useful communication and gardening skills.",
          contextClue: "Đi kèm với các từ chỉ lĩnh vực: 'communication' (giao tiếp) và 'gardening' (làm vườn), được đúc kết từ việc học hỏi và thực hành.",
          collocations: ["communication skills", "computer skills", "life skills"],
          additionalExample: "Volunteering is an excellent way to practice soft skills and gain confidence.",
          synonyms: ["abilities", "talents", "techniques"],
          antonyms: []
        },
        {
          id: "u2_promise",
          word: "promise",
          ipa: "/ˈprɒm.ɪs/",
          pos: "noun / verb",
          posVi: "Danh từ (hoặc Động từ)",
          vietnamese: "lời hứa, lời cam kết",
          definition: "a statement that you will definitely do something in the future",
          contextQuote: "Liam made a sincere promise to return next month for another community day.",
          contextClue: "Cụm 'made a sincere promise to return' biểu thị ý định chắc chắn sẽ quay lại giúp đỡ vào tháng tới.",
          collocations: ["make a promise", "keep a promise", "break a promise"],
          additionalExample: "He made a promise to his mother that he would study harder this semester.",
          synonyms: ["pledge", "commitment", "vow"],
          antonyms: []
        }
      ],
      contextQuestions: [
        {
          id: "u2_cq1",
          targetWord: "nervous",
          quote: "At first, Liam felt a little nervous because he did not know anyone there.",
          question: "Ngữ cảnh nào trong câu giúp người đọc hiểu nghĩa của từ 'nervous'?",
          options: [
            "Thời tiết buổi sáng hôm đó trời mưa to",
            "Công viên có nhiều hoa rực rỡ sắc màu",
            "Mệnh đề 'because he did not know anyone there' (vì anh không quen ai ở đó)",
            "Anh ấy phải mang theo đồ ăn trưa từ nhà"
          ],
          answer: 2,
          explanation: "Mệnh đề chỉ nguyên nhân 'because he did not know anyone there' giải thích tâm trạng ngập ngừng, e ngại, hồi hộp (nervous) khi tiếp xúc với môi trường lạ.",
          clueTip: "Mẹo nguyên nhân: Tìm liên từ 'because', 'as', 'since' để thấy nguyên nhân dẫn đến cảm xúc."
        },
        {
          id: "u2_cq2",
          targetWord: "welcoming",
          quote: "However, the team leader was extremely welcoming and introduced him to friendly teenagers his age.",
          question: "Từ 'However' và hành động 'introduced him to friendly teenagers' chứng minh người trưởng nhóm thế nào?",
          options: [
            "Rất nghiêm khắc và hay trách mắng",
            "Rất niềm nở, ấm áp và chu đáo với thành viên mới",
            "Rất vội vã và không có thời gian nói chuyện",
            "Rất thờ ơ, không để ý đến Liam"
          ],
          answer: 1,
          explanation: "Hành động chủ động đón tiếp và giới thiệu bạn bè chứng minh người trưởng nhóm vô cùng niềm nở, cởi mở ('welcoming').",
          clueTip: "Mẹo hành động: Hành vi cụ thể của nhân vật là manh mối rõ nhất để hiểu tính từ chỉ tính cách."
        },
        {
          id: "u2_cq3",
          targetWord: "improve",
          quote: "The project aimed to improve the public park, which had become neglected and dirty.",
          question: "Công viên trước đó 'neglected and dirty' (bị bỏ bê và bẩn thỉu). Vậy 'improve' trong ngữ cảnh này mang nghĩa:",
          options: [
            "Đóng cửa công viên để biến thành trung tâm mua sắm",
            "Cải thiện, dọn dẹp và sửa chữa để công viên sạch đẹp hơn",
            "Bán công viên cho một công ty tư nhân",
            "Phá hủy toàn bộ cây xanh trong công viên"
          ],
          answer: 1,
          explanation: "Dự án gồm trồng hoa, nhặt chai nhựa, sửa ghế để biến một nơi bẩn thỉu thành sạch đẹp, tức là 'improve' (cải thiện).",
          clueTip: "Mẹo tình huống: So sánh trạng thái trước (dirty) và sau (bright and inviting) để hiểu từ chỉ hành động."
        },
        {
          id: "u2_cq4",
          targetWord: "satisfaction",
          quote: "Working together gave Liam great personal satisfaction.",
          question: "Từ 'satisfaction' ở đây diễn tả cảm giác gì của Liam?",
          options: [
            "Sự tức giận vì phải làm việc mệt mỏi dưới nắng",
            "Nỗi buồn bã và muốn về nhà ngay lập tức",
            "Sự hài lòng, niềm tự hào và mãn nguyện khi làm được việc có ích",
            "Cảm giác đau đớn ở bắp tay và bàn chân"
          ],
          answer: 2,
          explanation: "Sau khi hoàn thành công việc ý nghĩa, giúp công viên tươi đẹp, Liam cảm thấy mãn nguyện và hạnh phúc ('satisfaction').",
          clueTip: "Mẹo sắc thái: Các từ miêu tả thành quả tốt đẹp thường đi kèm với danh từ mang sắc thái cảm xúc tích cực."
        }
      ],
      clozeExercises: [
        {
          sentence: "Over fifty local students volunteered to _______ in the charity race this morning.",
          targetWord: "participate",
          hint: "Động từ: tham gia, góp mặt"
        },
        {
          sentence: "Reading English stories every week will help you _______ your vocabulary significantly.",
          targetWord: "improve",
          hint: "Động từ: cải thiện, nâng cao"
        },
        {
          sentence: "Old people often sit on wooden park _______ to read the morning newspaper.",
          targetWord: "benches",
          hint: "Danh từ số nhiều: những chiếc ghế dài"
        },
        {
          sentence: "She was so _______ before the job interview that her hands were shaking slightly.",
          targetWord: "nervous",
          hint: "Tính từ: hồi hộp, lo lắng"
        },
        {
          sentence: "The local hotel staff were very friendly and gave us a warm, _______ greeting.",
          targetWord: "welcoming",
          hint: "Tính từ: niềm nở, chào đón"
        },
        {
          sentence: "Helping poor children with their homework gave her immense personal _______.",
          targetWord: "satisfaction",
          hint: "Danh từ: sự hài lòng, niềm mãn nguyện"
        },
        {
          sentence: "Good problem-solving and teamwork _______ are essential for your future career.",
          targetWord: "skills",
          hint: "Danh từ số nhiều: các kỹ năng"
        },
        {
          sentence: "He gave his parents a serious _______ that he would never stay out late again.",
          targetWord: "promise",
          hint: "Danh từ: lời hứa, lời cam kết"
        }
      ],
      readingQuiz: [
        {
          question: "Why was the volunteer project organized in the first place?",
          options: [
            "To build a brand new swimming pool in the city center",
            "To improve the public park that had become dirty and neglected",
            "To hold a loud rock music concert for teenagers",
            "To sell wooden benches to local businesses"
          ],
          answer: 1,
          explanation: "Đoạn 1 nêu: 'The project aimed to improve the public park, which had become neglected and dirty'."
        },
        {
          question: "Which task did Liam and the volunteers NOT do?",
          options: [
            "Planting colorful flowers",
            "Collecting plastic bottles",
            "Repairing wooden benches",
            "Building high concrete walls around the park"
          ],
          answer: 3,
          explanation: "Bài đọc chỉ nhắc đến: trồng hoa, nhặt chai nhựa và sửa ghế gỗ, không hề nhắc đến việc xây tường bê tông."
        },
        {
          question: "Why did Liam feel nervous at the beginning?",
          options: [
            "He was afraid of large dogs in the park",
            "He did not know anyone at the volunteer event",
            "He had lost his mobile phone on the bus",
            "He did not know how to plant trees"
          ],
          answer: 1,
          explanation: "Đoạn 2 viết: 'At first, Liam felt a little nervous because he did not know anyone there'."
        },
        {
          question: "How did the team leader help Liam overcome his shyness?",
          options: [
            "By offering him a warm welcome and introducing him to other teenagers",
            "By asking him to work completely alone in the corner",
            "By giving him a difficult test on gardening",
            "By sending him home early before noon"
          ],
          answer: 0,
          explanation: "Đoạn 2 viết: 'the team leader was extremely welcoming and introduced him to friendly teenagers his age'."
        },
        {
          question: "What was Liam's promise at the end of the morning?",
          options: [
            "To buy all the benches in the park",
            "To return next month for another community day",
            "To become the main leader of the city council",
            "To stop volunteering in public places"
          ],
          answer: 1,
          explanation: "Đoạn 3 kết luận: 'Liam made a sincere promise to return next month for another community day'."
        }
      ],
      matchPairs: [
        { word: "participate", match: "Tham gia vào một sự kiện hoặc hoạt động" },
        { word: "improve", match: "Làm cho cái gì đó tốt hơn, tiến bộ hơn" },
        { word: "benches", match: "Những chiếc ghế dài ở công viên" },
        { word: "nervous", match: "Hồi hộp, bồn chồn lo lắng" },
        { word: "welcoming", match: "Niềm nở, cởi mở chào đón người khác" },
        { word: "satisfaction", match: "Cảm giác hài lòng và thỏa mãn" },
        { word: "skills", match: "Các kỹ năng làm việc thành thạo" },
        { word: "promise", match: "Lời hứa cam kết sẽ làm điều gì" }
      ]
    },

    {
      id: "unit-3",
      unitNumber: 3,
      title: "Digital Classrooms of Today",
      vietnameseTitle: "Lớp học số trong thời đại mới",
      topic: "School Life & Modern Learning (Giáo dục & Công nghệ)",
      level: "A2 (Waystage / Elementary)",
      readingTime: "3 phút đọc",
      wordCount: 168,
      summary: "Tìm hiểu cách máy tính bảng và phần mềm giáo dục giúp học sinh trở nên chủ động hơn, tăng cường hợp tác nhưng cũng cần tránh những xao nhãng.",
      passageHtml: `
        <p>In modern high schools, digital devices are becoming an <span class="target-word" data-word-id="u3_essential">essential</span> part of daily education. Instead of carrying heavy paper textbooks, students use tablets to download interactive learning <span class="target-word" data-word-id="u3_materials">materials</span> and video lessons.</p>
        <p>Teachers frequently design group projects where students must <span class="target-word" data-word-id="u3_collaborate">collaborate</span> online through shared documents. This modern approach trains young people to become more <span class="target-word" data-word-id="u3_independent">independent</span> learners who can research information by themselves.</p>
        <p>However, technology also brings challenges. Students must learn to avoid online <span class="target-word" data-word-id="u3_distractions">distractions</span> like video games or social media alerts during lectures. When used wisely, technology provides an <span class="target-word" data-word-id="u3_effective">effective</span> and <span class="target-word" data-word-id="u3_enjoyable">enjoyable</span> learning <span class="target-word" data-word-id="u3_experience">experience</span> for everyone.</p>
      `,
      paragraphs: [
        "In modern high schools, digital devices are becoming an essential part of daily education. Instead of carrying heavy paper textbooks, students use tablets to download interactive learning materials and video lessons.",
        "Teachers frequently design group projects where students must collaborate online through shared documents. This modern approach trains young people to become more independent learners who can research information by themselves.",
        "However, technology also brings challenges. Students must learn to avoid online distractions like video games or social media alerts during lectures. When used wisely, technology provides an effective and enjoyable learning experience for everyone."
      ],
      vocabulary: [
        {
          id: "u3_essential",
          word: "essential",
          ipa: "/ɪˈsen.ʃəl/",
          pos: "adjective",
          posVi: "Tính từ",
          vietnamese: "thiết yếu, cực kỳ quan trọng không thể thiếu",
          definition: "completely necessary or extremely important in a particular situation",
          contextQuote: "In modern high schools, digital devices are becoming an essential part of daily education.",
          contextClue: "Thiết bị số thay thế sách vở nặng nề và hiện diện ở khắp mọi nơi trong trường học, cho thấy mức độ không thể thiếu của nó.",
          collocations: ["essential part", "essential role", "essential items"],
          additionalExample: "Water is essential for all living creatures on Earth.",
          synonyms: ["necessary", "crucial", "vital"],
          antonyms: ["unnecessary", "optional"]
        },
        {
          id: "u3_materials",
          word: "materials",
          ipa: "/məˈtɪə.ri.əlz/",
          pos: "noun (plural)",
          posVi: "Danh từ số nhiều",
          vietnamese: "tài liệu học tập, học liệu",
          definition: "books, articles, websites, or videos used to gain information and study",
          contextQuote: "...students use tablets to download interactive learning materials and video lessons.",
          contextClue: "Đi kèm cụm 'interactive learning materials and video lessons' (tài liệu học tập tương tác và bài giảng video) tải về trên máy tính bảng.",
          collocations: ["learning materials", "study materials", "reading materials"],
          additionalExample: "The library offers a huge variety of research materials for students.",
          synonyms: ["resources", "documents", "texts"],
          antonyms: []
        },
        {
          id: "u3_collaborate",
          word: "collaborate",
          ipa: "/kəˈlæb.ə.reɪt/",
          pos: "verb",
          posVi: "Động từ",
          vietnamese: "hợp tác, phối hợp cùng làm việc",
          definition: "to work together with someone else to achieve a shared goal",
          contextQuote: "Teachers frequently design group projects where students must collaborate online through shared documents.",
          contextClue: "Nằm trong ngữ cảnh 'group projects' (dự án nhóm) và làm việc qua 'shared documents' (tài liệu dùng chung).",
          collocations: ["collaborate on a project", "collaborate with partners", "collaborate online"],
          additionalExample: "Musicians from five different countries collaborated to create this song.",
          synonyms: ["work together", "cooperate", "team up"],
          antonyms: ["compete", "work alone"]
        },
        {
          id: "u3_independent",
          word: "independent",
          ipa: "/ˌɪn.dɪˈpen.dənt/",
          pos: "adjective",
          posVi: "Tính từ",
          vietnamese: "độc lập, tự chủ, tự lực",
          definition: "not needing other people to do things for you or tell you what to do",
          contextQuote: "This modern approach trains young people to become more independent learners who can research information by themselves.",
          contextClue: "Mệnh đề quan hệ giải thích trực tiếp: 'who can research information by themselves' (tự mình tra cứu thông tin). Tự làm việc mà không ỷ lại = independent.",
          collocations: ["independent learner", "independent thinking", "become independent"],
          additionalExample: "Living away from home made her much more independent and responsible.",
          synonyms: ["self-reliant", "autonomous"],
          antonyms: ["dependent", "relying on others"]
        },
        {
          id: "u3_distractions",
          word: "distractions",
          ipa: "/dɪˈstræk.ʃənz/",
          pos: "noun (plural)",
          posVi: "Danh từ số nhiều",
          vietnamese: "sự xao nhãng, điều gây mất tập trung",
          definition: "things that prevent you from paying attention to what you are doing",
          contextQuote: "Students must learn to avoid online distractions like video games or social media alerts during lectures.",
          contextClue: "Ví dụ 'like video games or social media alerts' (trò chơi điện tử hay thông báo mạng xã hội) làm ngắt quãng giờ học bài.",
          collocations: ["avoid distractions", "digital distractions", "source of distraction"],
          additionalExample: "Turn off your phone notifications to eliminate distractions while studying.",
          synonyms: ["interruptions", "diversions"],
          antonyms: ["focus", "concentration"]
        },
        {
          id: "u3_effective",
          word: "effective",
          ipa: "/ɪˈfek.tɪv/",
          pos: "adjective",
          posVi: "Tính từ",
          vietnamese: "hiệu quả, mang lại kết quả mong đợi",
          definition: "producing a successful result or the result that is wanted",
          contextQuote: "When used wisely, technology provides an effective and enjoyable learning experience...",
          contextClue: "Đi kèm điều kiện 'When used wisely' (khi được dùng thông minh) thì công nghệ mang lại kết quả học tập tốt.",
          collocations: ["effective method", "effective communication", "highly effective"],
          additionalExample: "Spaced repetition flashcards are an effective way to memorize new vocabulary.",
          synonyms: ["successful", "efficient", "useful"],
          antonyms: ["ineffective", "useless"]
        },
        {
          id: "u3_enjoyable",
          word: "enjoyable",
          ipa: "/ɪnˈdʒɔɪ.ə.bəl/",
          pos: "adjective",
          posVi: "Tính từ",
          vietnamese: "thú vị, mang lại niềm vui",
          definition: "giving pleasure and satisfaction",
          contextQuote: "...technology provides an effective and enjoyable learning experience for everyone.",
          contextClue: "Gốc từ 'enjoy' (thích thú) + hậu tố '-able'. Kết hợp với các bài học tương tác trên máy tính bảng giúp việc học không nhàm chán.",
          collocations: ["enjoyable experience", "enjoyable journey", "make it enjoyable"],
          additionalExample: "We had a very enjoyable weekend camping by the lake with our cousins.",
          synonyms: ["pleasant", "fun", "delightful"],
          antonyms: ["boring", "unpleasant"]
        },
        {
          id: "u3_experience",
          word: "experience",
          ipa: "/ɪkˈspɪə.ri.əns/",
          pos: "noun",
          posVi: "Danh từ",
          vietnamese: "trải nghiệm, kinh nghiệm",
          definition: "something that happens to you that affects how you feel and learn",
          contextQuote: "...technology provides an effective and enjoyable learning experience for everyone.",
          contextClue: "Nằm ở cuối câu để chỉ toàn bộ quá trình học tập thực tế của học sinh trong lớp học số.",
          collocations: ["learning experience", "past experience", "gain experience"],
          additionalExample: "Traveling to different countries gives you unforgettable life experiences.",
          synonyms: ["adventure", "event", "knowledge"],
          antonyms: []
        }
      ],
      contextQuestions: [
        {
          id: "u3_cq1",
          targetWord: "independent",
          quote: "This modern approach trains young people to become more independent learners who can research information by themselves.",
          question: "Cụm từ nào trong câu làm rõ nghĩa của từ 'independent'?",
          options: [
            "In modern high schools",
            "Heavy paper textbooks",
            "Research information by themselves (tự mình tra cứu thông tin)",
            "During lectures"
          ],
          answer: 2,
          explanation: "Mệnh đề 'who can research information by themselves' làm rõ rằng người học độc lập (independent learners) là người có khả năng tự lực tra cứu, không phụ thuộc người khác.",
          clueTip: "Mẹo mệnh đề quan hệ: Cụm 'who...' hoặc 'which...' sau danh từ chính là định nghĩa mở rộng đắt giá."
        },
        {
          id: "u3_cq2",
          targetWord: "collaborate",
          quote: "Teachers frequently design group projects where students must collaborate online through shared documents.",
          question: "Trong dự án nhóm (group projects) dùng tài liệu chung (shared documents), động từ 'collaborate' có nghĩa là gì?",
          options: [
            "Làm bài một mình và giữ bí mật kết quả",
            "Hợp tác, trao đổi và làm việc nhóm cùng nhau",
            "Cạnh tranh gay gắt xem ai làm nhanh hơn",
            "Nghỉ học và nhờ người khác làm hộ"
          ],
          answer: 1,
          explanation: "'Collaborate' nghĩa là hợp tác, cùng nhau làm việc vì mục tiêu chung trong một dự án.",
          clueTip: "Mẹo bối cảnh: 'group project' + 'shared documents' là bối cảnh làm việc nhóm điển hình."
        },
        {
          id: "u3_cq3",
          targetWord: "distractions",
          quote: "Students must learn to avoid online distractions like video games or social media alerts during lectures.",
          question: "Tác giả gọi 'video games or social media alerts' trong giờ học là 'distractions' vì chúng:",
          options: [
            "Giúp học sinh tập trung nghe giảng tốt hơn",
            "Làm học sinh phân tâm, mất tập trung vào bài học",
            "Cung cấp nhiều kiến thức toán học bổ ích",
            "Là những thiết bị bắt buộc phải có trong lớp"
          ],
          answer: 1,
          explanation: "Game và thông báo mạng xã hội trong giờ học là những thứ làm xao nhãng ('distractions'), khiến học sinh không thể chú ý nghe giảng.",
          clueTip: "Mẹo liên hệ thực tế: Nghĩ xem game và mạng xã hội gây tác động gì khi đang nghe thầy cô giảng bài."
        },
        {
          id: "u3_cq4",
          targetWord: "essential",
          quote: "In modern high schools, digital devices are becoming an essential part of daily education.",
          question: "Từ 'essential' trong câu trên có thể thay thế bằng từ nào mà không đổi nghĩa?",
          options: [
            "Optional (tùy chọn có cũng được không có cũng được)",
            "Vital / Necessary (cực kỳ quan trọng, thiết yếu)",
            "Dangerous (nguy hiểm)",
            "Expensive (xa xỉ, đắt đỏ)"
          ],
          answer: 1,
          explanation: "'Essential' đồng nghĩa với 'vital', 'necessary' (cần thiết, thiết yếu).",
          clueTip: "Mẹo từ đồng nghĩa: Tìm từ thể hiện vai trò nền tảng không thể thiếu."
        }
      ],
      clozeExercises: [
        {
          sentence: "Getting enough sleep every night is _______ for your brain memory.",
          targetWord: "essential",
          hint: "Tính từ: thiết yếu, cực kỳ quan trọng"
        },
        {
          sentence: "The teacher uploaded all the revision _______ to Google Classroom before the exam.",
          targetWord: "materials",
          hint: "Danh từ số nhiều: học liệu, tài liệu"
        },
        {
          sentence: "Our class had to _______ with students from Sydney on a global climate project.",
          targetWord: "collaborate",
          hint: "Động từ: hợp tác, cộng tác"
        },
        {
          sentence: "University students need to be _______ and manage their own study schedule.",
          targetWord: "independent",
          hint: "Tính từ: tự lập, độc lập"
        },
        {
          sentence: "Please close all entertainment browser tabs to avoid _______ while doing homework.",
          targetWord: "distractions",
          hint: "Danh từ số nhiều: những điều gây xao nhãng"
        },
        {
          sentence: "Creating a daily to-do list is an _______ way to manage your time.",
          targetWord: "effective",
          hint: "Tính từ: có hiệu quả"
        },
        {
          sentence: "Watching English movies with subtitles is both educational and _______.",
          targetWord: "enjoyable",
          hint: "Tính từ: thú vị, mang lại niềm vui"
        },
        {
          sentence: "My first volunteer trip to the mountain school was an unforgettable _______.",
          targetWord: "experience",
          hint: "Danh từ: trải nghiệm, kinh nghiệm"
        }
      ],
      readingQuiz: [
        {
          question: "How are students using tablets instead of heavy textbooks?",
          options: [
            "To play computer games during physical education classes",
            "To download interactive learning materials and watch video lessons",
            "To replace human teachers completely in the classroom",
            "To chat with strangers in other countries"
          ],
          answer: 1,
          explanation: "Đoạn 1 nêu: 'students use tablets to download interactive learning materials and video lessons'."
        },
        {
          question: "What does online collaboration through shared documents teach students?",
          options: [
            "How to become faster typing champions",
            "How to become independent learners who can research by themselves",
            "How to ignore their teachers' instructions",
            "How to sell second-hand paper textbooks"
          ],
          answer: 1,
          explanation: "Đoạn 2 nêu: 'This modern approach trains young people to become more independent learners who can research information by themselves'."
        },
        {
          question: "What is mentioned as a major challenge of using digital technology in class?",
          options: [
            "Tablets are too heavy to carry to school",
            "There are no Wi-Fi connections in modern schools",
            "Distractions such as video games and social media alerts",
            "Teachers do not know how to turn on the computers"
          ],
          answer: 2,
          explanation: "Đoạn 3 chỉ rõ: 'Students must learn to avoid online distractions like video games or social media alerts during lectures'."
        },
        {
          question: "Under what condition does technology provide an effective learning experience?",
          options: [
            "When it is used wisely and properly",
            "Only when schools buy the most expensive computers",
            "Only when examinations are cancelled",
            "When students play games after school"
          ],
          answer: 0,
          explanation: "Đoạn 3 kết luận: 'When used wisely, technology provides an effective and enjoyable learning experience for everyone'."
        },
        {
          question: "The author's tone toward digital devices in school is:",
          options: [
            "Completely negative and hostile",
            "Positive and constructive, recognizing benefits while warning about distractions",
            "Indifferent and unconcerned",
            "Confused and doubtful"
          ],
          answer: 1,
          explanation: "Tác giả chỉ ra lợi ích thiết thực (tài liệu tiện lợi, tự chủ, làm việc nhóm) nhưng cũng nhắc nhở kiểm soát xao nhãng để đạt hiệu quả cao."
        }
      ],
      matchPairs: [
        { word: "essential", match: "Cực kỳ quan trọng, thiết yếu không thể thiếu" },
        { word: "materials", match: "Tài liệu và học liệu dùng để học tập" },
        { word: "collaborate", match: "Hợp tác làm việc cùng nhau trong một nhóm" },
        { word: "independent", match: "Tự chủ, độc lập không phụ thuộc" },
        { word: "distractions", match: "Những điều làm ta mất tập trung xao nhãng" },
        { word: "effective", match: "Mang lại hiệu quả và kết quả tích cực" },
        { word: "enjoyable", match: "Thú vị và mang lại nhiều niềm vui" },
        { word: "experience", match: "Trải nghiệm thực tế có được qua cuộc sống" }
      ]
    },

    {
      id: "unit-4",
      unitNumber: 4,
      title: "Secrets of Daily Energy",
      vietnameseTitle: "Bí quyết giữ nguồn năng lượng mỗi ngày",
      topic: "Health, Nutrition & Well-being (Sức khỏe & Dinh dưỡng)",
      level: "A2 (Waystage / Elementary)",
      readingTime: "3.5 phút đọc",
      wordCount: 175,
      summary: "Khám phá mối liên hệ giữa bữa ăn cân đối, giấc ngủ chất lượng, việc tập thể dục đều đặn và khả năng phục hồi của cơ thể.",
      passageHtml: `
        <p>Many teenagers experience fatigue and stress because they follow an <span class="target-word" data-word-id="u4_unhealthy">unhealthy</span> daily routine. Nutrition experts advise that eating a <span class="target-word" data-word-id="u4_balanced">balanced</span> diet with plenty of vegetables, fruits, and whole grains is vital for human growth.</p>
        <p>Drinking <span class="target-word" data-word-id="u4_sufficient">sufficient</span> clean water instead of sugary drinks keeps your organs functioning properly. Furthermore, doing <span class="target-word" data-word-id="u4_regular">regular</span> physical exercise helps <span class="target-word" data-word-id="u4_strengthen">strengthen</span> your muscles and protects your heart.</p>
        <p>Equally important is sleep. Getting at least eight hours of rest enables your brain to <span class="target-word" data-word-id="u4_recover">recover</span> from mental <span class="target-word" data-word-id="u4_exhaustion">exhaustion</span>. By making small improvements today, young people can easily avoid severe physical health <span class="target-word" data-word-id="u4_problems">problems</span> in adulthood.</p>
      `,
      paragraphs: [
        "Many teenagers experience fatigue and stress because they follow an unhealthy daily routine. Nutrition experts advise that eating a balanced diet with plenty of vegetables, fruits, and whole grains is vital for human growth.",
        "Drinking sufficient clean water instead of sugary drinks keeps your organs functioning properly. Furthermore, doing regular physical exercise helps strengthen your muscles and protects your heart.",
        "Equally important is sleep. Getting at least eight hours of rest enables your brain to recover from mental exhaustion. By making small improvements today, young people can easily avoid severe physical health problems in adulthood."
      ],
      vocabulary: [
        {
          id: "u4_unhealthy",
          word: "unhealthy",
          ipa: "/ʌnˈhel.θi/",
          pos: "adjective",
          posVi: "Tính từ",
          vietnamese: "không lành mạnh, có hại cho sức khỏe",
          definition: "not good for your health, or likely to cause illness",
          contextQuote: "Many teenagers experience fatigue and stress because they follow an unhealthy daily routine.",
          contextClue: "Tiền tố phủ định 'un-' + 'healthy'. Ngữ cảnh nhắc đến 'fatigue and stress' (mệt mỏi và căng thẳng) do thói quen không tốt gây ra.",
          collocations: ["unhealthy habits", "unhealthy diet", "unhealthy lifestyle"],
          additionalExample: "Eating fast food late at night is an unhealthy habit that causes weight gain.",
          synonyms: ["harmful", "bad for you", "ill-advised"],
          antonyms: ["healthy", "wholesome", "nutritious"]
        },
        {
          id: "u4_balanced",
          word: "balanced",
          ipa: "/ˈbæl.ənst/",
          pos: "adjective",
          posVi: "Tính từ",
          vietnamese: "cân đối, hài hòa đầy đủ dinh dưỡng",
          definition: "containing equal or proper amounts of different healthy elements",
          contextQuote: "...eating a balanced diet with plenty of vegetables, fruits, and whole grains is vital...",
          contextClue: "Đi kèm danh từ 'diet' (chế độ ăn), bao gồm sự kết hợp hài hòa của 'vegetables, fruits, and whole grains' (rau củ, trái cây, ngũ cốc).",
          collocations: ["balanced diet", "balanced meal", "balanced lifestyle"],
          additionalExample: "A balanced meal should include carbohydrates, protein, and fresh vitamins.",
          synonyms: ["well-rounded", "nutritious", "proportional"],
          antonyms: ["imbalanced", "poor"]
        },
        {
          id: "u4_sufficient",
          word: "sufficient",
          ipa: "/səˈfɪʃ.ənt/",
          pos: "adjective",
          posVi: "Tính từ",
          vietnamese: "đầy đủ, đủ lượng cần thiết",
          definition: "enough for a particular purpose or need",
          contextQuote: "Drinking sufficient clean water instead of sugary drinks keeps your organs functioning properly.",
          contextClue: "Cụm 'sufficient clean water' đối lập với 'sugary drinks'. Cơ thể cần một lượng nước sạch vừa đủ để các cơ quan hoạt động tốt.",
          collocations: ["sufficient water", "sufficient time", "sufficient evidence"],
          additionalExample: "Make sure you have sufficient time to check your answers before submitting the test.",
          synonyms: ["enough", "adequate", "plenty"],
          antonyms: ["insufficient", "lacking", "scarce"]
        },
        {
          id: "u4_regular",
          word: "regular",
          ipa: "/ˈreɡ.jə.lər/",
          pos: "adjective",
          posVi: "Tính từ",
          vietnamese: "đều đặn, thường xuyên theo chu kỳ",
          definition: "happening or doing something often, at standard repeated intervals",
          contextQuote: "Furthermore, doing regular physical exercise helps strengthen your muscles...",
          contextClue: "Đi kèm 'physical exercise' (tập thể dục). Để có hiệu quả, việc tập luyện cần được thực hiện lặp đi lặp lại hàng ngày hoặc hàng tuần.",
          collocations: ["regular exercise", "regular basis", "regular checkup"],
          additionalExample: "Taking regular walks in the park keeps your mind calm and alert.",
          synonyms: ["routine", "frequent", "systematic"],
          antonyms: ["irregular", "rare", "occasional"]
        },
        {
          id: "u4_strengthen",
          word: "strengthen",
          ipa: "/ˈstreŋ.θən/",
          pos: "verb",
          posVi: "Động từ",
          vietnamese: "làm cho mạnh mẽ, củng cố",
          definition: "to make something stronger or more powerful",
          contextQuote: "...helps strengthen your muscles and protects your heart.",
          contextClue: "Được cấu tạo từ danh từ 'strength' + hậu tố động từ hóa '-en'. Tập thể dục làm cho cơ bắp ('muscles') khỏe mạnh hơn.",
          collocations: ["strengthen muscles", "strengthen the immune system", "strengthen friendship"],
          additionalExample: "Swimming twice a week will strengthen your back and leg muscles.",
          synonyms: ["build up", "reinforce", "boost"],
          antonyms: ["weaken", "soften"]
        },
        {
          id: "u4_recover",
          word: "recover",
          ipa: "/rɪˈkʌv.ər/",
          pos: "verb",
          posVi: "Động từ",
          vietnamese: "hồi phục, lấy lại sức khỏe",
          definition: "to become completely well again after being tired, injured, or ill",
          contextQuote: "Getting at least eight hours of rest enables your brain to recover from mental exhaustion.",
          contextClue: "Đi cùng hành động ngủ đủ 8 tiếng ('eight hours of rest'). Giấc ngủ giúp não bộ nạp lại năng lượng sau khi bị kiệt sức.",
          collocations: ["recover from illness", "recover energy", "speedy recovery"],
          additionalExample: "It took him several days to recover from the bad flu.",
          synonyms: ["heal", "recharge", "get better"],
          antonyms: ["relapse", "deteriorate"]
        },
        {
          id: "u4_exhaustion",
          word: "exhaustion",
          ipa: "/ɪɡˈzɔːs.tʃən/",
          pos: "noun",
          posVi: "Danh từ",
          vietnamese: "sự kiệt sức, mệt mỏi tột cùng",
          definition: "the state of being extremely tired physically or mentally",
          contextQuote: "...enables your brain to recover from mental exhaustion.",
          contextClue: "Cụm 'mental exhaustion' (kiệt sức về mặt trí não) xuất hiện do học tập căng thẳng và thiếu ngủ.",
          collocations: ["mental exhaustion", "physical exhaustion", "suffer from exhaustion"],
          additionalExample: "After running the marathon in the hot sun, the runner collapsed from pure exhaustion.",
          synonyms: ["fatigue", "extreme tiredness"],
          antonyms: ["energy", "vitality", "liveliness"]
        },
        {
          id: "u4_problems",
          word: "problems",
          ipa: "/ˈprɒb.ləmz/",
          pos: "noun (plural)",
          posVi: "Danh từ số nhiều",
          vietnamese: "các vấn đề, rắc rối sức khỏe",
          definition: "difficulties, diseases, or complications that need to be solved",
          contextQuote: "...young people can easily avoid severe physical health problems in adulthood.",
          contextClue: "Đi kèm cụm 'health problems' (các vấn đề về sức khỏe/bệnh tật) và từ 'severe' (nghiêm trọng) mà con người cần phòng tránh.",
          collocations: ["health problems", "heart problems", "solve problems"],
          additionalExample: "Lack of clean water causes major health problems in rural areas.",
          synonyms: ["issues", "troubles", "ailments"],
          antonyms: ["solutions"]
        }
      ],
      contextQuestions: [
        {
          id: "u4_cq1",
          targetWord: "balanced",
          quote: "Nutrition experts advise that eating a balanced diet with plenty of vegetables, fruits, and whole grains is vital for human growth.",
          question: "Tại sao chế độ ăn gồm rau, quả và ngũ cốc lại được gọi là 'balanced diet'?",
          options: [
            "Vì nó chứa đầy đủ và cân đối các nhóm chất dinh dưỡng cần thiết",
            "Vì nó rất ngọt và nhiều đường nhân tạo",
            "Vì nó chỉ bao gồm một loại thức ăn duy nhất",
            "Vì chỉ người giàu mới mua được những thực phẩm này"
          ],
          answer: 0,
          explanation: "'Balanced diet' là chế độ ăn cân bằng, phối hợp đa dạng nhiều nhóm dưỡng chất để cơ thể phát triển khỏe mạnh.",
          clueTip: "Mẹo liệt kê: Cụm 'vegetables, fruits, and whole grains' là bằng chứng cho sự cân bằng, đa dạng dưỡng chất."
        },
        {
          id: "u4_cq2",
          targetWord: "sufficient",
          quote: "Drinking sufficient clean water instead of sugary drinks keeps your organs functioning properly.",
          question: "Trong câu trên, từ 'sufficient' có nghĩa là:",
          options: [
            "Quá ít, không bao giờ đủ",
            "Đầy đủ, đúng lượng cần thiết",
            "Cực kỳ đắt đỏ",
            "Nóng rát và khó uống"
          ],
          answer: 1,
          explanation: "'Sufficient' tương đương với 'enough' (đủ lượng cần thiết cho cơ thể hoạt động).",
          clueTip: "Mẹo công dụng: Uống nước đủ để 'keeps your organs functioning properly' cho thấy đây là lượng nước vừa đủ chuẩn."
        },
        {
          id: "u4_cq3",
          targetWord: "exhaustion",
          quote: "Getting at least eight hours of rest enables your brain to recover from mental exhaustion.",
          question: "Từ 'exhaustion' diễn đạt trạng thái nào của con người?",
          options: [
            "Sự tràn đầy phấn khích và muốn đi nhảy múa",
            "Sự kiệt sức, mệt mỏi rã rời sau thời gian dài căng thẳng",
            "Cảm giác đói bụng muốn ăn kem",
            "Niềm tự hào vì nhận được học bổng"
          ],
          answer: 1,
          explanation: "'Exhaustion' có nghĩa là sự kiệt quệ, mệt mỏi tột cùng sau khi hoạt động trí não hay thể chất quá sức.",
          clueTip: "Mẹo đối lập phục hồi: Ta cần ngủ nghỉ ('rest') để hồi phục ('recover') khỏi sự kiệt sức ('exhaustion')."
        },
        {
          id: "u4_cq4",
          targetWord: "strengthen",
          quote: "...doing regular physical exercise helps strengthen your muscles and protects your heart.",
          question: "Hành động 'strengthen your muscles' mang lại tác động gì cho cơ bắp?",
          options: [
            "Làm cho cơ bắp yếu ớt và dễ chấn thương hơn",
            "Làm cho cơ bắp săn chắc, khỏe mạnh và dẻo dai hơn",
            "Làm teo nhỏ các thớ cơ",
            "Làm cơ bắp đổi màu tím"
          ],
          answer: 1,
          explanation: "Động từ 'strengthen' bắt nguồn từ 'strength' (sức mạnh), nghĩa là làm cho cơ bắp thêm khỏe mạnh.",
          clueTip: "Mẹo cấu tạo từ: Gốc từ 'strength' (sức mạnh) + '-en' (làm cho) = làm cho mạnh lên."
        }
      ],
      clozeExercises: [
        {
          sentence: "Skipping breakfast and sleeping only four hours is very _______ for your body.",
          targetWord: "unhealthy",
          hint: "Tính từ: không lành mạnh, có hại"
        },
        {
          sentence: "Doctors recommend eating a _______ meal containing protein, fiber, and vitamins.",
          targetWord: "balanced",
          hint: "Tính từ: cân đối dinh dưỡng"
        },
        {
          sentence: "Did you drink _______ water during your long basketball match this afternoon?",
          targetWord: "sufficient",
          hint: "Tính từ: đủ lượng cần thiết"
        },
        {
          sentence: "Doing _______ exercise for thirty minutes every day keeps your heart healthy.",
          targetWord: "regular",
          hint: "Tính từ: đều đặn, thường xuyên"
        },
        {
          sentence: "Lifting weights and doing push-ups will help _______ your arms and shoulders.",
          targetWord: "strengthen",
          hint: "Động từ: làm mạnh thêm, củng cố"
        },
        {
          sentence: "After a good night's sleep, your mind will fully _______ its energy.",
          targetWord: "recover",
          hint: "Động từ: hồi phục lại"
        },
        {
          sentence: "The nurse worked for twenty hours without a break and suffered from extreme _______.",
          targetWord: "exhaustion",
          hint: "Danh từ: sự kiệt sức"
        },
        {
          sentence: "Eating too much sweet candy can cause serious dental _______ for kids.",
          targetWord: "problems",
          hint: "Danh từ số nhiều: các vấn đề, rắc rối"
        }
      ],
      readingQuiz: [
        {
          question: "What causes many teenagers to feel tired and stressed?",
          options: [
            "Drinking too much pure milk in the morning",
            "Following an unhealthy daily routine",
            "Sleeping for twelve hours every weekend",
            "Walking in the green park with friends"
          ],
          answer: 1,
          explanation: "Câu đầu tiên nêu rõ: 'Many teenagers experience fatigue and stress because they follow an unhealthy daily routine'."
        },
        {
          question: "Which foods are mentioned as essential components of a balanced diet?",
          options: [
            "Vegetables, fruits, and whole grains",
            "Sugary sodas and deep-fried French fries",
            "Ice cream, candies, and packaged potato chips",
            "Coffee and energy drinks only"
          ],
          answer: 0,
          explanation: "Đoạn 1 viết: 'eating a balanced diet with plenty of vegetables, fruits, and whole grains is vital for human growth'."
        },
        {
          question: "What benefit does regular physical exercise provide?",
          options: [
            "It eliminates the need to sleep at night",
            "It strengthens muscles and protects the heart",
            "It replaces the need to drink water",
            "It makes people forget how to read"
          ],
          answer: 1,
          explanation: "Đoạn 2 nêu: 'doing regular physical exercise helps strengthen your muscles and protects your heart'."
        },
        {
          question: "How many hours of sleep are recommended for the brain to recover?",
          options: [
            "Only two to three hours",
            "Around five hours",
            "At least eight hours",
            "More than fourteen hours"
          ],
          answer: 2,
          explanation: "Đoạn 3 chỉ rõ: 'Getting at least eight hours of rest enables your brain to recover from mental exhaustion'."
        },
        {
          question: "What is the main message of the author?",
          options: [
            "Adulthood always brings dangerous diseases regardless of what we do",
            "Small positive health habits today can prevent severe problems later in life",
            "Teenagers should only eat meat and avoid all vegetables",
            "Exercise is completely useless without energy drinks"
          ],
          answer: 1,
          explanation: "Câu cuối nhấn mạnh: 'By making small improvements today, young people can easily avoid severe physical health problems in adulthood'."
        }
      ],
      matchPairs: [
        { word: "unhealthy", match: "Không lành mạnh, gây hại cho sức khỏe" },
        { word: "balanced", match: "Cân đối, hài hòa các nhóm chất dinh dưỡng" },
        { word: "sufficient", match: "Đủ số lượng hoặc mức độ cần thiết" },
        { word: "regular", match: "Đều đặn, thường xuyên theo chu kỳ" },
        { word: "strengthen", match: "Làm cho cơ bắp hoặc sức khỏe khỏe mạnh hơn" },
        { word: "recover", match: "Hồi phục lại sau cơn mệt mỏi hoặc ốm đau" },
        { word: "exhaustion", match: "Sự kiệt sức hoàn toàn về thể chất lẫn tinh thần" },
        { word: "problems", match: "Các vấn đề hay rắc rối về sức khỏe" }
      ]
    },

    {
      id: "unit-5",
      unitNumber: 5,
      title: "Homestay in a Peaceful Village",
      vietnameseTitle: "Trải nghiệm homestay tại ngôi làng bình yên",
      topic: "Travel, Culture & Exploration (Du lịch, Văn hóa & Khám phá)",
      level: "A2 (Waystage / Elementary)",
      readingTime: "3.5 phút đọc",
      wordCount: 170,
      summary: "Maya chia sẻ chuyến đi về vùng nông thôn để trải nghiệm phong tục cổ truyền, thưởng thức ẩm thực và cảm nhận lòng hiếu khách chân thành.",
      passageHtml: `
        <p>During the summer vacation, Maya decided to stay at an authentic homestay in a peaceful rural village. She was eager to experience local <span class="target-word" data-word-id="u5_customs">customs</span> that have been preserved for centuries.</p>
        <p>Her host family showed extraordinary <span class="target-word" data-word-id="u5_hospitality">hospitality</span>, treating her like their own daughter. Every morning, Maya cycled through the <span class="target-word" data-word-id="u5_scenic">scenic</span> valleys and photographed historical stone <span class="target-word" data-word-id="u5_monuments">monuments</span>. In the kitchen, the grandmother taught her how to cook regional dishes using freshly harvested garden <span class="target-word" data-word-id="u5_ingredients">ingredients</span>.</p>
        <p>This trip was a wonderful <span class="target-word" data-word-id="u5_opportunity">opportunity</span> for Maya to appreciate the nation's rich cultural <span class="target-word" data-word-id="u5_heritage">heritage</span>. Saying goodbye was emotional because she had created so many treasured <span class="target-word" data-word-id="u5_memories">memories</span> with the villagers.</p>
      `,
      paragraphs: [
        "During the summer vacation, Maya decided to stay at an authentic homestay in a peaceful rural village. She was eager to experience local customs that have been preserved for centuries.",
        "Her host family showed extraordinary hospitality, treating her like their own daughter. Every morning, Maya cycled through the scenic valleys and photographed historical stone monuments. In the kitchen, the grandmother taught her how to cook regional dishes using freshly harvested garden ingredients.",
        "This trip was a wonderful opportunity for Maya to appreciate the nation's rich cultural heritage. Saying goodbye was emotional because she had created so many treasured memories with the villagers."
      ],
      vocabulary: [
        {
          id: "u5_customs",
          word: "customs",
          ipa: "/ˈkʌs.təmz/",
          pos: "noun (plural)",
          posVi: "Danh từ số nhiều",
          vietnamese: "phong tục tập quán truyền thống",
          definition: "traditional and accepted ways of behaving or doing things in a specific society",
          contextQuote: "She was eager to experience local customs that have been preserved for centuries.",
          contextClue: "Mệnh đề 'that have been preserved for centuries' (đã được lưu giữ hàng thế kỷ) tại làng quê truyền thống.",
          collocations: ["local customs", "traditional customs", "follow customs"],
          additionalExample: "It is a Vietnamese custom to give lucky money to children during Tet.",
          synonyms: ["traditions", "practices", "rituals"],
          antonyms: []
        },
        {
          id: "u5_hospitality",
          word: "hospitality",
          ipa: "/ˌhɒs.pɪˈtæl.ə.ti/",
          pos: "noun",
          posVi: "Danh từ",
          vietnamese: "lòng hiếu khách, sự đón tiếp nồng hậu",
          definition: "friendly and generous treatment and entertainment of guests or strangers",
          contextQuote: "Her host family showed extraordinary hospitality, treating her like their own daughter.",
          contextClue: "Hành động của gia đình chủ nhà: 'treating her like their own daughter' (đối đãi như con gái ruột) thể hiện sự hiếu khách tuyệt vời.",
          collocations: ["warm hospitality", "show hospitality", "generous hospitality"],
          additionalExample: "We were deeply touched by the warm hospitality of the islanders.",
          synonyms: ["warmth", "kindness", "friendliness"],
          antonyms: ["hostility", "coldness"]
        },
        {
          id: "u5_scenic",
          word: "scenic",
          ipa: "/ˈsiː.nɪk/",
          pos: "adjective",
          posVi: "Tính từ",
          vietnamese: "đẹp như tranh vẽ (phong cảnh thiên nhiên)",
          definition: "having or showing beautiful natural scenery",
          contextQuote: "Every morning, Maya cycled through the scenic valleys and photographed...",
          contextClue: "Đứng trước danh từ 'valleys' (thung lũng) và đi kèm hành động đạp xe ngắm cảnh, chụp ảnh thiên nhiên đẹp.",
          collocations: ["scenic route", "scenic view", "scenic beauty"],
          additionalExample: "The train ride from Da Nang to Hue offers spectacular scenic views of the ocean.",
          synonyms: ["picturesque", "breathtaking", "beautiful"],
          antonyms: ["ugly", "unattractive"]
        },
        {
          id: "u5_monuments",
          word: "monuments",
          ipa: "/ˈmɒn.jə.mənts/",
          pos: "noun (plural)",
          posVi: "Danh từ số nhiều",
          vietnamese: "các di tích, công trình tưởng niệm lịch sử",
          definition: "structures built to honor a special person or event, or historic buildings",
          contextQuote: "...and photographed historical stone monuments.",
          contextClue: "Được bổ nghĩa bởi 'historical stone' (bằng đá, mang tính lịch sử) và là đối tượng để du khách chụp ảnh kỷ niệm.",
          collocations: ["historical monuments", "ancient monuments", "stone monuments"],
          additionalExample: "The ancient town has many preserved monuments dating back to the 17th century.",
          synonyms: ["memorials", "landmarks", "historic sites"],
          antonyms: []
        },
        {
          id: "u5_ingredients",
          word: "ingredients",
          ipa: "/ɪnˈɡriː.di.ənts/",
          pos: "noun (plural)",
          posVi: "Danh từ số nhiều",
          vietnamese: "nguyên liệu nấu ăn",
          definition: "food items or substances that are combined to make a particular dish",
          contextQuote: "...taught her how to cook regional dishes using freshly harvested garden ingredients.",
          contextClue: "Nằm trong ngữ cảnh 'in the kitchen' (trong bếp), 'cook regional dishes' (nấu món ăn địa phương) từ rau củ tươi hái ngoài vườn.",
          collocations: ["fresh ingredients", "key ingredients", "natural ingredients"],
          additionalExample: "The secret to this delicious noodle soup lies in its fresh ingredients.",
          synonyms: ["components", "food items"],
          antonyms: []
        },
        {
          id: "u5_opportunity",
          word: "opportunity",
          ipa: "/ˌɒp.əˈtjuː.nə.ti/",
          pos: "noun",
          posVi: "Danh từ",
          vietnamese: "cơ hội, dịp may",
          definition: "an occasion or situation that makes it possible to do something that you want to do",
          contextQuote: "This trip was a wonderful opportunity for Maya to appreciate the nation's rich cultural heritage.",
          contextClue: "Chuyến đi thực tế là thời điểm tuyệt vời ('wonderful opportunity') giúp Maya khám phá và mở rộng tầm hiểu biết.",
          collocations: ["great opportunity", "opportunity to learn", "seize an opportunity"],
          additionalExample: "Studying abroad provides a fantastic opportunity to practice English with native speakers.",
          synonyms: ["chance", "occasion", "opening"],
          antonyms: []
        },
        {
          id: "u5_heritage",
          word: "heritage",
          ipa: "/ˈher.ɪ.tɪdʒ/",
          pos: "noun",
          posVi: "Danh từ",
          vietnamese: "di sản văn hóa truyền thống",
          definition: "the history, traditions, practices, and buildings that a society has had for many years",
          contextQuote: "...to appreciate the nation's rich cultural heritage.",
          contextClue: "Đi kèm tính từ 'rich cultural' (văn hóa phong phú), đại diện cho các giá trị lịch sử lâu đời của một dân tộc.",
          collocations: ["cultural heritage", "national heritage", "preserve heritage"],
          additionalExample: "Hoi An Ancient Town is recognized as a UNESCO World Cultural Heritage site.",
          synonyms: ["legacy", "tradition", "culture"],
          antonyms: []
        },
        {
          id: "u5_memories",
          word: "memories",
          ipa: "/ˈmem.ər.iz/",
          pos: "noun (plural)",
          posVi: "Danh từ số nhiều",
          vietnamese: "những kỷ niệm đẹp đáng nhớ",
          definition: "something that you remember from the past, especially fond moments",
          contextQuote: "Saying goodbye was emotional because she had created so many treasured memories with the villagers.",
          contextClue: "Cụm 'treasured memories' (những kỷ niệm đáng quý) giải thích vì sao lúc chia tay lại xúc động nghẹn ngào ('emotional').",
          collocations: ["treasured memories", "fond memories", "unforgettable memories"],
          additionalExample: "We took hundreds of photos to keep our childhood memories alive forever.",
          synonyms: ["recollections", "souvenirs", "remembrances"],
          antonyms: []
        }
      ],
      contextQuestions: [
        {
          id: "u5_cq1",
          targetWord: "hospitality",
          quote: "Her host family showed extraordinary hospitality, treating her like their own daughter.",
          question: "Chi tiết 'treating her like their own daughter' (đối đãi như con gái ruột) giải thích cho đức tính nào?",
          options: [
            "Lòng hiếu khách, sự nồng ấm và hào phóng đối với khách (hospitality)",
            "Sự lười biếng và không thích làm việc nhà",
            "Tính cách hung dữ và khó tính",
            "Sự tằn tiện, không muốn nấu cơm cho khách ăn"
          ],
          answer: 0,
          explanation: "Đối xử với khách lạ như con cái trong nhà là biểu hiện cao đẹp nhất của lòng hiếu khách chân tình ('hospitality').",
          clueTip: "Mẹo so sánh: Coi như con cái trong nhà là biểu tượng của sự tiếp đón ấm cúng nhất."
        },
        {
          id: "u5_cq2",
          targetWord: "scenic",
          quote: "Every morning, Maya cycled through the scenic valleys and photographed historical stone monuments.",
          question: "Từ 'scenic' đứng trước 'valleys' (thung lũng) mô tả điều gì về cảnh quan nơi đây?",
          options: [
            "Phong cảnh ô nhiễm với đầy khói bụi nhà máy",
            "Cảnh quan thiên nhiên tươi đẹp, nên thơ như tranh vẽ",
            "Vùng đất khô cằn toàn sỏi đá",
            "Khu vực đông đúc toàn xe tải qua lại"
          ],
          answer: 1,
          explanation: "'Scenic' xuất phát từ 'scenery' (phong cảnh), mang nghĩa cảnh sắc thiên nhiên đẹp hữu tình.",
          clueTip: "Mẹo hành động: Người ta chỉ đạp xe chụp ảnh ở những nơi có phong cảnh hữu tình ('scenic')."
        },
        {
          id: "u5_cq3",
          targetWord: "ingredients",
          quote: "...taught her how to cook regional dishes using freshly harvested garden ingredients.",
          question: "Trong nhà bếp, các 'ingredients' tươi hái từ vườn dùng để nấu ăn là gì?",
          options: [
            "Các loại bát đĩa và xoong chảo bằng nhôm",
            "Các nguyên liệu thực phẩm (rau củ quả, gia vị tươi)",
            "Những cuốn sách hướng dẫn nấu ăn bằng tiếng Pháp",
            "Những bếp ga và bếp từ hiện đại"
          ],
          answer: 1,
          explanation: "Từ 'ingredients' chỉ các nguyên liệu tạo nên món ăn (như rau, củ, thảo mộc tươi hái ngoài vườn).",
          clueTip: "Mẹo danh từ ẩm thực: 'cook dishes using freshly harvested garden ingredients' chứng minh đây là thành phần thực phẩm."
        },
        {
          id: "u5_cq4",
          targetWord: "heritage",
          quote: "This trip was a wonderful opportunity for Maya to appreciate the nation's rich cultural heritage.",
          question: "Cụm từ 'cultural heritage' có nghĩa là:",
          options: [
            "Tài sản vàng bạc cất giấu trong ngân hàng",
            "Di sản văn hóa truyền thống quý giá của quốc gia",
            "Thời tiết mưa bão thất thường ở miền biển",
            "Những đồ nhựa dùng một lần"
          ],
          answer: 1,
          explanation: "'Cultural heritage' là thuật ngữ chỉ toàn bộ di sản văn hóa, phong tục, nghệ thuật do tiền nhân để lại.",
          clueTip: "Mẹo cụm danh từ cố định: 'cultural heritage' là collocation chuẩn mực về di sản văn hóa."
        }
      ],
      clozeExercises: [
        {
          sentence: "Every country has its own unique wedding _______ and celebration rituals.",
          targetWord: "customs",
          hint: "Danh từ số nhiều: phong tục tập quán"
        },
        {
          sentence: "The local villagers welcomed us with open arms and generous _______.",
          targetWord: "hospitality",
          hint: "Danh từ: lòng hiếu khách"
        },
        {
          sentence: "We stopped the car on the hilltop to admire the _______ mountain landscape.",
          targetWord: "scenic",
          hint: "Tính từ: đẹp như tranh vẽ"
        },
        {
          sentence: "Tourists gathered around the ancient stone _______ to read the historical inscription.",
          targetWord: "monuments",
          hint: "Danh từ số nhiều: các di tích lịch sử"
        },
        {
          sentence: "You only need five simple _______ to bake this delicious banana cake.",
          targetWord: "ingredients",
          hint: "Danh từ số nhiều: các nguyên liệu nấu ăn"
        },
        {
          sentence: "Winning this competition will give her the _______ to study at a top university.",
          targetWord: "opportunity",
          hint: "Danh từ: cơ hội, dịp tốt"
        },
        {
          sentence: "Young generations should learn to respect and protect their national cultural _______.",
          targetWord: "heritage",
          hint: "Danh từ: di sản văn hóa"
        },
        {
          sentence: "Our summer trip to Da Lat left us with hundreds of joyful _______.",
          targetWord: "memories",
          hint: "Danh từ số nhiều: những kỷ niệm đáng nhớ"
        }
      ],
      readingQuiz: [
        {
          question: "Where did Maya stay during her summer vacation?",
          options: [
            "At a luxury five-star hotel in a crowded metropolis",
            "At an authentic homestay in a quiet countryside village",
            "At a camping tent near an industrial factory",
            "At her school dormitory in the capital"
          ],
          answer: 1,
          explanation: "Đoạn 1 nêu rõ: 'stay at an authentic homestay in a peaceful rural village'."
        },
        {
          question: "How did the host family treat Maya during her homestay?",
          options: [
            "They charged her extra money for every glass of water",
            "They showed extraordinary hospitality and treated her like their daughter",
            "They asked her to work in the field all day without food",
            "They did not talk to her at all"
          ],
          answer: 1,
          explanation: "Đoạn 2 nêu: 'showed extraordinary hospitality, treating her like their own daughter'."
        },
        {
          question: "What did the grandmother teach Maya to do in the kitchen?",
          options: [
            "How to repair broken electrical appliances",
            "How to cook local traditional dishes with fresh ingredients",
            "How to sell vegetables online to tourists",
            "How to wash dishes with disposable paper towels"
          ],
          answer: 1,
          explanation: "Đoạn 2 kể: 'the grandmother taught her how to cook regional dishes using freshly harvested garden ingredients'."
        },
        {
          question: "Why was saying goodbye to the villagers an emotional moment?",
          options: [
            "Because she missed her flight home",
            "Because she had built warm and treasured memories with them",
            "Because she lost her camera in the valley",
            "Because the village ran out of food"
          ],
          answer: 1,
          explanation: "Đoạn 3 kết luận: 'Saying goodbye was emotional because she had created so many treasured memories with the villagers'."
        },
        {
          question: "What was the greatest benefit of the trip for Maya?",
          options: [
            "She bought expensive modern clothes",
            "She had the chance to understand and appreciate rich cultural heritage",
            "She learned how to play video games faster",
            "She avoided doing her school homework forever"
          ],
          answer: 1,
          explanation: "Đoạn 3 khẳng định: 'This trip was a wonderful opportunity for Maya to appreciate the nation's rich cultural heritage'."
        }
      ],
      matchPairs: [
        { word: "customs", match: "Phong tục tập quán truyền thống lâu đời" },
        { word: "hospitality", match: "Lòng hiếu khách và sự tiếp đãi ấm áp" },
        { word: "scenic", match: "Cảnh đẹp tự nhiên nên thơ như tranh" },
        { word: "monuments", match: "Các công trình di tích lịch sử bằng đá" },
        { word: "ingredients", match: "Các nguyên liệu tươi dùng để nấu món ăn" },
        { word: "opportunity", match: "Cơ hội tốt đẹp mở ra trước mắt" },
        { word: "heritage", match: "Di sản văn hóa do cha ông truyền lại" },
        { word: "memories", match: "Những kỷ niệm đẹp khó phai mờ" }
      ]
    },

    {
      id: "unit-6",
      unitNumber: 6,
      title: "From a Creative Hobby to a Career",
      vietnameseTitle: "Từ niềm đam mê sở thích đến con đường sự nghiệp",
      topic: "Work, Hobbies & Future Career (Công việc, Sở thích & Tương lai)",
      level: "A2 (Waystage / Elementary)",
      readingTime: "3.5 phút đọc",
      wordCount: 178,
      summary: "Câu chuyện của Mark về cách biến sở thích chụp ảnh thành một studio thành công nhờ sự kiên trì, nỗ lực và tự tin theo đuổi ước mơ.",
      passageHtml: `
        <p>Ever since he was a middle school student, Mark had a genuine passion for photography. Instead of playing computer games, he spent hours studying lighting and camera <span class="target-word" data-word-id="u6_technique">technique</span> through free video tutorials.</p>
        <p>Last year, his teacher encouraged him to enter a prestigious national photo <span class="target-word" data-word-id="u6_competition">competition</span>. Winning second prize gave Mark enormous <span class="target-word" data-word-id="u6_confidence">confidence</span>. He realized that talent alone was not enough; sustained personal <span class="target-word" data-word-id="u6_effort">effort</span> was the true key to achieve <span class="target-word" data-word-id="u6_success">success</span>.</p>
        <p>Today, Mark runs his own creative studio and receives numerous commercial <span class="target-word" data-word-id="u6_requests">requests</span> from local brands. His advice to high school students is clear: pursue your authentic dreams with unwavering <span class="target-word" data-word-id="u6_determination">determination</span> and endless <span class="target-word" data-word-id="u6_patience">patience</span>.</p>
      `,
      paragraphs: [
        "Ever since he was a middle school student, Mark had a genuine passion for photography. Instead of playing computer games, he spent hours studying lighting and camera technique through free video tutorials.",
        "Last year, his teacher encouraged him to enter a prestigious national photo competition. Winning second prize gave Mark enormous confidence. He realized that talent alone was not enough; sustained personal effort was the true key to achieve success.",
        "Today, Mark runs his own creative studio and receives numerous commercial requests from local brands. His advice to high school students is clear: pursue your authentic dreams with unwavering determination and endless patience."
      ],
      vocabulary: [
        {
          id: "u6_technique",
          word: "technique",
          ipa: "/tekˈniːk/",
          pos: "noun",
          posVi: "Danh từ",
          vietnamese: "kỹ thuật, phương pháp thực hành chuyên môn",
          definition: "a particular way of doing something, especially one that you have to learn or practice",
          contextQuote: "...he spent hours studying lighting and camera technique through free video tutorials.",
          contextClue: "Đi kèm từ 'lighting' (ánh sáng) và 'camera' (máy ảnh) khi học nhiếp ảnh để chụp hình đẹp.",
          collocations: ["camera technique", "study technique", "improve technique"],
          additionalExample: "The pianist practiced daily to refine her finger technique on complex songs.",
          synonyms: ["method", "skill", "approach"],
          antonyms: []
        },
        {
          id: "u6_competition",
          word: "competition",
          ipa: "/ˌkɒm.pəˈtɪʃ.ən/",
          pos: "noun",
          posVi: "Danh từ",
          vietnamese: "cuộc thi, cuộc tranh tài",
          definition: "an organized event in which people compete against each other to win prizes",
          contextQuote: "Last year, his teacher encouraged him to enter a prestigious national photo competition.",
          contextClue: "Có từ 'enter' (tham gia) và 'winning second prize' (đoạt giải nhì), chứng minh đây là một cuộc thi chính thức.",
          collocations: ["enter a competition", "win a competition", "music competition"],
          additionalExample: "More than three hundred students entered the annual English speaking competition.",
          synonyms: ["contest", "tournament", "championship"],
          antonyms: []
        },
        {
          id: "u6_confidence",
          word: "confidence",
          ipa: "/ˈkɒn.fɪ.dəns/",
          pos: "noun",
          posVi: "Danh từ",
          vietnamese: "sự tự tin, niềm tin vào năng lực bản thân",
          definition: "the feeling or belief that you can do things well and succeed",
          contextQuote: "Winning second prize gave Mark enormous confidence.",
          contextClue: "Sau khi đoạt giải cao trong cuộc thi quốc gia, Mark không còn rụt rè mà có niềm tin mạnh mẽ ('enormous confidence') để mở studio riêng.",
          collocations: ["gain confidence", "have confidence", "boost confidence"],
          additionalExample: "Practicing your presentation in front of a mirror builds great self-confidence.",
          synonyms: ["self-assurance", "belief", "courage"],
          antonyms: ["insecurity", "doubt", "hesitation"]
        },
        {
          id: "u6_effort",
          word: "effort",
          ipa: "/ˈef.ət/",
          pos: "noun",
          posVi: "Danh từ",
          vietnamese: "sự nỗ lực, cố gắng chăm chỉ",
          definition: "physical or mental energy needed to do or accomplish something",
          contextQuote: "He realized that talent alone was not enough; sustained personal effort was the true key...",
          contextClue: "Đối lập với 'talent alone' (chỉ có tài năng đơn thuần). Muốn thành công phải bỏ ra công sức rèn luyện bền bỉ ('sustained personal effort').",
          collocations: ["make an effort", "put effort into", "sustained effort"],
          additionalExample: "She put a lot of effort into preparing for her final chemistry exam.",
          synonyms: ["hard work", "struggle", "attempt"],
          antonyms: ["laziness", "inactivity"]
        },
        {
          id: "u6_success",
          word: "success",
          ipa: "/səkˈses/",
          pos: "noun",
          posVi: "Danh từ",
          vietnamese: "sự thành công, thắng lợi",
          definition: "the achieving of the results that you want, hope for, or worked for",
          contextQuote: "...sustained personal effort was the true key to achieve success.",
          contextClue: "Đi với động từ 'achieve' (đạt được) sau khi không ngừng nỗ lực và giành giải thưởng.",
          collocations: ["achieve success", "great success", "key to success"],
          additionalExample: "Hard work and resilience are the most reliable formulas for lasting success.",
          synonyms: ["victory", "triumph", "achievement"],
          antonyms: ["failure", "defeat"]
        },
        {
          id: "u6_requests",
          word: "requests",
          ipa: "/rɪˈkwests/",
          pos: "noun (plural)",
          posVi: "Danh từ số nhiều",
          vietnamese: "những lời yêu cầu, đơn đặt hàng dịch vụ",
          definition: "acts of asking for something politely, or business orders for work",
          contextQuote: "Today, Mark runs his own creative studio and receives numerous commercial requests from local brands.",
          contextClue: "Khi mở studio kinh doanh, Mark nhận được nhiều 'commercial requests' (đơn đặt hàng chụp ảnh thương mại) từ các nhãn hàng.",
          collocations: ["commercial requests", "receive a request", "upon request"],
          additionalExample: "The design agency received dozens of requests to create company logos this week.",
          synonyms: ["orders", "demands", "inquiries"],
          antonyms: []
        },
        {
          id: "u6_determination",
          word: "determination",
          ipa: "/dɪˌtɜː.mɪˈneɪ.ʃən/",
          pos: "noun",
          posVi: "Danh từ",
          vietnamese: "sự quyết tâm, ý chí kiên định không bỏ cuộc",
          definition: "the ability to continue trying to do something, even if it is very difficult",
          contextQuote: "...pursue your authentic dreams with unwavering determination and endless patience.",
          contextClue: "Đi kèm tính từ 'unwavering' (kiên định, không lay chuyển) để theo đuổi ước mơ vượt qua mọi thử thách.",
          collocations: ["show determination", "strong determination", "unwavering determination"],
          additionalExample: "With great determination, she overcame her injury and returned to track and field.",
          synonyms: ["persistence", "willpower", "resolve"],
          antonyms: ["indecision", "weakness"]
        },
        {
          id: "u6_patience",
          word: "patience",
          ipa: "/ˈpeɪ.ʃəns/",
          pos: "noun",
          posVi: "Danh từ",
          vietnamese: "sự kiên nhẫn, tính nhẫn nại",
          definition: "the ability to wait, or to continue doing something calmly without getting angry",
          contextQuote: "...with unwavering determination and endless patience.",
          contextClue: "Muốn từ sở thích nhỏ trở thành studio chuyên nghiệp cần nhiều năm rèn luyện, đòi hỏi lòng kiên nhẫn vô tận ('endless patience').",
          collocations: ["have patience", "require patience", "endless patience"],
          additionalExample: "Learning to play the violin requires immense patience and daily practice.",
          synonyms: ["endurance", "tolerance", "calmness"],
          antonyms: ["impatience", "irritation"]
        }
      ],
      contextQuestions: [
        {
          id: "u6_cq1",
          targetWord: "confidence",
          quote: "Winning second prize gave Mark enormous confidence.",
          question: "Việc đoạt giải nhì trong cuộc thi nhiếp ảnh quốc gia đã mang lại cho Mark điều gì?",
          options: [
            "Sự sợ hãi không dám cầm máy ảnh nữa",
            "Niềm tự tin lớn lao vào năng lực của bản thân để mở studio",
            "Sự tức giận vì không đoạt được giải nhất",
            "Cảm giác chán nản muốn từ bỏ nhiếp ảnh"
          ],
          answer: 1,
          explanation: "Đoạt giải nhì cuộc thi toàn quốc là sự công nhận lớn giúp Mark củng cố niềm tự tin ('confidence') vào tay nghề của mình.",
          clueTip: "Mẹo nguyên nhân - kết quả: Đoạt giải thưởng danh giá -> mang lại niềm tự tin lớn lao."
        },
        {
          id: "u6_cq2",
          targetWord: "technique",
          quote: "...he spent hours studying lighting and camera technique through free video tutorials.",
          question: "Trong câu trên, từ 'technique' kết hợp với 'lighting and camera' mang nghĩa:",
          options: [
            "Các phương pháp và kỹ thuật chuyên môn về góc máy và ánh sáng",
            "Giá tiền của một chiếc máy ảnh mới trên thị trường",
            "Cách sửa chữa dây điện bị đứt trong phòng ngủ",
            "Trò chơi điện tử trên mạng Internet"
          ],
          answer: 0,
          explanation: "'Camera technique' là kỹ thuật điều chỉnh máy ảnh và ánh sáng để tạo ra bức hình chuẩn nét.",
          clueTip: "Mẹo kết hợp từ: 'lighting and camera technique' là cụm chuyên ngành về kỹ thuật nhiếp ảnh."
        },
        {
          id: "u6_cq3",
          targetWord: "effort",
          quote: "He realized that talent alone was not enough; sustained personal effort was the true key to achieve success.",
          question: "Tác giả chỉ ra yếu tố quan trọng bên cạnh tài năng ('talent') để thành công là:",
          options: [
            "Sự may mắn trúng số",
            "Sự nỗ lực và cố gắng chăm chỉ không ngừng nghỉ ('effort')",
            "Việc mua máy móc thiết bị đắt tiền nhất",
            "Việc nghỉ học sớm để đi làm"
          ],
          answer: 1,
          explanation: "Tác giả nhấn mạnh: tài năng thôi là chưa đủ mà cần có nỗ lực cá nhân bền bỉ ('sustained personal effort').",
          clueTip: "Mẹo dấu chấm phẩy đối chiếu: Vế sau 'talent was not enough' là giải pháp thực sự: 'personal effort'."
        },
        {
          id: "u6_cq4",
          targetWord: "requests",
          quote: "Today, Mark runs his own creative studio and receives numerous commercial requests from local brands.",
          question: "Các nhãn hàng ('local brands') gửi 'commercial requests' đến studio của Mark là nhằm mục đích gì?",
          options: [
            "Yêu cầu Mark ngừng chụp ảnh",
            "Đặt hàng và yêu cầu dịch vụ chụp ảnh quảng cáo sản phẩm",
            "Kiện Mark vì vi phạm bản quyền",
            "Mượn tiền từ studio của Mark"
          ],
          answer: 1,
          explanation: "Trong kinh doanh studio, 'commercial requests' là những đơn đặt hàng, đề nghị thuê dịch vụ chụp ảnh cho nhãn hàng.",
          clueTip: "Mẹo môi trường kinh doanh: Khách hàng và đối tác gửi 'requests' tức là đặt hàng dịch vụ."
        }
      ],
      clozeExercises: [
        {
          sentence: "You can improve your swimming _______ by practicing breathing exercises every day.",
          targetWord: "technique",
          hint: "Danh từ: kỹ thuật, phương pháp"
        },
        {
          sentence: "She won a gold medal in the city mathematics _______ last weekend.",
          targetWord: "competition",
          hint: "Danh từ: cuộc thi, hội thi"
        },
        {
          sentence: "Speaking in public will help you build your self-_______ step by step.",
          targetWord: "confidence",
          hint: "Danh từ: sự tự tin"
        },
        {
          sentence: "If you put enough time and _______ into learning vocabulary, you will see rapid progress.",
          targetWord: "effort",
          hint: "Danh từ: sự nỗ lực, cố gắng"
        },
        {
          sentence: "Patience and hard work are the two most valuable keys to ultimate _______.",
          targetWord: "success",
          hint: "Danh từ: sự thành công"
        },
        {
          sentence: "The customer service hotline handles over one hundred client _______ every hour.",
          targetWord: "requests",
          hint: "Danh từ số nhiều: lời yêu cầu, đơn hàng"
        },
        {
          sentence: "Despite facing many financial difficulties, his _______ to finish university never faded.",
          targetWord: "determination",
          hint: "Danh từ: sự quyết tâm cao độ"
        },
        {
          sentence: "Teaching small children requires an endless supply of love and _______.",
          targetWord: "patience",
          hint: "Danh từ: lòng kiên nhẫn"
        }
      ],
      readingQuiz: [
        {
          question: "What hobby did Mark have since he was a middle school student?",
          options: [
            "Playing competitive online computer games",
            "Studying camera and photography techniques",
            "Collecting foreign stamps and coins",
            "Cooking sweet bakery products"
          ],
          answer: 1,
          explanation: "Đoạn 1 nêu: 'Ever since he was a middle school student, Mark had a genuine passion for photography... studying lighting and camera technique'."
        },
        {
          question: "What turning point gave Mark the confidence to start his studio?",
          options: [
            "Winning second prize in a prestigious national photo competition",
            "Receiving an expensive camera as a birthday gift from his uncle",
            "Dropping out of high school to travel around the world",
            "Working as a waiter in a local restaurant"
          ],
          answer: 0,
          explanation: "Đoạn 2 nêu rõ: 'Winning second prize gave Mark enormous confidence'."
        },
        {
          question: "According to Mark, what is the true key to achieve success?",
          options: [
            "Having rich parents who buy luxury gadgets",
            "Relying on natural talent without practicing",
            "Sustained personal effort and hard work",
            "Following what everyone else does on social media"
          ],
          answer: 2,
          explanation: "Đoạn 2 chỉ ra: 'talent alone was not enough; sustained personal effort was the true key to achieve success'."
        },
        {
          question: "What does Mark's creative studio do today?",
          options: [
            "It repairs broken computers and mobile screens",
            "It receives commercial photography requests from local brands",
            "It sells imported photo frames online",
            "It trains students for football competitions"
          ],
          answer: 1,
          explanation: "Đoạn 3 kể: 'Today, Mark runs his own creative studio and receives numerous commercial requests from local brands'."
        },
        {
          question: "What final advice does Mark give to young students?",
          options: [
            "Give up hobbies immediately if they do not make money in a week",
            "Pursue their authentic dreams with determination and patience",
            "Only focus on playing games during school holidays",
            "Wait until retirement to think about their future career"
          ],
          answer: 1,
          explanation: "Đoạn 3 kết luận: 'pursue your authentic dreams with unwavering determination and endless patience'."
        }
      ],
      matchPairs: [
        { word: "technique", match: "Kỹ thuật chuyên môn và phương pháp thực hiện" },
        { word: "competition", match: "Cuộc thi tài chính thức có trao giải" },
        { word: "confidence", match: "Sự tự tin vào tài năng của bản thân" },
        { word: "effort", match: "Công sức và sự nỗ lực kiên trì" },
        { word: "success", match: "Sự thành công và thành quả tốt đẹp" },
        { word: "requests", match: "Những đơn đặt hàng và yêu cầu dịch vụ" },
        { word: "determination", match: "Ý chí quyết tâm kiên định không lùi bước" },
        { word: "patience", match: "Lòng kiên nhẫn và sự nhẫn nại bền bỉ" }
      ]
    }
  ]
};
