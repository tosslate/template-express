import { Category, Post, Tag, User, database } from '../app/models'
import { findOrCreate } from '../lib/utils'

export async function seedsTask() {
  const art = (await findOrCreate(Category, 'slug', {
    name: '艺术',
    slug: 'art'
  })) as Category

  const computer = (await findOrCreate(Category, 'slug', {
    name: '计算机',
    slug: 'computer'
  })) as Category

  const technology = (await findOrCreate(Category, 'slug', {
    name: '科学技术',
    slug: 'technology'
  })) as Category

  await findOrCreate(Category, 'slug', { name: '漫画', slug: 'comic' })
  await findOrCreate(Category, 'slug', {
    name: '影视',
    slug: 'film',
    parent_id: art.id
  })

  await findOrCreate(Category, 'slug', {
    name: '舞蹈',
    slug: 'dance',
    parent_id: art.id
  })

  await findOrCreate(Category, 'slug', {
    name: '绘画',
    slug: 'painting',
    parent_id: art.id
  })

  await findOrCreate(Category, 'slug', {
    name: '人工智能',
    slug: 'ai',
    parent_id: computer.id
  })

  await findOrCreate(Category, 'slug', {
    name: '图像视频',
    slug: 'multi-media',
    parent_id: computer.id
  })

  await findOrCreate(Category, 'slug', {
    name: '编程语言',
    slug: 'programming-language',
    parent_id: computer.id
  })

  await findOrCreate(Category, 'slug', {
    name: '工业技术',
    slug: 'industrial-technology',
    parent_id: technology.id
  })

  await findOrCreate(Category, 'slug', {
    name: '自然科学',
    slug: 'natural-sciences',
    parent_id: technology.id
  })

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
