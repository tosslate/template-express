interface HelloProps {
  name: string
}

function resolveHello({ name }: HelloProps) {
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
