import type { Knex } from 'knex'

export function up({ schema }: Knex) {
  return schema.createTable('posts', (t) => {
    t.increments('id').primary()
    t.integer('user_id').references('users.id')
    t.string('title')
    t.string('slug').unique()
    t.text('body')
    t.timestamp('published_at')
    t.timestamps()
  })
}

export function down({ schema }: Knex) {
  return schema.dropTableIfExists('posts')
}
