import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './index.scss'

export default class AboutPage extends Component {
  config = {
    navigationBarTitleText: '抒库'
  }

  constructor() {}

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return <View>
      <Text>AboutPage</Text>
    </View>
  }
}
