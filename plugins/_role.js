const roles = {
  /*
  'Role Name': <Minimal Level To Obtain this Role>
  */
  'BRONZE V': 0,
  'BRONZE IV': 2,
  'BRONZE III': 5,
  'GOLD I': 8,
  'GOLD II': 10,
  'GOLD III': 14,
  'PLATINUM I': 17,
  'PLATINUM II': 20,
  'DIAMOND I': 24,
  'DIAMOND II': 27,
  'EPIC' : 30,
  'GOD' : 35, 
  'MASTER' : 45,
  'LEGEND' : 50,
  'GRANDMASTER I' : 55,
  'GRANDMASTER II' : 60,
  'GRANDMASTER III' : 70,
  'ZEUS' : 100
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
