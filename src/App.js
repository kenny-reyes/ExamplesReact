import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Carousel } from "./component/carousel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div class="triangle"></div>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Carousel
          carouselItems={[
            <img
              src="https://www.nationalgeographic.com.es/medio/2018/02/27/playa-de-isuntza-lekeitio__1280x720.jpg"
              height="200px"
            />,
            <img
              src="https://www.nationalgeographic.com.es/medio/2019/01/03/zhangjiajie_e86f03ed_1500x1001.jpg"
              height="200px"
            />,
            <img
              src="https://www.nationalgeographic.com.es/medio/2019/03/26/lithium-mining-i_6f9b895e_2000x1595.jpg"
              height="200px"
            />
          ]}
        />
        </header>
      </div>
    );
  }
}

export default App;
