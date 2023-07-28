import React from "react";
import ReactDOM from "react-dom";
// // import "./index.css";
// import App from "./App";
// // import Inlineexample from "./App";
// import Reactstyle from "./App";
import styles from './demo.module.css'
import land from './land.jpg';
import noise from './noise.jpg';
import air from'./air.jpg';
import water from'./water.jpg';


class Task3 extends
React.Component{
  render(){
   
      const mystyle={
        color:"black",
        fontFamily:"Arial"
        
      };
      const pad={
        float:"right"
      };
      return(
      <div>
         <center><h2 style={mystyle} >POLLUTION</h2></center>
         
         
         <br></br>
         <img className="land" src={land} alt="logo" width={300} height={300} ></img>
         <img className="noise" src={noise} alt="logo" width={300} height={300}style={pad}></img>
         <br></br>
         <center><video width="300" height="300" controls>
            <source src="./video.mp4" type="video/mp4" padding="500px"></source>
        </video></center>
        <br></br>
         <img className="air" src={air} alt="logo" width={300} height={300}></img>
         
         <img className="water" src={water} alt="logo" width={300} height={300}style={pad}></img>
        
      </div>)
  }
}

ReactDOM.render(<Task3/>,
document.getElementById("root"));
export default Task3;
