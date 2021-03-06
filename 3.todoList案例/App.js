// 创建外壳组件App
// 导入React
import React from 'react';

import Header from './components/Header'
import Content from './components/Content'
import Bottom from './components/Bottom'

import './App.css'


// 1.import React,{component} from 'react'
// 2.const {component} = React;

export default class App extends React.Component{

  // 初始化状态
  state = {todos:[
    {id:1,name:'吃饭',done:true},
    {id:2,name:'睡觉',done:false},
    {id:3,name:'打代码',done:false}
  ]}

  addTodo = (todoObj)=>{
    const {todos} = this.state;
    const newTodos = [todoObj,...todos];
    this.setState({todos:newTodos});
  }

  changeDone = (id,done)=>{
    const {todos} = this.state;
    const newTodos = todos.map((todo)=>{
      if(todo.id === id){
        return {...todo,done}
      }
      return todo;
    })
    this.setState({todos:newTodos});
  }

  changeTotalDone = (flag)=>{
    const {todos} = this.state;
    const newTodos = todos.map((todoObj)=>{
      return {...todoObj,done:flag}
    })
    this.setState({todos:newTodos});
  }

  delTodo = (id)=>{
    // 获取todos
    const {todos} = this.state;
    // 过滤掉id的todo，相当于删除
    const newTodos = todos.filter((todoObj)=>{
      return todoObj.id !== id;
    })
    // 更新状态
    this.setState({todos:newTodos});
  }


  delAllDone = ()=>{
    const {todos} = this.state;
    const newTodos = todos.filter((todoObj)=>{
      //return todoObj.done === false;
      return !todoObj.done;
    })
    this.setState({todos:newTodos});
  }

  render(){
    const {todos} = this.state;
    return (
      <div className='todo-container'>
        <div className="todo-wrap">
          <Header addTodoFunc={this.addTodo}/>
          <Content todos={todos} changeDoneFunc={this.changeDone} delTodoFunc={this.delTodo}/>
          <Bottom todos={todos} changeTotalDoneFunc={this.changeTotalDone} delAllDoneFunc={this.delAllDone}/>
        </div>
      </div>
    )
  }
}

