import React, { Component } from "react";
import { RouteComponentProps } from "@reach/router";

class Sub extends Component<RouteComponentProps<{ id: string }>> {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>data</h1>;
  }
}

export default Sub;
