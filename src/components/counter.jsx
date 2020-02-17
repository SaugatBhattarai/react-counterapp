import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
    // tags: ["tag1", "tag2", "tag3"]
  };

  //   styles = {
  //     fontSize: 10,
  //     fontWeight: "bold"
  //   };
  //   renderTags() {
  //     if (this.state.tags.length === 0) return <p> There are no tags!</p>;
  //     return (
  //       <ul>
  //         {this.state.tags.map(tag => (
  //           <li key={tag}> {tag} </li>
  //         ))}
  //       </ul>
  //     );
  //   }

  //   constructor() {
  //     super();
  //     // console.log("Constructor ", this);
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  handleIncrement = () => {
    // this.state.count++;
    this.setState({ count: this.state.count + 1 });
    // console.log("After increment: ", this.state.count);
  };

  render() {
    console.log("hereeee", this.state.count);
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* <ul>
          {this.state.tags.map(tag => (
            <li key={tag}> {tag}</li>
          ))}
        </ul> */}
      </div>
      //   <div>
      //     {this.state.tags.length === 0 && "Please create a new tag!"}
      //     {this.renderTags()}
      //   </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}
export default Counter;
