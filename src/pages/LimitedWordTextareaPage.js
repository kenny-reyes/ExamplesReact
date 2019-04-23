import React, { Component } from "react";
import { LimitedWordTextarea } from "../component/limitedWordTextarea/LimitedWordTextarea";

export default class LimitedWordTextareaPage extends Component {
  render() {
    return (
      <div>
        <LimitedWordTextarea limit={5} value="Hello there!" />
      </div>
    );
  }
}
