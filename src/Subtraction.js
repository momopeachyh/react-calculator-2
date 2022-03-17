import React from "react";
import "./Operator.css";

class Subtraction extends React.Component {
  constructor() {
    super();
    this.state = {
      difference: "",
    };
  }
  render() {
    return (
      <div className="Subtraction">
        <form>
          <input type="number" id="subtract1"></input>
          <button className="button">-</button>
          <input type="number" id="subtract2"></input>
          <input
            type="submit"
            value="="
            className="button"
            onClick={(event) => this.calcDifference(event)}
          ></input>
          <input type="text" value={this.state.difference}></input>
        </form>
      </div>
    );
  }

  calcDifference = (event) => {
    event.preventDefault();
    let subtract1 = document.getElementById("subtract1").value;
    let subtract2 = document.getElementById("subtract2").value;
    let difference = Number(subtract1) - Number(subtract2);
    this.setState({ difference: difference });
  };
}

export default Subtraction;
