import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import Recaptcha from "react-recaptcha";
import Footer from "./footer";
const Registration = () => {
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
      <main class="page registration-page">
        <section class="clean-block clean-form dark">
          <div class="container">
            <div class="block-heading">
              <h2 class="text-info">Registration</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                quam urna, dignissim nec auctor in, mattis vitae leo.
              </p>
            </div>
            <form action="http://localhost:4000/user/store" method="POST">
              <div class="form-group">
                <label for="name">Name</label>
                <input
                  name="name"
                  class="form-control item"
                  type="text"
                  id="name"
                  required
                />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  class="form-control item"
                  type="password"
                  id="password"
                  name="password"
                  required
                />
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  class="form-control item"
                  name="email"
                  type="email"
                  id="email"
                  required
                />
              </div>
              <div class="g-signin2" data-onsuccess="onSignIn"></div>
              <br></br>
              <Recaptcha sitekey="6LdBFqcZAAAAAE4HJESv8fFwnAFpAwGEwj1eaF69" />,
              <br></br>
              <button class="btn btn-primary btn-block" type="submit">
                Sign Up
              </button>
              {function onSignIn(googleUser) {
                var profile = googleUser.getBasicProfile();
                console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
                console.log("Name: " + profile.getName());
                console.log("Image URL: " + profile.getImageUrl());
                console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present
              }}
            </form>
          </div>
        </section>
      </main>
      <Footer />{" "}
    </div>
  );
};
export default Registration;
