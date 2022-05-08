const baseConfig = require('./base')

module.exports = (config => {
  return process.env.NODE_ENV === 'development'
    ? { ...baseConfig, env: { NODE_ENV: '"development"' } }
    : { ...baseConfig, env: { NODE_ENV: '"production"' } }
})
