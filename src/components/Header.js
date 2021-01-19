import React from "react";
import CounterButton from "./CounterButton";

class Header extends React.Component {
//   shouldComponentUpdate(nextProps, nextState) {
//     //return true -> update the component
//     //return false -> will not update the component
//     return false;
//   }
  render() {
    console.log("Header");
    return (
      <div>
        <h1 className="f1">RoboFriends</h1>
        <CounterButton color={`red`} />
      </div>
    );
  }
}

export default Header;
