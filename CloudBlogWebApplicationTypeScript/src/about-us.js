import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
const AboutUs = () => {
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
        <section class="clean-block about-us">
          <div class="container">
            <div class="block-heading">
              <h2 class="text-info">About Us</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                quam urna, dignissim nec auctor in, mattis vitae leo.
              </p>
            </div>
            <div class="row justify-content-center">
              <div class="col-sm-6 col-lg-4">
                <div class="card clean-card text-center">
                  <img
                    class="card-img-top w-100 d-block"
                    src={require("./assets/img/avatars/avatar1.jpg")}
                  />
                  <div class="card-body info">
                    <h4 class="card-title">John Smith</h4>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                    <div class="icons">
                      <a href="#">
                        <i class="icon-social-facebook"></i>
                      </a>
                      <a href="#">
                        <i class="icon-social-instagram"></i>
                      </a>
                      <a href="#">
                        <i class="icon-social-twitter"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-lg-4">
                <div class="card clean-card text-center">
                  <img
                    class="card-img-top w-100 d-block"
                    src={require("./assets/img/avatars/avatar2.jpg")}
                  />
                  <div class="card-body info">
                    <h4 class="card-title">Robert Downturn</h4>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                    <div class="icons">
                      <a href="#">
                        <i class="icon-social-facebook"></i>
                      </a>
                      <a href="#">
                        <i class="icon-social-instagram"></i>
                      </a>
                      <a href="#">
                        <i class="icon-social-twitter"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default AboutUs;
