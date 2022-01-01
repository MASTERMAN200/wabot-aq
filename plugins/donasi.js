let handler = async m => m.reply(`
╭─「 Donasi 」
│ • Pulsa: 089625556161
│ • Dana: 089625556161
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
