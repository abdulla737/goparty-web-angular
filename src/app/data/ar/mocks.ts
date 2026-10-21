/** بيانات تجريبية داخل نماذج التبويبات (عربي). */
import type { MOCKS as EN_MOCKS } from '../en/mocks';

export const MOCKS: typeof EN_MOCKS = {
  searchPlaceholder: 'زينة الحفلات',
  filters: ['ديكور', 'دبي', '2–5 آلاف درهم', '4.5★ +'],
  sellers: [
    { initials: 'إ', name: 'إليغانس إيفنتس دبي', cat: 'زينة الحفلات · وسط المدينة', rating: '4.9', price: '2,400 درهم' },
    { initials: 'م', name: 'مارينا لايتس آند ساوند', cat: 'دي جي وصوت · دبي مارينا', rating: '4.8', price: '1,800 درهم' },
    { initials: 'ز', name: 'سفرة الزعفران للضيافة', cat: 'الضيافة · جميرا', rating: '5.0', price: '3,150 درهم' },
  ],
  plan: {
    title: 'عيد ميلاد ليلى السابع',
    meta: 'السبت 14 نوفمبر · البرشاء',
    sellers: '4 بائعين',
    budgetLabel: 'الميزانية المستخدمة',
    budgetUsed: '7,100 درهم',
    budgetTotal: '/ 8,500',
    items: [
      { label: 'قوس بالونات وخلفية', amount: '1,200 درهم', done: true },
      { label: 'ضيافة لـ 40 ضيفاً', amount: '3,400 درهم', done: true },
      { label: 'عرض سحري (45 دقيقة)', amount: '900 درهم', done: false },
      { label: 'مصوّر الفعالية', amount: '1,600 درهم', done: false },
    ],
  },
  invite: {
    kicker: 'أنت مدعو',
    title: 'عمر يكمل الثلاثين',
    meta: 'الجمعة 20 نوفمبر · 8 مساءً · يخت، ميناء دبي',
    going: 'سيحضر',
    maybe: 'ربما',
    pending: 'بانتظار الرد',
    share: 'مشاركة عبر واتساب',
  },
  profile: {
    name: 'إليغانس إيفنتس دبي',
    meta: 'زينة الحفلات · ★ 4.9 (212 تقييماً)',
    areasLabel: 'مناطق الخدمة',
    areas: [
      { label: 'دبي', on: true },
      { label: 'الشارقة', on: true },
      { label: 'أبوظبي', on: true },
      { label: 'عجمان', on: false },
    ],
    calendarLabel: 'التوفّر · نوفمبر',
  },
  dashboard: {
    revenueLabel: 'إيرادات هذا الشهر',
    revenue: '48,250 درهم',
    orderTitle: 'طلب جديد · باقة عيد الميلاد الذهبية',
    orderMeta: 'السبت 14 نوفمبر · 3,500 درهم · بانتظار التأكيد',
  },
  packages: {
    items: [
      { name: 'باقة عيد الميلاد الذهبية', meta: 'بالونات · خلفية · تنسيق الطاولات', price: '3,500 درهم', tag: 'الأكثر طلباً' },
      { name: 'حفلة الأطفال الفضية', meta: 'بالونات · طاولة الكيك · تجهيز ساعتين', price: '2,200 درهم', tag: '' },
      { name: 'تجهيز كوشة الزفاف', meta: 'مسرح · زهور · إضاءة', price: '9,800 درهم', tag: 'جديد' },
    ],
    create: '+ إنشاء باقة جديدة',
  },
  wallet: {
    balanceLabel: 'الرصيد المتاح',
    balance: '12,400 درهم',
    escrowLabel: 'في الضمان',
    escrow: '6,800 درهم',
    paidLabel: 'المدفوع (أكتوبر)',
    paid: '21,350 درهم',
    payout: 'تحويل إلى بنك الإمارات دبي الوطني ••42',
    payoutAmount: '5,000 درهم',
    held: 'محفوظ في الضمان · طلب #GP-2291',
    heldAmount: '3,500 درهم',
  },
};
