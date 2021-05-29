import React from 'react'
import { Card } from 'react-bootstrap';
import './Job.css'
const Cards = (props) =>
{
    return (
     

        <>
        <div style = {{borderStyle:'solid',width:'750px',paddingLeft:'10px',backgroundColor:'orange'}}>
           <h1>Position : {props.tittle}</h1>
           
            <h2>Summary :</h2>
            <pre style={{fontSize:'18px',marginLeft:'7px'}}>{props.summary}</pre>

            <a href={props.link} target="_blank"><button style={{borderStyle:'solid',borderColor:'black',backgroundColor:'blue',width:'150px',marginLeft:'500px'}} type="button">Apply</button></a>
            
           
        </div>
        <br/>
        </>
    )
}

export default Cards
