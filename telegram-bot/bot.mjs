#!/usr/bin/env node
/**
 * GoParty Telegram support bot (@GoPartyEventBot)
 *
 * What it does
 *  - /start: welcome message in English or Arabic, with buttons for FAQs, talking to support,
 *    the website, the Help Center and switching language.
 *  - Customers write to the bot; every message is copied to your support group (SUPPORT_CHAT_ID)
 *    with the customer's name and ID.
 *  - An agent in the support group REPLIES to that message, and the bot sends the reply back to
 *    the customer. Text, photos, files and voice notes all work.
 *  - /id in any chat shows that chat's ID (use it to find SUPPORT_CHAT_ID).
 *  - Fallback for agents: /reply <customer id> <message> in the support group.
 *
 * Runs on Node.js 18+ with no packages. Configuration comes from environment variables
 * (see .env.example). Never put the bot token in the website code or in git.
 */

import { realpathSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

const TOKEN = (process.env.TELEGRAM_BOT_TOKEN || '').trim();
const SUPPORT_CHAT_ID = process.env.SUPPORT_CHAT_ID ? Number(process.env.SUPPORT_CHAT_ID) : null;
const SITE = (process.env.SITE_URL || 'https://goparty.ae').replace(/\/$/, '');
const SUPPORT_EMAIL = process.env.SUPPORT_EMAIL || 'Help@goparty.ae';

/* ------------------------------------------------------------------ */
/* Texts (English / Arabic)                                            */
/* ------------------------------------------------------------------ */

export const TEXT = {
  en: {
    welcome: (name) =>
      `Hi ${name}! 👋 Welcome to GoParty support.\n\nGoParty is the UAE's verified party and event marketplace. Ask us anything about bookings, payments, invitations or selling on GoParty.\n\nChoose an option below, or just type your question and our team will reply here.`,
    faq: '❓ FAQs',
    talk: '💬 Talk to support',
    website: '🌐 Visit GoParty',
    help: '📖 Help Center',
    lang: 'العربية 🇦🇪',
    back: '⬅️ Back',
    faqTitle: 'Frequently asked questions. Tap a question to see the answer:',
    talkPrompt: 'Type your message below and our support team will reply here as soon as possible. You can also send photos or screenshots.',
    received: '✅ Thanks! Your message reached our support team. We will reply here as soon as possible.',
    offline: `Our live chat is not available right now. Please email us at ${SUPPORT_EMAIL} and we will get back to you.`,
    agentPrefix: '💬 GoParty Support:',
    help_cmd: `Send your question here and our team will reply.\n\nCommands:\n/start – main menu\n/faq – frequently asked questions\n/language – switch to Arabic\n\nEmail: ${SUPPORT_EMAIL}`,
    faqs: [
      ['How do escrow payments work?', 'When you book, you pay through GoParty and the money is held securely. It is released to the seller only once your party is confirmed, so you never pay a seller directly.'],
      ['How are sellers verified?', 'Every seller passes identity, trade licence and quality checks before their profile goes live.'],
      ['Can I get a refund?', 'If the seller cancels, you get a full refund and may be entitled to compensation. If you cancel, the refund depends on the published cancellation policy and the costs already incurred. A defective service can be performed again or refunded.'],
      ['My guests did not get my WhatsApp invitation', 'WhatsApp restrictions can sometimes block delivery. GoParty may then send the invitation by SMS or another channel. Check the guest’s number, and message us here if it still does not arrive.'],
      ['How do I become a seller?', 'Choose “Join as a Seller” on the website, create your company profile and pass verification. Then publish your packages and start receiving bookings.'],
    ],
  },
  ar: {
    welcome: (name) =>
      `مرحباً ${name}! 👋 أهلاً بك في دعم GoParty.\n\nGoParty هي منصّة الحفلات والفعاليات الموثّقة في الإمارات. اسألنا عن الحجوزات أو المدفوعات أو الدعوات أو البيع على GoParty.\n\nاختر من الخيارات أدناه، أو اكتب سؤالك مباشرة وسيرد عليك فريقنا هنا.`,
    faq: '❓ الأسئلة الشائعة',
    talk: '💬 تحدّث مع الدعم',
    website: '🌐 زيارة GoParty',
    help: '📖 مركز المساعدة',
    lang: 'English 🇬🇧',
    back: '⬅️ رجوع',
    faqTitle: 'الأسئلة الشائعة. اضغط على السؤال لعرض الإجابة:',
    talkPrompt: 'اكتب رسالتك أدناه وسيرد عليك فريق الدعم هنا في أسرع وقت. يمكنك أيضاً إرسال صور أو لقطات شاشة.',
    received: '✅ شكراً! وصلت رسالتك إلى فريق الدعم، وسنرد عليك هنا في أسرع وقت ممكن.',
    offline: `المحادثة المباشرة غير متاحة حالياً. يرجى مراسلتنا على ${SUPPORT_EMAIL} وسنعود إليك.`,
    agentPrefix: '💬 دعم GoParty:',
    help_cmd: `أرسل سؤالك هنا وسيرد عليك فريقنا.\n\nالأوامر:\n/start – القائمة الرئيسية\n/faq – الأسئلة الشائعة\n/language – التبديل إلى الإنجليزية\n\nالبريد الإلكتروني: ${SUPPORT_EMAIL}`,
    faqs: [
      ['كيف تعمل مدفوعات الضمان؟', 'عند الحجز تدفع عبر GoParty وتُحفظ الأموال بأمان، ولا تُحوَّل إلى البائع إلا بعد تأكيد حفلتك، لذلك لا تدفع للبائع مباشرة أبداً.'],
      ['كيف يتم التحقق من البائعين؟', 'يجتاز كل بائع فحص الهوية والرخصة التجارية والجودة قبل ظهور ملفه.'],
      ['هل يمكنني استرداد المبلغ؟', 'إذا ألغى البائع تحصل على استرداد كامل وقد يحق لك التعويض. وإذا ألغيت أنت، يتوقف الاسترداد على سياسة الإلغاء المنشورة والتكاليف التي تم تكبّدها. ويجوز إعادة تنفيذ الخدمة المعيبة أو استرداد قيمتها.'],
      ['لم تصل دعوة واتساب إلى ضيوفي', 'قد تمنع قيود واتساب أحياناً وصول الدعوة، وعندها قد ترسلها GoParty عبر رسالة نصية أو قناة أخرى. تحقّق من رقم الضيف، وراسلنا هنا إذا لم تصل.'],
      ['كيف أصبح بائعاً؟', 'اختر «انضم كبائع» على الموقع، وأنشئ ملف شركتك واجتز التحقق، ثم انشر باقاتك وابدأ في استقبال الحجوزات.'],
    ],
  },
};

/* ------------------------------------------------------------------ */
/* Telegram API                                                        */
/* ------------------------------------------------------------------ */

export function makeApi(token, fetchImpl = globalThis.fetch) {
  return async function api(method, body = {}) {
    const res = await fetchImpl(`https://api.telegram.org/bot${token}/${method}`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    if (!data.ok) throw new Error(`${method}: ${data.description || res.status}`);
    return data.result;
  };
}

/* ------------------------------------------------------------------ */
/* Bot logic                                                           */
/* ------------------------------------------------------------------ */

export function createBot({ api, supportChatId = SUPPORT_CHAT_ID, site = SITE }) {
  /** Language each customer chose (falls back to their Telegram app language). */
  const langOf = new Map();
  /** support-group message id -> customer chat id, so agent replies find the customer. */
  const threadOf = new Map();

  const lang = (from) => langOf.get(from?.id) || (String(from?.language_code || '').startsWith('ar') ? 'ar' : 'en');
  const link = (l, path) => `${site}${l === 'ar' ? '/ar' : ''}${path}`;

  const mainMenu = (l) => {
    const t = TEXT[l];
    return {
      inline_keyboard: [
        [{ text: t.faq, callback_data: 'faq' }, { text: t.talk, callback_data: 'talk' }],
        [{ text: t.website, url: link(l, '/') }, { text: t.help, url: link(l, '/contact-us/#help-center') }],
        [{ text: t.lang, callback_data: `lang:${l === 'ar' ? 'en' : 'ar'}` }],
      ],
    };
  };

  const faqMenu = (l) => ({
    inline_keyboard: [
      ...TEXT[l].faqs.map(([q], i) => [{ text: q, callback_data: `faq:${i}` }]),
      [{ text: TEXT[l].back, callback_data: 'menu' }],
    ],
  });

  const displayName = (u) => [u.first_name, u.last_name].filter(Boolean).join(' ') || 'there';
  const header = (u) =>
    `📩 ${displayName(u)}${u.username ? ` (@${u.username})` : ''}\n#id${u.id} · ${lang(u).toUpperCase()}\nReply to this message to answer the customer.`;

  async function sendMenu(chatId, from) {
    const l = lang(from);
    await api('sendMessage', { chat_id: chatId, text: TEXT[l].welcome(from.first_name || ''), reply_markup: mainMenu(l) });
  }

  /** Customer -> support group */
  async function forwardToSupport(msg) {
    const l = lang(msg.from);
    if (!supportChatId) {
      await api('sendMessage', { chat_id: msg.chat.id, text: TEXT[l].offline });
      return;
    }
    const head = await api('sendMessage', { chat_id: supportChatId, text: header(msg.from) });
    threadOf.set(head.message_id, msg.chat.id);
    const copy = await api('copyMessage', { chat_id: supportChatId, from_chat_id: msg.chat.id, message_id: msg.message_id, reply_to_message_id: head.message_id });
    threadOf.set(copy.message_id, msg.chat.id);
    await api('sendMessage', { chat_id: msg.chat.id, text: TEXT[l].received });
  }

  /** Support group reply -> customer */
  async function replyToCustomer(msg) {
    const replied = msg.reply_to_message;
    let customer = threadOf.get(replied.message_id);
    // After a restart the map is empty: read the #id tag from the header message instead.
    if (!customer) {
      const m = /#id(\d+)/.exec(replied.text || replied.caption || '');
      if (m) customer = Number(m[1]);
    }
    if (!customer) return;
    const l = langOf.get(customer) || 'en';
    if (msg.text) {
      await api('sendMessage', { chat_id: customer, text: `${TEXT[l].agentPrefix}\n${msg.text}` });
    } else {
      await api('copyMessage', { chat_id: customer, from_chat_id: msg.chat.id, message_id: msg.message_id });
    }
  }

  async function onMessage(msg) {
    const text = (msg.text || '').trim();
    const cmd = text.startsWith('/') ? text.split(/[\s@]/)[0].toLowerCase() : '';

    if (cmd === '/id') {
      return api('sendMessage', { chat_id: msg.chat.id, text: `Chat ID: ${msg.chat.id}` });
    }

    // Messages inside the support group
    if (supportChatId && msg.chat.id === supportChatId) {
      // Fallback: /reply <customer id> <message>
      const m = /^\/reply(?:@\w+)?\s+(\d+)\s+([\s\S]+)/.exec(text);
      if (m) {
        const customer = Number(m[1]);
        const l = langOf.get(customer) || 'en';
        return api('sendMessage', { chat_id: customer, text: `${TEXT[l].agentPrefix}\n${m[2]}` });
      }
      if (msg.reply_to_message && !cmd) await replyToCustomer(msg);
      return;
    }

    // Only private chats with customers past this point
    if (msg.chat.type !== 'private') return;

    if (cmd === '/start' || cmd === '/menu') return sendMenu(msg.chat.id, msg.from);
    if (cmd === '/faq') {
      const l = lang(msg.from);
      return api('sendMessage', { chat_id: msg.chat.id, text: TEXT[l].faqTitle, reply_markup: faqMenu(l) });
    }
    if (cmd === '/language') {
      langOf.set(msg.from.id, lang(msg.from) === 'ar' ? 'en' : 'ar');
      return sendMenu(msg.chat.id, msg.from);
    }
    if (cmd === '/help') return api('sendMessage', { chat_id: msg.chat.id, text: TEXT[lang(msg.from)].help_cmd });
    if (cmd) return sendMenu(msg.chat.id, msg.from);

    return forwardToSupport(msg);
  }

  async function onCallback(cb) {
    const chatId = cb.message.chat.id;
    const messageId = cb.message.message_id;
    const data = cb.data || '';
    await api('answerCallbackQuery', { callback_query_id: cb.id });

    if (data.startsWith('lang:')) {
      langOf.set(cb.from.id, data.slice(5) === 'ar' ? 'ar' : 'en');
    }
    const l = lang(cb.from);
    const t = TEXT[l];

    if (data === 'menu' || data.startsWith('lang:')) {
      return api('editMessageText', { chat_id: chatId, message_id: messageId, text: t.welcome(cb.from.first_name || ''), reply_markup: mainMenu(l) });
    }
    if (data === 'faq') {
      return api('editMessageText', { chat_id: chatId, message_id: messageId, text: t.faqTitle, reply_markup: faqMenu(l) });
    }
    if (data.startsWith('faq:')) {
      const item = t.faqs[Number(data.slice(4))];
      if (!item) return;
      return api('editMessageText', {
        chat_id: chatId,
        message_id: messageId,
        text: `${item[0]}\n\n${item[1]}`,
        reply_markup: { inline_keyboard: [[{ text: t.talk, callback_data: 'talk' }], [{ text: t.back, callback_data: 'faq' }]] },
      });
    }
    if (data === 'talk') {
      return api('sendMessage', { chat_id: chatId, text: supportChatId ? t.talkPrompt : t.offline });
    }
  }

  async function handleUpdate(update) {
    try {
      if (update.message) await onMessage(update.message);
      else if (update.callback_query) await onCallback(update.callback_query);
    } catch (err) {
      console.error('[update error]', err.message);
    }
  }

  return { handleUpdate };
}

/* ------------------------------------------------------------------ */
/* Long polling                                                        */
/* ------------------------------------------------------------------ */

async function main() {
  console.log('Starting GoParty support bot…');
  if (!TOKEN || TOKEN.startsWith('paste-')) {
    console.error('Missing TELEGRAM_BOT_TOKEN. Copy .env.example to .env and fill it in.');
    process.exit(1);
  }
  const api = makeApi(TOKEN);
  const me = await api('getMe');
  console.log(`Connected as @${me.username}. Open https://t.me/${me.username} and send /start to test.`);
  if (!SUPPORT_CHAT_ID) console.warn('SUPPORT_CHAT_ID is not set: customers will be asked to email support instead.');

  await api('deleteWebhook', { drop_pending_updates: false });
  await api('setMyCommands', {
    commands: [
      { command: 'start', description: 'Main menu' },
      { command: 'faq', description: 'Frequently asked questions' },
      { command: 'language', description: 'English / العربية' },
      { command: 'help', description: 'How to get support' },
    ],
  });
  await api('setMyCommands', {
    language_code: 'ar',
    commands: [
      { command: 'start', description: 'القائمة الرئيسية' },
      { command: 'faq', description: 'الأسئلة الشائعة' },
      { command: 'language', description: 'English / العربية' },
      { command: 'help', description: 'كيف تحصل على الدعم' },
    ],
  });

  const bot = createBot({ api });
  let offset = 0;
  let stopping = false;
  process.on('SIGINT', () => (stopping = true));
  process.on('SIGTERM', () => (stopping = true));

  while (!stopping) {
    try {
      const updates = await api('getUpdates', { offset, timeout: 30, allowed_updates: ['message', 'callback_query'] });
      for (const u of updates) {
        offset = u.update_id + 1;
        const m = u.message || u.callback_query?.message;
        console.log(`[update] ${u.message ? 'message' : 'button'} in chat ${m?.chat?.id}: ${(u.message?.text || u.callback_query?.data || '(media)').slice(0, 40)}`);
        await bot.handleUpdate(u);
      }
    } catch (err) {
      console.error('[polling error]', err.message);
      if (/409|Conflict/i.test(err.message)) {
        console.error('Another copy of this bot is running (or a webhook is set). Stop the other copy so only one runs.');
      }
      await new Promise((r) => setTimeout(r, 3000));
    }
  }
  console.log('Stopped.');
}

// Run main() when this file is started directly (works on Windows and in folders with spaces).
const startedDirectly = process.argv[1] && import.meta.url === pathToFileURL(realpathSync(process.argv[1])).href;
if (startedDirectly) {
  main().catch((err) => {
    console.error('Bot stopped:', err.message);
    if (/fetch failed|ENOTFOUND|ETIMEDOUT|ECONNREFUSED/i.test(err.message)) console.error('Could not reach api.telegram.org. Check this server\'s internet connection or firewall.');
    if (/401|Unauthorized/i.test(err.message)) console.error('Telegram rejected the token. Check TELEGRAM_BOT_TOKEN in .env (or create a new one in @BotFather).');
    process.exit(1);
  });
}
