import React from "react";

//css
import "./team.css";

//image
import fredreko from "../../../assets/images/team/team-1.jpg";

import Joile from "../../../assets/images/team/team-2.jpg";

import Mikel from "../../../assets/images/team/team-3.jpg";

import Yoelanda from "../../../assets/images/team/team-4.jpg";

const Team = () => {
  return (
    <section id="team">
      <h1 className="text-center   "> Our Team </h1>
      <div className="container">
        <div className="row    ">
          <div className=" col-lg-3 col-md-6  team-box">
            <img src={fredreko} alt="person  " className="img-fluid" />
            <h3> Fredreko </h3>
            <span> Chief Executive Officer</span>
          </div>

          <div className="team-box col-lg-3 col-md-6 ">
            <img src={Joile} alt="person  " className="img-fluid" />
            <h3> Joile Wileams </h3>
            <span> Product Manager</span>
          </div>

          <div className="team-box col-lg-3 col-md-6 ">
            <img src={Mikel} alt="person  " className="img-fluid" />
            <h3> Mikel Anderson </h3>
            <span> Chief Technology Officer</span>
          </div>

          <div className="team-box col-lg-3 col-md-6 ">
            <img src={Yoelanda} alt="person  " className="img-fluid" />
            <h3> Yoelanda jepson </h3>
            <span> Accountant</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
