import React from 'react'
import logo from './71525760_1082127131981111_1826169740062621696_n.jpg'
import './logo.css'
const Logo = (props) => {
    return (
        <div className="Logo">
            <img src={logo} height={props.height} width={props.width} alt="Nepal-Logo"/>
        </div>
    )
}


export default Logo
