import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'

import './index.css'


export default class Header extends Component {

    static propTypes = {
        addTodoFunc:PropTypes.func.isRequired,
    }

    render() {
        return (
            <div className='todo-header'>
                <input onKeyUp={this.addTodo} type='text' placeholder='输入任务，按回车确认'/>
            </div>
        )
    }

    addTodo = (event)=>{
        const {addTodoFunc} = this.props;
        const {value} = event.target;
        const keyCode = event.keyCode;
        if(keyCode !== 13){
            return;
        }
        if(value.trim() === ''){
            alert('输入不能为空！');
            return;
        }

        const todoObj = {id:nanoid(),name:value,done:false};
        addTodoFunc(todoObj);
        event.target.value = '';
    }
}
