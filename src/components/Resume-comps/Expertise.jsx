import React from "react";

export default function Expertise() {
  return (
    <>
      <div className='experience text-start'>
        <h4>Expériences</h4>
        <div className='exp border-bottom border-secondary border-opacity-25'>
          <h5>2020-2023</h5>
          <h6>Front-end</h6>
          <p className=' small'>
            2ans d'experience sur la partie front du Developpement Web
          </p>
        </div>

        <div className='exp mt-3'>
          <h5>2023...</h5>
          <h6>Backend</h6>
          <p className=' small wb-break'>Apprentissage en cours...</p>
          <img
            className='loading-now'
            src='loading.png'
            alt='loading'
            width={330}
            height={200}
            title='loading'
          />
        </div>
      </div>
    </>
  );
}
