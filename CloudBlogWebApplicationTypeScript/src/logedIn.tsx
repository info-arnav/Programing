import React, { useEffect, useState, FunctionComponent } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

import { headerImage } from "./assets/img/tech/image4.jpg";
{
  // style={{ 'background-image:url("assets/img/tech/image4.jpg");color:rgba(9, 162, 255, 0.85);'}}
}
const IndexLoged: FunctionComponent = () => {
  const [username, setState] = useState("");
  useEffect(fetch());
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
      <main className="page landing-page">
        <section className="clean-block clean-hero" id="bl">
          <div className="text">
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam
              urna, dignissim nec auctor in, mattis vitae leo.
            </p>
            <button className="btn btn-outline-light btn-lg" type="button">
              Learn More
            </button>
          </div>
        </section>
        <section className="clean-block clean-info dark">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-info">Info</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                quam urna, dignissim nec auctor in, mattis vitae leo.
              </p>
            </div>
            <div className="row align-items-center">
              <div className="col-md-6">
                <img
                  className="img-thumbnail"
                  src={require("./assets/img/scenery/image5.jpg")}
                />
              </div>
              <div className="col-md-6">
                <h3>Lorem impsum dolor sit amet</h3>
                <div className="getting-started-info">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
                <button
                  className="btn btn-outline-primary btn-lg"
                  type="button"
                >
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="clean-block features">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-info">Features</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                quam urna, dignissim nec auctor in, mattis vitae leo.
              </p>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-5 feature-box">
                <i className="icon-star icon"></i>
                <h4>Bootstrap 4</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  quam urna, dignissim nec auctor in, mattis vitae leo.
                </p>
              </div>
              <div className="col-md-5 feature-box">
                <i className="icon-pencil icon"></i>
                <h4>Customizable</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  quam urna, dignissim nec auctor in, mattis vitae leo.
                </p>
              </div>
              <div className="col-md-5 feature-box">
                <i className="icon-screen-smartphone icon"></i>
                <h4>Responsive</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  quam urna, dignissim nec auctor in, mattis vitae leo.
                </p>
              </div>
              <div className="col-md-5 feature-box">
                <i className="icon-refresh icon"></i>
                <h4>All Browser Compatibility</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  quam urna, dignissim nec auctor in, mattis vitae leo.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="clean-block slider dark">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-info">Slider</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                quam urna, dignissim nec auctor in, mattis vitae leo.
              </p>
            </div>
            <div
              className="carousel slide"
              data-ride="carousel"
              id="carousel-1"
            >
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item  active">
                  <img
                    className=" w-100 d-block"
                    src={require("./assets/img/scenery/image1.jpg")}
                    alt="Slide Image"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="w-100 d-block"
                    src={require("./assets/img/scenery/image4.jpg")}
                    alt="Slide Image"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="w-100 d-block"
                    src={require("./assets/img/scenery/image6.jpg")}
                    alt="Slide Image"
                  />
                </div>
              </div>
              <div>
                <a
                  className="carousel-control-prev"
                  href="#carousel-1"
                  role="button"
                  data-slide="prev"
                >
                  <span className="carousel-control-prev-icon"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carousel-1"
                  role="button"
                  data-slide="next"
                >
                  <span className="carousel-control-next-icon"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
              <ol className="carousel-indicators">
                <li
                  data-target="#carousel-1"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li data-target=" #carousel-1" data-slide-to="1"></li>
                <li data-target="#carousel-1" data-slide-to="2"></li>
              </ol>
            </div>
          </div>
        </section>
        <section className="clean-block about-us">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-info">About Us</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                quam urna, dignissim nec auctor in, mattis vitae leo.
              </p>
            </div>
            <div className="row justify-content-center">
              <div className="col-sm-6 col-lg-4">
                <div className="card clean-card text-center">
                  <img
                    className="card-img-top w-100 d-block"
                    src={require("./assets/img/avatars/avatar1.jpg")}
                  />
                  <div className="card-body info">
                    <h4 className="card-title">John Smith</h4>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                    <div className="icons">
                      <a href="#">
                        <i className="icon-social-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="icon-social-instagram"></i>
                      </a>
                      <a href="#">
                        <i className="icon-social-twitter"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="card clean-card text-center">
                  <img
                    className="card-img-top w-100 d-block"
                    src={require("./assets/img/avatars/avatar2.jpg")}
                  />
                  <div className="card-body info">
                    <h4 className="card-title">Robert Downturn</h4>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                    <div className="icons">
                      <a href="#">
                        <i className="icon-social-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="icon-social-instagram"></i>
                      </a>
                      <a href="#">
                        <i className="icon-social-twitter"></i>
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

export default IndexLoged;
