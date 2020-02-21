import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  //always called in the beginnning once...
  //setState() can not be called before render so
  //it could be best method to initialize state htere
  constructor(props) {
    super(props);
    console.log("App - Constructor", this.props);
    // this.state =  this.props.something;
  }

  //after component is rendered into the dom
  //perfect place to make ajax call to server
  componentDidMount() {
    // Ajax Call...
    console.log("App - Mounted");
    // then call this.setState({movies}) with new data
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id != counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });

    this.setState({ counters });
  };

  render() {
    // const {counters} = this.state;
    console.log("App - Rendered");
    const total = this.state.counters.filter(c => c.value > 0).length;
    return (
      <React.Fragment>
        <NavBar totalCounters={total} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
