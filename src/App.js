import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
import Profil from "./pages/profil";
import logo from "./logo.svg";
import "./App.css";
import BottomNavigation from "./components/bottom-nav";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profil" component={Profil} />
        <Route path="/about" component={About} />
      </Switch>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <BottomNavigation />
      </div>
    </React.Fragment>
  );
}

export default App;
