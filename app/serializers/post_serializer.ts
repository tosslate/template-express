import { transformKeys as transformUserKeys } from './user_serializer'

export function transformKeys({
  id,
  title,
  slug,
  body,
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
    user: transformUserKeys(user),
    category,
    created_at,
    updated_at
  }
}
