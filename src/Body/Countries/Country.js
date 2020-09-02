import React, { Component } from 'react'
import Aux from '../../HOC/Auxulary'
import Card from '../Cards/card/card'
import Axios from 'axios'

export default class Country extends Component {
    state={
        datas:[],
        loading:true,
        selectedCountry:''

    }
    componentDidMount() {
        Axios.get('https://api.covid19api.com/summary')
          .then(response=>{
              this.setState({
                  ...this.state,
                  datas:response.data['Countries']
              })
          })
    }
  

    handleEvent=(event,number)=> {

        this.setState({
            ...this.state,
            selectedCountry:event.target.value
        })
    }
                                              
    render() {
        let selected=[];
        let printinfTheDatas=[];
        this.state.datas.forEach((item,index,arr)=>{
            // eslint-disable-next-line
            Object.keys(this.state.datas[index]).map((keys,i)=>{
                                
                if(keys==="Country")
                {
                   return selected[index]=<option key={index} value={index}>{this.state.datas[index][keys]}</option> 
                }
            })
        }
            
        );
        
        if (this.state.selectedCountry!=='')
        {
            // eslint-disable-next-line
            Object.keys(this.state.datas[this.state.selectedCountry]).map((keys,i)=>{
                if(typeof this.state.datas[this.state.selectedCountry][keys]!=="object")    
                
                {
                   return printinfTheDatas[i]=<Card key={keys} status={keys} number={this.state.datas[this.state.selectedCountry][keys]}/>

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
