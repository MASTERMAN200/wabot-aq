let fs = require('fs')
let path = require('path')

let handler = m => m

handler.all = async function (m) {
    this.lastSetStatus = this.lastSetStatus ? this.lastSetStatus : {}
    global.lastBackup = global.lastBackup ? global.lastBackup : {}
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
        m.reply('Mau sewa bot ?, jika anda sudah menetukan silhkan Ketik !owner, terus chat dan kasih tau mau sewa yang berapa')
    }

    let reg = /(ass?alam|اَلسَّلاَمُ عَلَيْكُمْ|السلام عليکم)/i
    let isSalam = reg.exec(m.text)
    if (isSalam && !m.fromMe) {
        m.reply(`وَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ\n_wa\'alaikumussalam wr.wb._`)
    }

    if (!(this.lastSetStatus) || !isNumber(this.lastSetStatus)) this.lastSetStatus = 0
    if (new Date - this.lastSetStatus > 10000) {
        let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
        let npmname = package.name
        let npmdesc = package.description
        let version = package.version
        let github = package.homepage ? package.homepage.url || package.homepage : '[unknown github url]'
        let _uptime = process.uptime() * 1000
        let uptime = clockString(_uptime)
        //let _muptime = await muptime()
        let random = [
            `❏ Aktif selama ${uptime} | Mode: ${global.opts['self'] ? 'Private' : 'Publik'} | BOT WANGSAF | Nemu Bug? Ketik #report`,
            `❏ Aktif selama ${uptime} | Mode: ${global.opts['self'] ? 'Private' : 'Publik'} | BOT WANGSAF | Nemu Bug? Ketik #report`,
        ]
        await this.setStatus(pickRandom(random)).catch(_ => _)
        this.lastSetStatus = new Date * 1
    }
    
    if (!(global.lastBackup) || !isNumber(global.lastBackup)) global.lastBackup = 0
    if (new Date - global.lastBackup > (10000 * 60 * 10)) {
        await global.DATABASE.save()
        let d = new Date
        let date = d.toLocaleDateString('id', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        })
        this.reply(global.owner[0] + '@s.whatsapp.net', `Database: ${date}`, null)
        this.sendFile(global.owner[0] + '@s.whatsapp.net', fs.readFileSync('./database.json'), 'database.json', '', 0, 0, { mimetype: 'application/json' })
        global.lastBackup = new Date * 1
    }
    
    let user = global.DATABASE._data.users[m.sender]
    if ((user.money * 1) > 99999998) {
        user.money = 99999999
    } else if ((user.money * 1) < 0) {
        user.money = 0
    }
    if ((user.healt * 1) > 100) {
        user.healt = 100
    } else if ((user.money * 1) < 0) {
        user.healt = 0
    }
}

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function pickRandom(arr) {
    return arr[Math.round(arr.length * Math.random())]
}

function isNumber(x) {
    x = parseInt(x)
    return typeof x == 'number' && !isNaN(x)
}

/*
async function muptime() {
    let _muptime
    if (process.send) {
        process.send('uptime')
        _muptime = await new Promise(resolve => {
            process.once('message', resolve)
            setTimeout(resolve, 1000)
        }) * 1000
    }
    return clockString(_muptime)
}
*/
