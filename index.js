const TelegramBot = require('node-telegram-bot-api');
const token = '8346732184:AAGPeMccWPgO8HSuD2IjMTH3o8hvYY360w4';
const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text ? msg.text.toLowerCase() : "";

    if (text === '/start') {
        bot.sendMessage(chatId, "রাহাত ভাই, আমি এখন প্রস্তুত! আপনার যেকোনো নির্দেশ পালন করতে পারব।");
    } else if (text.includes("video banaw")) {
        bot.sendMessage(chatId, "রাহাত ভাই, ভিডিও বানানোর জন্য আমার একটি বিশেষ AI টুল লাগবে। আমি সেটি সেটআপ করার চেষ্টা করছি!");
    } else {
        bot.sendMessage(chatId, "আপনি বলেছেন: " + msg.text + "\nআমি আপনার জন্য এটি নিয়ে কাজ করছি!");
    }
});
