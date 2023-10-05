import "./portfolio.css";

import IMG1 from "../../assets/p1.png";
import IMG2 from "../../assets/P2.png";
import IMG3 from "../../assets/p3.png";
import IMG4 from "../../assets/p4.png";
import IMG5 from "../../assets/p5.png";
import IMG6 from "../../assets/p6.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Youngo - Ecommerce Website",
      img: IMG1,
      description:
        "This project aims to create a robust and user-friendly online platform for selling Shoes",
      technologies: "Html | CSS | Javascript | Talwind CSS",

      link: "https://anshulmishra19.github.io/shoecollection/",
      github: "https://github.com/AnshulMishra19/shoecollection",
    },
    {
      id: 2,
      title: "Expense Tracker",
      img: IMG2,
      description:
        "It maintain the records of income and expense like a bank Passbook, It is user friendly tracker",
      technologies: "HTML | CSS | JavaScript",
      link: "https://anshulmishra19.github.io/Transaction-tracker/",
      github: "https://github.com/AnshulMishra19/Transaction-tracker",
    },
    {
      id: 3,
      title: "Portfolio",
      img: IMG3,
      description: "Designed and Developed an interactive Portfolio website using HTML, CSS and Javascript showcasing my skills and projects",
      technologies: "HTML | CSS | JavaScript | React",
      link: "https://anshulmishra19.github.io/anshulmishra.github.io/",
      github: "https://github.com/AnshulMishra19/anshulmishra.github.io",
    },
    {
      id: 4,
      title: "Content Management tool",
      img: IMG4,
      description:
        "A dedicated, standalone web page built for specific campaigns and target audiences.",
      technologies: "Html | CSS | JavaScript ",
      link: "https://anshulmishra19.github.io/cmstool/",
      github: "https://github.com/AnshulMishra19/cmstool",
    },
    {
      id: 5,
      title: "Project Management Tool",
      img: IMG5,
      description:
        "A user friendly website for Project management tasks.",
      technologies: "Html | CSS | JavaScript",
      link: "https://anshulmishra19.github.io/ProjectManagement/",
      github: "https://github.com/AnshulMishra19/ProjectManagement",
    },
    {
      id: 6,
      title: "Leave Management System",
      img: IMG6,
      description:
        " A system maintaining record of leaves available for the employee ",
      technologies: "C++ | OOPS",
      link: "https://drive.google.com/file/d/1QTxZ6Q10L1FlzspsfwWw7QMP0Ly006b8/view",
      github: "https://github.com/AnshulMishra19",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
