import React, { Component } from "react";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
import { BrowserRouter } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import Nav from "./Nav";
import Routes from "./Routes";

class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }

  render() {
    return (
      <BrowserRouter>
        <>
          <LoadingBar style={{ backgroundColor: "#00a880" }} />
          <div className="container">
            <Nav />
            <Routes authedUser={this.props.authedUser} />
          </div>
        </>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default connect(mapStateToProps, { handleInitialData })(App);
