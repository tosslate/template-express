import type { UserObject } from './user_serializer'

export type PostObject = {
  id: string
  title: string
  slug: string
  body: string
  user?: UserObject
  created_at: string
  updated_at: string
}

export function transformKeys({
  id,
  title,
  slug,
  body,
  user,
  created_at,
  updated_at
}: Record<string, any>): PostObject {
  return {
    id,
    title,
    slug,
    body,
    user: {
      id: user?.id,
      name: user?.name,
      email: user?.email
    },
    created_at,
    updated_at
  }
}
