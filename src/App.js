import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//hi
import AddTutorial from "./components/add-tutorial.component";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorials-list.component";

class App extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/tutorials"} className="navbar-brand">
            bezKoder
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
                Tutorials
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route key={'tutorail'} path="/tutorials" element={<TutorialsList/>} />
            <Route key={'home'} exact path="/" element={<TutorialsList/>} />
            <Route exact path="/add" element={<AddTutorial/>} />
            <Route path="/tutorial" element={<TutorialsList/>} />
            <Route path="/tutorials/:id" element={<Tutorial/>} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;