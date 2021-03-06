import React, { Component } from 'react'
import PropTypes from 'prop-types'


import './index.css'

export default class Item extends Component {

    state = {isHover: false,isShowDel:false};

    static propTypes = {
        todo: PropTypes.object.isRequired,
        changeDoneFunc: PropTypes.func.isRequired,
    }

    handleHover = (flag)=>{
        return ()=>{
            this.setState({isHover:flag});
        }
    }

    handleDel = (id)=>{
        const {delTodoFunc} = this.props;
        return ()=>{
            if(window.confirm('确定删除吗？')){
                delTodoFunc(id);
            }
        }
    }

    

    changeDone = (id)=>{
        return (event)=>{
            const {changeDoneFunc} = this.props;
            changeDoneFunc(id,event.target.checked);
        }
    }

    render() {
        const {todo} = this.props;
        const {isHover} = this.state;
        return (
            <li style={{backgroundColor: isHover?'#ddd':'white'}} onMouseEnter={this.handleHover(true)} onMouseLeave={this.handleHover(false)}>
                <label>
                    <input onChange={this.changeDone(todo.id)} type='checkbox' checked={todo.done}/>
                    <span>{todo.name}</span>
                </label>
                <button className='btn btn-danger' style={{display:isHover?'block':'none'}} onClick={this.handleDel(todo.id)}>删除</button>
            </li>
        )
    }
} 
