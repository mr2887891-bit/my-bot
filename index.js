const TelegramBot = require('node-telegram-bot-api');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const http = require('http');

// Render-এর পোর্ট এরর (48954.jpg) সমাধানের জন্য ছোট সার্ভার
http.createServer((req, res) => {
    res.write("Bot is running!");
    res.end();
}).listen(process.env.PORT || 3000);

// আপনার নতুন টোকেন এবং এপিআই কি
const token = '8346732184:AAGtRyJkMLY_wdwUHYlNwbSUw3bPk3WZyJk';
const genAI = new GoogleGenerativeAI("AIzaSyBPFtxZFojNyKGvgVu-8cSKbDZacG_WAlY");
const bot = new TelegramBot(token, {polling: true});

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (!text) return;

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-pro"});
        const result = await model.generateContent(text);
        const response = await result.response;
        bot.sendMessage(chatId, response.text());
    } catch (error) {
        console.error(error);
        bot.sendMessage(chatId, "রাহাত ভাই, এআই সংযোগে সমস্যা হচ্ছে। আপনার API Key টি চেক করুন।");
    }
});
