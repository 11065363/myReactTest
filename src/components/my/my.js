import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import Content from './mycontent';
import Mynav from './mynav';



//const Body=(props)=>{
class Body extends Component {
    // var text=this.state.liked?"yellow":"blue";
    // var style = {
    //     color:text
    // }    
    
    render() {
        return (
            <div>
                <Mynav />
                <Content username="你好"  />
                <Content username="世界" />
            </div>

        )
    }

}



export default Body;
