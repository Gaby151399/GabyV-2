/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import RubberBand from "react-reveal/RubberBand";

export default function Nav() {
  const [navIcon, setNavIcon] = useState(false);
  const [navList, setNavList] = useState(false);

  const BtnNavMenu = () => {
    setNavIcon(!navIcon);
    setNavList(!navList);
  };

  const fermenav = () => {
    setNavList(false);
  };

  return (
    <div className='nav-elem border-bottom border-secondary border-2'>
      <button
        className='hideBtn position-absolute end-0'
        onClick={BtnNavMenu}>
        {navIcon ? (
          <img
            src='chevron-bar-down.svg'
            alt='down'
          />
        ) : (
          <img
            src='chevron-bar-up.svg'
            alt='up'
          />
        )}
      </button>
      {navList ? (
        <div className='navMobile pt-5 text-end'>
          <button onClick={fermenav}>
            <a
              href='#accueil'
              className=' text-black text-decoration-none'>
              Home
            </a>
          </button>
          <button onClick={fermenav}>
            <a
              href='#about'
              className=' text-black text-decoration-none'>
              About
            </a>
          </button>
          <button onClick={fermenav}>
            <a
              href='#resume'
              className=' text-black text-decoration-none'>
              Resumer
            </a>
          </button>
          <button onClick={fermenav}>
            <a
              href='#projets'
              className=' text-black text-decoration-none'>
              Projets
            </a>
          </button>
          <button onClick={fermenav}>
            <a
              href='#contact'
              className=' text-black text-decoration-none'>
              Contact
            </a>
          </button>
        </div>
      ) : (
        ""
      )}

      <RubberBand>
        <div className='name'>
          <h3>Gaby Arson</h3>
          <h6>Developpeur Front-end</h6>
        </div>
      </RubberBand>

      <div className='nav-item'>
        <a href='#accueil'>Accueil</a>
        <a href='#about'>À propos</a>
        <a href='#resume'>Resumer</a>
      </div>
      <div className='nav-item'>
        <a href='#projets'>Projets</a>
        <a href='#contact'>Contact</a>
      </div>
    </div>
  );
}
