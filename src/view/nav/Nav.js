import React from "react";
import "./Nav.scss"
class Nav extends React.Component{
    render(){
        return(
            <div class="topnav">
                <a class="active" href="/">Home</a>
                <a href="/ToDos">ToDos</a>
                <a href="/contact">Contact</a>
                <a href="/about">About</a>
            </div>
        )
    }
}

export default Nav