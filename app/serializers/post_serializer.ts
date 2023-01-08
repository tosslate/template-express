import { transformKeys as transformUserKeys } from './user_serializer'

export function transformKeys({
  id,
  title,
  slug,
  body,
  tags,
  user,
  category,
  created_at,
  updated_at
}: Record<string, any> = {}) {
  return {
    id,
    title,
    slug,
    body,
    tags,
    user: transformUserKeys(user),
    category,
    created_at,
    updated_at
  }
}
