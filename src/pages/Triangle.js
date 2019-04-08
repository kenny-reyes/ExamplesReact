import React, { Component } from "react";
import styled from "styled-components";

const TriangleStyled = styled.div`
  margin-top: 100px;
  margin-left: 100px;
  width: 0px;
  height: 0px;
  border-top: 20px solid #ff5555;
  border-left: 20px solid transparent
  border-right: 20px solid transparent;
  border-bottom: 0px solid green;
`;

export default class Triangle extends Component {
  render() {
    return <TriangleStyled />;
  }
}
