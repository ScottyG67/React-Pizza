import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  state = {
    saved:false,
    editPizza: null
  }

  getEditPizza= (pizza) => {
    console.log(pizza)
    this.setState({editPizza:pizza})
  }

  updateEditPizza = (e) => {
    console.log(e)
    let updateItem = e.target.value
    let key = e.target.id
    
    if(key==="notveg"){
      key = "vegetarian"
      updateItem = false
    }
    
    this.setState(previousState => {return{ editPizza: {...previousState.editPizza, [key]: updateItem}}})
  }

  saveChange = () => {
    let pizza = this.state.editPizza
    let reqObj = {
      headers: {"Content-Type": "application/json"},
      method: "PATCH",
      body: JSON.stringify(pizza)
    }
    fetch('http://localhost:3000/pizzas/' + pizza.id,reqObj).then(res=>res.json())
    .then(savedPizza => {
      this.setState({saved:true})
      this.setState({editPizza:savedPizza})
      console.log("finished Setting State")
    })
  }

  passPizza = (pizza) => {
    return pizza
  }


  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza={this.state.editPizza} updateEditPizza = {this.updateEditPizza} save={this.saveChange}/>
        <PizzaList getEditPizza = {this.getEditPizza} passPizza = {this.state.saved?this.state.editPizza:null}/>
      </Fragment>
    );
  }
}

export default App;
