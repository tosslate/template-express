const bcrypt = require('bcrypt')

function hashPassword(value) {
  return bcrypt.hashSync(value, 10)
}

function verifyPassword(value, hash) {
  return bcrypt.compareSync(value, hash)
}

module.exports = {
  hashPassword,
  verifyPassword,
  hash: hashPassword,
  verify: verifyPassword
}
