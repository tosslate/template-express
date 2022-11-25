import type { Knex } from 'knex'

export function up({ schema }: Knex) {
  return schema.createTable('post_tags', (t) => {
    t.increments('id').primary()
    t.integer('post_id').references('posts.id')
    t.integer('tag_id').references('tags.id')
  })
}

export function down({ schema }: Knex) {
  return schema.dropTableIfExists('post_tags')
}
