/*
       RESMI DARI ZYNXZOO [ D.E.V ]

  LARANGAN
 
- DI LARANG MEMPERJUAL SC ZYNXZOO
- DI LARANG MEMPERBAGI SC ZYNXZOO

JIKA MELANGGAR LARANGAN YANG DI BERIKAN ZYNXZOO, YAPIT SE UMUR HIDUP + 7 TURUNAN

JANGAN LUPA SUPPORT

*/

global.prefa = ['','!','.',',','🐤','🗿'] 
// Setting Contact
global.namaown = "ŁØŘĐ-ĚMMÝ-HËÑŽ"
global.namabot = "ÈŘŘØŘ‐X.2²"
global.versisc = "2.1.0"
global.owner = ["2349125042727"]
global.tele = "https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C"
global.url = "https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C"
global.namastore = "EMMYHENZ"

// Global Simbol
global.simbol = "■"
global.wlcm = []
global.wlcmm = []
global.limitawal = {
    premium: "Infinity",
    free: 20
}

// Global Respon
global.mess = {
    success: '𝗗𝗼𝗻𝗲 𝗕𝗿𝗼',
    admin: `\`[ # ]\` This command can only be used by group admins!`,
    botAdmin: `\`[ # ]\` This command can only be used when the bot is a group admin!`,
    OnlyOwner: `\`[ # ]\` This command can only be used by the owner!`,
    OnlyGrup: `\`[ # ]\` This command can only be used in group chats!`,
    private: `\`[ # ]\` This command can only be used in private chats!`,
    wait: `\`[ # ]\` Please wait a moment`,
    notregist: `\`[ # ]\` You are not registered in the bot's database. Please register first`,
    premium: `\`[ # ]\` Premium only. Want Premium? Contact the owner`,
    endLimit: `\`[ # ]\` Your daily limit has run out. The limit will reset at 00:00 WIB`,
    bugrespon: `\`[ # ]\` Please wait a moment
     Sending virus attack`,
    donebug: `\`[ # ]\` Successfully sent bug
     Virus has been delivered`,
}


// Batas Setting
let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})