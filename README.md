# Telegram Bot

This is a Telegram bot built with _Node.js_ to help users track their expenses.

[![Nodejs](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white&Link=https://nodejs.org/docs/latest-v21.x/api/index.html)](https://nodejs.org/docs/latest-v21.x/api/index.html)
[![Typescript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/docs/)
[![Grammy](https://img.shields.io/badge/Grammy-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://grammy.dev/guide/)
[![Primsa](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)](https://www.prisma.io/docs/getting-started)
[![POSTGRESQL](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/about/)
[![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io/docs/getting-started)

![Telegram Bot](./public/images/godfatherbot.webp)

## Creating a Telegram bot :construction_worker:

1. Search for "@BotFather";
2. Create a new bot (command: "/newbot");
3. Follow the steps to create the bot and get the token
   (something like this: `7135809833:AAGP1hOOvwiSVl-VlEZut8wuSzUQbxu5o0A`);
4. Get your username from your Telegram profile.

---

## Running locally :running:

1. Clone this repository.
2. Navigate to the project directory:
   ```bash
   cd lin_personal_bot
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Set up environment variables:

   1. Copy `env.example` and rename it to `.env`.
   2. Set the variables with your _**token**_, _**user name**_, and a _**PostgreSQL connection string**_.

5. Start your app:
   ```
   npm start
   ```

---

## Commands :speech_balloon:

> Set the commands of your bot using @BotFather

- "_{string}_ _{money}_" - Send a message with this pattern to add a register. Money follows the number pattern: _**1.000,00**_. _(e.g., Mc Donalds 48,90)_
- _/list_ - list registers.
- _/remove_ - remove a register. _Argument must be "all", "{id}" or "{name}"_. _(e.g., /remove 1)_
- _/sum_ - get register sum.
- _/limit_ - set a limit.
- _/check_ - check balance.

---

## Deploying your own bot :rocket:

This app is ready to deploy as Serverless function on Vercel.

1. Fork this repository [lin_personal_bot](https://github.com/rafaLino/lin_personal_bot/fork).
2. Deploy your new repository on [Vercel](https://vercel.com/docs/deployments/overview).
3. Add your environment variables.
4. Setting the webhook:

   1. Modify the below URL to your credentials and visit it from your browser:

      ```
      https://api.telegram.org/bot<BOT_TOKEN>/setWebhook?url=<HOST_URL>

      ```

> The `HOST_URL` is your vercel app domain following with the route to the bot code, for example: _**https://appname.vercel.app/api/bot**_.

You should see a response like this:

```json
{
  "ok": true,
  "result": true,
  "description": "Webhook was set"
}
```

## Tests :hammer:

```
 npm test
```
