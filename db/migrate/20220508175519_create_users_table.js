function up({ schema }) {
  return schema.createTable('users', (table) => {
    table.string('name')
    table.string('email').unique()
    table.string('password_digest')
    table.timestamps()
  })
}

function down({ schema }) {
  return schema.dropTableIfExists('users')
}

module.exports = { up, down }
