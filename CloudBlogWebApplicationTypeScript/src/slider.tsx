import React, { useEffect, useState, FunctionComponent } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const Slider: FunctionComponent = () => {
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
      <main className="page">
        <section className="clean-block slider">
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
                    src="assets/img/scenery/image1.jpg"
                    alt="Slide Image"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="w-100 d-block"
                    src="assets/img/scenery/image4.jpg"
                    alt="Slide Image"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="w-100 d-block"
                    src="assets/img/scenery/image6.jpg"
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
      </main>
      <Footer />{" "}
    </div>
  );
};

export default Slider;
