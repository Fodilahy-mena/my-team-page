import React from 'react'

function Team(props) {
    return (
        <figure>
            <img src={require("./shae.png")}></img>
            <img src={props.source} alt=""></img>
            <figcaption></figcaption>
        </figure>
    )
}

export default Team