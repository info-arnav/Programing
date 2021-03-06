import React, { useEffect, useState, FunctionComponent } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { Link } from "react-router-dom";
const Edit: FunctionComponent = () => {
  const [Data, setData] = useState("");
  const [State, setState] = useState("true");
  useEffect(() => {
    fetch("http://localhost:4000/userid").then((response) =>
      response.text().then((e) => setData(e))
    );
    fetch("http://localhost:4000/userstatus")
      .then((response) => response.text().then((e) => setState(e)))
      .then((e) => document.getElementById("click").click());
  });
  return (
    <div>
      <input value={State} hidden></input>
      {State == "true" ? (
        <div>
          <Navbar data={Data} State={State} />
          <main className="page contact-us-page">
            <section className="clean-block clean-form dark">
              <div className="container">
                <div className="block-heading">
                  <h2 className="text-info">Edit</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc quam urna, dignissim nec auctor in, mattis vitae leo.
                  </p>
                </div>
                <form
                  encType="multipart/form-data"
                  method="post"
                  action="http://localhost:4000/post"
                >
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      className="form-control"
                      name="name"
                      type="text"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      className="form-control"
                      namw="email"
                      type="email"
                      value={Data}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Title</label>
                    <input
                      className="form-control"
                      name="title"
                      type="text"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea
                      className="form-control"
                      name="message"
                      required
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label>Picture - ONLY PNG FORM IS SUPPORTED</label>
                    <input
                      className="form-control"
                      type="file"
                      name="image"
                      accept=".jpg"
                      required
                    ></input>
                  </div>
                  <div className="form-group">
                    <button className="btn btn-primary btn-block" type="submit">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      ) : (
        <Link to="/">
          <button id="click"></button>
        </Link>
      )}
    </div>
  );
};
export default Edit;
