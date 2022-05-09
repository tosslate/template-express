function transform({ id, title, slug, body, user, created_at, updated_at }) {
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

function eachTransform(data) {
  return data.map((item) => transform(item))
}

module.exports = {
  eachTransform,
  transform
}
