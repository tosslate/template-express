import leancloud from '../utils/leancloud'
import UserBookMap from './user_book_map'
import Book from './book'

leancloud.init({
  appId: process.env.LEANCLOUD_APP_ID,
  appKey: process.env.LEANCLOUD_APP_KEY
})

leancloud.Object.register(UserBookMap)
leancloud.Object.register(Book)
