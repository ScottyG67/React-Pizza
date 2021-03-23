import React from "react"

const PizzaForm = (props) => {
  let {topping,size,vegetarian} = props.pizza? props.pizza:0

  return(
      <div className="form-row">
        <div className="col-5">
            <input id ="topping" type="text" className="form-control" placeholder="Pizza Topping" 
              value= {topping}
              onChange={props.updateEditPizza}
              />
        </div>
        <div className="col">
          <select id = 'size' value={size} onChange={props.updateEditPizza} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input id="vegetarian" className="form-check-input" type="radio" value="Vegetarian" 
            checked={vegetarian}
            onClick ={props.updateEditPizza}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input id="notveg"className="form-check-input" type="radio" value="Not Vegetarian" 
            checked={!vegetarian}
            onClick ={props.updateEditPizza}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={props.save}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
