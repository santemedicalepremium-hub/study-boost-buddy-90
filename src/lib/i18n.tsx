import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "fr" | "en" | "ar";

export const LANGS: { code: Lang; label: string }[] = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
  { code: "ar", label: "AR" },
];

type Dict = typeof dict.fr;

export const dict = {
  fr: {
    brand: "Anti Ennui",
    nav: { home: "Accueil", problems: "Problèmes", solutions: "Solutions", teachers: "Pour les profs", courses: "Cours" },
    hero: {
      badge: "Pour tous les élèves du monde",
      title: "En finir avec l'ennui en cours",
      subtitle:
        "Anti Ennui explique pourquoi les élèves décrochent en classe et propose des solutions concrètes pour apprendre avec plaisir et retenir durablement.",
      ctaProblems: "Voir les problèmes",
      ctaSolutions: "Découvrir les solutions",
      stat1: "20-30 min",
      stat1Label: "durée maximale d'attention",
      stat2: "80 %",
      stat2Label: "d'oubli en quelques jours",
      stat3: "6+",
      stat3Label: "solutions concrètes",
    },
    home: {
      whyTitle: "Pourquoi ce site ?",
      whyText:
        "L'ennui n'est pas une faute des élèves : c'est un signal. Quand le cerveau n'est pas sollicité activement, il décroche. Ce site rassemble les causes principales et les méthodes qui fonctionnent, pour les élèves comme pour les professeurs, partout dans le monde.",
      previewProblems: "Les problèmes",
      previewSolutions: "Les solutions",
      previewTeachers: "Méthodes pour capter l'attention",
      readMore: "Lire la suite",
    },
    problems: {
      title: "Problèmes",
      subtitle: "Ce qui casse l'attention et la motivation en classe.",
      items: [
        {
          t: "Décrochage en classe",
          d: "Les cours magistraux passifs dépassent la capacité d'attention des élèves (limitée à 20-30 minutes), provoquant ennui et bavardages.",
        },
        {
          t: "Réviser sans retenir",
          d: "La simple relecture passive des cours avant un examen donne l'illusion de connaître le sujet, mais on oublie 80% de l'information en quelques jours.",
        },
        {
          t: "Désorganisation et procrastination",
          d: "Les élèves repoussent le travail face à une charge floue et se laissent facilement distraire par les écrans et réseaux sociaux.",
        },
        {
          t: "Manque de sens perçu",
          d: "Quand les élèves ne comprennent pas à quoi sert une leçon dans la vraie vie, l'intérêt chute et la motivation s'évapore.",
        },
        {
          t: "Peur de l'erreur",
          d: "Un climat scolaire trop stressant ou compétitif pousse les élèves à se taire par peur du jugement, ce qui réduit l'engagement.",
        },
        {
          t: "Fatigue et surcharge cognitive",
          d: "Des journées trop longues, un sommeil insuffisant et une surcharge de devoirs épuisent le cerveau et rendent l'écoute difficile.",
        },
      ],
    },
    solutions: {
      title: "Solutions",
      subtitle: "Des méthodes validées, simples à mettre en place dès demain.",
      items: [
        {
          t: "Pédagogie active & séquençage",
          d: "Découpage des cours en sessions courtes de 15 à 20 minutes dynamisées par des quiz en direct et des défis interactifs pour réengager immédiatement l'attention.",
        },
        {
          t: "Mémorisation ancrée",
          d: "Rappel actif et répétition espacée : génération de flashcards et révisions automatiques aux intervalles clés (J+1, J+3, J+7, J+30) pour ancrer les cours dans la mémoire à long terme.",
        },
        {
          t: "Cockpit anti-procrastination",
          d: "Intégration d'outils de gestion du temps (minuteur Pomodoro, matrice d'Eisenhower) pour structurer le travail et planifier des pauses stratégiques.",
        },
        {
          t: "Donner du sens aux apprentissages",
          d: "Relier chaque notion à des situations concrètes, des métiers, des actualités ou des passions des élèves pour raviver la curiosité naturelle.",
        },
        {
          t: "Climat de classe bienveillant",
          d: "Créer un espace où l'erreur est acceptée comme une étape d'apprentissage : les élèves osent poser des questions et s'investir sans peur du jugement.",
        },
        {
          t: "Gestion de l'énergie et du sommeil",
          d: "Apprendre à respecter son rythme biologique, dormir suffisamment, alterner concentration et repos, et éviter les écrans avant de dormir.",
        },
        {
          t: "Vaincre la peur du jugement",
          d: "Instaurer des règles claires (« ici on a le droit de se tromper »), utiliser des réponses anonymes (ardoises, quiz, boîte à questions), travailler d'abord en binôme avant de parler devant la classe, valoriser l'effort plutôt que la bonne réponse, et interdire toute moquerie. L'élève ose participer quand l'erreur devient une information utile, pas une humiliation.",
        },
      ],

    },
    teachers: {
      title: "Méthodes pour les professeurs",
      subtitle: "Comment capter et garder l'attention d'une classe entière.",
      items: [
        { t: "Commencer par une accroche", d: "Une question surprenante, une image ou une histoire de 60 secondes pour créer la curiosité avant le contenu." },
        { t: "Règle des 15 minutes", d: "Changer d'activité toutes les 15-20 minutes : explication, exercice, discussion, correction." },
        { t: "Interroger tout le monde", d: "Ardoises, doigts levés, applications de quiz : chaque élève répond, pas seulement les volontaires." },
        { t: "Travail en binômes", d: "Deux minutes pour comparer une réponse avec son voisin : tout le monde parle, personne ne dort." },
        { t: "Rendre le cours concret", d: "Relier chaque notion à la vie réelle, à l'actualité ou aux passions des élèves." },
        { t: "Donner du mouvement", d: "Déplacements, écriture au tableau, coins d'opinion dans la salle : le corps réveille le cerveau." },
        { t: "Valoriser l'erreur", d: "Créer un climat où se tromper sert à apprendre : les élèves osent participer." },
        { t: "Terminer par un rappel", d: "Trois minutes de fin : chaque élève écrit ce qu'il a retenu, sans notes." },
      ],
    },
    footer: {
      world: "Ce site s'adresse à tous les élèves du monde.",
      credit: "Designed by Benmessaoud abdellah rabah and lebane manile",
    },
  },
  en: {
    brand: "Anti Ennui",
    nav: { home: "Home", problems: "Problems", solutions: "Solutions", teachers: "For teachers", courses: "Courses" },
    hero: {
      badge: "For every student in the world",
      title: "Putting an end to boredom in class",
      subtitle:
        "Anti Ennui explains why students disengage in class and offers concrete solutions to learn with pleasure and remember for the long term.",
      ctaProblems: "See the problems",
      ctaSolutions: "Discover the solutions",
      stat1: "20-30 min",
      stat1Label: "maximum attention span",
      stat2: "80%",
      stat2Label: "forgotten within days",
      stat3: "6+",
      stat3Label: "concrete solutions",
    },
    home: {
      whyTitle: "Why this website?",
      whyText:
        "Boredom is not the student's fault: it is a signal. When the brain is not actively engaged, it switches off. This site gathers the main causes and the methods that actually work, for students and teachers everywhere.",
      previewProblems: "The problems",
      previewSolutions: "The solutions",
      previewTeachers: "Methods to capture attention",
      readMore: "Read more",
    },
    problems: {
      title: "Problems",
      subtitle: "What breaks attention and motivation in the classroom.",
      items: [
        {
          t: "Disengagement in class",
          d: "Passive lectures exceed students' attention span (limited to 20-30 minutes), causing boredom and chatter.",
        },
        {
          t: "Revising without remembering",
          d: "Passively rereading notes before an exam creates the illusion of knowing the subject, yet 80% of the information is forgotten within days.",
        },
        {
          t: "Disorganisation and procrastination",
          d: "Students postpone work when the workload feels vague, and are easily distracted by screens and social media.",
        },
        {
          t: "Lack of perceived meaning",
          d: "When students do not see how a lesson applies to real life, interest drops and motivation evaporates.",
        },
        {
          t: "Fear of mistakes",
          d: "A stressful or competitive school climate makes students stay silent for fear of judgement, reducing participation.",
        },
        {
          t: "Fatigue and cognitive overload",
          d: "Overlong days, insufficient sleep and too much homework exhaust the brain and make listening difficult.",
        },
      ],
    },
    solutions: {
      title: "Solutions",
      subtitle: "Proven methods, easy to start using tomorrow.",
      items: [
        {
          t: "Active teaching & sequencing",
          d: "Splitting lessons into short 15-20 minute sessions energised by live quizzes and interactive challenges to instantly re-engage attention.",
        },
        {
          t: "Anchored memorisation",
          d: "Active recall and spaced repetition: generating flashcards and scheduling automatic reviews at key intervals (D+1, D+3, D+7, D+30) to anchor lessons in long-term memory.",
        },
        {
          t: "Anti-procrastination cockpit",
          d: "Built-in time management tools (Pomodoro timer, Eisenhower matrix) to structure work and plan strategic breaks.",
        },
        {
          t: "Make learning meaningful",
          d: "Link every concept to concrete situations, careers, current events or students' passions to reignite natural curiosity.",
        },
        {
          t: "Supportive classroom climate",
          d: "Create a space where mistakes are accepted as part of learning: students dare to ask questions and engage without fear of judgement.",
        },
        {
          t: "Energy and sleep management",
          d: "Learn to respect your biological rhythm, sleep enough, alternate focus and rest, and avoid screens before bedtime.",
        },
        {
          t: "Overcoming the fear of judgement",
          d: "Set clear rules (\"here you are allowed to be wrong\"), use anonymous answers (mini whiteboards, quizzes, question box), let students rehearse in pairs before speaking to the class, reward effort over the right answer, and ban mockery. Students dare to participate when a mistake becomes useful information, not humiliation.",
        },
      ],

    },
    teachers: {
      title: "Methods for teachers",
      subtitle: "How to capture and keep a whole classroom's attention.",
      items: [
        { t: "Start with a hook", d: "A surprising question, an image or a 60-second story to spark curiosity before the content." },
        { t: "The 15-minute rule", d: "Change activity every 15-20 minutes: explanation, exercise, discussion, correction." },
        { t: "Ask everyone", d: "Mini whiteboards, hand signals, quiz apps: every student answers, not just volunteers." },
        { t: "Work in pairs", d: "Two minutes to compare an answer with a neighbour: everyone talks, nobody sleeps." },
        { t: "Make it concrete", d: "Link every concept to real life, current events or students' passions." },
        { t: "Add movement", d: "Moving around, writing on the board, opinion corners: the body wakes up the brain." },
        { t: "Value mistakes", d: "Build a climate where being wrong helps learning: students dare to participate." },
        { t: "End with recall", d: "Final three minutes: each student writes what they remember, without notes." },
      ],
    },
    footer: {
      world: "This website is for every student in the world.",
      credit: "Designed by Benmessaoud abdellah rabah and lebane manile",
    },
  },
  ar: {
    brand: "ضد الملل",
    nav: { home: "الرئيسية", problems: "المشاكل", solutions: "الحلول", teachers: "للأساتذة", courses: "الدروس" },
    hero: {
      badge: "لكل التلاميذ في العالم",
      title: "لننهِ الملل داخل القسم",
      subtitle:
        "موقع «ضد الملل» يشرح لماذا يفقد التلاميذ تركيزهم في القسم، ويقدّم حلولاً عملية للتعلّم بمتعة والحفظ لمدة طويلة.",
      ctaProblems: "اطّلع على المشاكل",
      ctaSolutions: "اكتشف الحلول",
      stat1: "20-30 دقيقة",
      stat1Label: "أقصى مدة للتركيز",
      stat2: "80٪",
      stat2Label: "تُنسى خلال أيام",
      stat3: "6+",
      stat3Label: "حلول عملية",
    },
    home: {
      whyTitle: "لماذا هذا الموقع؟",
      whyText:
        "الملل ليس خطأ التلميذ، بل هو إشارة. عندما لا يُشغَّل الدماغ بنشاط فإنه ينقطع. يجمع هذا الموقع الأسباب الرئيسية والطرق التي تنجح فعلاً، للتلاميذ والأساتذة في كل مكان.",
      previewProblems: "المشاكل",
      previewSolutions: "الحلول",
      previewTeachers: "طرق جذب الانتباه",
      readMore: "اقرأ المزيد",
    },
    problems: {
      title: "المشاكل",
      subtitle: "ما الذي يكسر الانتباه والدافعية داخل القسم.",
      items: [
        {
          t: "الانقطاع داخل القسم",
          d: "الدروس الإلقائية السلبية تتجاوز قدرة التلميذ على التركيز (المحدودة بـ 20-30 دقيقة)، فتسبب الملل والثرثرة.",
        },
        {
          t: "المراجعة دون حفظ",
          d: "إعادة قراءة الدروس بشكل سلبي قبل الامتحان تعطي وهم المعرفة، لكن يُنسى 80٪ من المعلومات خلال أيام قليلة.",
        },
        {
          t: "الفوضى والتسويف",
          d: "يؤجّل التلاميذ العمل أمام حجم مهام غير واضح، وينشغلون بسهولة بالشاشات ومواقع التواصل.",
        },
        {
          t: "غياب المعنى الملموس",
          d: "عندما لا يرى التلميذ فائدة الدرس في الحياة الواقعية، يتراجع الاهتمام وتتلاشى الدافعية.",
        },
        {
          t: "الخوف من الخطأ",
          d: "الجو المدرسي المجهد أو التنافسي يجعل التلاميذ يصمتون خوفاً من الحكم عليهم، مما يقلل المشاركة.",
        },
        {
          t: "التعب والإرهاق الذهني",
          d: "الأيام الطويلة، قلة النوم وكثرة الواجبات تُرهق الدماغ وتجعل الاستماع إلى الدرس صعباً.",
        },
      ],
    },
    solutions: {
      title: "الحلول",
      subtitle: "طرق مثبتة وسهلة التطبيق ابتداءً من الغد.",
      items: [
        {
          t: "بيداغوجيا نشطة وتقسيم الحصص",
          d: "تقسيم الدروس إلى حصص قصيرة من 15 إلى 20 دقيقة مع اختبارات مباشرة وتحديات تفاعلية لاستعادة الانتباه فوراً.",
        },
        {
          t: "حفظ راسخ",
          d: "الاسترجاع النشط والتكرار المتباعد: إنشاء بطاقات مراجعة وبرمجة مراجعات تلقائية في فترات مفتاحية (يوم+1، يوم+3، يوم+7، يوم+30) لترسيخ الدروس في الذاكرة بعيدة المدى.",
        },
        {
          t: "قمرة عمل ضد التسويف",
          d: "دمج أدوات تسيير الوقت (مؤقّت بومودورو، مصفوفة أيزنهاور) لتنظيم العمل وبرمجة استراحات ذكية.",
        },
        {
          t: "إعطاء معنى للتعلم",
          d: "ربط كل مفهوم بواقع ملموس، بمهن، بأحداث أو باهتمامات التلاميذ لإعادة إشعال الفضول الطبيعي.",
        },
        {
          t: "جو قسم داعم",
          d: "خلق فضاء يُقبل فيه الخطأ كخطوة للتعلّم: يجرؤ التلاميذ على طرح الأسئلة والمشاركة دون خوف من الحكم.",
        },
        {
          t: "تدبير الطاقة والنوم",
          d: "تعلّم احترام الإيقاع البيولوجي، النوم بما يكفي، التناوب بين التركيز والراحة، وتجنب الشاشات قبل النوم.",
        },
        {
          t: "التغلب على الخوف من الحكم",
          d: "وضع قواعد واضحة («هنا من حقك أن تخطئ»)، استعمال إجابات مجهولة (ألواح صغيرة، اختبارات، صندوق الأسئلة)، التمرّن في ثنائيات قبل الكلام أمام القسم، تثمين الجهد قبل الإجابة الصحيحة، ومنع أي سخرية. يجرؤ التلميذ على المشاركة عندما يصبح الخطأ معلومة مفيدة لا إهانة.",
        },
      ],

    },
    teachers: {
      title: "طرق للأساتذة",
      subtitle: "كيف تجذب انتباه القسم كله وتحافظ عليه.",
      items: [
        { t: "ابدأ بمُشوّق", d: "سؤال مفاجئ أو صورة أو قصة في 60 ثانية لخلق الفضول قبل المحتوى." },
        { t: "قاعدة الـ15 دقيقة", d: "غيّر النشاط كل 15-20 دقيقة: شرح، تمرين، نقاش، تصحيح." },
        { t: "أشرك الجميع", d: "ألواح صغيرة، إشارات اليد، تطبيقات الاختبارات: كل تلميذ يجيب لا المتطوعون فقط." },
        { t: "العمل في ثنائيات", d: "دقيقتان لمقارنة الإجابة مع الزميل: الجميع يتكلم ولا أحد ينام." },
        { t: "اجعل الدرس ملموساً", d: "اربط كل مفهوم بالحياة الواقعية أو الأحداث أو اهتمامات التلاميذ." },
        { t: "أضف الحركة", d: "التنقل، الكتابة على السبورة، زوايا الرأي في القسم: الجسد يوقظ الدماغ." },
        { t: "ثمّن الخطأ", d: "اخلق جواً يكون فيه الخطأ وسيلة للتعلّم فيجرؤ التلاميذ على المشاركة." },
        { t: "اختم بالاسترجاع", d: "ثلاث دقائق أخيرة: كل تلميذ يكتب ما حفظه دون النظر إلى الكراس." },
      ],
    },
    footer: {
      world: "هذا الموقع موجَّه لكل التلاميذ في العالم.",
      credit: "Designed by Benmessaoud abdellah rabah and lebane manile",
    },
  },
} satisfies Record<Lang, unknown> as Record<Lang, any>;

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict; dir: "ltr" | "rtl" };

const LangContext = createContext<Ctx>({
  lang: "fr",
  setLang: () => {},
  t: dict.fr as Dict,
  dir: "ltr",
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    const saved = window.localStorage.getItem("ae-lang") as Lang | null;
    if (saved && ["fr", "en", "ar"].includes(saved)) setLangState(saved);
  }, []);

  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  const setLang = (l: Lang) => {
    setLangState(l);
    window.localStorage.setItem("ae-lang", l);
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: dict[lang] as Dict, dir }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
