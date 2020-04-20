import React,{Component} from 'react';
class AddNinja extends Component{
   
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();//to not refresh the page onSubmit
        this.props.addNewNinja(this.state);

    }
    render(){
        return(
            <div>
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" onChange={this.handleChange}/>
                <label htmlFor="age">Age:</label>
                <input type="text" id="age" onChange={this.handleChange}/>
                <label htmlFor="belt">Belt:</label>
                <input type="text" id="belt" onChange={this.handleChange}/>
                <button>Submit</button>
              </form>
            </div>
        )
    }

}
export default AddNinja