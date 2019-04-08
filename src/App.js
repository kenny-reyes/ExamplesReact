import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import HomeScreen from "./pages/HomeScreen";
import AutoLinkPage from "./pages/AutoLinkPage";
import Triangle from "./pages/Triangle";
import CssSiblings from "./pages/CssSiblings";
import CarouselPage from "./pages/CarouselPage";
import OverUnderlineAnimation from "./pages/OverUnderlineAnimation";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/AutoLinkPage/">AutoLinkPage</Link>
            </li>
            <li>
              <Link to="Triangle/">Triangle</Link>
            </li>
            <li>
              <Link to="CssSiblings/">CssSiblings</Link>
            </li>
            <li>
              <Link to="CarouselPage/">CarouselPage</Link>
            </li>
            <li>
              <Link to="OverUnderlineAnimation/">OverUnderlineAnimation</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={HomeScreen} />
        <Route path="/AutoLinkPage/" component={AutoLinkPage} />
        <Route path="/Triangle/" component={Triangle} />
        <Route path="/CssSiblings/" component={CssSiblings} />
        <Route path="/CarouselPage/" component={CarouselPage} />
        <Route
          path="/OverUnderlineAnimation/"
          component={OverUnderlineAnimation}
        />
      </div>
    </Router>
  );
}
