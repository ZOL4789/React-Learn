// 创建外壳组件App
// 导入React
import React from 'react';
// 1.import React,{component} from 'react'
// 2.const {component} = React;

class App extends React.Component{
  render(){
    return (
      <div>
        Hello, React!
      </div>
    )
  }
}

// 暴露组件
export default App;
