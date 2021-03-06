import React, { Component } from 'react'
//import PropTypes from 'prop-types'

import './index.css'

export default class Bottom extends Component {

    static propTypes = {

    }

    state = {isHover:false};

    changeTotalDone = (event)=>{
        const {changeTotalDoneFunc} = this.props;
        changeTotalDoneFunc(event.target.checked);
    }

    handleHover = (flag)=>{
        const {isHover} = this.state;
        return (event)=>{
            this.setState({isHover:flag});
        }
    }

    handleDelTotal = ()=>{
        const {delAllDoneFunc} = this.props;
        delAllDoneFunc();
    }

    render() {
        const {todos} = this.props;
        const doneCount = todos.reduce((preTodo,todo)=>{
            // if(!todo.done){
            //     return;
            // }
            // return preTodo + 1;
            return preTodo + (todo.done ? 1 : 0);
        }, 0);
        const totalCount = todos.length;
        const {isHover} = this.state;
        return (
            <div className='todo-footer' onMouseEnter={this.handleHover(true)} onMouseLeave={this.handleHover(false)}>
                <input type='checkbox' onChange={this.changeTotalDone} checked={doneCount === totalCount && totalCount ? true : false}/>
                <span>已完成{doneCount}/全部{totalCount}</span>
                <button className='btn btn-danger' style={{display: isHover && doneCount > 0 ? 'block':'none'}} onClick={this.handleDelTotal}>清除已完成任务</button>
            </div> 
        )
    }
}
