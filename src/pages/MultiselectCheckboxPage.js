import React, { Component } from "react";
import { MultiselectCheckbox } from "../component/multiselectCheckbox/MultiselectCheckbox";

const options = [{ label: "Item One" }, { label: "Item Two" }];

export default class LimitedWordTextareaPage extends Component {
  render() {
    return (
      <div>
        <MultiselectCheckbox
          options={options}
          onChange={data => {
            console.log(data);
          }}
        />
      </div>
    );
  }
}
