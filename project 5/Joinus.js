import React  from 'react';
import ReactDOM from 'react-dom';
class Joinus extends React.Component{
  constructor(){
    super();
    this.state={username:"",phonenumber:null,errmsg:""};
  }
  uservalue=(event)=>
  {
    let n=event.target.name;
    let v=event.target.value;
    let err=""
    if(n=="phonenumber"){
      if(v!=""&&!Number(v))
      {
        err=<strong>invalid,must be number</strong>
      }
    }
    this.setState({errmsg:err});
    this.setState({[n]:v});
  }
  render()
  {
    
    return(
      <form>
        <center><h1>REGISTER WITH US </h1></center>
        <h1>Your Name {this.state.username}</h1>
        
        Enter Your name:<input type="text" name="username" onChange={this.uservalue}/>
        <h1>Your phone  number  {this.state.age}</h1>
        Enter Your phone number:<input type="text" name="phonenumber" onChange={this.uservalue}/>{this.state.errmsg}
      

      </form>
    )
  }
}
ReactDOM.render(<Joinus/>,document.getElementById('root'));

  export default Joinus;
