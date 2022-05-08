import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Image, OpenData } from '@tarojs/components'
import leancloud from '../../utils/leancloud'
import Book from '../../models/book'
import { ArrowRightLightSource } from '../../utils/images'
import './index.scss'

export default class UserPage extends Component {
  config = {
    navigationBarTitleText: '抒库'
  }

  constructor() {}

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onListViewItemClick() {
    Taro.showModal({
      title: '抒库',
      content: '基于 Taro 开发的国际标准书号查询工具（书籍数据来源于豆瓣网）',
      showCancel: false
    })
  }

  render() {
    return <View className="user-page-container">
      <View className="user-header">
        <View className="user-header-avatar">
          <OpenData type="userAvatarUrl" />
        </View>
        <View className="user-header-nickname">
          <OpenData type="userNickName" />
        </View>
      </View>
      <View className="user-list-view">
        <View className="user-list-view-item" onClick={this.onListViewItemClick.bind(this, 'about')}>
          <Text>功能介绍</Text>
          <Image src={ArrowRightLightSource} className="user-list-view-item-icon" />
        </View>
      </View>
    </View>
  }
}
