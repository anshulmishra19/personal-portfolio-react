import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';
import ME from '../../assets/ps.jpg'

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Anshul Mishra</h1>
        <h5 className="text-light">Aspiring SDE, Frontend developer, Public Speaker</h5>

        
        <CTA />
        <div className="me">
          <img src={ME} alt="me"/>
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
