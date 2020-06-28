import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Index from "./home";
import Gallery from "./gallery";
import BlogPostList from "./blog-post-list";
import BlogPost from "./blog-post";
import AboutUs from "./about-us";
import ContactUs from "./contact-us";
import Login from "./login";
import Registration from "./registration";
import Edit from "./edit";
import GalleryUpdate from "./galleryUpdate";
import Comments from "./comments";
import ClassComponent from "./classComponent";

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <Index></Index>
      </Route>
      <Route path="/index">
        <Index></Index>
      </Route>
      <Route exact path="/gallery">
        <Gallery />
      </Route>
      <Route exact path="/blog-post-list">
        <BlogPostList />
      </Route>
      <Route exact path="/blog-post/:id">
        <BlogPost />
      </Route>
      <Route exact path="/blog-post">
        <BlogPostList />
      </Route>
      <Route exact path="/about-us">
        <AboutUs></AboutUs>
      </Route>
      <Route exact path="/contact-us">
        <ContactUs></ContactUs>
      </Route>
      <Route exact path="/login/:id">
        <Login></Login>
      </Route>
      <Route exact path="/login">
        <Login></Login>
      </Route>
      <Route exact path="/register">
        <Registration></Registration>
      </Route>
      <Route exact path="/edit">
        <Edit></Edit>
      </Route>
      <Route exact path="/update-gallery">
        <GalleryUpdate></GalleryUpdate>
      </Route>
      <Route exact path="/comments">
        <Comments></Comments>
      </Route>
    </BrowserRouter>
  );
};

export default App;
