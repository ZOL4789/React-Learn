import React, { Component } from 'react'

import {Button} from 'antd'
import {WechatOutlined} from '@ant-design/icons'

import 'antd/dist/antd.css'

export default class App extends Component {
	render() {
		return (
			<div>
				<h2>App...</h2>
				<Button>Default Button</Button>
				<Button type='primary'>Primary Button</Button>
				<WechatOutlined />
			</div>
		)
	}
}
