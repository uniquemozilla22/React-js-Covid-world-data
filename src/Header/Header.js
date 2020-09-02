

import React from 'react'
import NavigationItems from './NaviationItems/NavigationItems'
import Logo from './logo/logo'

const Header = (props) => {
    const navigationItems={
        0:{active:false , title:"Made By Yogesh",href:"/"},
        1:{active:false , title:"Global Stats",href:"/global"},
        2:{active:false , title:"Stats By Country",href:"/country"},
    }
    let printing=[];
    Object.keys(navigationItems).map((key,i)=>{   
           return printing[i]=<NavigationItems key={key} active={navigationItems[key].active} title={navigationItems[key].title} href={navigationItems[key].href}/>
    })
    return (       
        <div>
       <nav className="navbar navbar-expand-lg navbar-mainbg">
        <a className="navbar-brand navbar-logo" href="https;//www.yogesh-bhattarai.com"><Logo height="80px"></Logo></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-white"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <div className="hori-selector"><div className="left"></div><div className="right"></div></div>
                {printing}
            </ul>
        </div>
    </nav>
        </div>
    )
}

export default Header

