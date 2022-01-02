let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
    let { lastberburu, lastadventure, lastfishing, lastwar, lastduel, lastmining, lastdungeon, lastclaim, lastweekly, lastmonthly } = global.db.data.users[m.sender]
    let healt = global.db.data.users[m.sender].healt
    let armor = global.db.data.users[m.sender].armor 
    let warn = global.db.data.users[m.sender].warn
    let pet = global.db.data.users[m.sender].pet
    let kucing = global.db.data.users[m.sender].kucing
    let _kucing = global.db.data.users[m.sender].anakkucing
    let rubah = global.db.data.users[m.sender].rubah
    let _rubah = global.db.data.users[m.sender].anakrubah
    let kuda = global.db.data.users[m.sender].kuda
    let _kuda = global.db.data.users[m.sender].anakkuda
    let diamond = global.db.data.users[m.sender].diamond
    let potion = global.db.data.users[m.sender].potion
    let common = global.db.data.users[m.sender].common
    let ikan = global.db.data.users[m.sender].ikan
    let nila = global.db.data.users[m.sender].nila
    let psepick = global.db.data.users[m.sender].psepick   
    let psenjata = global.db.data.users[m.sender].psenjata
    let lele = global.db.data.users[m.sender].lele
    let udangb= global.db.data.users[m.sender].udang
    let makananpet = global.db.data.users[m.sender].makananpet
    let uncommon = global.db.data.users[m.sender].uncommon
    let mythic = global.db.data.users[m.sender].mythic
    let legendary = global.db.data.users[m.sender].legendary
    let iron = global.db.data.users[m.sender].iron
    let kayu = global.db.data.users[m.sender].kayu
    let batu = global.db.data.users[m.sender].batu
    let emas = global.db.data.users[m.sender].emas
    let level = global.db.data.users[m.sender].level
    let money = global.db.data.users[m.sender].money
    let pancing = global.db.data.users[m.sender].pancing
    let pickaxe = global.db.data.users[m.sender].pickaxe
    let limit = global.db.data.users[m.sender].limit
    let exp = global.db.data.users[m.sender].exp
    let role = global.db.data.users[m.sender].role
    let stamina = global.db.data.users[m.sender].stamina
    let sampah = global.db.data.users[m.sender].sampah
    let { max } = levelling.xpRange(level, exp, global.multiplier)
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]
    let sortedmoney = Object.entries(global.db.data.users).sort((a, b) => b[1].money - a[1].money)
    let sortedlevel = Object.entries(global.db.data.users).sort((a, b) => b[1].level - a[1].level)
    let sorteddiamond = Object.entries(global.db.data.users).sort((a, b) => b[1].diamond - a[1].diamond)
    let sortedpotion = Object.entries(global.db.data.users).sort((a, b) => b[1].potion - a[1].potion)
    let sortedsampah = Object.entries(global.db.data.users).sort((a, b) => b[1].sampah - a[1].sampah)
    let sortedcommon = Object.entries(global.db.data.users).sort((a, b) => b[1].common - a[1].common)
    let sorteduncommon = Object.entries(global.db.data.users).sort((a, b) => b[1].uncommon - a[1].uncommon)
    let sortedmythic = Object.entries(global.db.data.users).sort((a, b) => b[1].mythic - a[1].mythic)
    let sortedlegendary = Object.entries(global.db.data.users).sort((a, b) => b[1].legendary - a[1].legendary)
    let usersmoney = sortedmoney.map(v => v[0])
    let usersdiamond = sorteddiamond.map(v => v[0])
    let userspotion = sortedpotion.map(v => v[0])
    let userssampah = sortedsampah.map(v => v[0])
    let userslevel = sortedlevel.map(v => v[0])
    let userscommon = sortedcommon.map(v => v[0])
    let usersuncommon = sorteduncommon.map(v => v[0])
    let usersmythic = sortedmythic.map(v => v[0])
    let userslegendary = sortedlegendary.map(v => v[0])
    let str = `
Inventory *${name.vnmae || name.notify || name.name || ('+' + name.jid.split`@`[0])}*\n
Health: *${healt}*
Satamina: *${stamina}*
Armor: *${armor == 0 ? 'Tidak Punya' : '' || armor == 1 ? 'Leather Armor' : '' || armor == 2 ? 'Iron Armor' : '' || armor == 3 ? 'Gold Armor' : '' || armor == 4 ? 'Diamond Armor' : '' || armor == 5 ? 'Netherite Armor' : ''}*\n
Money: *${money}*
Role: *${role}*
Level: *${level}*
Limit: *${limit}*
Exp: *${exp}*\n
*Inventory*
Diamond: *${diamond}*
Emas: *${emas}*
Batu: *${batu}*
Iron: *${iron}*
Kayu: *${kayu}*
Potion: *${potion}*
Sampah: *${sampah}*
Makanan Pet: *${makananpet}*
Total inv: *${diamond + potion + sampah + makananpet}* item\n
*🎣Tangkapan Memancing/Fishing catch:*
🎣Pancingan: ${ pancing == 0 ? 'Tidak punya' : '' || pancing == 1 ? 'kail pancing kayu' : '' }
🐟ikan: ${ikan}
🐟lele: ${lele}
🐟Nila: ${nila}\n
_🔄Cooldown↓_
Last Memancing : ${lastfishing > 0 ? '❌' +  new Date(lastfishing) : '✅'}
Last Adventure : ${lastadventure > 0 ? '❌' + new Date(lastadventure) : '✅'}
Last Duel : ${lastduel > 0 ? '❌' + new Date(lastduel) : '✅'}                       
Last Dungeon: ${lastdungeon > 0 ? '❌' + new Date(lastdungeon) : '✅'}
Last Mining: ${lastmining > 0 ? '❌' + new Date(lastmining) : '✅'}
Last Claim: ${lastclaim > 0 ? '❌' + new Date(lastclaim) : '✅'}
Last Weekly: ${lastweekly > 0 ? '❌' + new Date(lastweekly) : '✅'}
Last Monthly: ${lastmonthly > 0 ? '❌' + new Date(lastmonthly) : '✅'}\n
*Crate*
Common: *${common}*
Uncommon: *${uncommon}*
Mythic: *${mythic}*
Legendary: *${legendary}*
Pet: *${pet}*\n
*Pet*
Kuda: *${kuda == 0 ? 'Tidak Punya' : '' || kuda == 1 ? 'Level 1' : '' || kuda == 2 ? 'Level 2' : '' || kuda == 3 ? 'Level 3' : '' || kuda == 4 ? 'Level 4' : '' || kuda == 5 ? 'Level MAX' : ''}*
Rubah: *${rubah == 0 ? 'Tidak Punya' : '' || rubah == 1 ? 'Level 1' : '' || rubah == 2 ? 'Level 2' : '' || rubah == 3 ? 'Level 3' : '' || rubah == 4 ? 'Level 4' : '' || rubah == 5 ? 'Level MAX' : ''}*
Kucing: *${kucing == 0 ? 'Tidak Punya' : '' || kucing == 1 ? 'Level 1' : '' || kucing == 2 ? 'Level 2' : '' || kucing == 3 ? 'Level 3' : '' || kucing == 4 ? 'Level 4' : '' || kucing == 5 ? 'Level MAX' : ''}*\n\n
*Proges*\n
╭────────────────
│Level *${level}* To Level *${level}*
│Exp *${exp}* -> *${max}*
╰────────────────
╭────────────────
│Rubah ${rubah == 0 ? 'Tidak Punya' : '' || rubah > 0 && rubah < 5 ? `Level *${rubah}* To level *${rubah + 1}*\n│Exp *${_rubah}* -> *${rubah *100}*` : '' || rubah == 5 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│Kucing ${kucing == 0 ? 'Tidak Punya' : '' || kucing > 0 && kucing < 5 ? `Level *${kucing}* To level *${kucing + 1}*\n│Exp *${_kucing}* -> *${kucing *100}*` : '' || kucing == 5 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│Kuda ${kuda == 0 ? 'Tidak Punya' : '' || kuda > 0 && kuda < 5 ? `Level *${kuda}* To level *${kuda + 1}*\n│Exp *${_kuda}* -> *${kuda *100}*` : '' || kuda == 5 ? '*Max Level*' : ''}
╰────────────────\n\n
*achievement*
1.Top level *${userslevel.indexOf(m.sender) + 1}* dari *${userslevel.length}*
2.Top Money *${usersmoney.indexOf(m.sender) + 1}* dari *${usersmoney.length}*
3.Top Diamond *${usersdiamond.indexOf(m.sender) + 1}* dari *${usersdiamond.length}*
4.Top Potion *${userspotion.indexOf(m.sender) + 1}* dari *${userspotion.length}*
5.Top Common *${userscommon.indexOf(m.sender) + 1}* dari *${userscommon.length}*
6.Top Uncommon *${usersuncommon.indexOf(m.sender) + 1}* dari *${usersuncommon.length}*
7.Top Mythic *${usersmythic.indexOf(m.sender) + 1}* dari *${usersmythic.length}*
8.Top Legendary *${userslegendary.indexOf(m.sender) + 1}* dari *${userslegendary.length}*
9.Top Sampah *${userssampah.indexOf(m.sender) + 1}* dari *${userssampah.length}*
\n${readMore}\n
Warn: *${warn}*
Banned: *No*
`.trim()
    conn.reply(m.chat, str, m)
}
handler.help = ['inventory', 'inv']
handler.tags = ['rpg']
handler.command = /^(inv(entory)?|bal|level(ing)?|money|e?xp)$/i
module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
