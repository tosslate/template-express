import Taro, { Component } from '@tarojs/taro'
import leancloud from './utils/leancloud'
import HomePage from './pages/home'
import ScanPage from './pages/scan'
import UserPage from './pages/user'
import './models/init'
import './app.scss'

class App extends Component {
  config = {
    pages: [
      'pages/home/index',
      'pages/scan/index',
      'pages/user/index'
    ],
    window: {
      backgroundTextStyle: 'dark',
      navigationBarTitleText: '抒库',
      navigationBarTextStyle: 'white',
      navigationBarBackgroundColor: '#212529'
    },
    tabBar: {
      color: '#adb5bd',
      borderStyle: 'black',
      backgroundColor: '#ffffff',
      selectedColor: '#212529',
      list: [
        {
          text: '主页',
          iconPath: 'images/home_light.png',
          selectedIconPath: 'images/home_dark.png',
          pagePath: 'pages/home/index'
        },
        {
          text: '扫码',
          iconPath: 'images/scan_light.png',
          selectedIconPath: 'images/scan_dark.png',
          pagePath: 'pages/scan/index'
        },
        {
          text: '个人',
          iconPath: 'images/user_light.png',
          selectedIconPath: 'images/user_dark.png',
          pagePath: 'pages/user/index'
        }
      ]
    }
  }

  componentDidMount() {
    leancloud.User.loginWithWeapp().then(user => {
    }).catch(errors => {
    })
  }

  componentDidShow() {}

  componentDidHide() {}

  componentCatchError() {}

  render() {
    return <HomePage />
  }
}

Taro.render(<App />, document.getElementById('app'))
