import React,{Component} from 'react';
import Ninjas from './Ninjas';
import AddNinja from './addNinja';

class App extends Component{
   state={
     "ninjas":[
     {id:1,name:"hakim",age:26,belt:"dark"},
     {id:2,name:"larbi",age:27,belt:"green"},
     {id:3,name:"saleh",age:25,belt:"red"},
     {id:4,name:"khaoula",age:26,belt:"yellow"}
     ]
    };
    
    deleteNinja=(id)=>{
      console.log("id de delete",id);
        let ninjas=this.state.ninjas.filter(ninja=>ninja.id!==id);
      this.setState({ninjas:ninjas })
    


    }
    addNewNinja=(ninja)=>{
      //to update state in case of adding new element
      //first we have to copy the current state in local variable 
      //then update the local variable and copy it in the state
      //first method using array push
      // ninja.id=Math.random();
      // let ninjas=this.state.ninjas;
      // ninjas.push(ninja)
      // this.setState({
      //   ninjas:ninjas
      // });
      //second method using spread operator ES6
      ninja.id=Math.random();
      let ninjas=[...this.state.ninjas,ninja];
      this.setState({
        ninjas:ninjas
      });
      
     

    };
    componentDidMount(){
      console.log("component mounted");
    }
    componentDidUpdate(prevProps,prevState){
      console.log("component updated");
      console.log(prevProps);
      console.log(prevState);
    }
  
  render(){
    return (
      <div className="App">
       <h1>my first react app</h1>
       <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja}/>
       <AddNinja addNewNinja={this.addNewNinja}/>

      </div>
    );
  }

}

export default App;
