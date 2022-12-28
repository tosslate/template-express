function resolveHello({ name }: Record<string, any>) {
  return `Hello ${name}!`
}

function resolveGoodbye() {
  return 'See ya!'
}

export function values() {
  return {
    hello: resolveHello,
    goodbye: resolveGoodbye
  }
}
