import React, { useEffect, FunctionComponent } from "react";
import { useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
const Gallery: FunctionComponent = () => {
  const [Arrays, setArray] = useState([1]);
  const [Data, setData] = useState(1);
  const [Extra, setExtra] = useState(10);
  const [State, setState] = useState(false);
  const [GalleryNumber, setGallery] = useState("");
  let array = [];
  useEffect(() => {
    fetch("http://localhost:4000/userid").then((response) =>
      response.text().then((e) => setData(e))
    );
    fetch("http://localhost:4000/userstatus").then((response) =>
      response.text().then((e) => setState(e))
    );
    fetch("http://localhost:4000/gallery").then((response) =>
      response.text().then((e) => setGallery(parseInt(e)))
    );
    for (let i = 1; i <= GalleryNumber; i++) {
      array.push(i);
      console.log(i);
    }
    setArray(array);
  }, [Extra]);
  return (
    <div>
      <Navbar data={Data} />
      <main className="page gallery-page">
        <section className="clean-block clean-gallery dark">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-info">Gallery</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                quam urna, dignissim nec auctor in, mattis vitae leo.
              </p>
            </div>

            <div>
              {array.map((e) => {
                return (
                  <div>
                    <div className="col-md-6 col-lg-4 item">
                      <a className="lightbox">
                        <img
                          className="img-thumbnail img-fluid image"
                          src={require(`./assets/img/scenery/image${e.toString()}.jpg`)}
                        />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-4 item">
                <a className="lightbox">
                  <img
                    className="img-thumbnail img-fluid image"
                    src={require("./assets/img/scenery/image1.jpg")}
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />{" "}
    </div>
  );
};

export default Gallery;
