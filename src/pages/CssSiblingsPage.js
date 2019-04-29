import React, { Component } from "react";

import "./CssSiblingsPage.css";

export default class CssSiblings extends Component {
  render() {
    return (
      <div>
        <p>Este 'p' no aplica el estilo</p>
        <div>aqui hay un 'div'</div>
        <p>el 'p' despues del 'div' aplica el estilo.</p>
      </div>
    );
  }
}
