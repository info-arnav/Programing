import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { useParams, Link } from "react-router-dom";
const BlogPost = (props) => {
  const myStyle = {};
  let { id } = useParams();
  const path = `./assets/img/scenery/image${id}.jpg`;
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
    fetch(`http://localhost:4000/get/post/${id}`).then((response) =>
      response.json().then((e) => setPosts(e))
    );
  });
  return (
    <div>
      <input value={State} hidden></input>
      {posts != [] ? (
        <div>
          <Navbar data={Data} />
          <main class="page blog-post">
            <section class="clean-block clean-post dark">
              <div class="container">
                <div class="block-content">
                  <div class="post-image" id="bp">
                    {
                      //style="background-image:url(&quot;assets/img/scenery/image3.jpg&quot;);"
                    }
                  </div>
                  <div class="post-body">
                    <h3>{posts[0]}</h3>
                    <div class="post-info">
                      <span>{posts[2]}</span>
                      <span>{posts[3]}</span>
                    </div>
                    <p>{posts[1]}</p>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      ) : (
        <Link to="/blog-post-list">
          <button id="click"></button>
        </Link>
      )}
    </div>
  );
};
export default BlogPost;
