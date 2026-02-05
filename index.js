const TelegramBot = require('node-telegram-bot-api');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const http = require('http');

http.createServer((req, res) => {
    res.write("Bot is running perfectly!");
    res.end();
}).listen(process.env.PORT || 3000);

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
        bot.sendMessage(chatId, "Sorry, there is an issue with the AI connection.");
    }
});
