/**
 * GoParty site copy (Arabic / العربية).
 * Same shape as ../en/site-content.ts — the compiler checks this in i18n/content.ts.
 * Translation draft: have a native Arabic copywriter review before launch.
 */

import { IconName } from '../../shared/icons';
import { LINKS, TELEGRAM_BOT } from '../links';
import type * as EN from '../en/site-content';

export const SEO: typeof EN.SEO = {
  title: 'GoParty | احجز مزوّدي الحفلات والفعاليات الموثّقين في الإمارات',
  description:
    'خطّط لحفلتك أو فعاليتك في الإمارات مع GoParty. قارن بين مزوّدين موثّقين للديكور والضيافة والتصوير، وادفع بأمان عبر نظام الضمان.',
};

/* 1. شريط التنقل */
export const NAV_ITEMS: typeof EN.NAV_ITEMS = [
  { label: 'خدمات الحفلات', href: '/#services' },
  { label: 'للعملاء', href: '/#for-customers' },
  { label: 'للبائعين', href: '/#for-sellers' },
  { label: 'كيف يعمل', href: '/#how-it-works' },
  { label: 'المدونة', href: LINKS.blog },
];

/* 2. الواجهة الرئيسية */
export const HERO: typeof EN.HERO = {
  badge: 'المنصّة الأولى الموثّقة للحفلات والفعاليات في الإمارات',
  h1Lead: 'ثِق بالحفلة.',
  h1Rest: 'احجز مزوّدي فعاليات موثّقين في دبي والإمارات.',
  h1RestShort: 'احجز مزوّدين موثّقين في الإمارات.',
  subtext:
    'GoParty هي منصّة الحفلات والفعاليات في الإمارات. قارن بين منظّمي حفلات ومنسّقي ديكور ومقدّمي ضيافة ومنسّقي موسيقى ومصوّرين موثّقين في دبي وجميع أنحاء الإمارات. كل بائع يخضع للتحقق، وكل دفعة تُحفظ في نظام الضمان.',
  primaryCta: 'خطّط لحفلتك',
  secondaryCta: 'شاهد كيف يعمل',
  rating: 'تقييم 5★ من أكثر من 100 عميل في الإمارات',
  avatars: ['ف', 'أ', 'س', 'ن'],
  cards: {
    verified: { title: 'بائع موثّق', seller: 'إليغانس إيفنتس دبي', tags: ['ديكور', 'قاعة', 'ترفيه'] },
    escrow: 'دفع محمي بنظام الضمان',
    booked: 'أكثر من 47 باقة حفلات محجوزة',
  },
  imageAlt: 'زينة بالونات ملوّنة لحفلة عيد ميلاد في الإمارات',
};

/* 3. شريط الأرقام */
export const STATS: typeof EN.STATS = [
  { value: '+3,200', label: 'بائع موثّق' },
  { value: '+18,000', label: 'حفلة تم تنظيمها' },
  { value: '13', label: 'فئة للحفلات والفعاليات' },
  { value: '100%', label: 'مدفوعات مؤمّنة بنظام الضمان' },
];

/* 4. الفئات */
export const CATEGORIES_SECTION: typeof EN.CATEGORIES_SECTION = {
  eyebrow: 'خدمات الحفلات والفعاليات في الإمارات',
  h2: 'كل خدمات الحفلات في دبي والإمارات. منصّة واحدة.',
  subtext:
    'من أعياد الميلاد وحفلات الزفاف إلى فعاليات الشركات، اعثر على بائعين موثّقين لزينة الحفلات والإضاءة ومنسّقي الموسيقى والتصوير والضيافة والقاعات وتأجير اليخوت.',
};

export const CATEGORIES: { label: string; icon: IconName }[] = [
  { label: 'زينة الحفلات', icon: 'sparkles' },
  { label: 'تأجير الإضاءة', icon: 'lightbulb' },
  { label: 'الترفيه', icon: 'popper' },
  { label: 'دي جي وأنظمة صوت', icon: 'music' },
  { label: 'زينة البالونات', icon: 'balloon' },
  { label: 'تصوير الفعاليات', icon: 'camera' },
  { label: 'الضيافة والطعام', icon: 'utensils' },
  { label: 'طاقم الضيافة', icon: 'bell-concierge' },
  { label: 'المكياج والتجميل', icon: 'brush' },
  { label: 'قاعات وأماكن الحفلات', icon: 'building' },
  { label: 'تأجير اليخوت والقوارب', icon: 'sailboat' },
  { label: 'الليموزين والنقل', icon: 'car' },
  { label: 'الهدايا وتوزيعات الحفلات', icon: 'gift' },
];

/* 5. للعملاء */
export const CUSTOMERS_SECTION: typeof EN.CUSTOMERS_SECTION = {
  eyebrow: 'للعملاء',
  h2: 'خطّط لحفلتك في دبي والإمارات بثقة وسهولة.',
  subtext: 'قارن بين مزوّدي الفعاليات، وأنشئ خطة حفلتك مع متابعة الميزانية، وأرسل دعوات رقمية، كل ذلك في مكان واحد.',
};

export const CUSTOMER_TABS: typeof EN.CUSTOMER_TABS = [
  {
    id: 'browse',
    tab: 'تصفّح واحجز',
    icon: 'search',
    h3: 'تصفّح واحجز بائعين موثّقين في دبي',
    body: 'استكشف آلاف البائعين الموثّقين في 13 فئة للحفلات. كل بائع يجتاز تسجيلاً صارماً، لذلك لن تجد أي إعلانات وهمية.',
    bullets: [
      'تصفية حسب الفئة والموقع والميزانية',
      'اقرأ تقييمات العملاء الموثّقة',
      'قارن بين باقات الحفلات جنباً إلى جنب',
      'احصل على تأكيد فوري للحجز',
    ],
    link: 'تصفّح بائعي الحفلات',
    href: '#services',
    visualAlt: 'قوائم بائعي حفلات موثّقين على GoParty مصفّاة حسب الفئة والميزانية',
    steps: {
      title: 'كيف يعمل',
      heading: 'احجز باقة لحفلتك في 6 خطوات',
      items: [
        {
          title: 'اذهب إلى خطة حفلتك',
          body: 'افتح «الحفلات»، واختر خطة حفلتك، ثم اضغط على «باقة جديدة».',
          image: 'images/app/book-1-party-plan.webp',
          alt: 'صفحة خطة الحفلة في GoParty مع العدّ التنازلي والميزانية وزر باقة جديدة',
        },
        {
          title: 'اختر الفئة',
          body: 'اختر فئة مثل الزهور أو الضيافة أو القاعات أو البالونات أو الترفيه، ثم اختر البائع والباقة.',
          image: 'images/app/book-2-categories.webp',
          alt: 'صفحة الفئات في تطبيق GoParty مع الزهور والضيافة والقوارب والقاعات والبالونات وغيرها',
        },
        {
          title: 'أضف الباقة إلى خطة حفلتك',
          body: 'اختر خيارات الباقة واضغط على «إضافة إلى الخطة». يمكنك عرض خطتك أو إضافة باقة أخرى.',
          image: 'images/app/book-3-package-added.webp',
          alt: 'رسالة تمت إضافة الباقة بنجاح في GoParty مع زرّي عرض خطتي وإضافة باقة أخرى',
        },
        {
          title: 'أرسل طلب التأكيد',
          body: 'أرسل الطلب إلى البائع. يبقى طلبك قيد الانتظار حتى يؤكده البائع قبل الموعد النهائي.',
          image: 'images/app/book-4-request.webp',
          alt: 'تفاصيل طلب في GoParty بانتظار تأكيد البائع مع الباقة والعناصر المشمولة وخطة الحفلة',
        },
        {
          title: 'ادفع قيمة الطلب',
          body: 'راجع تفاصيل السعر شاملة ضريبة القيمة المضافة، وادفع بأمان بالبطاقة أو Apple Pay أو Google Pay.',
          image: 'images/app/book-5-checkout.webp',
          alt: 'صفحة الدفع في GoParty مع تفاصيل السعر وضريبة القيمة المضافة وطرق الدفع وزر الدفع الآمن',
        },
        {
          title: 'يتم تجهيز باقتك',
          body: 'تابع طلبك مع عدّ تنازلي حتى التسليم، وتواصل مع البائع الموثّق بالاتصال أو عبر واتساب في أي وقت.',
          image: 'images/app/book-6-preparing.webp',
          alt: 'طلب مدفوع قيد التجهيز في GoParty مع عدّ تنازلي حتى التسليم وبيانات التواصل مع البائع',
        },
      ],
    },
  },
  {
    id: 'plan',
    tab: 'خطة الحفلة',
    icon: 'list-checks',
    h3: 'أنشئ خطة حفلتك وميزانيتها',
    body: 'أنشئ خطة حفلة متكاملة في دقائق. اجمع باقات الديكور والضيافة والترفيه والتصوير من بائعين مختلفين، ثم تابع ميزانيتك وجدولك الزمني في مكان واحد.',
    bullets: [
      'اجمع باقات من عدة بائعين',
      'متابعة نشاط الحفلة لحظة بلحظة',
      'متابعة ميزانية الحفلة مع تفصيل التكاليف',
      'إعداد الجدول الزمني وبرنامج الفعالية',
    ],
    link: 'ابدأ التخطيط لحفلتك',
    href: '#plan-steps',
    visualAlt: 'خطة حفلة على GoParty مع العدّ التنازلي ومتابعة الميزانية والتاريخ والوقت والموقع',
    screenshot: 'images/app/party-plan-detail.webp',
    steps: {
      title: 'كيف يعمل',
      heading: 'أنشئ خطة حفلتك في 3 خطوات',
      items: [
        {
          title: 'افتح صفحة خطط الحفلات',
          body: 'اضغط على «الحفلات» في تطبيق GoParty لعرض جميع خططك، ثم اضغط على «إنشاء حفلة».',
          image: 'images/app/party-plans-list.webp',
          alt: 'صفحة خطط الحفلات في GoParty تعرض الخطط النشطة مع الميزانيات ونسبة الدفع',
        },
        {
          title: 'أضف تفاصيل حفلتك',
          body: 'أدخل اسم الخطة والمضيف ونوع المناسبة والتاريخ والوقت والموقع والعنوان وعدد الضيوف.',
          image: 'images/app/create-party-plan.webp',
          alt: 'نموذج إنشاء خطة حفلة في تطبيق GoParty مع نوع المناسبة والتاريخ والوقت والموقع وعدد الضيوف',
        },
        {
          title: 'أنشئ خطة حفلتك',
          body: 'اضغط على «إنشاء خطة الحفلة». تصبح خطتك جاهزة مع عدّ تنازلي حتى يوم الحفلة، ومتابعة للميزانية، وأزرار لإضافة الباقات والدعوات.',
          image: 'images/app/party-created.webp',
          alt: 'إنشاء خطة حفلة على GoParty مع رسالة تهنئة وقصاصات ملوّنة',
        },
      ],
    },
  },
  {
    id: 'invitations',
    tab: 'دعوات الضيوف',
    icon: 'send',
    h3: 'أرسل دعوات حفلات رقمية في الإمارات',
    body: 'اختر من قوالب دعوات مصمّمة باحتراف وأرسلها مباشرة إلى ضيوفك عبر واتساب، من داخل GoParty.',
    bullets: ['قوالب دعوات من تصميم محترفين', 'رسائل دعوة مخصّصة', 'متابعة ردود الضيوف', 'مشاركة عبر واتساب بلمسة واحدة'],
    link: 'أنشئ دعوتك',
    href: '#invitations-steps',
    visualAlt: 'دعوة حفلة رقمية مع متابعة ردود الضيوف على GoParty',
    steps: {
      title: 'كيف يعمل',
      heading: 'أرسل دعواتك في 5 خطوات',
      items: [
        {
          title: 'افتح خطة حفلتك',
          body: 'اذهب إلى «الحفلات»، وافتح خطة حفلتك، ثم اضغط على «دعوة جديدة».',
          image: 'images/app/invite-1-party-plan.webp',
          alt: 'خطة حفلة على GoParty مع العدّ التنازلي وطلب الدعوة وزر دعوة جديدة',
        },
        {
          title: 'اختر بطاقة الدعوة',
          body: 'تصفّح بطاقات الدعوة حسب نوع المناسبة والبائع، ثم اختر التصميم الذي يعجبك.',
          image: 'images/app/invite-2-cards.webp',
          alt: 'صفحة بطاقات الدعوة في تطبيق GoParty مع أنواع المناسبات وتصاميم البطاقات وأسعارها',
        },
        {
          title: 'اختر ضيوفك',
          body: 'حدّد عدد الضيوف، ثم أضفهم من جهات الاتصال أو برقم الجوال الإماراتي واحفظ قائمة الضيوف.',
          image: 'images/app/invite-3-guests.webp',
          alt: 'خطوة اختيار الضيوف في GoParty مع سعر باقة الدعوة وعدّاد الضيوف وقائمة جهات الاتصال',
        },
        {
          title: 'عاين رسالة واتساب',
          body: 'شاهد كيف ستظهر بطاقتك ورسالتك في واتساب، مع أزرار ليؤكد الضيوف حضورهم أو اعتذارهم.',
          image: 'images/app/invite-4-whatsapp-preview.webp',
          alt: 'معاينة رسالة واتساب لبطاقة دعوة GoParty مع أزرار تأكيد الحضور',
        },
        {
          title: 'أرسل دعواتك',
          body: 'عند اكتمال تصميم بطاقتك، اضغط على «إرسال الدعوات» لإيصالها إلى جميع ضيوفك.',
          image: 'images/app/invite-5-send.webp',
          alt: 'تفاصيل طلب الدعوة في GoParty مع اكتمال التصميم وزر إرسال الدعوات',
        },
      ],
    },
  },
];

/* 6. للبائعين */
export const SELLERS_SECTION: typeof EN.SELLERS_SECTION = {
  eyebrow: 'للبائعين',
  h2: 'نمِّ أعمال فعالياتك مع GoParty',
  subtext:
    'تواصل مع آلاف العملاء في الإمارات ممن يخطّطون للحفلات والفعاليات. أدِر حجوزاتك بسهولة واحصل على مستحقاتك بأمان عبر منصّة احترافية واحدة.',
  appTitle: 'حمّل تطبيق GoParty للبائعين',
  appText: 'أدِر الطلبات والباقات والمستحقات من هاتفك. متاح لأجهزة iPhone وAndroid.',
  appStoreAlt: 'حمّل تطبيق GoParty للبائعين من App Store',
  googlePlayAlt: 'احصل على تطبيق GoParty للبائعين من Google Play',
  comingSoon: 'قريباً',
};

export const SELLER_TABS: typeof EN.SELLER_TABS = [
  {
    id: 'profile',
    tab: 'ملف الشركة',
    icon: 'badge-check',
    h3: 'أنشئ ملف شركتك',
    body: 'أنشئ ملف شركة موثّقاً يعرض أعمالك وباقاتك وتقييماتك للعملاء الذين يبحثون عن خدمات الفعاليات في الإمارات.',
    bullets: ['شارة التوثيق على ملفك', 'اعرض أعمالك وحفلاتك السابقة', 'حدّد مناطق خدمتك', 'حدّد تقويم التوفّر'],
    link: 'انضم كمزوّد',
    href: '#how-it-works',
    visualAlt: 'ملف شركة بائع موثّق على GoParty مع الأعمال والتقييمات',
  },
  {
    id: 'dashboard',
    tab: 'لوحة التحكم',
    icon: 'chart',
    h3: 'لوحة تحكم ذكية للبائع',
    body: 'شاهد كل طلب لحظة وصوله، وأكّد الحجوزات، وتابع إيراداتك من لوحة تحكم واحدة.',
    bullets: ['إشعارات فورية بالطلبات', 'إجمالي الإيرادات والتحليلات', 'سير عمل تأكيد الطلبات', 'تقويم الحجوزات وإدارة المواعيد'],
    link: 'انضم كبائع',
    href: '#how-it-works',
    visualAlt: 'لوحة تحكم البائع في GoParty مع الحجوزات الفورية وتحليلات الإيرادات',
  },
  {
    id: 'packages',
    tab: 'الباقات',
    icon: 'package',
    h3: 'أنشئ باقات حفلات بلا حدود',
    body: 'أنشئ وانشر أي عدد تحتاجه من الباقات. حدّد أسعارك ومحتويات كل باقة ومواعيد توفّرها ليحجزها العملاء مباشرة.',
    bullets: ['باقات غير محدودة في كل فئة', 'أسعارك ومحتوياتك الخاصة', 'صور وتفاصيل الباقة', 'حجز مباشر من العملاء'],
    link: 'انضم كبائع',
    href: '#how-it-works',
    visualAlt: 'باقات حفلات بأسعارها ومحتوياتها أنشأها بائع على GoParty',
  },
  {
    id: 'wallet',
    tab: 'المحفظة',
    icon: 'wallet',
    h3: 'محفظة البائع ومدفوعات الضمان',
    body: 'تمرّ كل دفعة من العميل عبر نظام الضمان الآمن في GoParty. تابع معاملاتك، واطلب سحب أرباحك، وتحكّم في مستحقاتك.',
    bullets: ['مدفوعات العملاء محفوظة في الضمان', 'سجل كامل للمعاملات', 'اطلب السحب في أي وقت', 'مدفوعات محمية من الاحتيال'],
    link: 'انضم كبائع',
    href: '#how-it-works',
    visualAlt: 'بائع يستلم دفعة الضمان في محفظة GoParty',
  },
];

/* 7. كيف يعمل */
export const HOW_SECTION: typeof EN.HOW_SECTION = {
  eyebrow: 'كيف يعمل',
  h2: 'كيف تعمل GoParty: خطوات بسيطة للحفلات والفعاليات',
  subtext: 'سواء كنت تخطّط لحفلة في الإمارات أو تنمّي أعمال فعالياتك، البداية سهلة.',
  tabs: { customers: 'للعملاء', sellers: 'للبائعين' },
};

export const HOW_STEPS: typeof EN.HOW_STEPS = {
  customers: [
    { title: 'سجّل وابحث', body: 'أنشئ حسابك وتصفّح البائعين الموثّقين في جميع فئات الحفلات.', icon: 'search' },
    { title: 'أنشئ خطة حفلتك', body: 'أضف باقاتك المفضّلة إلى خطة حفلة واحدة وتابع ميزانيتك لحظة بلحظة.', icon: 'list-checks' },
    { title: 'احجز بأمان واحتفل', body: 'ادفع بأمان عبر GoParty. تُحفظ أموالك حتى تأكيد حفلتك، ثم احتفل!', icon: 'popper' },
  ],
  sellers: [
    { title: 'أنشئ ملفك', body: 'سجّل شركتك، واجتز التحقق، واحصل على شارة البائع الموثّق.', icon: 'badge-check' },
    { title: 'انشر باقاتك', body: 'أضف خدماتك وأسعارك ومواعيد توفّرك ليحجزك العملاء مباشرة.', icon: 'package' },
    { title: 'استقبل الحجوزات واحصل على أرباحك', body: 'أكّد الطلبات من لوحة التحكم واستلم مدفوعات الضمان في محفظتك.', icon: 'wallet' },
  ],
};

/* 8. لماذا GoParty */
export const WHY_SECTION: typeof EN.WHY_SECTION = {
  eyebrow: 'لماذا GoParty',
  h2: 'مبنية على الثقة. مصمّمة للاحتفالات.',
  subtext: 'في سوق مليء بالمورّدين غير الموثوقين والمدفوعات غير الآمنة، صُمّمت GoParty لتمنح العملاء والبائعين في الإمارات راحة بال تامة.',
  imageAlt: 'تجهيز طاولة أنيق في قاعة فعاليات تم التخطيط له عبر GoParty',
  floating: { title: 'حالة الدفع', status: 'محفوظة بأمان في الضمان' },
};

export const WHY_CARDS: typeof EN.WHY_CARDS = [
  { title: 'مدفوعات آمنة بنظام الضمان', body: 'تُحفظ أموالك بأمان حتى تأكيد حفلتك وتنفيذها كما وُعدت.', icon: 'lock' },
  { title: 'تحقّق صارم من البائعين', body: 'يجتاز كل بائع فحص الهوية والرخصة التجارية والجودة قبل ظهوره على المنصّة.', icon: 'shield-check' },
  { title: 'لا إعلانات وهمية', body: 'تحقّق متعدّد المستويات من الإعلانات وإجراءات مخصّصة لحل النزاعات تحمي كل حجز.', icon: 'badge-check' },
  { title: 'إشعارات فورية بالحجوزات', body: 'تحديثات فورية عن الحجوزات وردود البائعين وحالة الدفع وتذكيرات الحفلة.', icon: 'bell' },
];

/* 9. دعوة للانضمام */
export const CTA: typeof EN.CTA = {
  eyebrow: 'انضم إلى GoParty اليوم',
  h2: 'جاهز للتخطيط لحفلتك في دبي والإمارات؟',
  subtext: 'انضم إلى آلاف العملاء والبائعين الموثّقين على منصّة الحفلات والفعاليات الموثوقة في الإمارات.',
  primary: 'خطّط لحفلتي',
  secondary: 'انضم كبائع',
};

/* 10. آراء العملاء */
export const TESTIMONIALS_SECTION: typeof EN.TESTIMONIALS_SECTION = {
  eyebrow: 'قصص حقيقية',
  h2: 'ماذا يقول العملاء والبائعون في الإمارات عن GoParty',
  subtext: 'من حفلات الزفاف في دبي إلى أعياد الميلاد في الشارقة، تخطّط العائلات والبائعون في أنحاء الإمارات مع GoParty.',
};

// TODO: استبدلها بتقييمات حقيقية (نفس التقييمات في النسخة الإنجليزية).
export const TESTIMONIALS: typeof EN.TESTIMONIALS = [
  { name: 'فاطمة الراشدي', role: 'عميلة', city: 'دبي', quote: 'ضع تقييم العميل الحقيقي هنا.', placeholder: true },
  { name: 'أحمد المنصوري', role: 'بائع', city: 'أبوظبي', quote: 'ضع تقييم البائع الحقيقي هنا.', placeholder: true },
  { name: 'سارة محمد', role: 'عميلة', city: 'الشارقة', quote: 'ضع تقييم العميل الحقيقي هنا.', placeholder: true },
];

/* 11. التذييل */
export const FOOTER: typeof EN.FOOTER = {
  tagline:
    'GoParty هي منصّة الحفلات والفعاليات الموثوقة في الإمارات، تربط العملاء ببائعين موثّقين لأعياد الميلاد وحفلات الزفاف وفعاليات الشركات وغيرها.',
  columns: [
    {
      heading: 'خدمات الحفلات',
      links: [
        { label: 'زينة الحفلات', href: '/#services' },
        { label: 'تصوير الفعاليات', href: '/#services' },
        { label: 'ترفيه الحفلات', href: '/#services' },
        { label: 'خدمات الضيافة', href: '/#services' },
        { label: 'قاعات وأماكن الحفلات', href: '/#services' },
        { label: 'النقل للفعاليات', href: '/#services' },
      ],
    },
    {
      heading: 'الشركة',
      links: [
        { label: 'عن GoParty', href: '/#why-goparty' },
        { label: 'كيف يعمل', href: '/#how-it-works' },
        { label: 'كن بائعاً', href: '/#for-sellers' },
        { label: 'المدونة', href: LINKS.blog },
        { label: 'الوظائف', href: '#' },
        { label: 'تواصل معنا', href: LINKS.contact },
      ],
    },
    {
      heading: 'الدعم',
      links: [
        { label: 'مركز المساعدة', href: LINKS.helpCenter },
        { label: 'الأمان والثقة', href: '/#why-goparty' },
        { label: 'شروط الخدمة', href: LINKS.terms },
        { label: 'سياسة الخصوصية', href: LINKS.privacy },
        { label: 'اتصل بنا', href: LINKS.contact },
        { label: 'سياسة الاسترداد', href: LINKS.refund },
        { label: 'الإبلاغ عن مشكلة', href: LINKS.contact },
      ],
    },
  ],
  socials: [
    { label: 'فيسبوك', icon: 'facebook', href: '#' },
    { label: 'إنستغرام', icon: 'instagram', href: '#' },
    { label: 'إكس', icon: 'x-logo', href: '#' },
    { label: 'لينكدإن', icon: 'linkedin', href: '#' },
    { label: 'تيليجرام', icon: 'telegram', href: TELEGRAM_BOT.url },
  ],
  strip: ['منصّة آمنة', 'بائعون موثّقون', 'مدفوعات آمنة'],
  copyright: '© 2026 GoParty. جميع الحقوق محفوظة.',
};

/* عناصر الواجهة */
export const UI: typeof EN.UI = {
  langCode: 'ar',
  skipToContent: 'تخطَّ إلى المحتوى',
  homeLabel: 'الصفحة الرئيسية لGoParty',
  mainNavLabel: 'القائمة الرئيسية',
  openMenu: 'فتح القائمة',
  closeMenu: 'إغلاق القائمة',
  contactUs: 'تواصل معنا',
  planYourParty: 'خطّط لحفلتك',
  switchLang: 'English',
  switchLangLabel: 'عرض هذه الصفحة باللغة الإنجليزية',
  statsLabel: 'GoParty بالأرقام',
  customerFeaturesLabel: 'مزايا العملاء',
  sellerFeaturesLabel: 'مزايا البائعين',
  stepsForLabel: 'الخطوات لـ',
  example: 'مثال',
  placeholderReview: 'نص مؤقت: أضف تقييماً حقيقياً',
  socialPrefix: 'GoParty على',
  legalEyebrow: 'قانوني',
  onThisPage: 'في هذه الصفحة',
  legalHelpTitle: 'لديك أسئلة حول هذه الصفحة؟',
  legalHelpBody: 'فريق الدعم لدينا جاهز للمساعدة.',
  legalHelpLink: 'تواصل مع GoParty',
};
