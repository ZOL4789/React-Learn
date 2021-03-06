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
                                    <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.msg}</Link>
                                </li>
                            )
                        })
                       }
				</ul>
                <hr/>
                <Route path="/home/message/detail/:id/:title" component={Detail}/>
            </div>
        )
    }
}
