import React from "react";

export default function Footer() {
  return (
    <div
      className='footer-basic border-top border-secondary border-2 border-opacity-50
  p-4 text-center'>
      <footer>
        <div className='sociaux-foot'>
          <a
            href='https://www.facebook.com/gabyarsonbina'
            target='_blank'
            rel='noreferrer'>
            <button>
              <img
                src='facebook.svg'
                alt='facebook'
                width={20}
              />
            </button>
          </a>
          <a
            href='https://twitter.com/ArsonBina'
            target='_blank'
            rel='noreferrer'>
            <button>
              <img
                src='twitter.svg'
                alt='twitter'
                width={20}
              />
            </button>
          </a>
          <a
            href='https://www.youtube.com/channel/UCVw76q_D7rOi0cS7LymhZdw'
            target='_blank'
            rel='noreferrer'>
            <button>
              <img
                src='youtube.svg'
                alt='youtube'
                width={20}
              />
            </button>
          </a>
          <a
            href='https://github.com/Gaby151399'
            target='_blank'
            rel='noreferrer'>
            <button>
              <img
                src='github.svg'
                alt='github'
                width={20}
              />
            </button>
          </a>
        </div>

        <nav>
          <div className='nav-item-foot pt-3'>
            <a href='#accueil'>Accueil</a>
            <a href='#about'>À propos</a>
            <a href='#resume'>Resume</a>
            <a href='#projets'>Projets</a>
            <a href='#contact'>Contact</a>
          </div>
        </nav>

        <p className=' small mt-2'>Gaby Arson &copy; 2023</p>
      </footer>
    </div>
  );
}
