import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
const ContactUs = () => {
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
      <main class="page contact-us-page">
        <section class="clean-block clean-form dark">
          <div class="container">
            <div class="block-heading">
              <h2 class="text-info">Contact Us</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                quam urna, dignissim nec auctor in, mattis vitae leo.
              </p>
            </div>
            <form action="http://localhost:4000/request" method="POST">
              <div class="form-group">
                <label>Name</label>
                <input class="form-control" type="text" name="name" required />
              </div>
              <div class="form-group">
                <label>Subject</label>
                <input
                  class="form-control"
                  type="text"
                  name="subject"
                  required
                />
              </div>
              <div class="form-group">
                <label>Email</label>
                <input
                  class="form-control"
                  type="email"
                  name="email"
                  required
                />
              </div>
              <div class="form-group">
                <label>Message</label>
                <textarea
                  class="form-control"
                  name="message"
                  required
                ></textarea>
              </div>
              <div class="form-group">
                <button class="btn btn-primary btn-block" type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default ContactUs;
