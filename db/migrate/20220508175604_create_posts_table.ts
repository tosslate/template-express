export function up({ schema }) {
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

export function down({ schema }) {
  return schema.dropTableIfExists('posts')
}
