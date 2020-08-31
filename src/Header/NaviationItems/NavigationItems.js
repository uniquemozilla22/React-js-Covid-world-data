import React from 'react'

const NavigationItems = (props) => {

    let classNameList = "nav-item "
    let href="#"
    if(props.active)
    {
        classNameList+="active"
    }
    if(props.title==='Made By Yogesh')
    {
     href="https://www.yogesh-bhattarai.com"
    }

    return (
        <div>
           <li className={classNameList}>
                    <a className="nav-link" href={href}><i className="far fa-address-book"></i>{props.title}</a>
                </li>
        </div>
    )
}

export default NavigationItems
