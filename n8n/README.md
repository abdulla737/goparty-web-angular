# GoParty support bot on n8n (@GoPartyEventBot)

`goparty-telegram-support-bot.json` is an n8n workflow that replaces `telegram-bot/bot.mjs`.
Same behaviour: greeting and menu (English/Arabic), FAQ answers, customer messages copied to your
support group, and agents' replies sent back to the customer.

```
Telegram Trigger → Config → Bot logic (Code) → Call Telegram (HTTP)
```

## Before you start
- n8n must be reachable on a public **HTTPS** address (n8n Cloud, or self-hosted with a domain).
  Telegram cannot reach n8n on localhost.
- **Stop `bot.mjs`** (and any other bot program) using this token. A Telegram bot can only send its
  messages to one place; n8n takes over when the workflow is activated.

## Set up (about 10 minutes)
1. **Import:** n8n → Workflows → ⋯ → *Import from File* → choose `goparty-telegram-support-bot.json`.
2. **Telegram credential:** open *Telegram Trigger* → Credential → *Create new* → paste the
   @GoPartyEventBot token from @BotFather → Save.
3. **Config node:** paste the same token into `botToken`. Leave `supportChatId` empty for now.
   (The token is stored in the workflow, so keep the workflow private to your team.)
4. **Activate** the workflow (toggle at the top right). n8n connects the bot to Telegram.
5. Send `/start` to @GoPartyEventBot. You should get the menu.
6. **Support group:** create a Telegram group for your team and add @GoPartyEventBot. Send `/id`
   in the group, paste the number (starts with `-100`) into `supportChatId`, and save.

Until step 6, customers who write to the bot are asked to email Help@goparty.ae.

## How agents answer
Each customer message arrives in the support group as:

    📩 Sara Ahmed (@sara)
    #id123456789 · AR
    Reply to this message to answer the customer.

    <the customer's message>

Use Telegram's **Reply** on it and type the answer; the bot sends it to the customer.
Photos, files and voice notes work too. You can also type `/reply <customer id> <message>`.
Messages in the group that are not replies stay internal.

## Change texts or FAQs
Open the *Bot logic* node and edit the `TEXT` section (English and Arabic). Save the workflow.

## Ideas for later
- Add n8n's **AI Agent** node to answer common questions automatically, and send the rest to your team.
- Log every conversation to Google Sheets, or notify the team by email for new chats.

## Troubleshooting
- **No reply to /start:** the workflow is not active, or n8n is not on public HTTPS, or the
  credential has the wrong token. Check *Executions* in n8n for errors.
- **Executions run but nothing arrives:** check `botToken` in the Config node; the *Call Telegram*
  node shows Telegram's error message.
- **Customers get "email us":** `supportChatId` is empty or wrong.
