import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
const Features = () => {
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
      <main class="page">
        <section class="clean-block features">
          <div class="container">
            <div class="block-heading">
              <h2 class="text-info">Features</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                quam urna, dignissim nec auctor in, mattis vitae leo.
              </p>
            </div>
            <div class="row justify-content-center">
              <div class="col-md-5 feature-box">
                <i class="icon-star icon"></i>
                <h4>Bootstrap 4</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  quam urna, dignissim nec auctor in, mattis vitae leo.
                </p>
              </div>
              <div class="col-md-5 feature-box">
                <i class="icon-pencil icon"></i>
                <h4>Customizable</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  quam urna, dignissim nec auctor in, mattis vitae leo.
                </p>
              </div>
              <div class="col-md-5 feature-box">
                <i class="icon-screen-smartphone icon"></i>
                <h4>Responsive</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  quam urna, dignissim nec auctor in, mattis vitae leo.
                </p>
              </div>
              <div class="col-md-5 feature-box">
                <i class="icon-refresh icon"></i>
                <h4>All Browser Compatibility</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  quam urna, dignissim nec auctor in, mattis vitae leo.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />{" "}
    </div>
  );
};
export default Features;
