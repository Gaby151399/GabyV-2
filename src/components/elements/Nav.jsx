/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import RubberBand from "react-reveal/RubberBand";

export default function Nav() {
  const [navList, setNavList] = useState(false);

  const BtnNavMenu = () => {
    setNavList(!navList);
  };

  const fermenav = () => {
    setNavList(false);
  };

  return (
    <div className='nav-elem container-xxl border-bottom border-secondary border-2 start-0 w-100'>
      <button
        className='hideBtn '
        onClick={BtnNavMenu}>
        <img
          src='border-width.svg'
          alt='down'
          title='down'
          width={20}
          height={20}
        />
      </button>
      {navList ? (
        <div className='navMobile pt-5'>
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

      <div className='name'>
        <RubberBand>
          <h1 className=' small'>Developpeur Front-end à Madagacar</h1>
          <h2 className=' small text-blue'>Gaby Arson BINA</h2>
        </RubberBand>
      </div>

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
