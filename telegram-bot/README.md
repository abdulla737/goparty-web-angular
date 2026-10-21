# GoParty Telegram support bot (@GoPartyEventBot)

Customers chat with **@GoPartyEventBot**. Their messages are copied to your support team's Telegram
group, and when an agent **replies** to a message there, the bot sends the answer back to the customer.

- `/start` shows a menu in English or Arabic (picked from the customer's Telegram language, switchable).
- Buttons: FAQs, Talk to support, Visit GoParty, Help Center, English/العربية.
- Text, photos, screenshots, files and voice notes all go through in both directions.
- No packages to install. Needs Node.js 20.6 or newer.

## Set up (10 minutes)

1. **Token:** copy `.env.example` to `.env` and paste the bot token from @BotFather into
   `TELEGRAM_BOT_TOKEN`. Keep `.env` private: never put the token in the website or in git.
2. **Support group:** create a Telegram group for your team (e.g. "GoParty Support") and add @GoPartyEventBot.
   - In @BotFather: `/mybots` → GoPartyEventBot → Bot Settings → **Group Privacy → Turn off**,
     so the bot can see agents' replies.
   - Start the bot (step 3), send `/id` in the group, and put the number in `SUPPORT_CHAT_ID`. Restart the bot.
3. **Run:** `npm start` (or `node --env-file=.env bot.mjs`). You should see `Connected as @GoPartyEventBot`.

## Keep it running on a server
- **pm2:** `pm2 start bot.mjs --name goparty-bot --node-args="--env-file=.env"` then `pm2 save`.
- **systemd** or **Docker** work too; run one copy only (two copies would compete for messages).

## How agents answer
In the support group each customer message arrives with a header like:

    📩 Sara Ahmed (@sara)
    #id123456789 · AR
    Reply to this message to answer the customer.

Use Telegram's **Reply** on the header or the customer's message and type the answer. Messages in
the group that are not replies stay internal. You can also type `/reply <customer id> <message>`
(the id is the number after `#id` in the header).

## Optional: bot profile (in @BotFather)
- `/setdescription` and `/setabouttext`: "GoParty support: bookings, payments, invitations and selling on GoParty."
- `/setuserpic`: upload the GoParty logo.

## Change texts or FAQs
Edit the `TEXT` object at the top of `bot.mjs` (English and Arabic), then restart the bot.

## Troubleshooting: the bot does not answer
The bot only answers while `bot.mjs` is running. The website does not run it.

1. Start it with `npm start` in this folder and keep the window or process open. You should see
   `Starting GoParty support bot…` and then `Connected as @GoPartyEventBot`.
2. Send `/start` to @GoPartyEventBot. The console prints an `[update]` line for every message it receives.
3. What the console says:
   - `Missing TELEGRAM_BOT_TOKEN`: create `.env` from `.env.example` and paste the token.
   - `Telegram rejected the token`: the token is wrong or was revoked; get the current one from @BotFather.
   - `Could not reach api.telegram.org`: the server has no internet access to Telegram.
   - `Another copy of this bot is running`: stop the other copy (only one may run at a time).
   - `bad option: --env-file`: your Node.js is older than 20.6; update Node.js.
4. Greeting works but customer messages get "email us" instead: set `SUPPORT_CHAT_ID` (see Set up, step 2).
