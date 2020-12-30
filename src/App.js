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
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
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
