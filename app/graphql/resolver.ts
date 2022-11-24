function resolveHello({ name }) {
  return `Hello ${name}!`
}

function resolveGoodbye() {
  return 'See ya!'
}

function values() {
  return {
    hello: resolveHello,
    goodbye: resolveGoodbye
  }
}

module.exports = { values }
