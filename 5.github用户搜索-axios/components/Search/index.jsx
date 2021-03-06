import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {

	// 点击搜索回调
	search = ()=>{

		// 获取用户输入
		// 连续解构赋值取别名console.log("value:" + data);
		const {keywordElement:{value:keyword}} = this;
		const {updateAppStateFunc} = this.props;
		updateAppStateFunc({isFirst:false,isLoading:true});
		// 发送网络请求
		axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
			response =>{
				updateAppStateFunc({isLoading:false,users:response.data.items});
			},
			error => {
				updateAppStateFunc({isLoading:false,err:error});
			}
		)
	}

	render() {
		return (
			<section className="jumbotron">
				<h3 className="jumbotron-heading">搜索github用户</h3>
				<div>
					<input ref={(c)=>{this.keywordElement = c}} type="text" placeholder="输入关键词点击搜索"/>&nbsp;
					<button onClick={this.search}>搜索</button>
				</div>
			</section>
		)
	}
}
