import React, { useEffect, useState, FunctionComponent } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
const Pricing: FunctionComponent = () => {
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
      <main className="page pricing-table-page">
        <section className="clean-block clean-pricing dark">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-info">Pricing Table</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                quam urna, dignissim nec auctor in, mattis vitae leo.
              </p>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-5 col-lg-4">
                <div className="clean-pricing-item">
                  <div className="heading">
                    <h3>BASIC</h3>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div className="features">
                    <h4>
                      <span className="feature">Full Support:&nbsp;</span>
                      <span>No</span>
                    </h4>
                    <h4>
                      <span className="feature">Duration:&nbsp;</span>
                      <span>30 Days</span>
                    </h4>
                    <h4>
                      <span className="feature">Storage:&nbsp;</span>
                      <span>10GB</span>
                    </h4>
                  </div>
                  <div className="price">
                    <h4>$25</h4>
                  </div>
                  <button
                    className="btn btn-outline-primary btn-block"
                    type="button"
                  >
                    BUY NOW
                  </button>
                </div>
              </div>
              <div className="col-md-5 col-lg-4">
                <div className="clean-pricing-item">
                  <div className="ribbon">
                    <span>Best Value</span>
                  </div>
                  <div className="heading">
                    <h3>PRO</h3>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div className="features">
                    <h4>
                      <span className="feature">Full Support:&nbsp;</span>
                      <span>Yes</span>
                    </h4>
                    <h4>
                      <span className="feature">Duration:&nbsp;</span>
                      <span>60 Days</span>
                    </h4>
                    <h4>
                      <span className="feature">Storage:&nbsp;</span>
                      <span>50GB</span>
                    </h4>
                  </div>
                  <div className="price">
                    <h4>$50</h4>
                  </div>
                  <button className="btn btn-primary btn-block" type="button">
                    BUY NOW
                  </button>
                </div>
              </div>
              <div className="col-md-5 col-lg-4">
                <div className="clean-pricing-item">
                  <div className="heading">
                    <h3>PREMIUM</h3>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div className="features">
                    <h4>
                      <span className="feature">Full Support:&nbsp;</span>
                      <span>Yes</span>
                    </h4>
                    <h4>
                      <span className="feature">Duration:&nbsp;</span>
                      <span>120 Days</span>
                    </h4>
                    <h4>
                      <span className="feature">Storage:&nbsp;</span>
                      <span>150GB</span>
                    </h4>
                  </div>
                  <div className="price">
                    <h4>$150</h4>
                  </div>
                  <button
                    className="btn btn-outline-primary btn-block"
                    type="button"
                  >
                    BUY NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />{" "}
    </div>
  );
};
export default Pricing;
