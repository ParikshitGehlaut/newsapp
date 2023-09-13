import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          {/* <News pagesize={6} country="in" category="general" /> */}
          <Routes>
            <Route
              exact
              path="/"
              element={<News pagesize={6} country="in" category="general" />}
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  key="business"
                  pagesize={6}
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  key="sports"
                  pagesize={6}
                  country="in"
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  key="technology"
                  pagesize={6}
                  country="in"
                  category="technology"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  key="health"
                  pagesize={6}
                  country="in"
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  pagesize={6}
                  country="in"
                  category="entertainment"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
