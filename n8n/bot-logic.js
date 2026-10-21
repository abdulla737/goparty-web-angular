// GoParty support bot — logic for the n8n "Bot logic" Code node.
// Input: the Telegram update from the "Telegram Trigger" node and settings from the "Config" node.
// Output: one item per Telegram API call: { method, body }. The "Call Telegram" node sends them in order.

const update = $('Telegram Trigger').first().json;
const cfg = $('Config').first().json;
const SUPPORT = cfg.supportChatId ? Number(cfg.supportChatId) : null;
const SITE = String(cfg.siteUrl || 'https://goparty.ae').replace(/\/$/, '');
const EMAIL = cfg.supportEmail || 'Help@goparty.ae';

// Remembers each customer's chosen language between executions (active workflow only).
const store = $getWorkflowStaticData('global');
store.lang = store.lang || {};

const TEXT = {
  en: {
    welcome: (n) => `Hi ${n}! 👋 Welcome to GoParty support.\n\nGoParty is the UAE's verified party and event marketplace. Ask us anything about bookings, payments, invitations or selling on GoParty.\n\nChoose an option below, or just type your question and our team will reply here.`,
    faq: '❓ FAQs', talk: '💬 Talk to support', website: '🌐 Visit GoParty', help: '📖 Help Center', lang: 'العربية 🇦🇪', back: '⬅️ Back',
    faqTitle: 'Frequently asked questions. Tap a question to see the answer:',
    talkPrompt: 'Type your message below and our support team will reply here as soon as possible. You can also send photos or screenshots.',
    received: '✅ Thanks! Your message reached our support team. We will reply here as soon as possible.',
    offline: `Our live chat is not available right now. Please email us at ${EMAIL} and we will get back to you.`,
    agent: '💬 GoParty Support:',
    helpCmd: `Send your question here and our team will reply.\n\nCommands:\n/start – main menu\n/faq – frequently asked questions\n/language – switch to Arabic\n\nEmail: ${EMAIL}`,
    faqs: [
      ['How do escrow payments work?', 'When you book, you pay through GoParty and the money is held securely. It is released to the seller only once your party is confirmed, so you never pay a seller directly.'],
      ['How are sellers verified?', 'Every seller passes identity, trade licence and quality checks before their profile goes live.'],
      ['Can I get a refund?', 'If the seller cancels, you get a full refund and may be entitled to compensation. If you cancel, the refund depends on the published cancellation policy and the costs already incurred. A defective service can be performed again or refunded.'],
      ['My guests did not get my WhatsApp invitation', 'WhatsApp restrictions can sometimes block delivery. GoParty may then send the invitation by SMS or another channel. Check the guest’s number, and message us here if it still does not arrive.'],
      ['How do I become a seller?', 'Choose “Join as a Seller” on the website, create your company profile and pass verification. Then publish your packages and start receiving bookings.'],
    ],
  },
  ar: {
    welcome: (n) => `مرحباً ${n}! 👋 أهلاً بك في دعم GoParty.\n\nGoParty هي منصّة الحفلات والفعاليات الموثّقة في الإمارات. اسألنا عن الحجوزات أو المدفوعات أو الدعوات أو البيع على GoParty.\n\nاختر من الخيارات أدناه، أو اكتب سؤالك مباشرة وسيرد عليك فريقنا هنا.`,
    faq: '❓ الأسئلة الشائعة', talk: '💬 تحدّث مع الدعم', website: '🌐 زيارة GoParty', help: '📖 مركز المساعدة', lang: 'English 🇬🇧', back: '⬅️ رجوع',
    faqTitle: 'الأسئلة الشائعة. اضغط على السؤال لعرض الإجابة:',
    talkPrompt: 'اكتب رسالتك أدناه وسيرد عليك فريق الدعم هنا في أسرع وقت. يمكنك أيضاً إرسال صور أو لقطات شاشة.',
    received: '✅ شكراً! وصلت رسالتك إلى فريق الدعم، وسنرد عليك هنا في أسرع وقت ممكن.',
    offline: `المحادثة المباشرة غير متاحة حالياً. يرجى مراسلتنا على ${EMAIL} وسنعود إليك.`,
    agent: '💬 دعم GoParty:',
    helpCmd: `أرسل سؤالك هنا وسيرد عليك فريقنا.\n\nالأوامر:\n/start – القائمة الرئيسية\n/faq – الأسئلة الشائعة\n/language – التبديل إلى الإنجليزية\n\nالبريد الإلكتروني: ${EMAIL}`,
    faqs: [
      ['كيف تعمل مدفوعات الضمان؟', 'عند الحجز تدفع عبر GoParty وتُحفظ الأموال بأمان، ولا تُحوَّل إلى البائع إلا بعد تأكيد حفلتك، لذلك لا تدفع للبائع مباشرة أبداً.'],
      ['كيف يتم التحقق من البائعين؟', 'يجتاز كل بائع فحص الهوية والرخصة التجارية والجودة قبل ظهور ملفه.'],
      ['هل يمكنني استرداد المبلغ؟', 'إذا ألغى البائع تحصل على استرداد كامل وقد يحق لك التعويض. وإذا ألغيت أنت، يتوقف الاسترداد على سياسة الإلغاء المنشورة والتكاليف التي تم تكبّدها. ويجوز إعادة تنفيذ الخدمة المعيبة أو استرداد قيمتها.'],
      ['لم تصل دعوة واتساب إلى ضيوفي', 'قد تمنع قيود واتساب أحياناً وصول الدعوة، وعندها قد ترسلها GoParty عبر رسالة نصية أو قناة أخرى. تحقّق من رقم الضيف، وراسلنا هنا إذا لم تصل.'],
      ['كيف أصبح بائعاً؟', 'اختر «انضم كبائع» على الموقع، وأنشئ ملف شركتك واجتز التحقق، ثم انشر باقاتك وابدأ في استقبال الحجوزات.'],
    ],
  },
};

const calls = [];
const call = (method, body) => calls.push({ json: { method, body } });

const langOf = (u) => store.lang[u?.id] || (String(u?.language_code || '').startsWith('ar') ? 'ar' : 'en');
const link = (l, path) => `${SITE}${l === 'ar' ? '/ar' : ''}${path}`;
const mainMenu = (l) => ({
  inline_keyboard: [
    [{ text: TEXT[l].faq, callback_data: 'faq' }, { text: TEXT[l].talk, callback_data: 'talk' }],
    [{ text: TEXT[l].website, url: link(l, '/') }, { text: TEXT[l].help, url: link(l, '/contact-us/#help-center') }],
    [{ text: TEXT[l].lang, callback_data: `lang:${l === 'ar' ? 'en' : 'ar'}` }],
  ],
});
const faqMenu = (l) => ({
  inline_keyboard: [...TEXT[l].faqs.map(([q], i) => [{ text: q, callback_data: `faq:${i}` }]), [{ text: TEXT[l].back, callback_data: 'menu' }]],
});
const name = (u) => [u.first_name, u.last_name].filter(Boolean).join(' ') || 'Customer';
// The #id tag lets agents' replies find the customer without any database.
const header = (u) => `📩 ${name(u)}${u.username ? ` (@${u.username})` : ''}\n#id${u.id} · ${langOf(u).toUpperCase()}\nReply to this message to answer the customer.`;

const msg = update.message;
const cb = update.callback_query;

if (msg) {
  const text = (msg.text || '').trim();
  const cmd = text.startsWith('/') ? text.split(/[\s@]/)[0].toLowerCase() : '';

  if (cmd === '/id') {
    call('sendMessage', { chat_id: msg.chat.id, text: `Chat ID: ${msg.chat.id}` });
  } else if (SUPPORT && msg.chat.id === SUPPORT) {
    // Support group: send agent replies back to the customer.
    const manual = /^\/reply(?:@\w+)?\s+(\d+)\s+([\s\S]+)/.exec(text);
    let customer = manual ? Number(manual[1]) : null;
    if (!customer && msg.reply_to_message && !cmd) {
      const m = /#id(\d+)/.exec(msg.reply_to_message.text || msg.reply_to_message.caption || '');
      if (m) customer = Number(m[1]);
    }
    if (customer) {
      const l = store.lang[customer] || 'en';
      if (manual) call('sendMessage', { chat_id: customer, text: `${TEXT[l].agent}\n${manual[2]}` });
      else if (msg.text) call('sendMessage', { chat_id: customer, text: `${TEXT[l].agent}\n${msg.text}` });
      else call('copyMessage', { chat_id: customer, from_chat_id: msg.chat.id, message_id: msg.message_id });
    }
  } else if (msg.chat.type === 'private') {
    const u = msg.from;
    let l = langOf(u);
    if (cmd === '/language') {
      l = l === 'ar' ? 'en' : 'ar';
      store.lang[u.id] = l;
    }
    if (cmd === '/faq') {
      call('sendMessage', { chat_id: msg.chat.id, text: TEXT[l].faqTitle, reply_markup: faqMenu(l) });
    } else if (cmd === '/help') {
      call('sendMessage', { chat_id: msg.chat.id, text: TEXT[l].helpCmd });
    } else if (cmd) {
      // /start, /menu, /language and any other command show the main menu
      call('sendMessage', { chat_id: msg.chat.id, text: TEXT[l].welcome(u.first_name || ''), reply_markup: mainMenu(l) });
    } else if (!SUPPORT) {
      call('sendMessage', { chat_id: msg.chat.id, text: TEXT[l].offline });
    } else {
      // Customer message -> support group, with the #id header in the same message
      if (msg.text) {
        call('sendMessage', { chat_id: SUPPORT, text: `${header(u)}\n\n${msg.text}` });
      } else if (msg.sticker) {
        call('sendMessage', { chat_id: SUPPORT, text: header(u) });
        call('copyMessage', { chat_id: SUPPORT, from_chat_id: msg.chat.id, message_id: msg.message_id });
      } else {
        const caption = `${header(u)}${msg.caption ? `\n\n${msg.caption}` : ''}`.slice(0, 1024);
        call('copyMessage', { chat_id: SUPPORT, from_chat_id: msg.chat.id, message_id: msg.message_id, caption });
      }
      call('sendMessage', { chat_id: msg.chat.id, text: TEXT[l].received });
    }
  }
} else if (cb) {
  const chatId = cb.message.chat.id;
  const messageId = cb.message.message_id;
  const data = cb.data || '';
  call('answerCallbackQuery', { callback_query_id: cb.id });
  if (data.startsWith('lang:')) store.lang[cb.from.id] = data.slice(5) === 'ar' ? 'ar' : 'en';
  const l = langOf(cb.from);
  const t = TEXT[l];
  if (data === 'menu' || data.startsWith('lang:')) {
    call('editMessageText', { chat_id: chatId, message_id: messageId, text: t.welcome(cb.from.first_name || ''), reply_markup: mainMenu(l) });
  } else if (data === 'faq') {
    call('editMessageText', { chat_id: chatId, message_id: messageId, text: t.faqTitle, reply_markup: faqMenu(l) });
  } else if (data.startsWith('faq:')) {
    const item = t.faqs[Number(data.slice(4))];
    if (item) {
      call('editMessageText', {
        chat_id: chatId,
        message_id: messageId,
        text: `${item[0]}\n\n${item[1]}`,
        reply_markup: { inline_keyboard: [[{ text: t.talk, callback_data: 'talk' }], [{ text: t.back, callback_data: 'faq' }]] },
      });
    }
  } else if (data === 'talk') {
    call('sendMessage', { chat_id: chatId, text: SUPPORT ? t.talkPrompt : t.offline });
  }
}

return calls;
