const { Telegraf } = require('telegraf');
const bot = new Telegraf('8346732184:AAGPeMccWPgO8HSuD2IjMTH3o8hvYY360w4');
bot.start((ctx) => ctx.reply('আসসালামু আলাইকুম রাহাত ভাই! রেন্ডার থেকে বটটি সচল হয়েছে।'));
bot.on('text', (ctx) => ctx.reply(`আপনি লিখেছেন: ${ctx.message.text}`));
bot.launch();
