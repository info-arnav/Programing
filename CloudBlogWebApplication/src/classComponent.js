import React, { useEffect, useState, Component, useCallback } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import queryString from "query-string";
import BlogPost from "./blog-post";

class ClassComponent extends Component {
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
