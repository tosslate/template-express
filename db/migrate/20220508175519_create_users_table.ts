import type { Knex } from 'knex'

export function up({ schema }: Knex) {
  return schema.createTable('users', (t) => {
    t.increments('id').primary()
    t.string('name')
    t.string('email').unique()
    t.string('password_digest').notNullable()
    t.string('avatar_url')
    t.string('homepage')
    t.text('bio')
    t.timestamps()
  })
}

export function down({ schema }: Knex) {
  return schema.dropTableIfExists('users')
}
