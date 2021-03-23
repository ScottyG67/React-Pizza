import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {
  state = {
    pizzas: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/pizzas').then(res => res.json()).then(pizzaList => this.setState({pizzas: pizzaList}))
  }

  fetchPizzas = ()=> {
    fetch('http://localhost:3000/pizzas').then(res => res.json()).then(pizzaList => this.setState({pizzas: pizzaList}))
  }

  renderPizzas=() => {
    // this.fetchPizzas()
    this.updateAfterSave()
    return this.state.pizzas.map(pizza => <Pizza key={pizza.id} pizza={pizza} getEditPizza = {this.props.getEditPizza}/>)
  }

  updateAfterSave=()=>{
    console.log("checking passed pizza")
    this.props.passPizza? this.fetchPizzas : null
  }

  



  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {
          // this.updateAfterSave
          // this.state.pizzas.map(pizza => <Pizza key={pizza.id} pizza={pizza} getEditPizza = {this.props.getEditPizza}/>)
           this.renderPizzas()
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
