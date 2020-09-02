import React from 'react'
import './intro.css'

const Intro = () => {
    return (
        <div className="view jarallax" data-jarallax='{"speed": 0.2}' style={{"background-image": "url('http://yogesh-bhattarai.com/img/home-bg-2.jpg')", "background-repeat": "no-repeat", "background-size": "cover" ,"height":"700px","margin-top":"10px"}}>
    <div className="mask rgba-white-light d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-md-12 white-text text-center">
          <h5 className="text-uppercase pt-md-5 pt-sm-2 pt-5 pb-md-5 pb-sm-3 pb-5 white-text font-weight-bold wow fadeInDown"
              data-wow-delay="0.3s">COVID -19 World Data Project</h5>
            
            <h1 className="display-3 mb-0 pt-md-5 pt-5 white-text font-weight-bold wow fadeInDown" data-wow-delay="0.3s">Yogesh
              <a className="indigo-text font-weight-bold" href="/">Bhattarai</a>
            </h1>
            
            <div className="wow fadeInDown" data-wow-delay="0.3s">
              <a className="btn btn-light-blue btn-lg" href="https://www.yogesh-bhattarai.com">Portfolio</a>
              <a className="btn btn-indigo btn-lg" href="https://www.yogesh-bhattarai.com">About me</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
}

export default Intro
