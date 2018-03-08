import React, { Component } from 'react';
//import Button from './Button'; //从另一个文件导入一个组件 
import './my.css';
import ReactDOM from 'react-dom';
//import { render } from 'react-dom';

class Mynav extends Component {
  render() {
    return (
    <div className="myone">
      <div>头像</div>
      <div>
        <div>段落1</div>
        <div>段落2</div>
      </div>
    </div>
    )
  }
}

// const Mynav=(prop)=>{
//   return(
//     <div>213</div>
//   )
// }

export default Mynav; 
