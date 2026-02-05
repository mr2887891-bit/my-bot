const TelegramBot = require('node-telegram-bot-api');

// আপনার বটের টোকেন
const token = '8346732184:AAGPeMccWPgO8HSuD2IjMTH3o8hvYY360w4';
const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text.toLowerCase();

    if (text === '/start') {
        bot.sendMessage(chatId, "রাহাত ভাই, আমি প্রস্তুত! আপনি যা বলবেন আমি তাই করার চেষ্টা করব।");
    } else if (text.includes("video banaw")) {
        bot.sendMessage(chatId, "রাহাত ভাই, আমি ভিডিও বানানোর প্রসেস শুরু করছি। (এটি একটি অ্যাডভান্স কাজ, আমি ধাপে ধাপে শিখছি)");
    } else {
        bot.sendMessage(chatId, "আপনি বললেন: " + msg.text + "\nআমি আপনার নির্দেশ পালনের জন্য তৈরি হচ্ছি!");
    }
});
