import React, { Component } from 'react'
import Aux from '../../HOC/Auxulary'
import Card from '../Cards/card/card'

export default class Country extends Component {
    state={
        loading:true,
        selectedCountry:''

    }

    // Prototype methods, Bind in Constructor (ES2015)
    handleEvent=(event,number)=> {

        this.setState({
            ...this.state,
            selectedCountry:event.target.value
        })
    }

    render() {
        let selected=[];
        let printinfTheDatas=[];
        for (let x =0; x<this.props.datas.length;x++){

                Object.keys(this.props.datas[x]).map((keys,i)=>{
                    
                    if(keys==="Country")
                    {
                       return selected[x]=<option key={x} value={x}>{this.props.datas[x][keys]}</option> 
                    }
                })
            
        }

        if (this.state.selectedCountry!=='')
        {
            Object.keys(this.props.datas[this.state.selectedCountry]).map((keys,i)=>{
                if(typeof this.props.datas[this.state.selectedCountry][keys]!=="object")    
                
                {
                   return printinfTheDatas[i]=<Card status={keys} number={this.props.datas[this.state.selectedCountry][keys]}/>

                }
            })
        }
        return (
            <Aux>
            <div className="row">
            <select onChange={(number)=>this.handleEvent(number)}style={{"width":"100%","height":"50px"}}>
                <option value="">-Select the country's name to show the Data of-</option>
                {selected}
            </select>
        </div>
        <div className="row">
                {printinfTheDatas}
             </div>
            </Aux>
            
        )
    }
}
