import React, { Component } from 'react'
import Axios from 'axios'

export default class Country extends Component {
    state={
        CountriesDataRequested:"",
        loading:true

    }

    // Prototype methods, Bind in Constructor (ES2015)
    handleEvent() {}

    render() {
        console.log(this.props.datas)
        let selected=[]
        for (let x =0; x<this.props.datas.length;x++){
                Object.keys(this.props.datas[x]).map((keys,i)=>{
                selected[i]=<option value={this.props.datas[keys][i]} key={this.props.datas[keys]}>{keys}</option>
                })
            
        }
        return (
            <div className="row">
            <select onChange={this.handleEvent}style={{"width":"100%","height":"50px"}}>
                <option value="">-Select the prefered data-</option>
                {selected}
            </select>
        </div>
        )
    }
}
