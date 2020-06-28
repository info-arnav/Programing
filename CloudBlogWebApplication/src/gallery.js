import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
const Gallery = () => {
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
      <main class="page gallery-page">
        <section class="clean-block clean-gallery dark">
          <div class="container">
            <div class="block-heading">
              <h2 class="text-info">Gallery</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                quam urna, dignissim nec auctor in, mattis vitae leo.
              </p>
            </div>

            <div>
              {array.map((e) => {
                return (
                  <div>
                    <div class="col-md-6 col-lg-4 item">
                      <a class="lightbox">
                        <img
                          class="img-thumbnail img-fluid image"
                          src={require(`./assets/img/scenery/image${e.toString()}.jpg`)}
                        />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
            <div class="row">
              <div class="col-md-6 col-lg-4 item">
                <a class="lightbox">
                  <img
                    class="img-thumbnail img-fluid image"
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
