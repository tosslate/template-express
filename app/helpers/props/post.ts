export function transform({
  id,
  title,
  slug,
  body,
  user,
  created_at,
  updated_at
}: Record<string, any>) {
  return {
    id,
    title,
    slug,
    body,
    created_at,
    updated_at,
    user: {
      id: user?.id,
      name: user?.name,
      email: user?.email
    }
  }
}

export function eachTransform(data: Record<string, any>[]) {
  return data.map((item) => transform(item))
}
