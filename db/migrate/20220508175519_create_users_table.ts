export function up({ schema }) {
  return schema.createTable('users', (t) => {
    t.increments('id').primary()
    t.string('name')
    t.string('email').unique()
    t.string('password_digest').notNullable()
    t.timestamps()
  })
}

export function down({ schema }) {
  return schema.dropTableIfExists('users')
}
