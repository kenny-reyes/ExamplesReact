import React from "react";
import { FileDrop } from "../component/fileDrop/FileDrop";

export default class FileDropScreen extends React.Component {
  static navigationOptions = {
    title: "Detail title"
  };
  render() {
    return <FileDrop handleDrop={console.log} />;
  }
}
