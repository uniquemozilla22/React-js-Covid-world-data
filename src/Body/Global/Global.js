import React, { Component } from 'react'
import Aux from '../../HOC/Auxulary'
import Card from '../Cards/card/card'
import Cards from '../Cards/Cards'
import Spinner from '../../Spinner/Spinner'

export default class Global extends Component {
    state={
        dataRequested:"",
        loading:true

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
        Object.keys(this.props.datas).map((keys,i)=>{
                return selected[i]=<option value={keys} key={this.props.datas[keys]}>{keys}</option>
        })    

                   
        let individual= this.state.dataRequested!==""?<Card status={this.state.dataRequested} number={this.props.datas[this.state.dataRequested]}></Card>:<br/>
        let loadingHandler=typeof this.props.datas!== 'undefined'?
        <div>
        <Cards datas={this.props.datas}></Cards>
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
