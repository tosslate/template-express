import { Category, Post, Tag, User } from '../app/models'
import { findOrCreate } from '../lib/utils'

export async function seedsTask() {
await findOrCreate(Category, 'slug', { name: '漫画', slug: 'comic' })
await findOrCreate(Category, 'slug', { name: '艺术', slug: 'art' })

await findOrCreate(Category, 'slug', { name: '绘画', slug: 'painting' })
await findOrCreate(Category, 'slug', { name: '影视', slug: 'film' })
await findOrCreate(Category, 'slug', { name: '舞蹈', slug: 'dance' })

await findOrCreate(Category, 'slug', { name: '科学技术', slug: 'technology' })
await findOrCreate(Category, 'slug', { name: '工业技术', slug: 'industrial-technology' })
await findOrCreate(Category, 'slug', { name: '自然科学', slug: 'natural-sciences' })

await findOrCreate(Category, 'slug', { name: '计算机', slug: 'computer' })
await findOrCreate(Category, 'slug', { name: '人工智能', slug: 'ai' })
await findOrCreate(Category, 'slug', { name: '图像视频', slug: 'multi-media' })
await findOrCreate(Category, 'slug', { name: '编程语言', slug: 'programming-language' })

}









// parent_id
//   const email = `${name}@users.noreply.github.com`
//       password: `hash_${name}`,
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
// seedsTask()
//   .then(() => process.exit())
//   .catch(console.error)
