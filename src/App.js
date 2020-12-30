import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        { name: "Harish", id: "1" },
        { name: "Abilash", id: "2" },
        { name: "Raghul", id: "3" },
      ],
    };
  }

  handleClick = (e) => {
    console.log(this.state);
  };

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
        <button onClick={this.handleClick}>Check</button>
      </div>
    );
  }
}

export default App;
