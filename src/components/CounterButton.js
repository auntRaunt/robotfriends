import React from "react";

class CounterButton extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  shouldComponentUpdate(nextProps, nextState) {
    //return true -> update the component
    //return false -> will not update the component
    console.log(this.state.count, nextState);
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }
  updateCount = () => {
    this.setState((state) => ({ count: state.count + 1 }));
  };

  render() {
    console.log("CounterButton");
    return (
      <button color={this.props.color} onClick={this.updateCount}>
        Count: {this.state.count}
      </button>
    );
  }
}

export default CounterButton;
