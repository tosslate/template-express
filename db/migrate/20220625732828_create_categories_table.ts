import type { Knex } from 'knex'

export function up({ schema }: Knex) {
  return schema.createTable('categories', (t) => {
    t.increments('id').primary()
    t.integer('parent_id').references('categories.id')
    t.string('name')
    t.string('slug').unique()
    t.integer('position').defaultTo(0)
    t.integer('total_posts').defaultTo(0)
    t.text('description')
    t.timestamps()
  })
}

export function down({ schema }: Knex) {
  return schema.dropTableIfExists('categories')
}
