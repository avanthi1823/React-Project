import React, {Component} from 'react';
import ReactDOM from "react-dom";
class Task4 extends Component{
 constructor(){ 
  super();
  this.state={
    data:
    [
      {
        "name":"Sankari:Sanku"
      },
      {
        "name":"Janani:Jana"
      },
      {
        "name":"Swetha:Suve"
      },
      {
        "name":"Amirtha:Amar"
      
      },
      {
        "name":"Harini:Hari"
      }
     ] 
    }
  }

  render(){
    return(
      <div>
          <Fruits/>
          <ul>
            {this.state.data.map((item)=><List data={item}/>)}
          </ul>
      </div>
   );
  }
}

class Fruits extends React.Component{
  render(){
    return(
      <div>
        <h1 style={{color:'black'}}>WELCOME TO BUDDY CLUBS!!!</h1>
        <h2 style={{color:'violet'}}>Its all about my Friends </h2>
       
      </div>
         );
        }
      }
      
class List extends React.Component{
  render(){
    return(
      <ul>
        <li>{this.props.data.name}</li>
      </ul>
    );
  }
}
      export default Task4;
