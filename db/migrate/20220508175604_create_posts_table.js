function up({ schema }) {
  return schema.createTable('posts', (table) => {
    table.integer('user_id').references('users.id')
    table.string('title')
    table.string('slug').unique()
    table.text('body')
    table.timestamp('published_at')
    table.timestamps()
  })
}

function down({ schema }) {
  return schema.dropTableIfExists('posts')
}

module.exports = { up, down }
