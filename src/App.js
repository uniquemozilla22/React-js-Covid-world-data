import React, { Component } from 'react';
import './App.css';
import Axios from 'axios'
import Header from './Header/Header';
import {Switch,Route} from 'react-router-dom'
import Global from './Body/Global/Global'
import Country from './Body/Countries/Country'
import Intro from './Body/Intro/Intro';
import Spinner from './Spinner/Spinner';


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

    let globalloader=this.state.data!==null?()=><Global datas={this.state.data} loading={this.state.loading}/>:<Spinner />
    let countryLoader=this.state.countriesData!==null?()=><Country datas={this.state.countriesData}/>:<Spinner/>
    return(
      <div className="App">
      <Header></Header>
      <Switch>
        <Route path="/" exact component={Intro}/>
        <Route path="/global" exact render={globalloader}/>
        <Route path="/country" exact render={countryLoader}/>
        </Switch>
      </div>
    )
  }
  
  
}

export default App;
