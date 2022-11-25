import { config } from './config/database'

export default {
  ...config,
  migrations: {
    directory: './db/migrate'
  }
}
