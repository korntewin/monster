import React, {Component} from 'react';
import logo from './logo.svg';
import {CardList} from "./components/card-list/card-list.component"
import {SearchBox} from "./components/search-box/search-box.component"
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      heroes : [],
      searchField:"",
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then(
        response => {
          return response.json()
        }
      ).then(
        user => this.setState(
          {heroes : user}
        )
      )
  }

  handleChange = e => this.setState({searchField: e.target.value})

  render(){

    const {heroes, searchField} = this.state;
    const heroesFilter = heroes.filter(hero => 
      hero.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="search hero"
          handleChange = {this.handleChange}
        />
        <CardList heroes = {heroesFilter} />
      </div>
    );
  }
  
}

export default App;
