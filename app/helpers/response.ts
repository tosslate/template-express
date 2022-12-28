import type { Response } from 'express'
import statuses from 'statuses'

export function NotFound(response: Response) {
  return response.status(404).json({ message: statuses(404) })
}

export function Forbidden(response: Response) {
  return response.status(403).json({ message: statuses(403) })
}

export function Unauthorized(response: Response) {
  return response.status(401).json({ message: statuses(401) })
}
