import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Button } from '@tarojs/components'
import isEmpty from 'lodash/isEmpty'
import truncate from 'voca/truncate'
import leancloud from '../../utils/leancloud'
import UserBookMap from '../../models/user_book_map'
import Book from '../../models/book'
import { BookLightSource } from '../../utils/images'
import './index.scss'

export default class HomePage extends Component {
  config = {
    navigationBarTitleText: '抒库',
    enablePullDownRefresh: true
  }

  constructor(props) {
    super(props)
    this.state = {
      userBooks: [],
      isLoading: false,
      reloadData: true,
      userBooksTotal: 0
    }
  }

  componentWillMount() {}

  componentDidMount() {
    this.onFetchDataLoading()
  }

  componentWillUnmount() {}

  componentDidShow() {
    const content = Taro.getStorageSync('warning')
    this.onShowWarningModal({ title: '提示', content })
    this.setState({ isLoading: true })
    if (this.state.reloadData) {
      this.onFetchUserBooks({}, () => {
        Taro.hideLoading()
        Taro.pageScrollTo({
          scrollTop: 0
        })
      })
    } else {
      this.setState({
        reloadData: true
      })
    }
  }

  componentDidHide() {
    this.setState({ userBooksTotal: -1 })
  }

  onPullDownRefresh() {
    this.onFetchUserBooks({}, () => {
      Taro.hideNavigationBarLoading()
      Taro.stopPullDownRefresh()
    })
  }

  onReachBottom() {
    const { userBooks } = this.state
    this.onFetchDataLoading()
    this.onFetchUserBooks({ userBooks }, () => {
      Taro.hideLoading()
    })
  }

  onFetchDataLoading() {
    Taro.showLoading({
      title: '正在加载...'
    })
  }

  onFetchUserBooks(args = {}, next) {
    const currentUser = leancloud.User.current()
    const UserBookMapQuery = new leancloud.Query(UserBookMap)
    UserBookMapQuery.equalTo('userRef', currentUser)
    UserBookMapQuery.count().then(userBooksTotal => {
      this.setState({ userBooksTotal })
    }).catch(errors => {
    })
    UserBookMapQuery.include('bookRef')
    UserBookMapQuery.descending('createdAt')
    UserBookMapQuery.skip((args.userBooks || []).length)
    UserBookMapQuery.limit(12)
    UserBookMapQuery.find().then(userBookMaps => {
      return userBookMaps.map(userBookMap => {
        return {
          ...userBookMap.bookRef.toJSON(),
          userBookMapObjectId: userBookMap.get('objectId')
        }
      })
    }).then(userBooks => {
      const currentUserBooks = userBooks.filter(userBook => {
        return ! isEmpty(userBook)
      }).map(userBook => {
        return {
          ...userBook,
          largeImage: (userBook.images || {}).large,
          subtitle: truncate(userBook.summary || '', 56)
        }
      })
      if (isEmpty(currentUserBooks)) {}
      this.setState({
        userBooks: (args.userBooks || []).concat(currentUserBooks)
      }, () => {
        this.setState({ isLoading: false })
        if (next) { next() }
      })
    }).catch(errors => {
    })
  }

  onRemoveUserBookItem(objectId) {
    leancloud.Query.doCloudQuery(`delete from UserBookMap where objectId="${objectId}"`).then(response => {
      this.setState({
        userBooks: this.state.userBooks.filter(userBook => {
          return userBook.userBookMapObjectId !== objectId
        })
      })
      Taro.showToast({
        title: '操作成功',
        icon: 'success'
      })
    }).catch(errors => {
      Taro.showToast({
        title: '网络异常，请重试',
        icon: 'loading'
      })
    })
  }

  onPreviewItemImage(currentImage) {
    this.setState({
      reloadData: false
    })
    Taro.previewImage({
      current: currentImage,
      urls: this.state.userBooks.map(userBook => {
        return userBook.largeImage
      })
    })
  }

  onShowActionSheet({ userBookMapObjectId }) {
    Taro.showActionSheet({
      itemList: ['不再收录'],
      itemColor: '#ff4f4f'
    }).then(({ tapIndex }) => {
      if (tapIndex === 0) {
        this.onRemoveUserBookItem(userBookMapObjectId)
      }
    }).catch(errors => {
    })
  }

  onShowWarningModal({ title, content }) {
    if (content) { Taro.showModal({ title, content, showCancel: false }) }
    Taro.removeStorageSync('warning')
  }

  render() {
    const { userBooks, userBooksTotal } = this.state
    return <View className="home-page-container">
      <View className="user-books-list">
        {
          userBooks.map(userBook => {
            return <View key={userBook.objectId} className="user-books-list-item">
              <Image src={userBook.image} mode="aspectFit" className="user-books-list-item-image" onClick={this.onPreviewItemImage.bind(this, userBook.largeImage)} />
              <View className="user-books-list-item-content" onLongPress={this.onShowActionSheet.bind(this, userBook)}>
                <View className="user-books-list-item-title">
                  <Text>{userBook.title}</Text>
                </View>
                <View className="user-books-list-item-summary">
                  <Text>{userBook.subtitle}</Text>
                </View>
              </View>
            </View>
          })
        }
      </View>
      {
        (userBooks.length === userBooksTotal) && (userBooksTotal > 12) && <View className="user-books-reach-bottom">
          <View className="user-books-reach-bottom-text">
            <Text>没发现更多的内容</Text>
          </View>
        </View>
      }
      {
        (userBooks.length === 0) && (userBooksTotal >= 0) && (! isLoading) && <View className="user-books-list-empty">
          <Image src={BookLightSource} className="user-books-list-empty-image" />
          <View className="user-books-list-empty-text">
            <Text>还没收录任何书籍</Text>
          </View>
        </View>
      }
    </View>
  }
}
