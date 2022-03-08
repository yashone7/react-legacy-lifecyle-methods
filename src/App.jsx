import React, { Component } from "react";
import Counter from "./Counter";

class App extends Component {
  state = {
    count: 0,
    hidden: true,
  };

  constructor(props) {
    super(props);

    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);

    console.log("constructor method runs first, 1");
  }

  incrementCount() {
    this.setState({ count: this.state.count + 1 });
  }

  decrementCount() {
    this.setState({ count: this.state.count - 1 });
  }

  // right place to perform side effects ie API calls/ subscriptoions etc...
  componentDidMount() {
    console.log("component has mounted on the DOM, 5");
  }

  componentDidUpdate() {
    console.log("CDU method runs after state change has taken place, 7");
  }

  toggleCounter = () => {
    this.setState({ ...this.state, hidden: !this.state.hidden });
  };

  render() {
    console.log("render method runs next, 2");
    return (
      <div>
        <h1>Hello world</h1>
        {this.state.hidden && (
          <Counter
            onIncrement={this.incrementCount}
            onDecrement={this.decrementCount}
            count={this.state.count}
          />
        )}
        <div className="my-5">
          <button className="button" onClick={this.toggleCounter}>
            hide the counter
          </button>
        </div>
      </div>
    );
  }
}

/**
 * prior to React version 16.8  ->
 * - class based components were the only source of using the state
 * - functions components were just presentational components, and hence the word
 *   (stateless func comps)
 * - lifecycle methods were only applicable to class based components
 */

export default App;
