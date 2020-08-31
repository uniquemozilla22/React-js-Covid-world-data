import React from 'react'
import Card from './card/card'
import './Cards.css'
import Aux from '../../HOC/Auxulary'

const Cards = (props) => {

    let printingCard=[];

    Object.keys(props.datas).map((keys,i)=>{
           return printingCard[i]=<Card key={keys} status={keys} number={props.datas[keys]}></Card>
    })
    return (
        <Aux>
            <div className="title">
                <h4>Global Statistics</h4>
            </div>
        <div className="row" >            
            {printingCard}
            </div>
        </Aux>
        
    )
}

export default Cards
