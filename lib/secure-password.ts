import bcrypt from 'bcrypt'

export function hashPassword(value: string) {
  return bcrypt.hashSync(value, 10)
}

export function verifyPassword(value: string, hash: string) {
  return bcrypt.compareSync(value, hash)
}

export default {
  hash: hashPassword,
  verify: verifyPassword
}
