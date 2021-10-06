const { Bot } = require("grammy");
const got = require("got");
require("dotenv").config();

if (process.env.BOT_TOKEN == null) throw Error("BOT_TOKEN is missing. Get it from @BotFather at Telegram.");
const bot = new Bot(process.env.BOT_TOKEN);

const getRandomQuote = async () => {
  const { body } = await got("https://type.fit/api/quotes");
  let quotes = JSON.parse(body);
  let { text, author } = quotes[Math.floor(Math.random() * quotes.length)];
  return {
    text: `<i>❝${text}❞</i>\n\n🗣 <b>${author}</b>`,
    count: quotes.length,
  };
};

const randomButton = {
  parse_mode: "HTML",
  reply_markup: {
    inline_keyboard: [
      [{ text: "Get me a random one.", callback_data: "random" }],
    ],
  },
};

bot.command("start", async (ctx) => {
  await ctx.reply(
    `${(await getRandomQuote()).text}\n\nHi. I can send you random quotes from ${(await getRandomQuote()).count} quotes. Use /quote or send me any text, I will reply with a quote.`,
    randomButton
  );
});

bot.on(["msg:text", "callback_query"], async (ctx) => {
  if (ctx.callbackQuery) ctx.answerCallbackQuery();
  await ctx.reply(`${(await getRandomQuote()).text}\n\n`, randomButton);
});

bot.start();
