import React, { Component } from "react";

class Counter extends Component {
  // optimizatin technique for ajax request to the server
  // this function is called only if there is any changes in the
  // state or props ... make ajax request if necessary
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    console.log("currentProps counter value", this.props.counter.value);
    if (prevProps.counter.value !== this.props.counter.value) {
      //Ajax call and get data from server
      console.log("Ajax call. Fetching data from server ...");
    }
  }

  //UNMOUNTING
  // React will compare this virtual dom with the old one
  // figuresout one counter has been removed ...
  // then it will call componentWillUnmount() before removing this
  // from the DOM. This will give opportunity to cleanup.
  // if you have sort of timers or listers we can clean those up before
  // this component is removed from the dom
  // otherwise we'll endup with memory leaks.
  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  render() {
    // console.log("props", this.props);
    console.log("Counter - Rendered");
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}
export default Counter;
