import React,{Component} from 'react';//{Component} in the curly braces destructure.
import {CardList} from './components/card_list/card_list_component';//custom component
import './App.css';

/*if we don't destructure we can also use Component as React.Component*/
class App extends Component{

  constructor(){
    super();// to inherit the constructor properties of Component.

    this.state = {
      users:[
      ]
    };
  }

//Life Cycles
componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()  /*converting response to json format*/)
    .then(users => this.setState({users:users}))
  }

  render(){
    return(
      <div className="App">
        <CardList users={this.state.users}/>
      </div>
    );
  }
}

export default App;
