import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import { useParams } from "react-router-dom";
const GalleryUpdate = () => {
  let { id } = useParams();
  const [Data, setData] = useState("");
  const [State, setState] = useState(false);
  useEffect(() => {
    fetch("http://localhost:4000/userid").then((response) =>
      response.text().then((e) => setData(e))
    );
    fetch("http://localhost:4000/userstatus").then((response) =>
      response.text().then((e) => setState(e))
    );
  });
  return (
    <div>
      <Navbar data={Data} />
      <main class="page login-page">
        <section class="clean-block clean-form dark">
          <div class="container">
            <div class="block-heading">
              <h2 class="text-info">Update Count</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                quam urna, dignissim nec auctor in, mattis vitae leo.
              </p>
            </div>
            <form action={"http://localhost:4000/update/gallery"} method="POST">
              <h4>{id}</h4>
              <br></br>
              <div class="form-group">
                <label for="email">Number</label>
                <input
                  class="form-control item"
                  type="text"
                  id="number"
                  name="number"
                  required
                />
              </div>
              <div class="form-group">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="checkbox"
                    checked
                    disabled
                  />
                  <label class="form-check-label" for="checkbox">
                    Remember me
                  </label>
                </div>
              </div>
              <button class="btn btn-primary btn-block" type="submit">
                Log In
              </button>
              <br></br>
              <div>
                not regsitered yet ? <a href="/register">register here</a>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />{" "}
    </div>
  );
};
export default GalleryUpdate;
