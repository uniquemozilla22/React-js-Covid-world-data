import React, { Component } from 'react'
import Aux from '../../HOC/Auxulary'
import Card from '../Cards/card/card'
import Axios from 'axios'
import Cards from '../Cards/Cards'
import Spinner from '../../Spinner/Spinner'

export default class Global extends Component {
    state={
        data:{},
        dataRequested:"",
        loading:true

    }
    componentDidMount() {

        Axios.get('https://api.covid19api.com/summary')
        .then(response=>{
           
            this.setState({
                ...this.state,
                loading:false,
                data:response.data['Global']
            })
        })
        
    }
    // Prototype methods, Bind in Constructor (ES2015)
    handleEvent=(event)=> {
        this.setState({
            ...this.state,
            dataRequested:event.target.value
        })
    }


    render() {
        let selected=[]
        Object.keys(this.state.data).map((keys,i)=>{
                return selected[i]=<option value={keys} key={this.state.data[keys]}>{keys}</option>
        })

                   
                    let individual= this.state.dataRequested!==""?<Card status={this.state.dataRequested} number={this.state.data[this.state.dataRequested]}></Card>:<br/>
       
console.log()
        let loadingHandler=!this.state.loading?
        <div>
        <Cards datas={this.state.data}></Cards>
    </div>
        :<Spinner/>
        

       
    
        return (
            <Aux>
        <div className="row">
            <select onChange={this.handleEvent}style={{"width":"100%","height":"50px"}}>
                <option value="">-Select the prefered data-</option>
                {selected}
            </select>
        </div>
        <div className="row">
            {individual}
        </div>
    {loadingHandler}
    </Aux>
            
        )
    }
}
