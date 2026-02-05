const TelegramBot = require('node-telegram-bot-api');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const http = require('http');

// Render-এর পোর্ট এরর সমাধানের জন্য ছোট সার্ভার
http.createServer((req, res) => {
    res.write("Bot is running!");
    res.end();
}).listen(process.env.PORT || 3000);

const token = '8346732184:AAGPeMccWPgO8HSuD2IjMTH3o8hvYY360w4';
const genAI = new GoogleGenerativeAI("AIzaSyBPFtxZFojNyKGvgVu-8cSKbDZacG_WAlY");
const bot = new TelegramBot(token, {polling: true});

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-pro"});
        const result = await model.generateContent(text);
        const response = await result.response;
        bot.sendMessage(chatId, response.text());
    } catch (error) {
        bot.sendMessage(chatId, "রাহাত ভাই, AI সংযোগে সামান্য সমস্যা হচ্ছে।");
    }
});
