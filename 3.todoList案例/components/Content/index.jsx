import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Item from '../Item'

import './index.css'

export default class Content extends Component {

    static propTypes = {
        todos: PropTypes.array.isRequired,
        changeDoneFunc: PropTypes.func.isRequired,
    }

    render() {
        const {todos, changeDoneFunc, delTodoFunc} = this.props;
        return (
            <div className='todo-main'>
                {todos.map((todo)=>{
                    return <Item key={todo.id} todo={todo} changeDoneFunc={changeDoneFunc} delTodoFunc={delTodoFunc}/>
                })}
            </div>
        )
    }
}
