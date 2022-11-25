import type { Knex } from 'knex'

export function up({ schema }: Knex) {
  return schema.createTable('tags', (t) => {
    t.increments('id').primary()
    t.string('name').unique()
    t.timestamps()
  })
}

export function down({ schema }: Knex) {
  return schema.dropTableIfExists('tags')
}
