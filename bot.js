// imports
require('dotenv').config()
const Discord = require('discord.js')

// start
const client = new Discord.Client() // create client
client.on('ready', () => { console.log('Discord bot ready') })
client.login(process.env.TOKEN) // login

client.on('message', message => {
  const prefix = "owo" // set prefix
  if (!message.author.bot && message.content.startsWith(prefix)) { // check if sent by bot & check for prefix
    const text = message.content.slice(prefix.length)
    message.channel.send(owoify(text))
  }
})

const owoify = (text) => 
  text.replace(/(?:r|l)/g, 'w')
    .replace(/(?:R|L)/g, 'W')
    // n[aeiou] with ny[aeiou]
    .replace(/n([aeiou])/g, 'ny$1')
    .replace(/N([aeiou])/g, 'Ny$1')
    .replace(/N([AEIOU])/g, 'Ny$1')
    // ove with uv
    .replace(/ove/g, 'uv')
