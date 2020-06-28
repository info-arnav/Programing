import React, { useEffect, useState, FunctionComponent } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
const ContactUs: FunctionComponent = () => {
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
      <main className="page contact-us-page">
        <section className="clean-block clean-form dark">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-info">Contact Us</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                quam urna, dignissim nec auctor in, mattis vitae leo.
              </p>
            </div>
            <form action="http://localhost:4000/request" method="POST">
              <div className="form-group">
                <label>Name</label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  required
                />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input
                  className="form-control"
                  type="text"
                  name="subject"
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
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
  );
};
export default ContactUs;
