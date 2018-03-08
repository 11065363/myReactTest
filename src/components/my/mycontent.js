import React, { Component } from 'react';
import { render } from 'react-dom';

//const Mynav=(props)=>{
class Mynav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _color: "red",
            t: 1,
        }
        
        //this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        //console.log(e, arg);
        this.setState = ({
            _color:"green",
            t: this.state.t++
        })

        console.log(this.state._color)
        console.log(this.state.t)

    }

    render() {
        //var text = this.state.liked ? "red" : "green";
        var style = { color: this.state._color }

        return (
            <div onClick={e => this.handleClick(e)} style={style}>{this.props.username}</div>
        )
    }
}

export default Mynav;
