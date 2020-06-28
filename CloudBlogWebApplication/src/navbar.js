import React, { useEffect, useState } from "react";
import logo from "./assets/logo/logo.png";

const Navbar = (props) => {
  const { data } = props;
  return (
    <nav class="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
      <div class="container">
        <a class="navbar-brand logo" href="#">
          <img height="40px" src={logo}></img>
        </a>
        <a class="navbar-brand logo" href="#">
          CloudBlog
        </a>
        <button
          data-toggle="collapse"
          class="navbar-toggler"
          data-target="#navcol-1"
        >
          <span class="sr-only">Toggle navigation</span>
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navcol-1">
          <ul class="nav navbar-nav ml-auto">
            <li class="nav-item" role="presentation">
              <a class="nav-link" href="/index">
                Home
              </a>
            </li>
            <li class="nav-item" role="presentation">
              <a class="nav-link" href="/blog-post-list">
                Blog
              </a>
            </li>
            {/*
            <li class="nav-item" role="presentation">
              <a class="nav-link" href="/blog-post">
                Blog Post
              </a>
            </li>
            */}
            <li class="nav-item" role="presentation">
              <a class="nav-link" href="/about-us">
                About Us
              </a>
            </li>
            <li class="nav-item" role="presentation">
              <a class="nav-link" href="/contact-us">
                Contact Us
              </a>
            </li>
            {data ? (
              <li class="nav-item" role="presentation">
                <a class="nav-link" href="/edit">
                  Edit
                </a>
              </li>
            ) : (
              <div></div>
            )}
            {data ? (
              <li class="nav-item" role="presentation">
                <a class="nav-link" href="http://localhost:4000/logout">
                  Logout - {data}
                </a>
              </li>
            ) : (
              <li class="nav-item" role="presentation">
                <a class="nav-link" href="/login">
                  Login
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
