import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  pagesize = 15;
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          {/* <News pagesize={this.pagesize} country="in" category="general" /> */}
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  pagesize={this.pagesize}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  key="business"
                  pagesize={this.pagesize}
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
                  pagesize={this.pagesize}
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
                  pagesize={this.pagesize}
                  country="in"
                  category="technology"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  key="science"
                  pagesize={this.pagesize}
                  country="in"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  key="health"
                  pagesize={this.pagesize}
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
                  pagesize={this.pagesize}
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
