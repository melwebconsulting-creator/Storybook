/**
 * English Adventure - Interactive Storybook & Learning Engine
 * 10 Complete Original English Stories, Simplified Chinese Translations,
 * 80+ Graded Vocabulary Items with TTS Pronunciation,
 * 50 Interactive Quiz Questions, and LocalStorage Gamification.
 */

(function () {
  'use strict';

  // --- 1. THE 10 COMPLETE STORIES DATASET ---
  const STORIES = [
    {
      id: 1,
      title: "A New Student in London",
      titleCn: "伦敦的新生",
      level: "Beginner",
      levelCn: "初级",
      readTime: "3 min read",
      image: "/src/assets/images/story_london_student_1793593510936.jpg",
      fallbackIcon: "🇬🇧",
      summary: "Leo leaves his hometown to study English in London. With his backpack and notebook, he discovers the city and makes his first friend.",
      summaryCn: "Leo离开家乡前往伦敦学习英语。背着双肩包和笔记本，他探索了这座城市，并结识了第一位好友。",
      paragraphs: [
        {
          en: "Leo stood at the airport in London with his heavy blue suitcase and a warm wool scarf. Outside, the morning sky was overcast, but the city was full of energy. Double-decker red buses rumbled past Victorian brick buildings.",
          cn: "Leo提着沉重的蓝色行李箱，围着一条暖和的羊毛围巾，站在伦敦机场外。虽然清晨的天空有些阴霾，但整座城市活力四射。红色双层巴士轰鸣着驶过维多利亚时期的红砖建筑。"
        },
        {
          en: "He felt both excited and slightly nervous. This was his first time traveling abroad alone. His dream was to improve his English and become a confident international journalist.",
          cn: "他既兴奋又有些紧张。这是他第一次独自出国旅行。他的梦想是提高英语水平，成为一名自信的国际记者。"
        },
        {
          en: "At the underground station, Leo struggled to find the right platform. A friendly university student named Oliver noticed his confusion and smiled warmly.",
          cn: "在地铁站里，Leo一时找不到正确的站台。一位名叫Oliver的热心大学生注意到了他的困惑，温暖地对他微笑。"
        },
        {
          en: "\"Need a hand?\" Oliver asked in clear, gentle British English. \"Are you heading toward central London?\"",
          cn: "“需要帮忙吗？”Oliver用清晰温和的英式英语问道，“你要去伦敦市中心吗？”"
        },
        {
          en: "\"Yes, please! I am trying to reach the language institute,\" Leo replied, practicing the polite phrases he had memorized on the plane.",
          cn: "“是的，太感谢了！我想去语言学院。”Leo回答道，用上了在飞机上温习的礼貌表达。"
        },
        {
          en: "Oliver guided him onto the Piccadilly Line train. During the thirty-minute journey, they shared stories about their hometowns and favorite books. Leo realized that speaking English was not about making zero mistakes; it was about genuine human connection.",
          cn: "Oliver带着他登上了皮卡迪利线地铁。在三十分钟的旅途中，他们分享了各自家乡的故事与喜爱的书籍。Leo意识到，说英语并不在于犯零错误，而在于人与人之间真诚的心灵连接。"
        }
      ],
      vocabulary: [
        { word: "suitcase", phonetic: "/ˈsuːtkeɪs/", cn: "行李箱", exampleEn: "Leo packed his warm clothes into a blue suitcase.", exampleCn: "Leo把暖和的衣服装进蓝色行李箱里。", explanationCn: "名词，常指旅行时装衣物用品的手提行李箱。" },
        { word: "nervous", phonetic: "/ˈnɜːrvəs/", cn: "紧张的，担忧的", exampleEn: "He felt nervous before speaking in front of the class.", exampleCn: "他在全班面前讲话前感到很紧张。", explanationCn: "形容词，表示对未发生的事情感到不安或忐忑。" },
        { word: "abroad", phonetic: "/əˈbrɔːd/", cn: "在国外，到海外", exampleEn: "Many students dream of studying abroad to see the world.", exampleCn: "许多学生梦想出国留学去见识世界。", explanationCn: "副词，表示在外国或去往国外。" },
        { word: "journalist", phonetic: "/ˈdʒɜːrnəlɪst/", cn: "记者，新闻工作者", exampleEn: "A good journalist asks thoughtful questions and seeks truth.", exampleCn: "优秀的记者会提出深刻的问题并探求真相。", explanationCn: "名词，从事新闻报道或写作的专业人员。" },
        { word: "platform", phonetic: "/ˈplætfɔːrm/", cn: "站台，月台", exampleEn: "The train for London will depart from platform four.", exampleCn: "开往伦敦的火车将从四号站台发车。", explanationCn: "名词，火车站或地铁站供乘客上下车的平面台。" },
        { word: "confusion", phonetic: "/kənˈfjuːʒn/", cn: "困惑，不知所措", exampleEn: "He looked around in confusion because the map was upside down.", exampleCn: "他困惑地环顾四周，因为地图拿倒了。", explanationCn: "名词，无法理解或辨明方向时的迷惘状态。" },
        { word: "institute", phonetic: "/ˈɪnstɪtuːt/", cn: "学院，研究所", exampleEn: "The language institute offers daily conversation practice.", exampleCn: "该语言学院提供每日口语对话练习。", explanationCn: "名词，专门从事学术、教育或研究的机构。" },
        { word: "connection", phonetic: "/kəˈnekʃn/", cn: "联系，人际纽带", exampleEn: "Language is the most powerful bridge for human connection.", exampleCn: "语言是人与人之间心灵连接最有力的桥梁。", explanationCn: "名词，指事物或人际之间的关联与纽带。" }
      ],
      quiz: [
        {
          type: "multiple_choice",
          question: "Why did Leo travel to London?",
          questionCn: "Leo为什么前往伦敦？",
          options: ["To study English at a language institute", "To visit his family for vacation", "To buy a new red double-decker bus", "To work as an airport security guard"],
          answer: 0,
          explanationEn: "Leo traveled to London to improve his English at the language institute and pursue his dream of becoming a journalist.",
          explanationCn: "Leo前往伦敦是为了在语言学院提高英语水平，追求成为记者的梦想。"
        },
        {
          type: "true_false",
          question: "Oliver was rude and refused to help Leo at the station.",
          questionCn: "判断题：Oliver很粗鲁并且拒绝在车站帮助Leo。",
          options: ["True 正确", "False 错误"],
          answer: 1,
          explanationEn: "Oliver was friendly and warmly guided Leo onto the Piccadilly Line train.",
          explanationCn: "Oliver非常热情友好，并热心引导Leo登上了皮卡迪利线地铁。"
        },
        {
          type: "fill_blank",
          question: "Leo carried a heavy blue ________ filled with warm clothes.",
          questionCn: "填空题：Leo提着一个装满保暖衣物的厚重蓝色________。",
          answer: "suitcase",
          explanationEn: "The correct word is 'suitcase' (行李箱).",
          explanationCn: "正确填入词汇是 'suitcase'（行李箱）。"
        },
        {
          type: "comprehension",
          question: "What important lesson did Leo realize during the train journey?",
          questionCn: "在火车旅程中，Leo领悟到了什么重要道理？",
          options: [
            "Speaking English is about genuine human connection, not zero mistakes",
            "London underground tickets are always free for travelers",
            "You must never speak to strangers at an airport",
            "Journalists must always carry two wool scarves"
          ],
          answer: 0,
          explanationEn: "Leo realized language is primarily a tool for heartfelt communication and connection.",
          explanationCn: "Leo意识到语言交流的核心在于真诚连接彼此，而不是苛求毫无错误。"
        },
        {
          type: "multiple_choice",
          question: "Which underground line did Leo and Oliver take?",
          questionCn: "Leo和Oliver搭乘了哪条地铁线？",
          options: ["Central Line", "Piccadilly Line", "Jubilee Line", "Victoria Line"],
          answer: 1,
          explanationEn: "The text clearly states Oliver guided him onto the Piccadilly Line train.",
          explanationCn: "文中明确提到Oliver引导他搭乘了皮卡迪利线（Piccadilly Line）。"
        }
      ]
    },
    {
      id: 2,
      title: "My First Day at School",
      titleCn: "开学第一天",
      level: "Beginner",
      levelCn: "初级",
      readTime: "3 min read",
      image: "/src/assets/images/story_enchanted_journey_1793593511774.jpg",
      fallbackIcon: "🏫",
      summary: "Mia attends her new international school. Though timid at first, an inviting classroom and a creative drawing task make her feel right at home.",
      summaryCn: "Mia来到新转入的国际学校。虽然一开始害羞怯懦，但温馨的教室与一堂生动的手绘课让她迅速找到了归属感。",
      paragraphs: [
        {
          en: "The morning bell rang loudly across the school courtyard. Mia tightened the straps of her new backpack and took a deep breath. It was her very first day at Oakridge International Academy.",
          cn: "清脆的晨钟在校园庭院中回荡。Mia收紧了新书包的肩带，深吸了一口气。这是她在橡树岭国际学校的第一天。"
        },
        {
          en: "Walking through the hallway, Mia saw colorful lockers decorated with art posters and flags from all over the world. Students were greeting each other happily after the summer holiday.",
          cn: "走在走廊里，Mia看见五彩缤纷的储物柜上贴满了艺术海报和来自世界各地的国旗。同学们正在暑假后开心地互致问候。"
        },
        {
          en: "Her homeroom teacher, Mr. Davis, greeted her at the door with a bright smile. \"Welcome, Mia! We have been looking forward to meeting you. Your seat is right beside Lucas.\"",
          cn: "她的班主任Davis老师在门口面带灿烂微笑迎接她：“欢迎你，Mia！我们一直期待与你相遇。你的座位就在Lucas旁边。”"
        },
        {
          en: "Lucas was a friendly boy with glasses who immediately shared his colored pencils. \"Don't worry if you feel shy,\" he whispered kindly. \"We are all friends here.\"",
          cn: "Lucas是一个戴眼镜的友善男孩，他立刻与Mia分享了自己的彩色铅笔。“别担心害羞，”他亲切地轻声说道，“在这里我们都是好朋友。”"
        },
        {
          en: "During English class, Mr. Davis asked each student to draw their favorite hobby and describe it in three sentences. Mia drew a magnificent bamboo forest with a giant panda eating fresh leaves.",
          cn: "在英语课上，Davis老师让每个同学画出自己最喜欢的爱好，并用三个英文句子进行描述。Mia画了一片壮丽的竹林，里面有一只大熊猫正在享用新鲜的竹叶。"
        },
        {
          en: "When Mia presented her drawing to the class, everyone clapped with admiration. She felt the knot of anxiety in her stomach melt away. She knew this school year was going to be an unforgettable adventure.",
          cn: "当Mia向全班展示她的画作时，大家齐声赞叹鼓掌。她感到心中的焦虑瞬间消散。她确信，这个学年注定将是一场难忘的冒险。"
        }
      ],
      vocabulary: [
        { word: "courtyard", phonetic: "/ˈkɔːrtjɑːrd/", cn: "庭院，天井", exampleEn: "Students gathered in the courtyard to eat lunch together.", exampleCn: "学生们聚集在庭院里一起吃午餐。", explanationCn: "名词，建筑物围成的露天场地或庭院。" },
        { word: "hallway", phonetic: "/ˈhɔːlweɪ/", cn: "走廊，过道", exampleEn: "Lockers line both sides of the school hallway.", exampleCn: "学校走廊的两侧整齐排列着储物柜。", explanationCn: "名词，连接房间的走廊通道。" },
        { word: "homeroom", phonetic: "/ˈhoʊmruːm/", cn: "班级教室，原班", exampleEn: "Attendance is taken every morning in the homeroom.", exampleCn: "每天早晨都会在班级教室点名考勤。", explanationCn: "名词，学生每日晨会或指定归属的班级教室。" },
        { word: "whisper", phonetic: "/ˈwɪspər/", cn: "耳语，低语", exampleEn: "She whispered the secret so nobody else could hear.", exampleCn: "她低声耳语，不让其他人听见。", explanationCn: "动词/名词，用极轻的声音低声耳语。" },
        { word: "magnificent", phonetic: "/mæɡˈnɪfɪsnt/", cn: "壮丽的，宏伟的", exampleEn: "The sunset over the mountain was truly magnificent.", exampleCn: "群山之上的落日景象真是宏伟壮丽。", explanationCn: "形容词，形容令人惊叹的美好或壮观景象。" },
        { word: "admiration", phonetic: "/ˌædməˈreɪʃn/", cn: "钦佩，赞赏", exampleEn: "Her classmates clapped in genuine admiration of her talent.", exampleCn: "同学们发自内心地为她的才华鼓掌钦佩。", explanationCn: "名词，对他人优秀品质或成果的敬赏与赞叹。" },
        { word: "anxiety", phonetic: "/æŋˈzaɪəti/", cn: "焦虑，不安", exampleEn: "Deep breathing helps reduce feelings of exam anxiety.", exampleCn: "深呼吸有助于减轻考试带来的焦虑感。", explanationCn: "名词，由于担心或害怕引起的精神紧绷与不安。" },
        { word: "unforgettable", phonetic: "/ˌʌnfərˈɡetəbl/", cn: "难以忘怀的", exampleEn: "Our graduation trip was an unforgettable memory.", exampleCn: "我们的毕业旅行是一段难以忘怀的回忆。", explanationCn: "形容词，记忆深刻、难以磨灭的。" }
      ],
      quiz: [
        {
          type: "multiple_choice",
          question: "Who was Mia's desk mate on the first day?",
          questionCn: "第一天Mia的同桌是谁？",
          options: ["Oliver", "Lucas", "Mr. Davis", "Leo"],
          answer: 1,
          explanationEn: "Mr. Davis assigned Mia to sit beside Lucas, who kindly shared his pencils.",
          explanationCn: "Davis老师安排Mia坐在Lucas旁边，Lucas还友好地与她分享彩铅。"
        },
        {
          type: "comprehension",
          question: "What did Mia draw for her English class assignment?",
          questionCn: "Mia在英语课作业中画了什么？",
          options: ["A red double-decker bus", "A bamboo forest with a panda", "A tall Victorian clocktower", "A soccer game in the courtyard"],
          answer: 1,
          explanationEn: "Mia drew a magnificent bamboo forest with a giant panda eating fresh leaves.",
          explanationCn: "Mia画了一片壮丽的竹林和一只正在吃嫩叶的大熊猫。"
        },
        {
          type: "true_false",
          question: "Mr. Davis was angry because Mia was late for school.",
          questionCn: "判断题：Davis老师因为Mia迟到而生气了。",
          options: ["True 正确", "False 错误"],
          answer: 1,
          explanationEn: "Mr. Davis was very welcoming and greeted Mia with a bright smile.",
          explanationCn: "Davis老师非常热情，微笑着在教室门口迎接了Mia。"
        },
        {
          type: "fill_blank",
          question: "Deep breathing helps to calm feelings of ________ and nervousness.",
          questionCn: "填空题：深呼吸有助于平复________和紧张情绪。",
          answer: "anxiety",
          explanationEn: "The vocabulary word for nervousness or unease is 'anxiety' (焦虑).",
          explanationCn: "表示焦虑紧张的重点词汇是 'anxiety'。"
        },
        {
          type: "multiple_choice",
          question: "How did Mia feel at the end of the school day?",
          questionCn: "放学时Mia感觉如何？",
          options: ["Lonely and upset", "Confident that the school year would be an adventure", "Bored and sleepy", "Afraid to return tomorrow"],
          answer: 1,
          explanationEn: "Her anxiety melted away and she felt excited for the upcoming school adventure.",
          explanationCn: "她的焦虑烟消云散，对即将展开的校园学习之旅充满期待。"
        }
      ]
    },
    {
      id: 3,
      title: "The Missing Wallet",
      titleCn: "遗失的钱包",
      level: "Beginner",
      levelCn: "初级",
      readTime: "3 min read",
      image: "/src/assets/images/story_london_student_1793593510936.jpg",
      fallbackIcon: "👛",
      summary: "Ben finds a leather wallet on a park bench. Choosing honesty over temptation, he learns that doing the right thing brings the sweetest reward.",
      summaryCn: "Ben在公园长椅上捡到了一个皮夹。面对诱惑他选择坚守诚信，体会到正直带来的无价快乐。",
      paragraphs: [
        {
          en: "On a sunny Saturday afternoon, Ben was riding his bicycle through Greenleaf Park. The birds were singing in the oak trees, and children were flying colorful kites on the grass.",
          cn: "在一个阳光明媚的周六下午，Ben正骑着自行车穿过绿叶公园。橡树枝头鸟儿欢唱，草地上孩子们正在放飞五颜六色的风筝。"
        },
        {
          en: "Near the fountain, he stopped to tie his shoelace. Suddenly, he noticed a thick brown leather wallet lying abandoned on a wooden bench.",
          cn: "在喷泉旁，他停下来系鞋带。突然，他注意到木质长椅上遗落着一个厚厚的棕色皮夹。"
        },
        {
          en: "Ben picked it up cautiously. Inside, there was a substantial sum of cash, several bank cards, and a senior citizen bus pass belonging to an elderly gentleman named Thomas Clark.",
          cn: "Ben小心翼翼地捡起皮夹。里面有一笔不菲的现金、几张银行卡，以及一张属于一位名叫Thomas Clark的老年人的公交优惠卡。"
        },
        {
          en: "For a fleeting second, Ben thought about how much new gaming equipment that money could purchase. But his conscience spoke louder: someone was certainly searching frantically for this wallet.",
          cn: "有那么一瞬间，Ben想到了这些钱能买多少新的游戏装备。但他内心的良知更加响亮：失主此刻肯定正在心急如焚地四处寻找。"
        },
        {
          en: "He immediately rode his bike to the park security office and handed the wallet to Officer Evans. Fifteen minutes later, Mr. Clark walked in, visibly relieved and holding his chest in gratitude.",
          cn: "他立刻骑车赶往公园安保室，将钱包交给了Evans警官。十五分钟后，Clark先生走了进来，长舒了一口气，满怀感激地抚着胸口。"
        },
        {
          en: "\"That money was for my wife's medicine,\" Mr. Clark explained with tears in his eyes. He shook Ben's hand warmly. Ben didn't ask for a single penny in reward; the peace in his heart was the greatest treasure of all.",
          cn: "“那笔钱是给我老伴买药用的，”Clark先生眼里含着泪水解释道。他紧紧握住Ben的手。Ben没有索取任何金钱回报；内心的坦荡安宁便是世界上最珍贵的宝物。"
        }
      ],
      vocabulary: [
        { word: "fountain", phonetic: "/ˈfaʊntn/", cn: "喷泉", exampleEn: "Pigeons drank water beside the stone fountain.", exampleCn: "鸽子在石质喷泉旁饮水。", explanationCn: "名词，公园或广场中用于观赏的人工喷水设施。" },
        { word: "abandoned", phonetic: "/əˈbændənd/", cn: "被遗弃的，无人看管的", exampleEn: "An abandoned bag on the train was checked by security.", exampleCn: "列车上遗留的无主包袋受到了安检。", explanationCn: "形容词，指被丢弃或遗忘在一处的物品。" },
        { word: "substantial", phonetic: "/səbˈstænʃl/", cn: "数额巨大的，客观的", exampleEn: "He donated a substantial amount of money to charity.", exampleCn: "他向慈善机构捐献了一大笔可观的资金。", explanationCn: "形容词，指价值、规模或数量十分显著。" },
        { word: "conscience", phonetic: "/ˈkɑːnʃəns/", cn: "良心，道德感", exampleEn: "A clear conscience is the softest pillow at night.", exampleCn: "问心无愧是夜晚最安稳的枕头。", explanationCn: "名词，指导人们辨别善恶对错的内心道德法则。" },
        { word: "frantically", phonetic: "/ˈfræntɪkli/", cn: "焦急慌乱地，心急如焚地", exampleEn: "She searched frantically for her lost car keys.", exampleCn: "她焦急慌乱地到处寻找丢失的车钥匙。", explanationCn: "副词，在紧张害怕时手忙脚乱地行动。" },
        { word: "relieved", phonetic: "/rɪˈliːvd/", cn: "感到宽慰的，如释重负的", exampleEn: "We were relieved to hear the lost child was found safe.", exampleCn: "听到走失的孩子安全找到，我们都松了一口气。", explanationCn: "形容词，忧虑消除后的释然放松状态。" },
        { word: "gratitude", phonetic: "/ˈɡrætɪtuːd/", cn: "感激之情，谢意", exampleEn: "He expressed his sincere gratitude with a handwritten letter.", exampleCn: "他用一封亲笔信表达了真诚的谢意。", explanationCn: "名词，受到恩惠后心怀的深深谢意。" },
        { word: "treasure", phonetic: "/ˈtreʒər/", cn: "珍宝，财富", exampleEn: "Honesty and loyalty are the true treasures of life.", exampleCn: "诚实与忠诚是生命中真正的珍宝。", explanationCn: "名词，指金银财宝或极具精神价值的人与事物。" }
      ],
      quiz: [
        {
          type: "multiple_choice",
          question: "Where did Ben discover the missing wallet?",
          questionCn: "Ben在哪里发现了遗失的钱包？",
          options: ["On a wooden bench near the fountain", "Inside a red double-decker bus", "Under a tree in his backyard", "At the supermarket checkout counter"],
          answer: 0,
          explanationEn: "Ben saw the wallet lying on a wooden bench near the park fountain while tying his shoelace.",
          explanationCn: "Ben在喷泉旁系鞋带时，看到了放在木质长椅上的钱包。"
        },
        {
          type: "comprehension",
          question: "Why was the cash inside the wallet so critical for Mr. Clark?",
          questionCn: "为什么钱包里的现金对Clark先生如此重要？",
          options: ["To buy expensive new video games", "To pay for his wife's essential medicine", "To purchase a train ticket to London", "To remodel his courtyard"],
          answer: 1,
          explanationEn: "Mr. Clark explained with emotion that the money was intended for his wife's medication.",
          explanationCn: "Clark先生动情地解释说，那笔钱是为妻子购买必备药品用的。"
        },
        {
          type: "true_false",
          question: "Ben demanded a large cash reward before giving the wallet back.",
          questionCn: "判断题：Ben索要了一大笔现金报酬才肯归还钱包。",
          options: ["True 正确", "False 错误"],
          answer: 1,
          explanationEn: "Ben refused to ask for any money; doing the right thing brought him peace of mind.",
          explanationCn: "Ben没有索求一分钱报酬，内心的坦荡正是最好的奖励。"
        },
        {
          type: "fill_blank",
          question: "Mr. Clark expressed his deep ________ with tears in his eyes.",
          questionCn: "填空题：Clark先生含泪表达了他深深的________之情。",
          answer: "gratitude",
          explanationEn: "The correct term is 'gratitude' (感激之情).",
          explanationCn: "正确的重点词汇是 'gratitude'（谢意，感激之情）。"
        },
        {
          type: "multiple_choice",
          question: "What lesson did Ben's action illustrate?",
          questionCn: "Ben的行为体现了什么做人道理？",
          options: ["Always keep whatever you find in a public park", "Integrity and honesty are more valuable than money", "Never ride a bicycle alone on Saturday", "Ignore older citizens who lose their belongings"],
          answer: 1,
          explanationEn: "Honesty and listening to one's conscience are priceless virtues.",
          explanationCn: "诚实守信、倾听良知的指引远比金钱更具崇高价值。"
        }
      ]
    },
    {
      id: 4,
      title: "A Trip to the Supermarket",
      titleCn: "超市采购记",
      level: "Beginner",
      levelCn: "初级",
      readTime: "3 min read",
      image: "/src/assets/images/story_london_student_1793593510936.jpg",
      fallbackIcon: "🛒",
      summary: "Emma helps her mother prepare a celebration dinner by shopping with a strict budget and an organized grocery checklist.",
      summaryCn: "Emma帮妈妈准备庆祝晚宴，她带着精心列好的购物清单和有限预算展开了超市采购。",
      paragraphs: [
        {
          en: "Sunday was family celebration day at Emma's home. Her grandmother was turning seventy, and the entire family was gathering for a homemade Italian feast. Emma volunteered to manage the supermarket shopping.",
          cn: "周日是Emma家的家庭聚会日。她的祖母迎来了七十岁寿辰，全家人要齐聚一堂享用亲手烹饪的意式大餐。Emma主动请缨负责超市采购。"
        },
        {
          en: "Before leaving, she prepared a detailed grocery checklist on a notepad: ripe tomatoes, fresh basil, garlic, whole grain spaghetti, grated parmesan cheese, and two cartons of organic milk.",
          cn: "出发前，她在便签本上列出了一份详尽的杂货清单：熟透的西红柿、新鲜罗勒、大蒜、全麦意面、帕玛森奶酪碎和两盒有机牛奶。"
        },
        {
          en: "At the supermarket entrance, Emma grabbed a wheeled cart and checked the weekly promotional flyer. \"Comparing unit prices is the secret to smart budgeting,\" her father had taught her.",
          cn: "在超市入口，Emma推了一辆轮式推车，并翻阅了每周促销彩页。“对比单价是明智理财的秘诀，”她的父亲曾这样教导她。"
        },
        {
          en: "In the fresh produce aisle, vibrant mounds of crisp lettuce, shiny apples, and fragrant herbs welcomed shoppers. Emma carefully examined each tomato to ensure it was firm and juicy.",
          cn: "在生鲜蔬果区，水灵清脆的生菜、光亮饱满的苹果和芳香的草本调料迎接着顾客。Emma仔细挑选每一个西红柿，确保它们果实紧致、鲜嫩多汁。"
        },
        {
          en: "Next, she searched for the pasta aisle. She noticed a special discount: buy two boxes of whole grain pasta and get one marinara sauce jar at half price. She calculated the total price swiftly in her head.",
          cn: "接着，她穿过货架寻找意面专区。她注意到一项特别折扣：购买两盒全麦意面，即可半价换购一瓶番茄意面酱。她在脑海中迅速算清了总价。"
        },
        {
          en: "At the checkout register, the total came out to twenty-eight pounds, well under her thirty-pound allowance. The cashier gave her a warm receipt, and Emma headed home with pride in her step.",
          cn: "在结账收银台，总计花费二十八英镑，稳稳控制在三十英镑的预算额度内。收银员递给她收据并道谢，Emma迈着自信自豪的步伐踏上了归途。"
        }
      ],
      vocabulary: [
        { word: "feast", phonetic: "/fiːst/", cn: "盛宴，盛大的宴席", exampleEn: "Thanksgiving dinner is always an enjoyable family feast.", exampleCn: "感恩节晚餐总是一场令人愉悦的家庭盛宴。", explanationCn: "名词，丰盛可口的特别宴餐。" },
        { word: "volunteer", phonetic: "/ˌvɑːlənˈtɪr/", cn: "自愿提出，自愿者", exampleEn: "She volunteered to organize the community library books.", exampleCn: "她自愿协助整理社区图书馆的书籍。", explanationCn: "动词/名词，不求报酬主动承担某项任务。" },
        { word: "grocery", phonetic: "/ˈɡroʊsəri/", cn: "杂货，食品杂货店", exampleEn: "We make a weekly trip to the grocery store for fresh food.", exampleCn: "我们每周都去杂货店采购新鲜食品。", explanationCn: "名词，日常食品和家用百货商品。" },
        { word: "budget", phonetic: "/ˈbʌdʒɪt/", cn: "预算，控制开支", exampleEn: "Planning a monthly budget prevents unnecessary debt.", exampleCn: "规划月度预算可以避免不必要的债务支出。", explanationCn: "名词/动词，对收入和开支的额度规划。" },
        { word: "aisle", phonetic: "/aɪl/", cn: "通道，货架走廊", exampleEn: "You can find cereals and oatmeal in aisle five.", exampleCn: "你可以在五号货架走廊找到麦片和燕麦。", explanationCn: "名词，排座或货架之间的通行通道。" },
        { word: "produce", phonetic: "/ˈprɑːduːs/", cn: "农产品，生鲜蔬果", exampleEn: "Local markets sell fresh farm produce at fair prices.", exampleCn: "当地市集以公道的价格销售新鲜农产品。", explanationCn: "名词（重音在首音节），泛指新鲜农副蔬果产品。" },
        { word: "discount", phonetic: "/ˈdɪskaʊnt/", cn: "折扣，减价", exampleEn: "The store offered a twenty percent discount on shoes.", exampleCn: "该商店提供了八折的鞋品特惠。", explanationCn: "名词，在原售价基础上的价格减免。" },
        { word: "cashier", phonetic: "/kæˈʃɪr/", cn: "收银员，出纳员", exampleEn: "The cashier scanned each item and handed over the change.", exampleCn: "收银员扫描了每件商品并将零钱找回。", explanationCn: "名词，在商场超市负责结账付款的职员。" }
      ],
      quiz: [
        {
          type: "multiple_choice",
          question: "What family event was Emma preparing for?",
          questionCn: "Emma正在为哪个家庭活动做准备？",
          options: ["Her brother's graduation party", "Her grandmother's seventieth birthday dinner", "A Christmas morning brunch", "A camping trip to Scotland"],
          answer: 1,
          explanationEn: "Her grandmother was turning seventy, and the family was gathering for a home-cooked Italian dinner.",
          explanationCn: "她的祖母正逢七十岁大寿，全家准备享用一顿自制意式晚宴。"
        },
        {
          type: "fill_blank",
          question: "Emma carefully checked the weekly ________ to find promotional discounts.",
          questionCn: "填空题：Emma仔细查阅了每周促销________以寻找特惠信息。",
          answer: "flyer",
          explanationEn: "Shoppers consult the promotional 'flyer' (传单/彩页) for sales.",
          explanationCn: "顾客查阅每周促销海报或彩页（flyer）。"
        },
        {
          type: "true_false",
          question: "Emma spent more money than her mother had budgeted.",
          questionCn: "判断题：Emma的花费超出了母亲给她的预算金额。",
          options: ["True 正确", "False 错误"],
          answer: 1,
          explanationEn: "Emma spent twenty-eight pounds, which was safely under her thirty-pound budget.",
          explanationCn: "Emma总共花费28英镑，低于30英镑的预算。"
        },
        {
          type: "comprehension",
          question: "Which aisle contains fresh fruits and vegetables in a supermarket?",
          questionCn: "超市里哪个区域摆放新鲜水果与蔬菜？",
          options: ["The hardware aisle", "The fresh produce aisle", "The frozen dessert aisle", "The electronics counter"],
          answer: 1,
          explanationEn: "Fresh fruits and leafy greens are categorized under the 'produce' (生鲜蔬果) aisle.",
          explanationCn: "水果与蔬菜归属在生鲜蔬果区（produce aisle）。"
        },
        {
          type: "multiple_choice",
          question: "What did Emma learn from her father about shopping?",
          questionCn: "Emma从父亲那里学到了什么购物诀窍？",
          options: ["Always buy the most expensive brand", "Compare unit prices to manage budgets wisely", "Never check the expiration dates", "Only shop during late midnight hours"],
          answer: 1,
          explanationEn: "Comparing unit prices is the secret to smart budgeting.",
          explanationCn: "通过对比单位价格来理性规划和节约预算。"
        }
      ]
    },
    {
      id: 5,
      title: "The Power of Friendship",
      titleCn: "友谊的力量",
      level: "Intermediate",
      levelCn: "中级",
      readTime: "4 min read",
      image: "/src/assets/images/story_enchanted_journey_1793593511774.jpg",
      fallbackIcon: "🤝",
      summary: "When Daniel injures his leg right before the school science robotics championship, his teammate Sarah steps up to redesign their project and restore his confidence.",
      summaryCn: "当Daniel在校园科技机器人大赛前夕意外扭伤腿部时，队友Sarah挺身而出重构项目，重新点燃了他的信心。",
      paragraphs: [
        {
          en: "For six exhausting months, Daniel and Sarah had devoted every evening in the campus technology workshop. Their goal was ambitious: constructing an autonomous rescue rover designed to navigate obstacle-strewn disaster zones.",
          cn: "整整六个月来，Daniel和Sarah把每个傍晚都奉献给了校园科技工坊。他们的目标雄心勃勃：制作一台能够在障碍重重的灾区自如通行的自主搜救机器人。"
        },
        {
          en: "Disaster struck barely forty-eight hours before the grand regional exhibition. While descending the library stairs in rain, Daniel slipped on wet marble and fractured his ankle. Doctors ordered absolute bed rest for three weeks.",
          cn: "然而就在大区展示会前四十八小时，意外发生了。下雨天在图书馆下楼梯时，Daniel在湿滑的大理石地面滑倒，导致脚踝骨折。医生要求他必须卧床静养三周。"
        },
        {
          en: "Confined to his bedroom with a heavy plaster cast, Daniel was devastated. \"Everything we labored for is ruined,\" he lamented during an emotional video call. \"I cannot walk onto the presentation stage, let alone configure the sensor grid.\"",
          cn: "打着厚厚石膏被困在卧室里的Daniel倍感沮丧。“我们所有的心血都付诸东流了，”他在情绪激动的视频通话中痛心地说，“我连演讲台都走不上去，更别说调试传感器阵列了。”"
        },
        {
          en: "Sarah refused to let despair conquer their vision. \"True partnership is not tested when the wind is at our backs,\" she asserted with quiet determination. \"It is proven when storms arrive. We built this together, and we will present it together.\"",
          cn: "Sarah坚决不让绝望吞噬他们的梦想。“真正的搭档不是在顺风顺水时才显现，”她语气坚定沉稳地宣示道，“而是在风暴来临时才得到淬炼。我们共同创造了它，就必须一同把它展示给所有人。”"
        },
        {
          en: "Over the next two days, Sarah mounted a webcam onto the rover's mast, synchronizing it with Daniel's laptop. When judges assembled at their booth, Daniel delivered his technical analysis through live streaming while Sarah demonstrated maneuvering controls on the test arena.",
          cn: "在接下来的两天里，Sarah在机器人的桅杆上加装了高清摄像头，并与Daniel的笔记本电脑实现了画面同步。当评委来到展位时，Daniel通过实时视频连线完成专业技术解说，Sarah则在测试场地上敏捷操控演示。"
        },
        {
          en: "The judges were mesmerized not merely by the rover's engineering elegance, but by the extraordinary synergy between two committed comrades. When their first-place trophy was announced, Sarah proudly held the microphone to Daniel's screen, proving that authentic friendship transcends any physical boundary.",
          cn: "评委们不仅被机器人优雅精湛的工程设计所震撼，更被两位并肩作战的少年之间非同凡响的默契所深深打动。当宣布他们荣获一等奖时，Sarah自豪地将麦克风对准Daniel的屏幕——向世人证明，真正的友谊能够跨越一切空间阻隔。"
        }
      ],
      vocabulary: [
        { word: "autonomous", phonetic: "/ɔːˈtɑːnəməs/", cn: "自主的，自动运行的", exampleEn: "Engineers are testing autonomous vehicles on city highways.", exampleCn: "工程师们正在城市高速公路上测试无人自动驾驶汽车。", explanationCn: "形容词，指具有自主独立决策与运行能力的机器或系统。" },
        { word: "fracture", phonetic: "/ˈfræktʃər/", cn: "骨折，断裂", exampleEn: "The medical scan revealed a minor bone fracture in his foot.", exampleCn: "医学扫描显示他的脚部有轻微骨折。", explanationCn: "名词/动词，硬物受外力断裂或人体骨骼断裂。" },
        { word: "devastated", phonetic: "/ˈdevəsteɪtɪd/", cn: "极度沮丧的，崩溃的", exampleEn: "He was devastated after his hard work was disqualified.", exampleCn: "得知辛苦成果被取消资格后，他感到极度崩溃沮丧。", explanationCn: "形容词，遭受沉重心理打击的状态。" },
        { word: "assert", phonetic: "/əˈsɜːrt/", cn: "坚定断言，明确声明", exampleEn: "She asserted her innocence before the disciplinary board.", exampleCn: "她在纪律委员会面前坚定陈述了自己的清白。", explanationCn: "动词，自信而明确地表达观点立场。" },
        { word: "synchronize", phonetic: "/ˈsɪŋkrənaɪz/", cn: "使同步，同时发生", exampleEn: "Make sure to synchronize your mobile files with cloud backup.", exampleCn: "请务必将手机文件与云端备份保持同步更新。", explanationCn: "动词，使两个或多个系统在时间或数据上保持一致。" },
        { word: "synergy", phonetic: "/ˈsɪnərdʒi/", cn: "协同效应，协同合作", exampleEn: "Team synergy produced results far greater than individual efforts.", exampleCn: "团队协作发挥的合力远大于个人的单打独斗。", explanationCn: "名词，多元结合产生的协同增效力量。" },
        { word: "authentic", phonetic: "/ɔːˈθentɪk/", cn: "真实的，真正的", exampleEn: "Authentic leadership is rooted in honesty and compassion.", exampleCn: "真正的领导力植根于诚实与关怀之中。", explanationCn: "形容词，非伪造的、发自本心的真切品质。" },
        { word: "transcend", phonetic: "/trænˈsend/", cn: "超越，胜过", exampleEn: "Great music transcends national and cultural boundaries.", exampleCn: "卓越的音乐能够超越国界与文化的隔阂。", explanationCn: "动词，超出某一界限或范畴。" }
      ],
      quiz: [
        {
          type: "multiple_choice",
          question: "What project were Daniel and Sarah designing for the championship?",
          questionCn: "Daniel和Sarah为锦标赛设计了什么科技项目？",
          options: ["An autonomous rescue rover for disaster zones", "A remote-controlled toy submarine", "A mobile language translation smartphone app", "An automated greenhouse sprinkler system"],
          answer: 0,
          explanationEn: "They engineered an autonomous rescue rover designed to navigate obstacle-strewn terrain.",
          explanationCn: "他们设计了一款面向灾难救援场景的自主巡航搜救机器人。"
        },
        {
          type: "comprehension",
          question: "How did Sarah solve Daniel's inability to be physically present at the booth?",
          questionCn: "Sarah是如何解决Daniel因伤无法亲临展位的问题的？",
          options: [
            "She hired another university student to replace him completely",
            "She installed a webcam on the rover to let Daniel present remotely via live stream",
            "She withdrew their project from the robotics tournament",
            "She told the judges that Daniel did not contribute"
          ],
          answer: 1,
          explanationEn: "Sarah ingeniously mounted a webcam synchronized with Daniel's laptop so he could present remotely.",
          explanationCn: "Sarah富有创意地在机器人上架设了摄像头，让Daniel通过远程视频顺利完成了答辩。"
        },
        {
          type: "true_false",
          question: "Daniel fractured his wrist during soccer practice.",
          questionCn: "判断题：Daniel在足球训练中手腕骨折了。",
          options: ["True 正确", "False 错误"],
          answer: 1,
          explanationEn: "Daniel slipped on wet stairs and fractured his ankle, not his wrist.",
          explanationCn: "Daniel是在下雨天走台阶时滑倒导致脚踝骨折，而非手腕。"
        },
        {
          type: "fill_blank",
          question: "Sarah demonstrated that authentic friendship can ________ physical barriers.",
          questionCn: "填空题：Sarah证明了真正的友谊能够________身体与空间的限制。",
          answer: "transcend",
          explanationEn: "The word meaning to go beyond limits is 'transcend' (超越).",
          explanationCn: "表达跨越与超脱界限的词汇是 'transcend'。"
        },
        {
          type: "multiple_choice",
          question: "What was the final outcome of their competition presentation?",
          questionCn: "他们参赛展示的最终结果如何？",
          options: ["They received a consolation certificate", "They won the prestigious first-place trophy", "Their rover crashed into a wall and broke", "They were disqualified for using Wi-Fi"],
          answer: 1,
          explanationEn: "The judges awarded them the coveted first-place championship trophy.",
          explanationCn: "评委们为他们颁发了极具含金量的一等奖冠军奖杯。"
        }
      ]
    },
    {
      id: 6,
      title: "An Unexpected Journey",
      titleCn: "意外的旅程",
      level: "Intermediate",
      levelCn: "中级",
      readTime: "4 min read",
      image: "/src/assets/images/story_enchanted_journey_1793593511774.jpg",
      fallbackIcon: "🚂",
      summary: "Boarding the wrong train compartment in the Scottish Highlands sends Clara into a remote loch-side village, where she uncovers historic folklore and unexpected warmth.",
      summaryCn: "在苏格兰高地误上一节车厢让Clara误入了一座偏远湖畔村庄，却让她意外收获了古老民俗故事与令人心醉的温暖人文。",
      paragraphs: [
        {
          en: "Clara sprinted down the misty platform of Edinburgh Waverley Station as steam and diesel exhaust swirled into the dawn chill. She shoved her ticket into the conductor's palm, scrambled aboard carriage C, and slumped breathlessly into an empty velvet booth.",
          cn: "在爱丁堡威弗利火车站雾气弥漫的站台上，Clara迎着拂晓的凉意疾步狂奔。她把车票匆匆塞给列车员，跃进C号车厢，气喘吁吁地瘫坐在空荡的丝绒包厢里。"
        },
        {
          en: "She plugged in her headphones, expecting to wake up three hours later in the bustling city of Glasgow. However, when she rubbed her eyes awake, the scenery outside was not concrete skyscrapers, but towering violet hills carpeted in wild heather and ancient pines.",
          cn: "她塞上耳机，本以为三小时后醒来会置身于格拉斯哥繁华的都市。然而当她揉开惺忪的双眼，窗外的景象并非林立的水泥高楼，而是开满紫色石楠花、苍松掩映的巍峨山峦。"
        },
        {
          en: "\"Excuse me,\" Clara asked the passing conductor with mounting dread. \"Are we arriving in Glasgow shortly?\" The conductor chuckled warmly. \"Bless you, lass! Carriage C was decoupled at Stirling. You are bound for Loch Katrine in the heart of the Highlands!\"",
          cn: "“打扰一下，”Clara心惊胆战地问走过的列车员，“我们快到格拉斯哥了吗？”列车员爽朗地笑了：“姑娘，C号车厢早在斯特灵就解挂了，你坐的可是直达高地深处卡特琳湖的观光专列！”"
        },
        {
          en: "Panic gripped her throat momentarily; she had a critical interview scheduled for next week. Yet as the train glided smoothly along the mirror-like expanse of the loch, where swans drifted between mountain reflections, her apprehension dissolved into awe.",
          cn: "恐慌一度卡在她的咽喉，毕竟她下周还有至关重要的求职面试。然而，当列车掠过宛如镜面的辽阔湖泊，见天鹅在倒映着群山的湖水中静静滑过时，她的焦虑瞬间融化为震撼与赞叹。"
        },
        {
          en: "At the terminal village, she was welcomed by Mrs. MacLeod, an elderly innkeeper who served her piping hot oat porridge sweetened with local heather honey. Around the peat fireplace, village elders recited traditional Gaelic ballads of courageous explorers.",
          cn: "在终点小村庄，经营客栈的MacLeod老太太热情地招待了她，端上了拌着当地石楠野蜂蜜的热气腾腾的燕麦粥。围在泥炭壁炉旁，村里的老人吟唱起古老的盖尔语歌谣，讲述昔日无畏探险家的传奇。"
        },
        {
          en: "Clara journaled late into the night beneath the soft glow of an oil lamp. Sometimes the detours we never planned lead directly to the destinations our souls desperately needed.",
          cn: "在煤油灯柔和的光晕下，Clara写日记直到深夜。有时，那些我们从未预想过的歧路与偏差，反而会把我们直接带到灵魂最渴望的诗意归宿。"
        }
      ],
      vocabulary: [
        { word: "exhaust", phonetic: "/ɪɡˈzɔːst/", cn: "废气，排气", exampleEn: "Vehicle exhaust fumes contribute heavily to air pollution.", exampleCn: "汽车排放的尾气废气是空气污染的主要诱因之一。", explanationCn: "名词，内燃机燃烧后排出的废气。" },
        { word: "heather", phonetic: "/ˈheðər/", cn: "石楠花，石楠灌木", exampleEn: "Purple heather blooms across the Scottish mountainsides in autumn.", exampleCn: "秋天紫色的石楠花在苏格兰连绵的山坡上盛开。", explanationCn: "名词，苏格兰高地常见的低矮紫色开花灌木。" },
        { word: "decoupled", phonetic: "/diːˈkʌpld/", cn: "分离的，脱钩的", exampleEn: "The rear train cars were decoupled at the junction station.", exampleCn: "后尾几节车厢在枢纽换乘站进行了拆卸脱钩。", explanationCn: "动词过去分词/形容词，指两节连挂物体解除关联脱开。" },
        { word: "apprehension", phonetic: "/ˌæprɪˈhenʃn/", cn: "忧虑，忐忑顾虑", exampleEn: "She boarded the airplane with a sense of apprehension.", exampleCn: "她心怀忐忑忧虑登上了飞机。", explanationCn: "名词，对未知潜在危险或坏结果的担忧心态。" },
        { word: "expanse", phonetic: "/ɪkˈspæns/", cn: "辽阔广阔的区域", exampleEn: "The blue ocean stretched out in a magnificent expanse.", exampleCn: "碧蓝的大海呈现出一片浩瀚壮阔的景象。", explanationCn: "名词，一望无际开阔延展的空间或水域。" },
        { word: "porridge", phonetic: "/ˈpɔːrɪdʒ/", cn: "燕麦粥，浓粥", exampleEn: "A warm bowl of oat porridge is comforting on cold winter mornings.", exampleCn: "寒冬清晨一碗温热的燕麦粥让人感到分外惬意。", explanationCn: "名词，用燕麦等谷物在水或牛奶中熬煮的黏稠热粥。" },
        { word: "ballad", phonetic: "/ˈbæləd/", cn: "民谣，叙事歌谣", exampleEn: "The minstrel sang a romantic ballad about medieval knights.", exampleCn: "吟游诗人吟唱了一首关于中世纪骑士的浪漫民谣。", explanationCn: "名词，通过抒情旋律讲述动人历史故事的传统民歌。" },
        { word: "detour", phonetic: "/ˈdiːtʊr/", cn: "绕道，歧路偏道", exampleEn: "Road construction forced drivers to take a scenic rural detour.", exampleCn: "道路修葺迫使司机们不得不绕行风景秀丽的乡间小道。", explanationCn: "名词，偏离直达主线规划的绕行路线。" }
      ],
      quiz: [
        {
          type: "multiple_choice",
          question: "Where was Clara originally planning to travel?",
          questionCn: "Clara原本打算前往哪座城市？",
          options: ["London", "Glasgow", "Loch Katrine", "Paris"],
          answer: 1,
          explanationEn: "Clara intended to travel from Edinburgh directly to Glasgow for her commitments.",
          explanationCn: "Clara原本计划从爱丁堡乘坐火车前往格拉斯哥。"
        },
        {
          type: "comprehension",
          question: "Why did Clara end up traveling into the Highlands instead of Glasgow?",
          questionCn: "为什么Clara最终进入了苏格兰高地而不是去往格拉斯哥？",
          options: [
            "Her carriage was decoupled at Stirling and directed toward the loch",
            "She fell asleep and lost her ticket completely",
            "The conductor arrested her for carrying an oil lamp",
            "Her friend Lucas requested a rescue mission"
          ],
          answer: 0,
          explanationEn: "Carriage C was decoupled at Stirling station and continued along the scenic Highland route.",
          explanationCn: "C号车厢在斯特灵车站被解挂分流，沿着风景高地专线行驶。"
        },
        {
          type: "true_false",
          question: "Mrs. MacLeod treated Clara harshly and kicked her out into the rain.",
          questionCn: "判断题：MacLeod老太太严厉对待Clara并将她赶进雨中。",
          options: ["True 正确", "False 错误"],
          answer: 1,
          explanationEn: "Mrs. MacLeod welcomed Clara warmly with hot porridge and heather honey.",
          explanationCn: "MacLeod老太太非常善良温厚，亲手为她熬制了热腾腾的石楠野蜂蜜燕麦粥。"
        },
        {
          type: "fill_blank",
          question: "Sometimes an unexpected ________ leads us to our soul's true destination.",
          questionCn: "填空题：有时，一次意外的________会把我们引向灵魂真正的归宿。",
          answer: "detour",
          explanationEn: "The conclusion mentions that unplanned 'detours' often enrich our lives.",
          explanationCn: "结尾处强调了未曾规划的绕道与偶得奇遇（detour）。"
        },
        {
          type: "multiple_choice",
          question: "What lesson did Clara record in her night journal?",
          questionCn: "Clara在深夜日记中记录下了怎样的感悟？",
          options: [
            "Never purchase train tickets at dawn",
            "Unplanned journeys can offer unforgettable beauty and spiritual peace",
            "Porridge tastes better with salt than with wild honey",
            "Highland trains are too loud for listening to audiobooks"
          ],
          answer: 1,
          explanationEn: "She discovered that unexpected deviations from plan often yield meaningful joy.",
          explanationCn: "人生中偏离既定轨道的不期而遇，常常蕴藏着最抚慰人心的美好与平静。"
        }
      ]
    },
    {
      id: 7,
      title: "The Importance of Time",
      titleCn: "时间的重量",
      level: "Intermediate",
      levelCn: "中级",
      readTime: "4 min read",
      image: "/src/assets/images/hero_storybook_adventure_1793593510765.jpg",
      fallbackIcon: "⏳",
      summary: "Apprentice watchmaker Julian learns from Master Henrik that time is not merely digits on a dial, but the vessel through which we express devotion to our craft.",
      summaryCn: "学徒Julian跟随老钟表匠Henrik大师，懂得时间绝不仅仅是表盘上的跳动数字，更是浇灌专注与热爱的生命载体。",
      paragraphs: [
        {
          en: "In a sunlit corner of an old European quarter, tick-tocks of a hundred antique clocks resonated harmoniously inside Master Henrik's horology workshop. Pendulums swayed rhythmically like miniature bronze dancers.",
          cn: "在欧洲老城洒满阳光的一角，亨利克大师的钟表工坊里，上百只古董钟表清脆的滴答声交织出和谐的乐章。钟摆宛如小巧的青铜舞者般富有韵律地优雅摆动。"
        },
        {
          en: "Julian, a restless nineteen-year-old apprentice, was assembling a mechanical pocket watch. He was in an impatient rush, eager to finish quickly and join his peers at the lively carnival.",
          cn: "年仅十九岁、心浮气躁的学徒Julian正在组装一只精密的机械怀表。他心里急躁忙乱，巴不得一口气敷衍完工，好赶去参加广场上热闹非凡的嘉年华。"
        },
        {
          en: "\"Gently, Julian,\" Master Henrik cautioned, adjusting his magnifying monocle. \"If you force that escapement wheel, the teeth will shear. A clock created in haste will always tell falsehoods.\"",
          cn: "“慢一点，Julian，”Henrik大师微扶单片放大镜警示道，“若强行挤压擒纵轮，齿轮就会磨损断齿。匆忙草率制造的钟表，永远只会给出虚假的时刻。”"
        },
        {
          en: "Julian paused, staring down at the tiny ruby bearings and coiled springs. \"Master, why spend twenty tedious hours polishing gears that will remain forever hidden beneath a sealed gold casing?\"",
          cn: "Julian停下手，低头凝视着微小的红宝石轴承和卷曲发条。“大师，既然这些齿轮终生密封在黄金表壳之下、无人肉眼得见，为何还要耗费整整二十小时枯燥打磨它们呢？”"
        },
        {
          en: "Henrik smiled serenely, picking up a century-old pocket watch crafted in Switzerland. \"Because true integrity is what you manifest when no one is watching. Time is not a monster chasing us toward exhaustion; it is the canvas where we paint our devotion.\"",
          cn: "Henrik安详地微笑起来，拿起一只瑞士百年老怀表：“因为真正的匠人操守，正是在无人注视时所倾注的心血。时间不是在身后催赶我们的怪兽；它是我们用来泼洒敬畏与专注的画布。”"
        },
        {
          en: "That evening, Julian surrendered his desire for the transient carnival. Sitting beside his mentor beneath the amber workbench lamp, he polished each cogwheel until it shone with flawless precision. For the first time in his youth, he felt timeless.",
          cn: "那一晚，Julian放下了对转瞬即逝的狂欢的浮躁向往。在琥珀色的工作台灯下坐在恩师身旁，他耐心地将每一颗齿轮打磨出精妙绝伦的光芒。年轻的他有生以来第一次，体会到了超越时间的宁静与崇高。"
        }
      ],
      vocabulary: [
        { word: "resonate", phonetic: "/ˈrezəneɪt/", cn: "回响，共鸣", exampleEn: "His inspiring speech resonated deeply with every listener.", exampleCn: "他充满激情的演讲在每一位听众心中引起了强烈的共鸣。", explanationCn: "动词，声音持续回荡或情感引发深度共情。" },
        { word: "horology", phonetic: "/hɔːˈrɑːlədʒi/", cn: "钟表制造学，精密测时术", exampleEn: "Master Henrik dedicated fifty years of his life to horology.", exampleCn: "Henrik大师将自己五十载岁月倾注于钟表研造之中。", explanationCn: "名词，研究时间测量、钟表机械构造的专业学科。" },
        { word: "pendulum", phonetic: "/ˈpendʒələm/", cn: "钟摆，摇摆物", exampleEn: "The heavy brass pendulum swings smoothly back and forth.", exampleCn: "沉甸甸的黄铜钟摆规律地来回平稳摇摆。", explanationCn: "名词，挂在定点能够借重力往复摆动的构件。" },
        { word: "apprentice", phonetic: "/əˈprentɪs/", cn: "学徒，徒弟", exampleEn: "The young apprentice learned pottery by observing the master.", exampleCn: "年轻学徒通过观察师傅的技艺来研习陶艺。", explanationCn: "名词，在行家里手身边边实践边学习技能的新手。" },
        { word: "escapement", phonetic: "/ɪˈskeɪpmənt/", cn: "擒纵机构（钟表核心组件）", exampleEn: "The escapement regulates the release of energy in a mechanical watch.", exampleCn: "擒纵机构在机械表中起到精密控制能量释放的枢纽作用。", explanationCn: "名词，钟表内部调控齿轮定速运转的机械核心。" },
        { word: "integrity", phonetic: "/ɪnˈteɡrəti/", cn: "正直，诚信操守", exampleEn: "Personal integrity means doing what is right even when solitary.", exampleCn: "个人诚信意味着哪怕独处时也要遵从正确的操守。", explanationCn: "名词，表里如一、崇高纯洁的品德原则。" },
        { word: "transient", phonetic: "/ˈtrænziənt/", cn: "转瞬即逝的，短暂的", exampleEn: "The morning rainbow was transient and vanished in minutes.", exampleCn: "清晨的彩虹转瞬即逝，几分钟便消散无踪。", explanationCn: "形容词，停留时间极短、转瞬变迁的事物。" },
        { word: "flawless", phonetic: "/ˈflɔːləs/", cn: "无瑕的，完美精湛的", exampleEn: "The gymnast delivered a flawless performance in the finals.", exampleCn: "那位体操选手在决赛中奉献了一场无可挑剔的完美发挥。", explanationCn: "形容词，没有任何瑕疵或纰漏。" }
      ],
      quiz: [
        {
          type: "multiple_choice",
          question: "What craft was Julian studying as an apprentice?",
          questionCn: "Julian作为学徒正在研习什么技艺？",
          options: ["Baking traditional sourdough bread", "Mechanical watchmaking and horology", "Painting portraits in watercolor", "Architecture and stone masonry"],
          answer: 1,
          explanationEn: "Julian was an apprentice watchmaker studying mechanical horology under Master Henrik.",
          explanationCn: "Julian跟随Henrik大师潜心研习机械钟表制造术。"
        },
        {
          type: "comprehension",
          question: "Why did Master Henrik insist on polishing gears hidden beneath the closed case?",
          questionCn: "为什么Henrik大师坚持要精细打磨密封在表壳内看不见的齿轮？",
          options: [
            "To charge customers ten times more money",
            "Because true integrity is manifested even when nobody is watching",
            "To make the watch heavy enough to serve as a paperweight",
            "Because the governor requested an inspection"
          ],
          answer: 1,
          explanationEn: "Henrik believed true craft integrity means excellence even in unobserved spaces.",
          explanationCn: "大师认为，真正的操守是在无人旁观之处依然恪守精益求精。"
        },
        {
          type: "true_false",
          question: "Julian abandoned his workbench and ran away to the carnival for the night.",
          questionCn: "判断题：Julian扔下工作台，整夜在嘉年华狂欢没有回来。",
          options: ["True 正确", "False 错误"],
          answer: 1,
          explanationEn: "Julian realized the wisdom of his master and stayed at the workbench polishing the cogs.",
          explanationCn: "Julian被恩师的点拨所打动，放弃浮躁狂欢，留在工作台精细研磨齿轮。"
        },
        {
          type: "fill_blank",
          question: "Julian worked diligently until each gear wheel shone with ________ precision.",
          questionCn: "填空题：Julian专心致志地工作，直到每一个齿轮都闪烁着________的精密度。",
          answer: "flawless",
          explanationEn: "The text specifies that the parts reached 'flawless' (完美无瑕) precision.",
          explanationCn: "文中对应完美精湛的修饰词是 'flawless'。"
        },
        {
          type: "multiple_choice",
          question: "According to Henrik, what is time in human life?",
          questionCn: "在Henrik看来，时间在人生中到底意味着什么？",
          options: [
            "A monster that torments workers until retirement",
            "A canvas where we paint our devotion and dedication",
            "A commodity to sell to the highest bidder",
            "An illusion created only by battery companies"
          ],
          answer: 1,
          explanationEn: "Henrik stated time is not a monster chasing us, but the canvas for our devotion.",
          explanationCn: "大师指出，时间不是催人疲惫的梦魇，而是展现专注与敬业的画布。"
        }
      ]
    },
    {
      id: 8,
      title: "A Dream Worth Following",
      titleCn: "追光之梦",
      level: "Intermediate",
      levelCn: "中级",
      readTime: "4 min read",
      image: "/src/assets/images/story_future_dreams_1793593512313.jpg",
      fallbackIcon: "🎨",
      summary: "Facing discouragement from practical critics, Maya chooses to pursue her passion for children's illustration, proving that determination shapes reality.",
      summaryCn: "面对外界求稳的劝退声，Maya勇敢坚守为童书绘制插画的热爱，用不懈坚持证明梦想终将照进现实。",
      paragraphs: [
        {
          en: "In her modest attic studio overlooking terracotta rooftops, Maya dipped her sable paintbrush into cerulean blue watercolor. Outside, autumn gales rattled the windowpanes, but inside, her imagination bloomed into fairy castles, winged foxes, and whispering lanterns.",
          cn: "在俯瞰着红陶屋顶的简朴阁楼画室里，Maya将貂毛画笔浸入蔚蓝的透明水彩中。窗外秋风狂啸摇曳着玻璃窗，而画室内，她的无尽想象化作了仙灵古堡、展翅飞狐与低语花灯。"
        },
        {
          en: "Many relatives had urged her to choose an ordinary corporate desk job. \"Art will not pay your electrical bills or grocery receipts,\" they warned persistently. \"Chasing creative daydreams is a perilous gamble.\"",
          cn: "许多亲友曾苦口婆心劝她去找一份朝九晚五的稳定办公室文职。“画画填不饱肚子，交不起电费和粮油账单，”他们再三警告，“追逐艺术白日梦是一场危险的赌博。”"
        },
        {
          en: "There were indeed agonizing months when rejection letters from publishing houses piled high in her mailbox. Self-doubt crept into her thoughts during lonely late-night sessions, threatening to extinguish her spark.",
          cn: "确实曾经历过锥心刺骨的煎熬岁月，出版社寄来的退稿信在邮箱里堆成了厚厚一叠。每当深夜独对孤灯，自我怀疑便会悄然袭来，几乎要熄灭她心中的火苗。"
        },
        {
          en: "Yet every time a child smiled while reading her hand-bound storybooks at the community library, Maya remembered her core mission: to kindle courage and wonder in young minds through art.",
          cn: "然而每当在社区图书馆里，看见有小朋友翻阅她亲手装订的故事画册而露出纯真灿烂的笑容，Maya便重温了最初的执念：用画笔在幼小心灵深处点燃勇气与敬畏之火。"
        },
        {
          en: "She spent eighteen rigorous months writing and illustrating 'The Little Star That Forgot How to Glow'. Rather than giving up after another rejection, she refined her color palettes, improved the narrative pacing, and submitted the revised manuscript to an independent children's press.",
          cn: "她倾注了整整十八个月的严谨心血，创作了绘本《遗忘如何闪耀的小星星》。在又一次受挫后她不仅没有放弃，反而重新校准色彩层次，推敲故事节奏，将修订本寄往一家先锋少儿独立出版社。"
        },
        {
          en: "One rainy Tuesday, the telephone chimed. The chief editor offered her a national publishing contract. Standing before her easel with tear-streaked cheeks, Maya realized that perseverance transforms fragile dreams into enduring monuments.",
          cn: "在一个细雨淅沥的周二，电话铃声骤然响起。主编正式向她发出了全国范围出版合同的邀约。站在画架前泪流满面的Maya深刻懂得：坚持不懈的力量，终将把脆弱的梦想雕琢成永恒的丰碑。"
        }
      ],
      vocabulary: [
        { word: "terracotta", phonetic: "/ˌterəˈkɑːtə/", cn: "红陶，赤陶色", exampleEn: "Mediterranean villas are celebrated for red terracotta tile roofs.", exampleCn: "地中海别墅以其红陶瓦顶而闻名遐迩。", explanationCn: "名词/形容词，红褐色黏土陶器或陶土色泽。" },
        { word: "perilous", phonetic: "/ˈperələs/", cn: "险恶的，充满危险的", exampleEn: "The mountain climbers survived a perilous blizzard.", exampleCn: "登山队员们在险象环生的暴风雪中幸免于难。", explanationCn: "形容词，带有极大风险危害的情境。" },
        { word: "extinguish", phonetic: "/ɪkˈstɪŋɡwɪʃ/", cn: "扑灭，熄灭", exampleEn: "Firefighters arrived quickly to extinguish the blaze.", exampleCn: "消防员迅速赶到现场将大火彻底扑灭。", explanationCn: "动词，扑灭火焰或磨灭希望火苗。" },
        { word: "kindle", phonetic: "/ˈkɪndl/", cn: "点燃，唤起激发", exampleEn: "Her inspirational teacher kindled a lifelong love for astronomy.", exampleCn: "那位鼓舞人心的老师激发了她对天文学的一生热爱。", explanationCn: "动词，生火点燃，或唤起某种情感与志向。" },
        { word: "rigorous", phonetic: "/ˈrɪɡərəs/", cn: "严密的，严谨刻苦的", exampleEn: "Scientific drug trials require rigorous testing standards.", exampleCn: "新药研发必须遵循极其严格缜密的测试流程。", explanationCn: "形容词，一丝不苟、极其周密的执行状态。" },
        { word: "manuscript", phonetic: "/ˈmænjuskrɪpt/", cn: "手稿，原稿", exampleEn: "The author sent her completed manuscript to three publishers.", exampleCn: "作者将写完的原稿寄送给了三家出版社。", explanationCn: "名词，作家或学者亲笔书写或打印的出版前稿件。" },
        { word: "easel", phonetic: "/ˈiːzl/", cn: "画架", exampleEn: "The artist rested her large canvas securely on the wooden easel.", exampleCn: "画家把大画布牢牢固定在木质画架上。", explanationCn: "名词，作画时用来支撑画布的三角立架。" },
        { word: "perseverance", phonetic: "/ˌpɜːrsəˈvɪrəns/", cn: "坚韧不拔，百折不挠", exampleEn: "Perseverance in the face of hardship leads to genuine mastery.", exampleCn: "面对逆境时的坚韧不拔是通往卓越的必经之路。", explanationCn: "名词，不达目的誓不罢休的顽强毅力。" }
      ],
      quiz: [
        {
          type: "multiple_choice",
          question: "What career passion did Maya pursue despite warnings?",
          questionCn: "面对外界反对，Maya毅然坚持了什么事业热情？",
          options: ["Corporate finance and accounting", "Children's book writing and illustration", "Commercial airline navigation", "Real estate property investment"],
          answer: 1,
          explanationEn: "Maya chose to pursue her love for writing and illustrating children's storybooks.",
          explanationCn: "Maya义无反顾地选择了儿童绘本创作与插画的梦想道路。"
        },
        {
          type: "comprehension",
          question: "What was the title of Maya's manuscript that won a publishing contract?",
          questionCn: "最终赢得出版社青睐的绘本书名是什么？",
          options: [
            "The Power of Friendship in Autumn",
            "The Little Star That Forgot How to Glow",
            "A New Student in Edinburgh",
            "The Clockmaker's Secret Escapement"
          ],
          answer: 1,
          explanationEn: "She dedicated eighteen months to 'The Little Star That Forgot How to Glow'.",
          explanationCn: "她倾心打磨并出版的书名是《遗忘如何闪耀的小星星》。"
        },
        {
          type: "true_false",
          question: "Maya gave up painting immediately when she received her very first rejection.",
          questionCn: "判断题：Maya在收到第一封退稿信后就立刻放弃了画画。",
          options: ["True 正确", "False 错误"],
          answer: 1,
          explanationEn: "Maya persevered through multiple rejections, refining her art until she succeeded.",
          explanationCn: "Maya屡踣屡起，不断修正推敲画风与节奏，直至最终斩获签约。"
        },
        {
          type: "fill_blank",
          question: "Maya demonstrated that relentless ________ transforms dreams into reality.",
          questionCn: "填空题：Maya证明了不屈不挠的________能将梦想化为现实。",
          answer: "perseverance",
          explanationEn: "The noun meaning persistent effort despite difficulty is 'perseverance' (坚持不懈).",
          explanationCn: "代表坚持到底、顽强毅力的词汇是 'perseverance'。"
        },
        {
          type: "multiple_choice",
          question: "What inspired Maya whenever doubts crept into her thoughts?",
          questionCn: "每当自我怀疑袭来，是什么始终在给予Maya无尽的精神支柱？",
          options: [
            "Children's happy smiles when reading her books at the library",
            "The promise of buying expensive gold necklaces",
            "The high salary promised by corporate offices",
            "The fear of disappointing her watchmaker uncle"
          ],
          answer: 0,
          explanationEn: "Seeing children smile while reading her hand-bound books reminded her of her core mission.",
          explanationCn: "在图书馆里看到孩子们捧读她自制画册时纯真幸福的笑容，时刻点亮她的初心。"
        }
      ]
    },
    {
      id: 9,
      title: "Technology and Our Future",
      titleCn: "科技与未来启示录",
      level: "Upper Intermediate",
      levelCn: "中高级",
      readTime: "5 min read",
      image: "/src/assets/images/story_future_dreams_1793593512313.jpg",
      fallbackIcon: "🤖",
      summary: "At a global youth summit, high school scientist Ethan argues that while artificial intelligence can calculate trillions of variables, human empathy remains the irreplaceable compass of progress.",
      summaryCn: "在全球青年峰会上，高中科研选手Ethan发表演说：尽管AI能瞬间运算亿万变量，但人类独有的共情与温度才是指引文明前行的恒久罗盘。",
      paragraphs: [
        {
          en: "Under the soaring glass atrium of the United Nations International Convention Hall in Geneva, hundreds of young thinkers, researchers, and coders from seventy sovereign nations convened. The defining theme of the summit was daunting: 'Stewardship of the Intelligent Era'.",
          cn: "在联合国日内瓦国际会议大厦高耸的穹顶玻璃中庭下，来自全球七十个国家的数百位青年思想者、学者与极客齐聚一堂。本次峰会的辩题发人深省：“智能时代的伦理守望”。"
        },
        {
          en: "On stage stood Ethan, an eighteen-year-old developer who had created an open-source machine learning algorithm capable of predicting freshwater scarcity in drought-stricken agricultural basins.",
          cn: "站在聚光灯下的是十八岁的Ethan。他开发了一款开源机器学习算法，能够精确预测干旱农业流域地下水匮乏的演进态势。"
        },
        {
          en: "\"Today, silicon processors can analyze millions of biomedical scans within milliseconds and compose coherent sonnets in hundreds of dialects,\" Ethan commenced, his voice echoing across the auditorium. \"Yet computational potency without ethical grounding is like a supersonic vessel without a rudder.\"",
          cn: "“今天，硅基芯片能在数毫秒内辨析数百万份生物医学影像，用数百种方言谱写出工整的十四行诗，”Ethan开场说道，声音在大会堂内激荡，“然而，若缺乏伦理内核，再强大的计算算力也不过是一艘没有船舵的超音速盲航之船。”"
        },
        {
          en: "He projected a graph depicting technological proliferation alongside emotional isolation statistics among modern teenagers. While algorithms excel at maximizing engagement metrics, they cannot comfort a grieving classmate or recognize the nuanced moral paradoxes that define the human condition.",
          cn: "他向全场投射了一幅将科技激增与当代青少年心理孤立趋势对比的数据图表。尽管算法极擅长最大化数据沉浸与流量停留，但它无法抚慰一个在角落哭泣的同学，亦无法衡量定义人类文明之复杂的道德悖论。"
        },
        {
          en: "\"We must resist the naive illusion that automated intelligence can absolve us from personal accountability,\" Ethan urged emphatically. \"Technology must remain our loyal instrument, never our surrogate soul. The future will not be judged by the gigawatts we consume, but by the empathy we safeguard.\"",
          cn: "“我们必须屏弃那种幻想——指望自动化工具来免除人类自身的责任担当，”Ethan掷地有声地呼吁，“科技永远应当是我们手中的忠诚器械，而绝不可沦为精神灵魂的替代品。人类未来的高下，不取决于消耗了多少吉瓦能源，而取决于守住了多少仁爱共情。”"
        },
        {
          en: "A profound silence settled over the delegates before thunderous applause erupted. In that poignant moment, the youth of the world pledged to build a future where technological ingenuity serves human dignity above all else.",
          cn: "在雷鸣般的掌声引爆全场之前，会场曾陷入了沉思的寂静。在那动人的一瞬，全球年轻一代达成共识：我们将竭力筑造一个让技术创新无条件服从于生命尊严的崇高未来。"
        }
      ],
      vocabulary: [
        { word: "sovereign", phonetic: "/ˈsɑːvrɪn/", cn: "主权的，拥有独立权力的", exampleEn: "Sovereign nations gathered to discuss climate accords.", exampleCn: "各主权国家代表齐聚一堂共商气候协定。", explanationCn: "形容词/名词，具有独立自主统治权利的政治实体。" },
        { word: "stewardship", phonetic: "/ˈstuːərdʃɪp/", cn: "管理职责，看护照料", exampleEn: "Responsible stewardship of natural resources protects biodiversity.", exampleCn: "对自然资源的负责任管理与看护能够保护生物多样性。", explanationCn: "名词，受托精心照看维护某项公共事物的大局责任。" },
        { word: "potency", phonetic: "/ˈpoʊtnsi/", cn: "效力，强大威力", exampleEn: "The therapeutic potency of the herbal extract was confirmed.", exampleCn: "该植物提取物的治疗效力在临床上得到了印证。", explanationCn: "名词，指影响力、算力或药效达到的高度。" },
        { word: "proliferation", phonetic: "/prəˌlɪfəˈreɪʃn/", cn: "激增，扩散蔓延", exampleEn: "The rapid proliferation of smartphones transformed daily communications.", exampleCn: "智能手机的迅猛普及与激增彻底改变了日常沟通方式。", explanationCn: "名词，快速繁衍、扩散或数量急剧激增。" },
        { word: "paradox", phonetic: "/ˈpærədɑːks/", cn: "悖论，自相矛盾之事", exampleEn: "It is a cruel paradox that plenty coexists with extreme famine.", exampleCn: "物质极大富足与极端饥荒并存是一个残酷的悖论。", explanationCn: "名词，表面自相矛盾但发人深省的情状与观点。" },
        { word: "absolve", phonetic: "/əbˈzɑːlv/", cn: "免除责任，赦免", exampleEn: "Ignorance of the law does not absolve anyone from legal penalties.", exampleCn: "对法律的无知并不能免除任何人的违法惩戒责任。", explanationCn: "动词，免除罪责、免受应尽惩戒与过错责任。" },
        { word: "surrogate", phonetic: "/ˈsɜːrəɡeɪt/", cn: "替代的，代理人", exampleEn: "Virtual interactions cannot become a permanent surrogate for real hugs.", exampleCn: "网络虚拟互动绝不可能永久替代现实中真实的拥抱。", explanationCn: "名词/形容词，充当备选替代物或代理身份。" },
        { word: "ingenuity", phonetic: "/ˌɪndʒəˈnuːəti/", cn: "独创性，聪颖智慧", exampleEn: "Human ingenuity has overcome catastrophic crises throughout history.", exampleCn: "纵观历史，人类的非凡才智与独创性曾化解过无数灭顶灾难。", explanationCn: "名词，富有巧思创造力解决棘手难题的非凡才能。" }
      ],
      quiz: [
        {
          type: "multiple_choice",
          question: "What open-source software had Ethan developed?",
          questionCn: "Ethan开发了什么开源算法工具？",
          options: [
            "An algorithm predicting freshwater scarcity in drought regions",
            "A video game for building virtual rocket ships",
            "An automated stock market day-trading bot",
            "A digital social network for pet owners"
          ],
          answer: 0,
          explanationEn: "Ethan developed an algorithm designed to forecast freshwater scarcity in drought areas.",
          explanationCn: "Ethan构建了一套用于预测干旱流域淡水匮乏趋势的算法。"
        },
        {
          type: "comprehension",
          question: "According to Ethan's speech, what vital quality does artificial intelligence lack?",
          questionCn: "根据Ethan的演讲，人工智能缺失了哪项至关重要的人类特质？",
          options: [
            "Mathematical processing speed",
            "Human empathy and moral paradox resolution",
            "Electricity consumption efficiency",
            "The ability to memorize foreign dictionary words"
          ],
          answer: 1,
          explanationEn: "While AI computes rapidly, it lacks human empathy, moral intuition, and compassionate understanding.",
          explanationCn: "尽管AI运算飞快，但它无法拥有人类独有的道德辨识、同理关怀与共情能力。"
        },
        {
          type: "true_false",
          question: "Ethan urged that humans should allow automated intelligence to absolve them of accountability.",
          questionCn: "判断题：Ethan主张人类应当全权放任自动化智能来免除人类的自身责任。",
          options: ["True 正确", "False 错误"],
          answer: 1,
          explanationEn: "Ethan strictly argued against the naive illusion that machines could absolve human accountability.",
          explanationCn: "Ethan明确警告：绝不能天真地指望机器来代替人类承担伦理责任。"
        },
        {
          type: "fill_blank",
          question: "Ethan insisted that technology must remain a loyal tool and never our ________ soul.",
          questionCn: "填空题：Ethan坚称科技必须作为忠实工具，绝不能沦为我们的________灵魂。",
          answer: "surrogate",
          explanationEn: "The word meaning a substitute or replacement is 'surrogate' (替代的).",
          explanationCn: "代表代替、代理的词汇是 'surrogate'。"
        },
        {
          type: "multiple_choice",
          question: "What core message did the global youth summit ultimately embrace?",
          questionCn: "全球青年峰会最终树立了怎样的核心价值导向？",
          options: [
            "Technological innovation must prioritize human dignity and empathy above all",
            "Human art should be banned to save computing power",
            "All agriculture should be left to unmonitored robots",
            "Students should stop studying linguistics and poetry"
          ],
          answer: 0,
          explanationEn: "The summit concluded that technology must remain in service to human empathy and dignity.",
          explanationCn: "青年峰会一致确立：技术突破必须以守护人类尊严与慈悲共情为根本宗旨。"
        }
      ]
    },
    {
      id: 10,
      title: "A Lesson That Changed My Life",
      titleCn: "蜕变的一课",
      level: "Upper Intermediate",
      levelCn: "中高级",
      readTime: "5 min read",
      image: "/src/assets/images/hero_storybook_adventure_1793593510765.jpg",
      fallbackIcon: "🌱",
      summary: "Reflecting on an austere philosophy professor who challenged her fear of public failure, Chloe discovers that true resilience is born from embracing vulnerability.",
      summaryCn: "回望那位以严苛著称却彻底粉碎她对失败恐惧的哲学教授，Chloe顿悟：真正的坚韧，恰恰源自敢于展露脆弱的勇气。",
      paragraphs: [
        {
          en: "Looking back across a decade of professional tribulations, I trace my foundational intellectual metamorphosis to a rainy Tuesday afternoon in room 402 of the university humanities hall. The course was Epistemology and Human Reason, presided over by Professor Eleanor Vance.",
          cn: "回望十年职场风雨与人生淬炼，我将自己最核心的思想蜕变，溯源至十年前大学人文大楼402室的一个下雨的周二下午。那门课是由Eleanor Vance教授执教的《认识论与人类理性》。"
        },
        {
          en: "Professor Vance was an intimidating octogenarian scholar whose piercing silver eyes could disarm even the most arrogant doctoral candidates. She despised hollow platitudes and tolerated zero intellectual evasion in her seminar debates.",
          cn: "Vance教授是一位年过八旬、气场摄人心魄的学术泰斗，她那一双锐利清澈的银灰色眼眸，能瞬间击穿最自命不凡的博士生伪装。她极度鄙弃空洞的套话，在课堂研讨中绝不允许任何思维层面的含糊逃避。"
        },
        {
          en: "During my junior year, I was an obsessive perfectionist, paralyzed by an irrational dread of verbal missteps. Whenever a question arose, I kept my hands folded stiffly in my lap, dreading that an imperfect synthesis would expose my perceived inadequacies.",
          cn: "大三那年，我是一个有心理洁癖的完美主义者，对在公开场合说错话怀有病态般的恐惧。每次课堂提问，我都把双手僵硬地放在膝头，唯恐一次不严密的发言暴露自己内心的浅薄与局促。"
        },
        {
          en: "That fateful afternoon, Vance fixed her gaze directly upon me. \"Chloe, defend the thesis that subjective perception cannot validate universal objective reality.\" My vocal cords seized; blood rushed to my temples. I stumbled into incoherence before freezing completely.",
          cn: "那个决定命运的下午，Vance教授的视线如寒光般直射向我。“Chloe，请你论证为何主观感知无法直接确立客观普遍真理。”我的声带瞬间僵滞，血液直涌双鬓，结结巴巴语无伦次，随后彻底僵在座位上。"
        },
        {
          en: "Instead of chastising me, Professor Vance stepped toward my desk and placed a fragile, unpolished geode before me. \"Look closely, Chloe,\" she whispered, her gravelly voice suddenly gentle. \"A stone must fracture under intense geological pressure to reveal the amethyst crystals hidden within. Your pride craves an unbroken surface, but wisdom demands the courage to crack open.\"",
          cn: "出乎意料的是，Vance教授并未当众责备我。她缓缓踱步到我桌前，放下一枚质朴粗粝的未打磨晶洞原石。“仔细看它，Chloe，”她沙哑的嗓音忽然变得无比温和，“一块原石必须在剧烈的地质压力下破裂崩解，才能显露出深藏内里的紫水晶。你的虚荣渴求完好无损的外表，但智慧却要求你有破茧碎裂的胆魄。”"
        },
        {
          en: "That succinct epigram shattered my paralyzing fear forever. In the years that followed—through grueling corporate presentations, published essays, and personal trials—I ceased running from potential embarrassment. I realized that failure is not the antithesis of growth; it is its indispensable crucible.",
          cn: "那句精辟至理名言彻底击碎了捆绑我多年的恐惧枷锁。在后来的漫长岁月里——无论是高压的职场路演、学术撰述还是人生的坎坷起伏，我再也不曾因害怕出丑而临阵退缩。我终于读懂：失败从来不是成长的对立面，而是灵魂蜕变不可或缺的熔炉。"
        }
      ],
      vocabulary: [
        { word: "tribulation", phonetic: "/ˌtrɪbjuˈleɪʃn/", cn: "苦难，严峻磨炼", exampleEn: "Through many tribulations and trials, their resolve grew stronger.", exampleCn: "历经重重磨难与考验，他们的意志愈加百折不挠。", explanationCn: "名词，给人带来巨大身心压力的重大考验。" },
        { word: "metamorphosis", phonetic: "/ˌmetəˈmɔːrfəsɪs/", cn: "彻底蜕变，脱胎换骨", exampleEn: "A caterpillar undergoes a complete metamorphosis to become a butterfly.", exampleCn: "毛毛虫经历了一场彻底的蜕变才破茧成蝶。", explanationCn: "名词，形态、思想或生命境界的深刻彻底转变。" },
        { word: "platitude", phonetic: "/ˈplætɪtuːd/", cn: "陈词滥调，空洞口号", exampleEn: "His speech was full of empty political platitudes.", exampleCn: "他的演说充斥着毫无营养的空洞政治套话。", explanationCn: "名词，陈腐、毫无深意与启发性的口头言辞。" },
        { word: "evasion", phonetic: "/ɪˈveɪʒn/", cn: "逃避，回避问题", exampleEn: "Direct cross-examination eliminated any possibility of evasion.", exampleCn: "针锋相对的当庭盘问杜绝了任何模棱两可的回避可能。", explanationCn: "名词，不愿直面正视困难或事实的推脱行为。" },
        { word: "chastise", phonetic: "/tʃæˈstaɪz/", cn: "斥责，严加训斥", exampleEn: "The director chastised the crew for careless mistakes.", exampleCn: "导演为剧组犯下的低级疏忽严加训斥。", explanationCn: "动词，严肃指责或惩戒某种不良行径。" },
        { word: "geode", phonetic: "/ˈdʒiːoʊd/", cn: "晶洞，中空结晶晶石", exampleEn: "Cracking open the dull geode revealed gleaming purple amethyst.", exampleCn: "敲开那枚灰扑扑的晶洞，露出了晶莹剔透的紫色水晶。", explanationCn: "名词，外表粗糙普通、内部布满晶亮矿物的天然空心石。" },
        { word: "epigram", phonetic: "/ˈepɪɡræm/", cn: "警句，讽刺或精辟短诗", exampleEn: "Oscar Wilde was celebrated for his witty and sharp epigrams.", exampleCn: "王尔德以其诙谐机智、辛辣深刻的警句名言闻名于世。", explanationCn: "名词，短小精悍却蕴含深邃哲思的格言警句。" },
        { word: "crucible", phonetic: "/ˈkruːsɪbl/", cn: "严峻考验，熔炉", exampleEn: "The battlefield is the crucible where military leaders are forged.", exampleCn: "硝烟战场是淬炼真正杰出将帅的熔炉。", explanationCn: "名词，耐火坩埚，引申为磨砺出纯金品质的严酷考验环境。" }
      ],
      quiz: [
        {
          type: "multiple_choice",
          question: "What flaw previously crippled Chloe during her junior year?",
          questionCn: "大三时曾经严重困扰Chloe的心理障碍是什么？",
          options: [
            "Excessive procrastination with homework deadlines",
            "An obsessive perfectionism and terror of making verbal mistakes",
            "Physical illness that prevented her from waking up early",
            "Dislike for reading books about classical philosophy"
          ],
          answer: 1,
          explanationEn: "Chloe suffered from perfectionism and was terrified of verbal missteps in public seminars.",
          explanationCn: "Chloe饱受病态完美主义的折磨，极其恐惧在公开研讨中开口说错话。"
        },
        {
          type: "comprehension",
          question: "What physical object did Professor Vance place on Chloe's desk?",
          questionCn: "Vance教授在Chloe桌上放置了什么实物道具？",
          options: [
            "A dictionary of philosophical idioms",
            "An unpolished geode with amethyst crystals inside",
            "An antique Swiss pocket watch",
            "A ticket to the Edinburgh railway station"
          ],
          answer: 1,
          explanationEn: "Professor Vance laid a raw, unpolished geode before her to illustrate vulnerability and inner beauty.",
          explanationCn: "教授在她桌上放下了一块粗糙的晶洞原石，借此阐释打破骄傲方见真彩。"
        },
        {
          type: "true_false",
          question: "Professor Vance yelled angrily and expelled Chloe from the university seminar.",
          questionCn: "判断题：Vance教授怒吼训斥并将Chloe赶出了大学研讨课。",
          options: ["True 正确", "False 错误"],
          answer: 1,
          explanationEn: "Professor Vance approached her gently and offered profound, transformative wisdom.",
          explanationCn: "教授并未发火，而是温厚走上前，给予了她震撼一生的哲思开导。"
        },
        {
          type: "fill_blank",
          question: "Chloe learned that adversity and failure serve as an indispensable ________ of growth.",
          questionCn: "填空题：Chloe领悟到逆境与挫折是促成生命蜕变不可或缺的________。",
          answer: "crucible",
          explanationEn: "The metaphor used in the final sentence is 'crucible' (熔炉/严酷磨炼).",
          explanationCn: "末句中代表灵魂淬炼熔炉的词汇是 'crucible'。"
        },
        {
          type: "multiple_choice",
          question: "What philosophical insight transformed Chloe's mindset for the future?",
          questionCn: "什么哲学顿悟彻底改写了Chloe未来的行事心态？",
          options: [
            "Failure is not the opposite of growth, but its necessary catalyst",
            "Only people who speak with zero mistakes deserve career promotions",
            "Silence is always the safest option in corporate meetings",
            "Old professors always enjoy giving easy grades"
          ],
          answer: 0,
          explanationEn: "She realized failure is not the antithesis of growth, but its indispensable crucible.",
          explanationCn: "她深刻领悟到：失败非但不是成长的绊脚石，反而是脱胎换骨必须经历的试炼场。"
        }
      ]
    }
  ];

  // --- 2. LOCALSTORAGE STATE & GAMIFICATION SYSTEM ---
  const STORAGE_KEY = 'english_adventure_user_data_v1';

  const defaultState = {
    xp: 0,
    streak: 1,
    lastActiveDate: new Date().toISOString().split('T')[0],
    storiesCompleted: {}, // storyId: { completed: true, score: 5, total: 5, date: '...' }
    wordsLearned: {}, // word: true
    audioPlayedCount: 0,
    unlockedBadges: {}
  };

  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) return defaultState;
      const parsed = JSON.parse(saved);
      // Verify streak
      const today = new Date().toISOString().split('T')[0];
      if (parsed.lastActiveDate !== today) {
        const lastDate = new Date(parsed.lastActiveDate);
        const currDate = new Date(today);
        const diffDays = Math.round((currDate - lastDate) / (1000 * 60 * 60 * 24));
        if (diffDays === 1) {
          parsed.streak = (parsed.streak || 1) + 1;
        } else if (diffDays > 1) {
          parsed.streak = 1;
        }
        parsed.lastActiveDate = today;
      }
      return Object.assign({}, defaultState, parsed);
    } catch (e) {
      console.warn("Storage error", e);
      return defaultState;
    }
  }

  let appState = loadState();

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
    } catch (e) {
      console.warn("Save error", e);
    }
    checkBadgeUnlocks();
    updateHeaderStats();
    updateProgressDashboard();
  }

  // --- 3. AUDIO SYNTHESIZER & SPEECH SYNTHESIS ---
  function playSpeech(text) {
    if (!('speechSynthesis' in window)) {
      showToast("Speech synthesis not supported in this browser", "⚠️");
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);

    // Track audio played for gamification
    appState.audioPlayedCount = (appState.audioPlayedCount || 0) + 1;
    saveState();
  }

  // Web Audio chime for correct quiz answers
  function playChime(isCorrect) {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;
      if (isCorrect) {
        // High pleasant major chord chime
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.setValueAtTime(659.25, now + 0.1); // E5
        osc.frequency.setValueAtTime(783.99, now + 0.2); // G5
        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
        osc.start(now);
        osc.stop(now + 0.5);
      } else {
        // Low soft thud
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.setValueAtTime(196, now + 0.15);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.start(now);
        osc.stop(now + 0.35);
      }
    } catch (e) {
      // AudioContext not permitted or supported; quiet fallback
    }
  }

  // --- 4. BADGES DEFINITION ---
  const BADGES = [
    {
      id: "first_adventure",
      name: "First Adventure",
      nameCn: "初入奇境",
      icon: "🌟",
      desc: "Complete your first English story and quiz.",
      check: (s) => Object.keys(s.storiesCompleted || {}).length >= 1
    },
    {
      id: "vocab_explorer",
      name: "Vocabulary Explorer",
      nameCn: "词汇先锋",
      icon: "📚",
      desc: "Explore and master 20+ vocabulary terms.",
      check: (s) => Object.keys(s.wordsLearned || {}).length >= 20
    },
    {
      id: "quiz_master",
      name: "Quiz Master",
      nameCn: "满分学霸",
      icon: "🏆",
      desc: "Achieve 100% on any story comprehension quiz.",
      check: (s) => Object.values(s.storiesCompleted || {}).some(st => st.score === st.total && st.total > 0)
    },
    {
      id: "reading_champion",
      name: "Reading Champion",
      nameCn: "阅读英才",
      icon: "⚡",
      desc: "Complete 5 or more English stories.",
      check: (s) => Object.keys(s.storiesCompleted || {}).length >= 5
    },
    {
      id: "english_hero",
      name: "English Hero",
      nameCn: "传奇领航者",
      icon: "👑",
      desc: "Complete all 10 stories in the library!",
      check: (s) => Object.keys(s.storiesCompleted || {}).length >= 10
    },
    {
      id: "streak_master",
      name: "On Fire",
      nameCn: "持之以恒",
      icon: "🔥",
      desc: "Maintain a learning streak of 3 or more days.",
      check: (s) => (s.streak || 1) >= 3
    },
    {
      id: "sound_explorer",
      name: "Word Polyglot",
      nameCn: "原声探索家",
      icon: "🎧",
      desc: "Listen to 15 native word pronunciations.",
      check: (s) => (s.audioPlayedCount || 0) >= 15
    }
  ];

  function checkBadgeUnlocks() {
    let unlockedNew = false;
    BADGES.forEach(badge => {
      if (!appState.unlockedBadges[badge.id] && badge.check(appState)) {
        appState.unlockedBadges[badge.id] = new Date().toISOString();
        unlockedNew = true;
        showToast(`Unlocked Badge: ${badge.name}! 🏆`, "🎉");
      }
    });
    if (unlockedNew) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
      } catch (e) {}
    }
  }

  // --- 5. UI TOAST & NOTIFICATIONS ---
  let toastTimer = null;
  function showToast(msg, icon = "⭐") {
    const toast = document.getElementById('toast-notice');
    const toastMsg = document.getElementById('toast-msg');
    const toastIcon = document.getElementById('toast-icon');
    if (!toast || !toastMsg) return;
    toastMsg.textContent = msg;
    if (toastIcon) toastIcon.textContent = icon;
    toast.style.display = 'flex';
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.style.display = 'none';
    }, 3200);
  }

  // --- 6. NAVIGATION & ROUTING ---
  function showView(viewId) {
    document.querySelectorAll('.app-view').forEach(view => {
      view.style.display = 'none';
    });
    const target = document.getElementById(`view-${viewId}`);
    if (target) {
      target.style.display = 'block';
    }
    // Update active nav links
    document.querySelectorAll('.nav-link').forEach(link => {
      if (link.getAttribute('data-view') === viewId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
    // Close mobile drawer if open
    const drawer = document.getElementById('mobile-nav-drawer');
    if (drawer) drawer.classList.remove('open');

    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (viewId === 'progress') {
      updateProgressDashboard();
    } else if (viewId === 'vocab') {
      renderAllVocabHub();
    }
  }

  // --- 7. HOME STORIES GRID RENDERING ---
  let currentFilter = 'all';

  function renderStoriesGrid() {
    const container = document.getElementById('stories-grid-container');
    if (!container) return;

    const filtered = STORIES.filter(story => {
      if (currentFilter === 'all') return true;
      return story.level === currentFilter;
    });

    container.innerHTML = filtered.map(story => {
      const isCompleted = appState.storiesCompleted[story.id];
      const bestScore = isCompleted ? `${isCompleted.score}/${isCompleted.total}` : 'Unread';

      return `
        <article class="story-card" data-story-id="${story.id}">
          <div class="story-card-thumb">
            <span class="story-number-badge">Story #${story.id}</span>
            <div class="story-status-badge ${isCompleted ? 'completed' : ''}">
              ${isCompleted ? '✓ Completed' : '⏱ ' + story.readTime}
            </div>
            ${story.image ? `
              <img 
                src="${story.image}" 
                alt="${story.title}" 
                class="story-card-img" 
                loading="lazy" 
                referrerpolicy="no-referrer"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
              />
              <div class="fallback-art-box" style="display:none;">
                <span class="fallback-icon">${story.fallbackIcon}</span>
                <strong>${story.title}</strong>
              </div>
            ` : `
              <div class="fallback-art-box">
                <span class="fallback-icon">${story.fallbackIcon}</span>
                <strong>${story.title}</strong>
              </div>
            `}
          </div>
          <div class="story-card-body">
            <div class="story-card-meta">
              <span class="level-tag">${story.level} (${story.levelCn})</span>
              <span aria-hidden="true">·</span>
              <span>8 Vocab Words</span>
              <span aria-hidden="true">·</span>
              <span>Score: ${bestScore}</span>
            </div>
            <h3 class="story-card-title">${story.title}</h3>
            <p class="story-card-desc">${story.summary}</p>
            <p class="story-card-desc-cn">${story.summaryCn}</p>
            <div class="story-card-footer">
              <span style="font-size:0.82rem; color:var(--forest-700); font-weight:600;">5 Questions</span>
              <button class="card-read-btn" onclick="window.app.openStory(${story.id})">
                <span>${isCompleted ? 'Review Story 复习' : 'Start Reading 开始阅读'}</span>
                <span>➔</span>
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  // --- 8. STORY READER VIEW ---
  let activeStory = null;
  let showTranslation = false;

  function openStory(storyId) {
    const story = STORIES.find(s => s.id === storyId);
    if (!story) return;
    activeStory = story;

    // Set Header & Meta
    document.getElementById('reader-story-meta').textContent = `Story #${story.id} · ${story.level} (${story.levelCn}) · ${story.readTime}`;
    document.getElementById('reader-title').textContent = story.title;
    document.getElementById('reader-cn-title').textContent = story.titleCn;

    const heroImg = document.getElementById('reader-hero-img');
    if (heroImg) {
      heroImg.src = story.image || '';
      heroImg.alt = story.title;
      heroImg.onerror = function() {
        this.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='400'><rect width='100%' height='100%' fill='%23f2ebd9'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='48' fill='%23234734'>" + story.fallbackIcon + "</text></svg>";
      };
    }

    // Render Paragraphs with highlighted vocabulary
    const contentBox = document.getElementById('reader-story-content');
    const vocabWords = story.vocabulary.map(v => v.word.toLowerCase());

    contentBox.innerHTML = story.paragraphs.map((p, idx) => {
      // Highlight matching vocabulary words in paragraph
      let enText = p.en;
      story.vocabulary.forEach(v => {
        const regex = new RegExp(`\\b(${v.word})\\b`, 'gi');
        enText = enText.replace(regex, (match) => {
          return `<span class="vocab-highlight" data-word="${v.word}" data-story-id="${story.id}">${match}</span>`;
        });
      });

      return `
        <div class="story-paragraph-block">
          <p class="story-en-p">${enText}</p>
          <p class="story-cn-p ${showTranslation ? 'visible' : ''}">${p.cn}</p>
        </div>
      `;
    }).join('');

    // Attach listeners to highlighted vocabulary
    contentBox.querySelectorAll('.vocab-highlight').forEach(el => {
      el.addEventListener('click', (e) => {
        const wordText = el.getAttribute('data-word');
        showVocabPopover(wordText, story, e);
      });
    });

    // Render In-Story Vocabulary Deck
    const vocabGrid = document.getElementById('story-vocab-grid');
    vocabGrid.innerHTML = story.vocabulary.map(item => {
      // Record word as exposed
      appState.wordsLearned[item.word] = true;

      return `
        <div class="vocab-card">
          <div class="vocab-card-header">
            <span class="vocab-en-term">${item.word}</span>
            <button class="vocab-speech-btn" onclick="window.app.speak('${item.word}')" title="Pronounce word 听发音">🔊</button>
          </div>
          <div style="font-size:0.8rem; color:var(--text-light);">${item.phonetic}</div>
          <div class="vocab-cn-term">${item.cn}</div>
          <div class="vocab-example-en">"${item.exampleEn}"</div>
          <div class="vocab-example-cn">${item.exampleCn}</div>
        </div>
      `;
    }).join('');

    saveState();
    showView('reader');
  }

  // Floating Vocab Popover Tooltip
  const popover = document.getElementById('vocab-popover');
  function showVocabPopover(wordStr, story, evt) {
    const vocabItem = story.vocabulary.find(v => v.word.toLowerCase() === wordStr.toLowerCase());
    if (!vocabItem || !popover) return;

    document.getElementById('popover-word').textContent = vocabItem.word;
    document.getElementById('popover-cn').textContent = vocabItem.cn;
    document.getElementById('popover-sentence').textContent = vocabItem.exampleEn;
    
    document.getElementById('popover-speech-btn').onclick = () => {
      playSpeech(vocabItem.word);
    };

    // Calculate position
    const rect = evt.target.getBoundingClientRect();
    popover.style.display = 'flex';
    let top = rect.bottom + 8;
    let left = rect.left;
    if (left + 320 > window.innerWidth) {
      left = window.innerWidth - 330;
    }
    popover.style.top = `${top}px`;
    popover.style.left = `${left}px`;
  }

  // Close popover when clicking elsewhere
  document.addEventListener('click', (e) => {
    if (popover && !e.target.closest('.vocab-quick-popover') && !e.target.closest('.vocab-highlight')) {
      popover.style.display = 'none';
    }
  });

  // --- 9. INTERACTIVE 5-QUESTION QUIZ ENGINE ---
  let quizCurrentIndex = 0;
  let quizUserAnswers = [];
  let quizStory = null;
  let hasSubmittedCurrentQuestion = false;

  function launchQuiz(storyId) {
    const story = STORIES.find(s => s.id === storyId) || activeStory;
    if (!story) return;
    quizStory = story;
    quizCurrentIndex = 0;
    quizUserAnswers = new Array(story.quiz.length).fill(null);
    hasSubmittedCurrentQuestion = false;

    // Reset UI
    document.getElementById('quiz-results-container').style.display = 'none';
    document.getElementById('quiz-question-container').style.display = 'flex';
    document.getElementById('quiz-submit-btn').style.display = 'inline-flex';
    document.getElementById('quiz-next-btn').style.display = 'none';
    document.getElementById('quiz-retake-btn').style.display = 'none';
    document.getElementById('quiz-finish-btn').style.display = 'none';

    document.getElementById('quiz-modal-title').textContent = `${story.title} · Quiz (测验)`;
    document.getElementById('quiz-modal').classList.add('open');

    renderQuizQuestion();
  }

  function renderQuizQuestion() {
    const question = quizStory.quiz[quizCurrentIndex];
    if (!question) return;

    hasSubmittedCurrentQuestion = false;

    // Update Progress
    const progressFill = document.getElementById('quiz-progress-fill');
    const pct = ((quizCurrentIndex + 1) / quizStory.quiz.length) * 100;
    progressFill.style.width = `${pct}%`;

    document.getElementById('quiz-question-counter').textContent = `Question ${quizCurrentIndex + 1} of ${quizStory.quiz.length}`;
    
    // Type label
    const typeNames = {
      'multiple_choice': 'Multiple Choice 选择题',
      'true_false': 'True or False 判断题',
      'fill_blank': 'Fill in the Blank 填空题',
      'comprehension': 'Reading Comprehension 阅读理解'
    };
    document.getElementById('quiz-question-type').textContent = typeNames[question.type] || 'Quiz Question';

    document.getElementById('quiz-question-text').textContent = question.question;
    document.getElementById('quiz-question-cn').textContent = question.questionCn;

    const optionsBox = document.getElementById('quiz-options-box');
    const fillBlankBox = document.getElementById('quiz-fill-blank-box');
    const feedbackBox = document.getElementById('quiz-feedback-box');
    
    feedbackBox.className = 'quiz-feedback-box';
    feedbackBox.style.display = 'none';
    document.getElementById('quiz-submit-btn').style.display = 'inline-flex';
    document.getElementById('quiz-next-btn').style.display = 'none';

    if (question.type === 'fill_blank') {
      optionsBox.style.display = 'none';
      fillBlankBox.style.display = 'flex';
      const blankInput = document.getElementById('quiz-blank-input');
      blankInput.value = '';
      blankInput.disabled = false;
      blankInput.focus();
    } else {
      fillBlankBox.style.display = 'none';
      optionsBox.style.display = 'flex';
      
      optionsBox.innerHTML = question.options.map((opt, i) => {
        const letters = ['A', 'B', 'C', 'D'];
        return `
          <button class="option-choice-btn" data-index="${i}">
            <span class="option-letter">${letters[i] || i + 1}</span>
            <span>${opt}</span>
          </button>
        `;
      }).join('');

      optionsBox.querySelectorAll('.option-choice-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          if (hasSubmittedCurrentQuestion) return;
          optionsBox.querySelectorAll('.option-choice-btn').forEach(b => b.classList.remove('selected'));
          btn.classList.add('selected');
        });
      });
    }
  }

  function submitCurrentAnswer() {
    const question = quizStory.quiz[quizCurrentIndex];
    if (!question || hasSubmittedCurrentQuestion) return;

    let selectedAnswer = null;
    let isCorrect = false;

    if (question.type === 'fill_blank') {
      const input = document.getElementById('quiz-blank-input');
      const val = input.value.trim().toLowerCase();
      if (!val) {
        showToast("Please enter an answer before submitting! 请输入答案", "⚠️");
        return;
      }
      selectedAnswer = val;
      isCorrect = (val === String(question.answer).toLowerCase());
      input.disabled = true;
    } else {
      const selectedBtn = document.querySelector('.option-choice-btn.selected');
      if (!selectedBtn) {
        showToast("Please select an answer choice! 请选择一个选项", "⚠️");
        return;
      }
      const selectedIdx = parseInt(selectedBtn.getAttribute('data-index'), 10);
      selectedAnswer = selectedIdx;
      isCorrect = (selectedIdx === question.answer);

      // Highlight choices
      const allButtons = document.querySelectorAll('.option-choice-btn');
      allButtons.forEach((btn, i) => {
        btn.disabled = true;
        if (i === question.answer) {
          btn.classList.add('correct');
        } else if (i === selectedIdx && !isCorrect) {
          btn.classList.add('incorrect');
        }
      });
    }

    hasSubmittedCurrentQuestion = true;
    quizUserAnswers[quizCurrentIndex] = isCorrect;
    playChime(isCorrect);

    // Show Feedback Box
    const feedbackBox = document.getElementById('quiz-feedback-box');
    feedbackBox.style.display = 'flex';
    feedbackBox.className = `quiz-feedback-box ${isCorrect ? 'correct' : 'incorrect'}`;
    
    document.getElementById('feedback-status-title').textContent = isCorrect 
      ? '✓ Correct! Excellent comprehension! (回答正确)' 
      : '✗ Not quite right (需要再思考一下)';
    document.getElementById('feedback-en-text').textContent = question.explanationEn;
    document.getElementById('feedback-cn-text').textContent = question.explanationCn;

    document.getElementById('quiz-submit-btn').style.display = 'none';

    // If last question, show "See Results", otherwise "Next Question"
    if (quizCurrentIndex < quizStory.quiz.length - 1) {
      const nextBtn = document.getElementById('quiz-next-btn');
      nextBtn.style.display = 'inline-flex';
      nextBtn.querySelector('span').textContent = 'Next Question 下一题 ➔';
    } else {
      const nextBtn = document.getElementById('quiz-next-btn');
      nextBtn.style.display = 'inline-flex';
      nextBtn.querySelector('span').textContent = 'View Quiz Results 查看测验成绩 ➔';
    }
  }

  function handleNextQuestion() {
    if (quizCurrentIndex < quizStory.quiz.length - 1) {
      quizCurrentIndex++;
      renderQuizQuestion();
    } else {
      showQuizResults();
    }
  }

  function showQuizResults() {
    document.getElementById('quiz-question-container').style.display = 'none';
    document.getElementById('quiz-submit-btn').style.display = 'none';
    document.getElementById('quiz-next-btn').style.display = 'none';

    const resultsCard = document.getElementById('quiz-results-container');
    resultsCard.style.display = 'flex';

    const correctCount = quizUserAnswers.filter(Boolean).length;
    const totalCount = quizStory.quiz.length;
    const pct = Math.round((correctCount / totalCount) * 100);

    // XP calculation: 20 XP per correct question, +50 XP bonus for completion, +50 XP for perfect
    let earnedXP = correctCount * 20 + 50;
    if (correctCount === totalCount) earnedXP += 50;

    appState.xp += earnedXP;

    // Record Story Completion in appState
    const prev = appState.storiesCompleted[quizStory.id];
    if (!prev || correctCount >= prev.score) {
      appState.storiesCompleted[quizStory.id] = {
        completed: true,
        score: correctCount,
        total: totalCount,
        percentage: pct,
        date: new Date().toISOString()
      };
    }

    saveState();

    // Render Stars
    let starsStr = '';
    const starCount = Math.max(1, Math.round((correctCount / totalCount) * 5));
    for (let s = 0; s < 5; s++) {
      starsStr += (s < starCount) ? '⭐' : '☆';
    }
    document.getElementById('results-stars').textContent = starsStr;
    document.getElementById('results-score-pct').textContent = `${pct}%`;
    document.getElementById('results-score-detail').textContent = `${correctCount} out of ${totalCount} Questions Correct (${correctCount}/${totalCount} 题正确)`;

    // Feedback message
    let message = '';
    if (pct === 100) {
      message = 'Outstanding perfection! You understood every detail of the story with flying colors. 完美无瑕！你完全掌握了本篇故事的精髓。';
    } else if (pct >= 80) {
      message = 'Great job! You have strong reading comprehension and vocabulary retention. 非常棒！你展现了优秀的英语阅读理解力。';
    } else if (pct >= 60) {
      message = 'Good effort! Review the vocabulary cards below to strengthen your understanding. 良好！再温习一下生词卡片会让理解更加透彻。';
    } else {
      message = 'Keep practicing! Learning takes time and every attempt brings you closer to fluency. 加油！阅读贵在坚持，多看几遍一定会有巨大进步。';
    }
    document.getElementById('results-feedback-message').textContent = message;
    document.getElementById('results-xp-text').textContent = `+${earnedXP} XP Earned! 获得冒险经验`;

    document.getElementById('quiz-retake-btn').style.display = 'inline-flex';
    document.getElementById('quiz-finish-btn').style.display = 'inline-flex';
  }

  // --- 10. VOCABULARY REVIEW HUB ---
  function renderAllVocabHub() {
    const grid = document.getElementById('all-vocab-grid');
    const searchVal = (document.getElementById('vocab-search-input')?.value || '').toLowerCase().trim();
    const storySelectVal = document.getElementById('vocab-story-select')?.value || 'all';

    if (!grid) return;

    let allWords = [];
    STORIES.forEach(story => {
      if (storySelectVal !== 'all' && String(story.id) !== storySelectVal) return;
      story.vocabulary.forEach(v => {
        allWords.push({
          ...v,
          storyId: story.id,
          storyTitle: story.title
        });
      });
    });

    if (searchVal) {
      allWords = allWords.filter(item => {
        return item.word.toLowerCase().includes(searchVal) ||
               item.cn.includes(searchVal) ||
               item.exampleEn.toLowerCase().includes(searchVal);
      });
    }

    if (allWords.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align:center; padding:3rem; color:var(--text-muted); background:var(--bg-card); border-radius:var(--radius-lg);">
          <div style="font-size:2.5rem; margin-bottom:0.5rem;">🔍</div>
          <h4>No matching vocabulary found (未找到匹配的词汇)</h4>
          <p style="font-size:0.9rem;">Try searching another keyword or select "All Stories".</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = allWords.map(item => {
      return `
        <div class="vocab-card">
          <div class="vocab-card-header">
            <span class="vocab-en-term">${item.word}</span>
            <button class="vocab-speech-btn" onclick="window.app.speak('${item.word}')" title="Pronounce word 朗读发音">🔊</button>
          </div>
          <div style="font-size:0.8rem; color:var(--text-light);">${item.phonetic} · Story #${item.storyId}</div>
          <div class="vocab-cn-term">${item.cn}</div>
          <div class="vocab-example-en">"${item.exampleEn}"</div>
          <div class="vocab-example-cn">${item.exampleCn}</div>
        </div>
      `;
    }).join('');
  }

  // --- 11. MY PROGRESS DASHBOARD ---
  function updateProgressDashboard() {
    const completedStoriesCount = Object.keys(appState.storiesCompleted || {}).length;
    const totalStories = STORIES.length;

    // Header stats
    const streakEl = document.getElementById('nav-streak-val');
    const xpEl = document.getElementById('nav-xp-val');
    if (streakEl) streakEl.textContent = `${appState.streak || 1} Day`;
    if (xpEl) xpEl.textContent = `${appState.xp || 0} XP`;

    // Home progress bar
    const homeProgressCount = document.getElementById('home-progress-count');
    const homeProgressBar = document.getElementById('home-progress-bar');
    if (homeProgressCount) {
      homeProgressCount.textContent = `${completedStoriesCount} / ${totalStories} Stories Completed`;
    }
    if (homeProgressBar) {
      const pct = Math.round((completedStoriesCount / totalStories) * 100);
      homeProgressBar.style.width = `${pct}%`;
    }

    // Level Title
    const homeLevelTitle = document.getElementById('home-level-title');
    if (homeLevelTitle) {
      let lvl = "Novice Explorer (初级探索者)";
      if (appState.xp >= 1500) lvl = "English Legend (英语传奇学者)";
      else if (appState.xp >= 1000) lvl = "Reading Champion (领航阅读官)";
      else if (appState.xp >= 600) lvl = "Word Wizard (词汇魔法师)";
      else if (appState.xp >= 250) lvl = "Story Adventurer (故事冒险家)";
      homeLevelTitle.textContent = lvl;
    }

    // Dashboard metrics
    const dashCompleted = document.getElementById('dash-stories-completed');
    const dashXp = document.getElementById('dash-total-xp');
    const dashAvg = document.getElementById('dash-avg-score');
    const dashVocab = document.getElementById('dash-vocab-learned');
    const dashStreak = document.getElementById('dash-streak');

    if (dashCompleted) dashCompleted.textContent = `${completedStoriesCount} / ${totalStories}`;
    if (dashXp) dashXp.textContent = `${appState.xp}`;
    if (dashStreak) dashStreak.textContent = `${appState.streak || 1} Days`;
    if (dashVocab) {
      const wordsCount = Object.keys(appState.wordsLearned || {}).length;
      dashVocab.textContent = `${wordsCount} / 80`;
    }

    if (dashAvg) {
      const scores = Object.values(appState.storiesCompleted || {}).map(s => s.percentage || 0);
      if (scores.length === 0) {
        dashAvg.textContent = `0%`;
      } else {
        const avg = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
        dashAvg.textContent = `${avg}%`;
      }
    }

    // Badges Grid
    const badgesGrid = document.getElementById('badges-grid');
    if (badgesGrid) {
      badgesGrid.innerHTML = BADGES.map(badge => {
        const isUnlocked = Boolean(appState.unlockedBadges[badge.id]);
        return `
          <div class="badge-card ${isUnlocked ? 'unlocked' : 'locked'}">
            <div class="badge-icon-box">${badge.icon}</div>
            <div class="badge-name">${badge.name}</div>
            <div style="font-family:var(--font-chinese); font-size:0.8rem; color:var(--text-chinese);">${badge.nameCn}</div>
            <div class="badge-desc">${badge.desc}</div>
            <div class="badge-status-tag" style="color:${isUnlocked ? 'var(--success)' : 'var(--text-light)'};">
              ${isUnlocked ? '✓ Unlocked 已解锁' : '🔒 Locked 未解锁'}
            </div>
          </div>
        `;
      }).join('');
    }

    // Story-by-story table
    const tableBody = document.getElementById('progress-table-body');
    if (tableBody) {
      tableBody.innerHTML = STORIES.map(story => {
        const record = appState.storiesCompleted[story.id];
        const statusText = record ? '✓ Completed 已完成' : 'Unread 未读';
        const scoreText = record ? `${record.score} / ${record.total} (${record.percentage}%)` : '—';

        return `
          <tr>
            <td style="font-weight:700;">#${story.id}</td>
            <td>
              <strong>${story.title}</strong>
              <div style="font-family:var(--font-chinese); font-size:0.82rem; color:var(--text-chinese);">${story.titleCn}</div>
            </td>
            <td><span class="level-tag">${story.level}</span></td>
            <td><span style="color:${record ? 'var(--success)' : 'var(--text-muted)'}; font-weight:600;">${statusText}</span></td>
            <td class="table-score">${scoreText}</td>
            <td>
              <button class="card-read-btn" onclick="window.app.openStory(${story.id})">
                ${record ? 'Review 复习' : 'Read 阅读'}
              </button>
            </td>
          </tr>
        `;
      }).join('');
    }
  }

  function updateHeaderStats() {
    const streakEl = document.getElementById('nav-streak-val');
    const xpEl = document.getElementById('nav-xp-val');
    if (streakEl) streakEl.textContent = `${appState.streak || 1} Day`;
    if (xpEl) xpEl.textContent = `${appState.xp || 0} XP`;
  }

  // --- 12. EVENT LISTENERS INITIALIZATION ---
  function initEvents() {
    // Top nav links
    document.querySelectorAll('[data-view]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const viewId = link.getAttribute('data-view');
        showView(viewId);
      });
    });

    // Brand link
    const brandLink = document.getElementById('brand-link');
    if (brandLink) {
      brandLink.addEventListener('click', (e) => {
        e.preventDefault();
        showView('home');
      });
    }

    // Mobile menu toggle
    const mobileBtn = document.getElementById('mobile-toggle-btn');
    const drawer = document.getElementById('mobile-nav-drawer');
    if (mobileBtn && drawer) {
      mobileBtn.addEventListener('click', () => {
        drawer.classList.toggle('open');
      });
    }

    // Hero buttons
    const heroStartBtn = document.getElementById('hero-start-btn');
    if (heroStartBtn) {
      heroStartBtn.addEventListener('click', () => {
        document.getElementById('stories-section')?.scrollIntoView({ behavior: 'smooth' });
      });
    }
    const heroVocabBtn = document.getElementById('hero-vocab-btn');
    if (heroVocabBtn) {
      heroVocabBtn.addEventListener('click', () => {
        showView('vocab');
      });
    }

    // Filter tabs
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.getAttribute('data-filter');
        renderStoriesGrid();
      });
    });

    // Reader back button
    const backBtn = document.getElementById('reader-back-btn');
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        showView('home');
      });
    }

    // Font size adjuster
    document.querySelectorAll('.font-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.font-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const size = btn.getAttribute('data-font');
        const prose = document.getElementById('reader-story-content');
        if (prose) {
          prose.className = `story-prose font-${size}`;
        }
      });
    });

    // Translation toggle button
    const transToggle = document.getElementById('translation-toggle-btn');
    if (transToggle) {
      transToggle.addEventListener('click', () => {
        showTranslation = !showTranslation;
        transToggle.classList.toggle('active', showTranslation);
        document.getElementById('trans-toggle-text').textContent = showTranslation 
          ? 'Hide Chinese Translation 隐藏译文' 
          : 'Show Chinese Translation 显示译文';
        document.querySelectorAll('.story-cn-p').forEach(p => {
          p.classList.toggle('visible', showTranslation);
        });
      });
    }

    // Take quiz button in reader
    const takeQuizBtn = document.getElementById('reader-take-quiz-btn');
    if (takeQuizBtn) {
      takeQuizBtn.addEventListener('click', () => {
        if (activeStory) {
          launchQuiz(activeStory.id);
        }
      });
    }

    // Quiz modal close
    const quizCloseBtn = document.getElementById('quiz-close-btn');
    if (quizCloseBtn) {
      quizCloseBtn.addEventListener('click', () => {
        document.getElementById('quiz-modal').classList.remove('open');
      });
    }

    // Quiz action buttons
    const quizSubmitBtn = document.getElementById('quiz-submit-btn');
    if (quizSubmitBtn) {
      quizSubmitBtn.addEventListener('click', submitCurrentAnswer);
    }
    const quizNextBtn = document.getElementById('quiz-next-btn');
    if (quizNextBtn) {
      quizNextBtn.addEventListener('click', handleNextQuestion);
    }
    const quizRetakeBtn = document.getElementById('quiz-retake-btn');
    if (quizRetakeBtn) {
      quizRetakeBtn.addEventListener('click', () => {
        if (quizStory) launchQuiz(quizStory.id);
      });
    }
    const quizFinishBtn = document.getElementById('quiz-finish-btn');
    if (quizFinishBtn) {
      quizFinishBtn.addEventListener('click', () => {
        document.getElementById('quiz-modal').classList.remove('open');
        showView('home');
      });
    }

    // Vocab search and filter listeners
    const searchInput = document.getElementById('vocab-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', renderAllVocabHub);
    }
    const storySelect = document.getElementById('vocab-story-select');
    if (storySelect) {
      storySelect.addEventListener('change', renderAllVocabHub);
    }
  }

  // --- 13. GLOBAL APP OBJECT EXPOSURE ---
  window.app = {
    openStory: openStory,
    launchQuiz: launchQuiz,
    speak: playSpeech,
    showView: showView
  };

  // --- 14. INITIAL BOOTSTRAP ---
  document.addEventListener('DOMContentLoaded', () => {
    initEvents();
    renderStoriesGrid();
    updateProgressDashboard();
    renderAllVocabHub();
  });

})();
