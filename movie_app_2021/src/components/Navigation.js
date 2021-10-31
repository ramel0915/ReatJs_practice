import React from "react";
import {Link} from "react-router-dom";
import "./Navigation.css";

/*
const StyledLink = style(Link)`
    text-decoration: none;
    font-size: 20px;
    padding: 10px;
    padding-right: 20px;
    padding-left: 20px;
    background-color: white;
    color: black;
    font-weight: 100;
`;*/

function Navigation(){
    return (<div className = "menu">
        <Link className = "links" to ="/">Home</Link>
        <Link className = "links" to = "/about">About</Link>  
    </div>
    );
}

export default Navigation;