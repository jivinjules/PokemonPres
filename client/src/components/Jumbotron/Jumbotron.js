import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => (
    <div className='jumbotron'>
     <h1 className='title'>Pokemon Presidents 2020</h1>
     <p className='guesses'>Vote for your favorite Pokemon President!<br /> Each Vote is 1000 Sats. Unlimited Voting!</p>
     <h1>Current Leader: {props.children}</h1>
    </div>
)

export default Jumbotron;