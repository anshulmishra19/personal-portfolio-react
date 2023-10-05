import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { SiCodechef } from 'react-icons/si';
import { SiLeetcode } from 'react-icons/si';


const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/anshul-mishra-106456234/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/AnshulMishra19" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://leetcode.com/Anshul_Mishra19/" target="_blank" rel="noreferrer" ><SiLeetcode/></a>
      <a href="https://www.codechef.com/users/anshul_58" target="_blank" rel="noreferrer" ><SiCodechef /></a>
    </div>
  )
}

export default HeaderSocials