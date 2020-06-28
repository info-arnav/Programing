import React, { useEffect, useState, Component, useCallback } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import queryString from "query-string";
import BlogPost from "./blog-post";
import { RouteComponentProps } from "@reach/router";

class ClassComponent extends Component<RouteComponentProps<{ id: string }>> {
  constructor(props) {
    super(props);
  }
  render() {
    let url = this.props.location.search;
    let params = queryString.parse(url);
    let extra = "";
    let constant = "";
    return (
      <div>
        <h1>hi</h1>
        <BlogPost urlParams={Object.keys(params)} />
      </div>
    );
  }
}

export default ClassComponent;
