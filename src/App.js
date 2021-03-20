import React,{Component} from 'react';//{Component} in the curly braces destructure.
import {CardList} from './components/card_list/card_list_component';//custom component
import {SearchBox} from './components/search-box/search_box_component';
import './App.css';

/*if we don't destructure we can also use Component as React.Component*/
class App extends Component{/*class component*/

  constructor(){
    super();// to inherit the constructor properties of Component.

    this.state = {
      users:[],
      searchField:''
    };
  }

handleChange = (e) => {
  this.setState({searchField:e.target.value});
}

//Life Cycles
componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()  /*converting response to json format*/)
    .then(users => this.setState({users:users}))
  }

  render(){
    //destructuring objects from state
    const {users,searchField} = this.state;
    const filteredUsers = users.filter(users => users.name.toLowerCase().includes(searchField.toLowerCase()))
    return(
      <div className="App">
        <h1 className="heading">Robo-Gang</h1>
        <SearchBox placeholder="search" handleChange={this.handleChange}/>
        <CardList users={filteredUsers}/>
      </div>
    );
  }
}

export default App;

/*When ever the state is changed the react will re-render the component*/