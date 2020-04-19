import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import About from "./components/pages/About";
import Search from "./components/pages/Search";
import Discover from "./components/pages/Discover";
function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={About} />
        <Route path="/Discover" component={Discover} />
        <Route exact path="/Search" component={Search} />
      </div>
    </Router>
  );
}

export default App;
