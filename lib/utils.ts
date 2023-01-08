import { Model } from 'objection'

export async function findOrCreate(
  ModelClass: typeof Model,
  field: string,
  data: Record<string, any>
) {
  const result = await ModelClass.query().findOne({ [field]: data[field] })
  return result || (await ModelClass.fromJson(data).$query().insert())
}
