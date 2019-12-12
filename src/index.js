import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import useLocation from "./useLocation";

// start as functional until indentify why needs to be class based

// const App = () => {
//
//   return <div>hi there</div>;
// };

const App = () => {
  const [lat, errorMessage] = useLocation();

  let content;
  if (errorMessage) {
    content = <div>Error: {errorMessage}</div>;
  } else if (lat) {
    content = <SeasonDisplay lat={lat} />;
  } else {
    content = <Spinner message="Please accept location request" />;
  }

  return <div className="border red">{content}</div>;
};

// class App extends React.Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = { lat: null, errorMessage: "" };
//   // }
//   // state = { lat: null, errorMessage: "" };
//   // componentDidMount() {
//   //   window.navigator.geolocation.getCurrentPosition(
//   //     position => this.setState({ lat: position.coords.latitude }),

//   //     err => this.setState({ errorMessage: err.message })
//   //   );
//   // }

//   renderContent() {
//     if (this.state.errorMessage && !this.state.lat) {
//       return <div> Error: {this.state.errorMessage}</div>;
//     }
//     if (!this.state.errorMessage && this.state.lat) {
//       return <SeasonDisplay lat={this.state.lat} />; //<div> Latitude: {this.state.lat}</div>;
//     }

//     return <Spinner message="Please accept location request" />;
//   }

// React requires render
// conditional rending creats maint issues. use helper function for conditional instead
//   render() {
//     return <div className="border red">{this.renderContent()}</div>;
//   }
// }

ReactDOM.render(<App />, document.querySelector("#root"));
