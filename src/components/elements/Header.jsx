import React from "react";

export default function Header() {
  return (
    <div className='header container-xxl'>
      <div className='content-head'>
        <div
          className='sociaux-head'
          id='accueil'>
          <a
            href='https://www.facebook.com/gabyarsonbina'
            target='_blank'
            rel='noreferrer'>
            <button>
              <img
                src='facebook.svg'
                alt='facebook'
                width={20}
                height={20}
                title='facebook'
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
                height={20}
                title='twitter'
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
                height={20}
                title='youtube'
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
                height={20}
                title='github'
              />
            </button>
          </a>
        </div>
        <div className='title'>
          <h3 data-text='Spotlight'>Salut, je suis</h3>
          <h2>Gaby Arson</h2>
          <h3>Developpeur Front-end</h3>
        </div>
        <div className='print'>
          <a
            href='/Gaby-Arson.pdf'
            target='_blank'>
            <img
              src='printer.svg'
              alt='print'
              width={20}
              height={20}
              title='print'
            />{" "}
            Print Resume
          </a>
        </div>
      </div>
    </div>
  );
}
