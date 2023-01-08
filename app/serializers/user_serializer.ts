export function transformKeys({
  id,
  name,
  email,
  avatar_url,
  homepage,
  bio
}: Record<string, any> = {}) {
  return {
    id,
    name,
    email,
    avatar_url,
    homepage,
    bio
  }
}
