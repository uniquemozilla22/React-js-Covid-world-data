import React, { Component } from 'react';
import './App.css';
import Axios from 'axios'
import Header from './Header/Header';
import {Switch,Route} from 'react-router-dom'
import Global from './Body/Global/Global'
import Country from './Body/Countries/Country'
import Intro from './Body/Intro/Intro';


class App extends Component{

  state={
    data:{},
    countriesData:{},
    loading:true
  }
  componentDidMount() {
      Axios.get('https://api.covid19api.com/summary')
        .then(response=>{
            this.setState({
                ...this.state,
                data:response.data['Global'],
                countriesData:response.data['Countries']
            })
        })
  }

  render(){
    return(
      <div className="App">
      <Header></Header>
      <Switch>
        <Route path="/" exact component={Intro}/>
        <Route path="/global" exact render={()=><Global datas={this.state.data} loading={this.state.loading}/>}/>
        <Route path="/country" exact render={()=><Country datas={this.state.countriesData}/>}/>
        </Switch>
      </div>
    )
  }
  
  
}

export default App;
