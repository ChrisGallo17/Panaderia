import React from 'react'
import './pastry.css'

function Pastry(props) {
    return (
        <div>
            <h3> {props.name} </h3>
            <p> {props.description} </p>
            <p> Calories: {props.calories} </p>
        </div>
    )
}

export default Pastry