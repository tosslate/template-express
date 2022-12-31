
export function verifyPassword(value: string, hash: string) {
  return bcrypt.compareSync(value, hash)
}
