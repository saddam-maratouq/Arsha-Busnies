import React from "react";

// css
import "./client.css";

const Clients = () => {
  return (
    <section id="client">
      <div className="container">
        <div className="client-content  d-block   d-lg-flex justify-content-between align-items-center flex-wrap ">
          <div className="client-box  my-5 my-lg-0  text-center ">
            {/* icon */}
            <i class="fa-regular fa-face-smile-beam"></i>
            <h3> 60 </h3>
            <p> Happy Clients </p>
          </div>

          <div className="client-box my-5 my-lg-0   text-center">
            <i class="fa-regular fa-clock"></i>
            <h3> 20 </h3>
            <p> Years of experience </p>
          </div>

          <div className="client-box my-5 my-lg-0    text-center">
            <i class="fa-regular fa-handshake"></i>
            <h3> 50 </h3>
            <p> Projects </p>
          </div>

          <div className="client-box  my-5 my-lg-0  text-center">
            <i class="fa-solid fa-award"></i>
            <h3> 100 </h3>
            <p> Awards </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
