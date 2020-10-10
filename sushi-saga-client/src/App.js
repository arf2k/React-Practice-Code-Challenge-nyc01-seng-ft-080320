import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state= {
    API : [],
    eaten : [],
    money: 100,
    index: 0

  }

  componentDidMount(){
    fetch("http://localhost:3000/sushis")
    .then(resp => resp.json())
    .then(data => {
      this.setState({API : data})
    })

  }

 chooseFourSushi = () => {
  return this.state.API.slice(this.state.index, this.state.index+4)

 }

more = (event) => {
  let newIndex = this.state.index + 4
  this.setState({index: newIndex})
}

eat = (sushi) =>{
  let newMoney = this.state.money - sushi.price
  if(!this.state.eaten.includes(sushi) && newMoney >= 0) { 
      this.setState({
    eaten: [...this.state.eaten, sushi],
    money: newMoney})
}
}




  render() {
    return (
      <div className="app">
        <SushiContainer sushi={this.chooseFourSushi()} eat={this.eat} more={this.more} eaten={this.state.eaten} />
        <Table remainingMoney={this.state.money} eaten={this.state.eaten} />
      </div>
    );
  }
}

export default App;