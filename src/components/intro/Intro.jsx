import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from '../../assets/Me.png'

// import ME from '../../assets/Rasif Tagizade image.jpg';


const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Rasif Taghizade" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Competitive Programming</h5>
              <small>1 year+</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Frontend Development</h5>
              <small>HTML, CSS, Javascript, react </small>
            </article>
          </div>
          <p>
          An aspiring software engineer with technical skills Python, C, C++(DSA), Web development : HTML, CSS JavaScript, Bootstrap and Strong ability to communicate with clients and ability to express ideas clearly and concisely.

Hosted 15+ podcasts and Seminars with the Founder and CEO's of different Startups. 

Looking forward for the opportunities in software development. 

MITS CSE'25
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
