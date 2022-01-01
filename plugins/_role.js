const roles = {
  /*
  'Role Name': <Minimal Level To Obtain this Role>
  */
  'Bronze V': 0,
  'Bronze IV': 2,
  'Bronze III': 5,
  'GOLD I': 8,
  'GOLD II': 10,
  'GOLD III': 14,
  'PLATINUM I': 17,
  'Master Woods': 80,
  'Legend': 90
}

module.exports = {
  before(m) {
    let user = global.db.data.users[m.sender]
    let level = user.level
    let role = (Object.entries(roles).sort((a, b) => b[1] - a[1]).find(([,minLevel]) => level >= minLevel) || Object.entries(roles)[0])[0]
    user.role = role
    return true
  }
}
