import { Category } from '../app/models/category'
import { Post } from '../app/models/post'
import { User } from '../app/models/user'
import { Tag } from '../app/models/tag'

async function getOrCreateCategory() {
// id: number
// name: string
// slug: string
// position: number
// description: string
// total_posts: number
// parent_id: number
}

export async function seedsTask() {
}

// async function getOrCreateUser({ name }) {
//   const result = await User.query().findOne({ name })
//   const email = `${name}@users.noreply.github.com`

//   return (
//     result ||
//     (await User.fromJson({
//       password: `hash_${name}`,
//       email,
//       name
//     })
//       .$query()
//       .insert())
//   )
// }

// async function []() {
//   await Post.query().truncate()
//   await User.query().truncate()

//   const spoqa = await [getOrCreateUser]({ name: 'spoqa' })
//   const pallets = await getOrCreateUser({ name: 'pallets' })

//   await Post.query().insert({
//     title: 'flask',
//     slug: 'pallets/flask',
//     user_id: pallets.id
//   })

//   await Post.query().insert({
//     title: 'werkzeug',
//     slug: 'pallets/werkzeug',
//     user_id: pallets.id
//   })
// }

seedsTask()
  .then(() => process.exit())
  .catch(console.error)
