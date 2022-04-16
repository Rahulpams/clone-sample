import Cardlist from '../components/Cardlist'
import Searchbox from '../components/Searchbox'
import Scroll from '../components/Scroll'
import Errorboundry from '../components/Errorbound'
import React, { Component } from 'react'
import "./App.css"


class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ""
    }
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json() )
      .then(users => this.setState({robots: users}))
    
  }
  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }
  render() {
    const { robots, searchfield } = this.state
    const filteredrobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })

    return !robots.length ?
    <h1>Loading...</h1>:
    (
      <Errorboundry>
        <div className=" tc bg-light-orange ">
        <h1><strong>RoboFriends</strong></h1>
        <Searchbox searchChange={this.onSearchChange}/>
        <Scroll>
            <Cardlist robots={filteredrobots} />
        </Scroll>
        </div>  
      </Errorboundry> 
    );
        
  }
  
}

export default App;
