import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { SiCodechef } from 'react-icons/si';
import { SiLeetcode } from 'react-icons/si';

import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">Anshul Mishra</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#testimonials">Other Activities</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/anshul-mishra-106456234/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/AnshulMishra19" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://leetcode.com/Anshul_Mishra19/" target="_blank" rel="noreferrer" ><SiLeetcode/></a>
      <a href="https://www.codechef.com/users/anshul_58" target="_blank" rel="noreferrer" ><SiCodechef /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Anshul Mishra | All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer