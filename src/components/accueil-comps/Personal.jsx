import React from "react";

export default function Personal() {
  return (
    <>
      <div className='personal text-start'>
        <h2 className='text-start mb-lg-5'>Informations personnelles</h2>
        <p className=' small'>
          <strong>Date de naissance : </strong>
          <span className=' text-secondary'>05/04/2000</span>
        </p>
        <p className=' small'>
          <strong>Email : </strong>
          <span className=' text-secondary'>Binagabyarson@gmail.com</span>
        </p>
        <p className=' small'>
          <strong>Tel : </strong>
          <span className=' text-secondary'>+(261) 326431231</span>
        </p>
        <p className=' small'>
          <strong>Skype : </strong>
          <span className=' text-secondary'>Gaby Arson BINA</span>
        </p>
        <p className=' small'>
          <strong>Address : </strong>
          <span className=' text-secondary'>Antananarivo Madagascar</span>
        </p>

        <div
          className='sociaux-head d-flex flex-row'
          id='accueil'>
          <a
            href='https://www.facebook.com/gabyarsonbina'
            target='_blank'
            rel='noreferrer'>
            <button>
              <img
                src='facebook-2.svg'
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
                src='twitter-2.svg'
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
                src='youtube-2.svg'
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
                src='github-2.svg'
                alt='github'
                width={20}
                height={20}
                title='github'
              />
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
