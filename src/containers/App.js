import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll.js";
import Header from '../components/Header';
import "./App.css";
// import ErrorBoundry from "../components/ErrorBoundry";

import { setSearchField, requestRobots } from "../actions";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

//Class Component
class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     robots: [],
  //     // searchfield: "",
  //   };
  // }

  componentDidMount() {
    // console.log(this.props.store.getState());
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((users) => {
    //     this.setState({ robots: users });
    //   });

    //use redux
    this.props.onRequestRobots();
  }

  // onSearchChange = (event) => {
  //   this.setState({ searchfield: event.target.value });
  // };

  render() {
    // const { robots } = this.state;
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return isPending ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <Header />
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
} 

//connect(mapStateToProps, mapDispatchToProps)
// = subscribe any changes to Redux Store
export default connect(mapStateToProps, mapDispatchToProps)(App);

//Functional Component
// export default function App() {
//   // constructor() {
//   //   super();
//   //   this.state = {
//   //     robots: [],
//   //     searchField: "",
//   //   };
//   // }

//   // componentDidMount() {
//   //   fetch("https://jsonplaceholder.typicode.com/users")
//   //     .then((response) => response.json())
//   //     .then((users) => this.setState({ robots: users }));
//   //   // this.setState({ robots: robots });
//   // }
//   const [robots, setRobots] = useState([]);
//   const [searchField, setSearchField] = useState("");

//   const onSearchChange = (event) => {
//     // this.setState({ searchField: event.target.value });
//     setSearchField(event.target.value);
//   };

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) => setRobots(users));
//   }, []);

//   // const { robots, searchField } = this.state;
//   const filterdRobots = robots.filter((robot) => {
//     return robot.name.toLowerCase().includes(searchField.toLowerCase());
//   });

//   return (
//     <div className="tc">
//       <h1 className="f2">RoboFriends</h1>
//       <SearchBox searchChange={onSearchChange} />
//       <Scroll>
//         <ErrorBoundry>
//           <CardList robots={filterdRobots} />;
//         </ErrorBoundry>
//       </Scroll>
//     </div>
//   );
// }
