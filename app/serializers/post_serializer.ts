import { transformKeys as transformUserKeys } from './user_serializer'

export function transformKeys({
  id,
  title,
  slug,
  body,
  user,
  created_at,
  updated_at
}: Record<string, any> = {}) {
  return {
    id,
    title,
    slug,
    body,
    user: transformUserKeys(user),
    created_at,
    updated_at
  }
}
