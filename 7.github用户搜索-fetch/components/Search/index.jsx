import React, { Component } from 'react'
// import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Search extends Component {

	// 点击搜索回调
	search = async()=>{

		// 获取用户输入
		// 连续解构赋值取别名console.log("value:" + data);
		const {keywordElement:{value:keyword}} = this;
		PubSub.publish('list', {isFirst:false,isLoading:true});


		// 发送网络请求（未优化）
		// fetch(`https://api.github.com/search/users?q=${keyword}`).then(
		// 	response => {
		// 		return response.json();
		// 	},
		// 	// error => {
		// 	// 	console.log('联系服务器出错！',error);
		// 	// }
		// ).then(
		// 	response => {
		// 		console.log(response);
		// 	},
		// 	// error => {
		// 	// 	console.log('请求数据出错！',error);
		// 	// }
		// ).catch(
		// 	error => {console.log('请求出错！');}
		// )

		// 发送网络请求（优化）
		try{
			const response = await fetch(`https://api.github.com/search/users?q=${keyword}`);
			const data = await response.json;
			console.log(data);
			PubSub.publish('list',{isLoading:false,users:data.items});
		}catch(error){
			console.log('请求出错！');
			PubSub.publish('list', {isLoading:false,err:error});
		}
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
