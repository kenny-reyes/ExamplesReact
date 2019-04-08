import React from "react";
import { AutoLink } from "../component/autoLink/AutoLink";

export default class AutoLinkPage extends React.Component {
  static navigationOptions = {
    title: "Detail title"
  };
  render() {
    return <AutoLink text="foo bar baz http://example.org bar" />;
  }
}
