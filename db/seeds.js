const { Post } = require('../app/models/post')
const { User } = require('../app/models/user')

async function getOrCreateUser({ name }) {
  const result = await User.query().findOne({ name })
  const email = `${name}@users.noreply.github.com`

  return (
    result ||
    (await User.fromJson({
      password: `hash_${name}`,
      email,
      name
    })
      .$query()
      .insert())
  )
}

async function seedsTask() {
  await Post.query().truncate()
  await User.query().truncate()

  const spoqa = await getOrCreateUser({ name: 'spoqa' })
  const pallets = await getOrCreateUser({ name: 'pallets' })

  await Post.query().insert({
    title: 'flask',
    slug: 'pallets/flask',
    user_id: pallets.id
  })
  await Post.query().insert({
    title: 'werkzeug',
    slug: 'pallets/werkzeug',
    user_id: pallets.id
  })
}

seedsTask()
  .then(() => process.exit())
  .catch(console.error)
