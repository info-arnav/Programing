import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Modal from "./modal";
const BlogPostList = () => {
  let array = [];
  const [Data, setData] = useState("");
  const [State, setState] = useState(false);
  const [title, setTitle] = useState([]);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/userid").then((response) =>
      response.text().then((e) => setData(e))
    );
    fetch("http://localhost:4000/userstatus").then((response) =>
      response.text().then((e) => setState(e))
    );
    fetch("http://localhost:4000/post/array").then((response) =>
      response.json().then((e) => setPosts(e))
    );
    fetch("http://localhost:4000/title/array")
      .then((response) => response.text())
      .then((e) => setTitle(e.split(", ")));
    return function cleanup() {};
  }, []);
  array = posts;
  return (
    <div>
      <Navbar data={Data} />
      <main class="page blog-post-list">
        <section class="clean-block clean-blog-list dark">
          <div class="container">
            <div class="block-heading">
              <h2 class="text-info">Blog Post List</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                quam urna, dignissim nec auctor in, mattis vitae leo.
              </p>
            </div>
            <div class="block-content">
              <div class="clean-blog-post">
                {array.map((e) => (
                  <div class="row">
                    <div class="col-lg-5">
                      <img
                        class="rounded img-fluid"
                        src={require("./assets/img/tech/image4.jpg")}
                      />
                      <br></br>
                    </div>
                    <div class="col-lg-7">
                      <h3>{e[3]}</h3>
                      <div class="info">
                        <span class="text-muted">
                          {e[1]} by&nbsp;
                          <a href={`http://localhost:4000/user/info/${e[2]}`}>
                            {e[2]}
                          </a>
                        </span>
                      </div>
                      <p>{e[0]}</p>
                      <a href={`blog-post/${e[3]}`}>View The Full Post</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default BlogPostList;
