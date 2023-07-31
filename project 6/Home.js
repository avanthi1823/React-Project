import React, {Component} from 'react';
import trend from './trend.jpg';
import trend2 from './trend 2.jpg';
import trend3 from './trend 3.jpg';

class Home extends Component{
  render(){
    return(
      <div>
       <center><h1>SHOP WITH US</h1></center>
       <center><h2>TRENDS FASHION STORE</h2></center>
       <img src={trend} alt="logo" width="450" height={"300"}></img>
       <img src={trend2} alt="logo" width="450" height={"300"}></img>
       <img src={trend3} alt="logo" width="430" height={"300"}></img>
       
      </div>
    );
  }

}
export default Home;
