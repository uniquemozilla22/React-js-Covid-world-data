import React from 'react'
import {NavLink} from 'react-router-dom'

const NavigationItems = (props) => {

    let classNameList = "nav-item "
    if(props.active)
    {
        classNameList+="active"
    }
    
    return (
        <div>
            <NavLink activeClassName="active" to={props.href} exact>
           <li className={classNameList}>
                    <i className="far fa-address-book"></i>{props.title}
                </li>
                </NavLink>
        </div>
    )
}

export default NavigationItems
