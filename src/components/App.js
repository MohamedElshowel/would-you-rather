import React, { Component } from "react";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
import { BrowserRouter } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import Nav from "./Nav";
import Routers from "./Routers";

class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }

  render() {
    return (
      <BrowserRouter>
        <>
          <LoadingBar style={{ backgroundColor: "#1a7cf2" }} />
          <div className="container">
            <Nav />
            <Routers authedUser={this.props.authedUser}/>
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
