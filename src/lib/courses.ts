import type { Lang } from "@/lib/i18n";

export type Subject = { name: string; summary: string; tips: string[] };
export type Level = { id: string; name: string; age: string; subjects: Subject[] };

type CoursesContent = {
  title: string;
  subtitle: string;
  intro: string;
  summaryLabel: string;
  tipsLabel: string;
  levels: Level[];
};

export const coursesContent: Record<Lang, CoursesContent> = {
  fr: {
    title: "Cours & résumés",
    subtitle: "Primaire, collège, lycée : l'essentiel de chaque matière en fiches courtes.",
    intro:
      "Chaque fiche donne le résumé du programme et les astuces qui font gagner du temps. Lis la fiche, ferme la page, puis réécris ce que tu as retenu : c'est la meilleure façon d'apprendre vite.",
    summaryLabel: "Résumé",
    tipsLabel: "Astuces pour retenir",
    levels: [
      {
        id: "primaire",
        name: "Primaire",
        age: "6 - 11 ans",
        subjects: [
          {
            name: "Mathématiques",
            summary:
              "Nombres jusqu'au million, les quatre opérations, tables de multiplication, fractions simples, mesures (longueur, masse, temps), géométrie de base (carré, rectangle, triangle, cercle) et périmètre.",
            tips: [
              "Une table de multiplication par jour, révisée le lendemain.",
              "Dessine le problème avant de calculer.",
              "Vérifie toujours l'ordre de grandeur du résultat.",
            ],
          },
          {
            name: "Français / Langue",
            summary:
              "Lecture fluide, vocabulaire, nature et fonction des mots, accords sujet-verbe, les temps de base (présent, futur, imparfait, passé composé) et rédaction de textes courts.",
            tips: [
              "Lis 10 minutes à voix haute chaque soir.",
              "Note 5 mots nouveaux par semaine avec un exemple.",
              "Relis ta dictée en cherchant seulement les accords.",
            ],
          },
          {
            name: "Sciences & découverte du monde",
            summary:
              "Le corps humain, les besoins des plantes et des animaux, la matière (solide, liquide, gaz), l'eau, l'électricité simple, le système solaire et l'environnement.",
            tips: [
              "Fais une expérience simple à la maison pour chaque leçon.",
              "Dessine un schéma légendé plutôt qu'un long texte.",
            ],
          },
          {
            name: "Histoire-Géographie",
            summary:
              "Les grandes périodes historiques, la frise chronologique, lire une carte, les continents et océans, la ville et la campagne, les repères de son pays.",
            tips: [
              "Construis une frise sur une feuille et complète-la à chaque leçon.",
              "Associe chaque date à une image.",
            ],
          },
        ],
      },
      {
        id: "college",
        name: "Collège",
        age: "11 - 15 ans",
        subjects: [
          {
            name: "Mathématiques",
            summary:
              "Nombres relatifs, fractions, puissances, calcul littéral et équations du premier degré, proportionnalité et pourcentages, théorèmes de Thalès et Pythagore, aires et volumes, statistiques et probabilités simples.",
            tips: [
              "Apprends chaque théorème avec sa figure et sa condition d'usage.",
              "Refais les exercices faux 3 jours plus tard sans regarder la correction.",
            ],
          },
          {
            name: "Physique-Chimie",
            summary:
              "États et changements d'état de la matière, atomes et molécules, réactions chimiques et conservation de la masse, circuits électriques (tension, intensité, loi d'Ohm), lumière, forces et gravitation.",
            tips: [
              "Retiens les formules avec leurs unités (U en V, I en A, R en Ω).",
              "Rédige chaque exercice : données → formule → calcul → unité.",
            ],
          },
          {
            name: "SVT",
            summary:
              "Cellule et organisation du vivant, nutrition, respiration et circulation, reproduction, génétique de base, évolution, géologie (volcans, séismes, tectonique) et écosystèmes.",
            tips: [
              "Transforme chaque leçon en schéma fonctionnel avec des flèches.",
              "Explique la leçon à voix haute à quelqu'un.",
            ],
          },
          {
            name: "Langues (français, anglais, arabe...)",
            summary:
              "Grammaire et conjugaison, compréhension de texte, expression écrite structurée, vocabulaire thématique, figures de style et analyse d'un texte littéraire.",
            tips: [
              "10 flashcards de vocabulaire par semaine, révisées à J+1, J+3, J+7.",
              "Écoute des vidéos courtes dans la langue étudiée.",
            ],
          },
          {
            name: "Histoire-Géographie",
            summary:
              "Antiquité, Moyen Âge, révolutions, guerres mondiales, décolonisation ; en géographie : population, urbanisation, mondialisation, développement durable et étude de documents.",
            tips: [
              "Une fiche par chapitre : 5 dates, 5 mots-clés, 3 personnages.",
              "Entraîne-toi à répondre en analysant un document.",
            ],
          },
        ],
      },
      {
        id: "lycee",
        name: "Lycée",
        age: "15 - 18 ans",
        subjects: [
          {
            name: "Mathématiques",
            summary:
              "Fonctions (affines, polynômes, exponentielle, logarithme), dérivation et variations, suites, limites, trigonométrie, vecteurs et géométrie analytique, probabilités et statistiques, intégrales.",
            tips: [
              "Maîtrise d'abord les dérivées usuelles : tout en découle.",
              "Fais un exercice type par notion chaque semaine, chronométré.",
            ],
          },
          {
            name: "Physique-Chimie",
            summary:
              "Mécanique et lois de Newton, énergie, ondes et optique, électricité, structure de la matière, quantité de matière et concentration, réactions acido-basiques, oxydoréduction et cinétique.",
            tips: [
              "Écris la liste des formules par chapitre et leurs conditions.",
              "Vérifie l'homogénéité des unités avant de conclure.",
            ],
          },
          {
            name: "SVT / Biologie",
            summary:
              "ADN, expression génétique et mutations, division cellulaire, immunité, neurones et communication nerveuse, hormones, écologie, climat et géologie interne de la Terre.",
            tips: [
              "Résume chaque mécanisme en 5 étapes numérotées.",
              "Travaille les exercices d'analyse de documents, très fréquents à l'examen.",
            ],
          },
          {
            name: "Philosophie / Sciences humaines",
            summary:
              "Notions clés (conscience, liberté, vérité, justice, technique, État), méthode de la dissertation et du commentaire, repères d'auteurs et construction d'un argument.",
            tips: [
              "Une fiche par notion : définition, problème, 2 auteurs, 1 exemple.",
              "Apprends à formuler une problématique en une phrase.",
            ],
          },
          {
            name: "Langues & littérature",
            summary:
              "Analyse littéraire, mouvements et genres, argumentation, essai et synthèse de documents, expression orale et grammaire avancée.",
            tips: [
              "Prépare des citations courtes réutilisables.",
              "Entraîne-toi à l'oral en t'enregistrant 2 minutes.",
            ],
          },
        ],
      },
    ],
  },
  en: {
    title: "Courses & summaries",
    subtitle: "Primary, middle and high school: the essentials of every subject in short sheets.",
    intro:
      "Each sheet gives the summary of the syllabus plus the tips that save time. Read it, close the page, then rewrite what you remember: that is the fastest way to learn.",
    summaryLabel: "Summary",
    tipsLabel: "Memory tips",
    levels: [
      {
        id: "primary",
        name: "Primary school",
        age: "6 - 11 years",
        subjects: [
          {
            name: "Mathematics",
            summary:
              "Numbers up to a million, the four operations, times tables, simple fractions, measurement (length, mass, time), basic geometry (square, rectangle, triangle, circle) and perimeter.",
            tips: [
              "One times table a day, reviewed the next day.",
              "Draw the problem before calculating.",
              "Always check the order of magnitude of your answer.",
            ],
          },
          {
            name: "Language / Reading & writing",
            summary:
              "Fluent reading, vocabulary, word classes, subject-verb agreement, basic tenses and writing short texts.",
            tips: [
              "Read aloud 10 minutes every evening.",
              "Note 5 new words a week with an example sentence.",
            ],
          },
          {
            name: "Science & discovery",
            summary:
              "The human body, needs of plants and animals, states of matter, water, simple electricity, the solar system and the environment.",
            tips: [
              "Do a simple experiment at home for each lesson.",
              "Draw a labelled diagram instead of a long text.",
            ],
          },
          {
            name: "History & Geography",
            summary:
              "Main historical periods, timelines, reading a map, continents and oceans, town and countryside, landmarks of your country.",
            tips: ["Build a timeline and complete it after each lesson.", "Link every date to an image."],
          },
        ],
      },
      {
        id: "middle",
        name: "Middle school",
        age: "11 - 15 years",
        subjects: [
          {
            name: "Mathematics",
            summary:
              "Negative numbers, fractions, powers, algebra and linear equations, proportionality and percentages, Thales and Pythagoras, areas and volumes, statistics and basic probability.",
            tips: [
              "Learn each theorem with its figure and conditions of use.",
              "Redo wrong exercises 3 days later without the correction.",
            ],
          },
          {
            name: "Physics & Chemistry",
            summary:
              "States of matter, atoms and molecules, chemical reactions and conservation of mass, electric circuits (voltage, current, Ohm's law), light, forces and gravity.",
            tips: [
              "Learn formulas together with their units (U in V, I in A, R in Ω).",
              "Write every exercise as: data → formula → calculation → unit.",
            ],
          },
          {
            name: "Biology & Earth science",
            summary:
              "Cells, nutrition, respiration and circulation, reproduction, basic genetics, evolution, geology (volcanoes, earthquakes, plate tectonics) and ecosystems.",
            tips: [
              "Turn each lesson into a diagram with arrows.",
              "Explain the lesson out loud to someone.",
            ],
          },
          {
            name: "Languages",
            summary:
              "Grammar and conjugation, reading comprehension, structured writing, thematic vocabulary, figures of speech and literary analysis.",
            tips: [
              "10 vocabulary flashcards a week, reviewed at D+1, D+3, D+7.",
              "Watch short videos in the language you study.",
            ],
          },
          {
            name: "History & Geography",
            summary:
              "Antiquity, Middle Ages, revolutions, world wars, decolonisation; in geography: population, urbanisation, globalisation and sustainable development.",
            tips: [
              "One sheet per chapter: 5 dates, 5 keywords, 3 people.",
              "Practise answering by analysing a document.",
            ],
          },
        ],
      },
      {
        id: "high",
        name: "High school",
        age: "15 - 18 years",
        subjects: [
          {
            name: "Mathematics",
            summary:
              "Functions (linear, polynomial, exponential, logarithm), derivatives and variations, sequences, limits, trigonometry, vectors and analytic geometry, probability, integrals.",
            tips: [
              "Master the standard derivatives first: everything follows.",
              "Do one timed model exercise per topic each week.",
            ],
          },
          {
            name: "Physics & Chemistry",
            summary:
              "Mechanics and Newton's laws, energy, waves and optics, electricity, structure of matter, moles and concentration, acid-base reactions, redox and kinetics.",
            tips: [
              "List the formulas of each chapter with their conditions.",
              "Check unit consistency before concluding.",
            ],
          },
          {
            name: "Biology",
            summary:
              "DNA, gene expression and mutations, cell division, immunity, neurons, hormones, ecology, climate and the Earth's internal geology.",
            tips: [
              "Summarise every mechanism in 5 numbered steps.",
              "Practise document-analysis questions: they dominate exams.",
            ],
          },
          {
            name: "Philosophy / Humanities",
            summary:
              "Key notions (consciousness, freedom, truth, justice, technology, the State), essay and commentary method, key authors and argument building.",
            tips: [
              "One sheet per notion: definition, problem, 2 authors, 1 example.",
              "Learn to state a problem in a single sentence.",
            ],
          },
          {
            name: "Languages & literature",
            summary:
              "Literary analysis, movements and genres, argumentation, essays and document synthesis, oral expression and advanced grammar.",
            tips: [
              "Prepare short reusable quotations.",
              "Practise speaking by recording yourself for 2 minutes.",
            ],
          },
        ],
      },
    ],
  },
  ar: {
    title: "الدروس والملخّصات",
    subtitle: "الابتدائي، المتوسط والثانوي: أهم ما في كل مادة في بطاقات قصيرة.",
    intro:
      "كل بطاقة تقدّم ملخّص البرنامج والحيل التي توفّر الوقت. اقرأ البطاقة ثم أغلق الصفحة وأعد كتابة ما حفظته: هذه أسرع طريقة للتعلّم.",
    summaryLabel: "الملخّص",
    tipsLabel: "حيل للحفظ",
    levels: [
      {
        id: "ibtidai",
        name: "الابتدائي",
        age: "6 - 11 سنة",
        subjects: [
          {
            name: "الرياضيات",
            summary:
              "الأعداد إلى المليون، العمليات الأربع، جداول الضرب، الكسور البسيطة، القياسات (الطول، الكتلة، الزمن)، الهندسة الأساسية (المربع، المستطيل، المثلث، الدائرة) والمحيط.",
            tips: [
              "جدول ضرب واحد كل يوم، تُراجعه في الغد.",
              "ارسم المسألة قبل أن تحسب.",
              "تحقّق دائماً من معقولية النتيجة.",
            ],
          },
          {
            name: "اللغة (عربية / فرنسية)",
            summary:
              "القراءة السليمة، الرصيد اللغوي، أنواع الكلمات، مطابقة الفعل بالفاعل، الأزمنة الأساسية وكتابة نصوص قصيرة.",
            tips: ["اقرأ بصوت مرتفع 10 دقائق كل مساء.", "سجّل 5 كلمات جديدة كل أسبوع مع مثال."],
          },
          {
            name: "التربية العلمية",
            summary:
              "جسم الإنسان، حاجات النبات والحيوان، حالات المادة، الماء، الكهرباء البسيطة، النظام الشمسي والبيئة.",
            tips: ["قم بتجربة بسيطة في البيت لكل درس.", "ارسم مخططاً معنوناً بدل نص طويل."],
          },
          {
            name: "التاريخ والجغرافيا",
            summary: "الحقب التاريخية الكبرى، الخط الزمني، قراءة الخريطة، القارات والمحيطات، المدينة والريف، معالم بلدك.",
            tips: ["أنشئ خطاً زمنياً وأكمله بعد كل درس.", "اربط كل تاريخ بصورة."],
          },
        ],
      },
      {
        id: "moutawassit",
        name: "المتوسط",
        age: "11 - 15 سنة",
        subjects: [
          {
            name: "الرياضيات",
            summary:
              "الأعداد النسبية، الكسور، القوى، الحساب الحرفي والمعادلات من الدرجة الأولى، التناسبية والنسب المئوية، طاليس وفيثاغورس، المساحات والحجوم، الإحصاء والاحتمالات.",
            tips: ["احفظ كل مبرهنة مع شكلها وشروط استعمالها.", "أعد التمارين الخاطئة بعد 3 أيام دون تصحيح."],
          },
          {
            name: "الفيزياء والكيمياء",
            summary:
              "حالات المادة وتحولاتها، الذرات والجزيئات، التفاعلات الكيميائية وانحفاظ الكتلة، الدارات الكهربائية (التوتر، الشدة، قانون أوم)، الضوء، القوى والجاذبية.",
            tips: ["احفظ القوانين مع وحداتها (U بالفولط، I بالأمبير).", "اكتب: المعطيات ← القانون ← الحساب ← الوحدة."],
          },
          {
            name: "علوم الطبيعة والحياة",
            summary:
              "الخلية، التغذية، التنفس والدوران، التكاثر، أساسيات الوراثة، التطور، الجيولوجيا (البراكين، الزلازل، الصفائح) والأنظمة البيئية.",
            tips: ["حوّل كل درس إلى مخطط بأسهم.", "اشرح الدرس بصوت مرتفع لشخص آخر."],
          },
          {
            name: "اللغات",
            summary: "القواعد والتصريف، فهم النص، التعبير الكتابي المنظم، الرصيد اللغوي، الصور البيانية وتحليل النص الأدبي.",
            tips: ["10 بطاقات مفردات أسبوعياً تُراجع في يوم+1، +3، +7.", "شاهد فيديوهات قصيرة باللغة المدروسة."],
          },
          {
            name: "التاريخ والجغرافيا",
            summary:
              "العصور القديمة والوسطى، الثورات، الحربان العالميتان، الاستقلال؛ وفي الجغرافيا: السكان، التمدن، العولمة والتنمية المستدامة.",
            tips: ["بطاقة لكل فصل: 5 تواريخ، 5 مفاتيح، 3 شخصيات.", "تدرّب على تحليل الوثائق."],
          },
        ],
      },
      {
        id: "thanawi",
        name: "الثانوي",
        age: "15 - 18 سنة",
        subjects: [
          {
            name: "الرياضيات",
            summary:
              "الدوال (الخطية، كثيرات الحدود، الأسية، اللوغاريتم)، الاشتقاق والتغيرات، المتتاليات، النهايات، المثلثات، الأشعة والهندسة التحليلية، الاحتمالات والتكاملات.",
            tips: ["أتقن المشتقات الأساسية أولاً فكل شيء ينبني عليها.", "تمرين نموذجي واحد لكل مفهوم أسبوعياً بتوقيت."],
          },
          {
            name: "الفيزياء والكيمياء",
            summary:
              "الميكانيك وقوانين نيوتن، الطاقة، الأمواج والبصريات، الكهرباء، بنية المادة، كمية المادة والتركيز، تفاعلات حمض-أساس، الأكسدة والإرجاع والحركية.",
            tips: ["اكتب قائمة قوانين كل فصل وشروطها.", "تحقق من تجانس الوحدات قبل الاستنتاج."],
          },
          {
            name: "علوم الطبيعة والحياة",
            summary:
              "الـADN، التعبير المورثي والطفرات، الانقسام الخلوي، المناعة، العصبونات، الهرمونات، البيئة، المناخ وجيولوجيا الأرض.",
            tips: ["لخّص كل آلية في 5 خطوات مرقّمة.", "تدرّب على أسئلة تحليل الوثائق فهي الأكثر في الامتحان."],
          },
          {
            name: "الفلسفة والعلوم الإنسانية",
            summary: "المفاهيم الكبرى (الوعي، الحرية، الحقيقة، العدالة، التقنية، الدولة)، منهجية المقالة والنص، وبناء الحجة.",
            tips: ["بطاقة لكل مفهوم: تعريف، إشكال، فيلسوفان، مثال.", "تعلّم صياغة الإشكالية في جملة واحدة."],
          },
          {
            name: "اللغات والأدب",
            summary: "التحليل الأدبي، المدارس والأجناس، الحجاج، المقال وتلخيص الوثائق، التعبير الشفوي والقواعد المتقدمة.",
            tips: ["حضّر اقتباسات قصيرة قابلة لإعادة الاستعمال.", "تدرّب شفوياً بتسجيل نفسك دقيقتين."],
          },
        ],
      },
    ],
  },
};

export const chatContent: Record<
  Lang,
  {
    title: string;
    open: string;
    placeholder: string;
    welcome: string;
    send: string;
    error: string;
    clear: string;
  }
> = {
  fr: {
    title: "Assistant Anti Ennui",
    open: "Ouvrir l'assistant",
    placeholder: "Pose ta question (maths, physique, langues...)",
    welcome:
      "Salut ! Je suis ton assistant d'étude. Pose-moi une question dans n'importe quelle matière : je t'explique simplement, avec un exemple.",
    send: "Envoyer",
    error: "Désolé, une erreur est survenue. Réessaie dans un instant.",
    clear: "Nouvelle discussion",
  },
  en: {
    title: "Anti Ennui assistant",
    open: "Open the assistant",
    placeholder: "Ask your question (maths, physics, languages...)",
    welcome:
      "Hi! I'm your study assistant. Ask me anything in any subject: I'll explain it simply, with an example.",
    send: "Send",
    error: "Sorry, something went wrong. Please try again.",
    clear: "New chat",
  },
  ar: {
    title: "مساعد ضد الملل",
    open: "افتح المساعد",
    placeholder: "اطرح سؤالك (رياضيات، فيزياء، لغات...)",
    welcome: "مرحباً! أنا مساعدك الدراسي. اسألني في أي مادة وسأشرح لك ببساطة مع مثال.",
    send: "إرسال",
    error: "عذراً، حدث خطأ. حاول مرة أخرى.",
    clear: "محادثة جديدة",
  },
};
