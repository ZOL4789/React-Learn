import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'

import Detail from './Detail'

export default class Message extends Component {
    state = {
        messageArr:[
            {id:1,title:'消息1',msg:'这是消息1'},
            {id:2,title:'消息2',msg:'这是消息2'},
            {id:3,title:'消息3',msg:'这是消息3'},
        ]
    }
    render() {
        const {messageArr} = this.state;
        return (
            <div>
                <ul>
					{
                        messageArr.map((msgObj)=>{
                            return (
                                <li key={msgObj.id}>
                                    {/* 向路由组件传递params参数 */}
                                    {/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.msg}</Link> */}

                                    {/* 向路由组件传递search参数 */}
                                    {/* <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.msg}</Link> */}

                                    {/* 向路由组件传递state参数 */}
                                    <Link to={{pathname:'/home/message/detail',state:{id:msgObj.id,title:msgObj.title,msg:msgObj.msg}}}>{msgObj.msg}</Link>
                                </li>
                            )
                        })
                       }
				</ul>
                <hr/>
                {/* 声明接收params参数 */}
                {/* <Route path="/home/message/detail/:id/:title" component={Detail}/> */}

                {/* search参数无需声明接收 */}
                <Route path="/home/message/detail" component={Detail}/>
            </div>
        )
    }
}
