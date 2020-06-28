import React, { useEffect, useState, FunctionComponent } from "react";
import ReactDOM from "react-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import { useParams } from "react-router-dom";
const Login: FunctionComponent = () => {
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
      <main className="page login-page">
        <section className="clean-block clean-form dark">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-info">Log In</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                quam urna, dignissim nec auctor in, mattis vitae leo.
              </p>
            </div>
            <form action={"http://localhost:4000/auth"} method="POST">
              <h4>{id}</h4>
              <br></br>
              <div className="form-group">
                <label for="email">Email</label>
                <input
                  className="form-control item"
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div className="form-group">
                <label for="password">Password</label>
                <input
                  className="form-control"
                  type="password"
                  id="password"
                  name="password"
                  required
                />
              </div>
              <div className="form-group">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkbox"
                    checked
                    disabled
                  />
                  <label className="form-check-label" for="checkbox">
                    Remember me
                  </label>
                </div>
              </div>
              <button className="btn btn-primary btn-block" type="submit">
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
export default Login;
