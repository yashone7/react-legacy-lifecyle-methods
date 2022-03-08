import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    console.log("this is the child components contructor, 3");
  }

  componentDidUpdate() {
    console.log(
      "CDU method of child runs after state change has taken place, 6"
    );
  }

  componentWillUnmount() {
    console.log(`finally this CWU method will run and 
    clean of resources should take place here, 8
    `);
  }

  //   UNSAFE_componentWillMount() {
  //     console.log("just before mounting this runs");
  //   }

  render() {
    console.log("this is child compoent's render method, 4");
    const { onIncrement, onDecrement, count } = this.props;
    return (
      <div className="container is-flex">
        <button
          className="button is-light is-danger mx-5"
          onClick={onDecrement}
        >
          -
        </button>
        <p className="mx-5">{count}</p>
        <button
          className="button is-light is-success mx-5"
          onClick={onIncrement}
        >
          +
        </button>
      </div>
    );
  }
}
