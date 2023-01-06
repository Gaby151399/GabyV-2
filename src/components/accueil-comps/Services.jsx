import React from "react";

export default function Expertise() {
  return (
    <>
      <div className='expertise text-start'>
        <h2 className='text-start mb-lg-5'>Mes Services</h2>
        <div className='expert-content'>
          <div className='row mb-4 border-bottom border-opacity-25 border-secondary pb-1'>
            <div className='col-2 align-self-center text-start '>
              <img
                src='code-slash.svg'
                alt='code'
                width={40}
                height={40}
                title='code'
              />
            </div>
            <div className='col-10 align-self-center text-start'>
              <h3 className='fw-bold m-0 fs-5'>Developpeur Front-end</h3>
              <p className='small m-0'>
                Création de votre site Web à partir de zéro
              </p>
            </div>
          </div>
          <div className='row'>
            <div className='col-2 align-self-center text-start'>
              <img
                src='paint-bucket.svg'
                alt='code'
                width={40}
                height={40}
                title='paint'
              />
            </div>
            <div className='col-10 align-self-center text-start'>
              <h4 className='fw-bold m-0 fs-5'>Refonte Site Web</h4>
              <p className='small m-0'>
                Une refonte de haut niveau qui implique de modifier
                considérablement des éléments tels que le code, le contenu, la
                structure et les visuels de votre site Web actuel afin de mieux
                servir vos visiteurs
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
