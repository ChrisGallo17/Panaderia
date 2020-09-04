import React from 'react'
import './pastry.css'

function Pastry(props) {
    return (
        <div className="pastry">
            <h3 className='name'> {props.name} </h3>
            <img src={"require('./cannoli.jpg')"}></img>
            <p className="desc"> {props.description} </p>
            <p className="cal"> {props.calories} calories</p>
        </div>
    )
}

export default Pastry