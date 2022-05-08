import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import isISBN from 'validator/lib/isISBN'
import isEmpty from 'lodash/isEmpty'
import { apiUrl } from '../../utils/douban'
import leancloud from '../../utils/leancloud'
import UserBookMap from '../../models/user_book_map'
import Book from '../../models/book'
import './index.scss'

export default class ScanPage extends Component {
  config = {
    navigationBarTitleText: '抒库'
  }

  constructor(props) {
    super(props)
    this.state = {
      isScanning: false,
      fallbackUrl: '/pages/home/index'
    }
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {
    Taro.hideLoading()
  }

  onInvokeUserBookMap(args, next) {
    const currentUser = leancloud.User.current()
    const UserBookMapQuery = new leancloud.Query(UserBookMap)
    leancloud.Query.and(
      UserBookMapQuery.equalTo('userRef', currentUser),
      UserBookMapQuery.equalTo('bookRef', args.bookRef)
    ).first().then(userBookMap => {
      if (userBookMap) {
        if (next) { next() }
      } else {
        new UserBookMap({
          userRef: currentUser,
          bookRef: args.bookRef
        }).save().then(userBookMap => {
          if (next) { next() }
        }).catch(errors => {
        })
      }
    }).catch(errors => {
    })
  }

  onTabItemTap() {
    const { fallbackUrl } = this.state
    Taro.showLoading({
      title: '正在加载...'
    })
    Taro.scanCode().then(({ result }) => {
      Taro.showLoading({
        title: '正在加载...'
      })
      if (isISBN(result + '')) {
        Taro.request({
          url: `${apiUrl}/book/isbn/${result}`,
          header: { 'Content-Type': 'text/html' }
        }).then(({ data }) => {
          const { isbn13, image, tags } = data || {}
          const BookQuery = new leancloud.Query(Book)
          BookQuery.equalTo('isbn13', isbn13)
          BookQuery.first().then(book => {
            if (book && book.get('objectId')) {
              this.onInvokeUserBookMap({ bookRef: book }, () => {
                Taro.switchTab({ url: fallbackUrl })
              })
            } else {
              new Book({ ...data }).save().then(book => {
                this.onInvokeUserBookMap({ bookRef: book }, () => {
                  Taro.switchTab({ url: fallbackUrl })
                })
              }).catch(errors => {
                Taro.switchTab({ url: fallbackUrl })
              })
            }
          }).catch(errors => {
            Taro.switchTab({ url: fallbackUrl })
          })
        }).catch(errors => {
          Taro.setStorageSync('warning', '扫描结果为无效国际标准书号')
          Taro.switchTab({ url: fallbackUrl })
        })
      } else {
        Taro.setStorageSync('warning', '扫描结果为无效国际标准书号')
        Taro.switchTab({ url: fallbackUrl })
      }
    }).catch(errors => {
      Taro.switchTab({ url: fallbackUrl })
    })
  }

  render() {
    return <View />
  }
}
