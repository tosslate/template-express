import { Category, Post, Tag, User, database } from '../app/models'
import { findOrCreate } from '../lib/utils'

async function addCategory(name: string, slug: string, parent_id?: number) {
  return (
    parent_id
      ? await findOrCreate(Category, 'slug', { name, slug, parent_id })
      : await findOrCreate(Category, 'slug', { name, slug })
  ) as Category
}

export async function seedsTask() {
  const art = await addCategory('艺术', 'art')
  const computer = await addCategory('计算机', 'computer')
  const technology = await addCategory('科学技术', 'technology')

  await addCategory('漫画', 'comic')
  await addCategory('影视', 'film', art.id)
  await addCategory('舞蹈', 'dance', art.id)
  await addCategory('绘画', 'painting', art.id)

  await addCategory('人工智能', 'ai', computer.id)
  await addCategory('图像视频', 'multi-media', computer.id)
  await addCategory('编程语言', 'programming-language', computer.id)

  await addCategory('工业技术', 'industrial-technology', technology.id)
  await addCategory('自然科学', 'natural-sciences', technology.id)

  const flask = (await findOrCreate(User, 'email', {
    name: 'flask',
    email: 'flask@users.noreply.github.com',
    password: 'hash_flask'
  })) as User

  const post = (await findOrCreate(Post, 'slug', {
    slug: 'slug-1',
    title: '网络是怎样连接的',
    body: '',
    user_id: flask.id,
    category_id: computer.id
  })) as Post

  const tag = (await findOrCreate(Tag, 'name', { name: '计算机网络' })) as Tag
  const postTag = await database
    .table('post_tags')
    .where({ post_id: post.id, tag_id: tag.id })
    .first()

  if (!postTag) {
    await database
      .insert({ post_id: post.id, tag_id: tag.id })
      .into('post_tags')
  }

  database.destroy()
}

seedsTask().catch(console.error)
