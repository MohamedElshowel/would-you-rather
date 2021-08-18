import React, { Component } from "react";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
import { Route, BrowserRouter } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import Nav from "./Nav";
import Home from "./Home";
import NewQuestion from "./NewQuestion";
import Login from "./Login";
import Poll from "./Poll";
import LeaderBoard from "./LeaderBoard";

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
            {this.props.authedUser ? (
              <div>
                <Route path="/" exact component={Login} />
                <Route path="/home" exact component={Home} />
                <Route path="/add" exact component={NewQuestion} />
                <Route path="/leaderboard" component={LeaderBoard} />
                <Route path="/questions/:id" component={Poll} />
              </div>
            ) : (
              <Route path="/" component={Login} />
            )}
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
