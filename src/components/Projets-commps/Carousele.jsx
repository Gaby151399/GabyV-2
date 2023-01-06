import React from "react";

export default function Carousele() {
  return (
    <>
      <div className='carousselle container'>
        <h4 className=' w-100 text-center fs-4'>Projets en cours</h4>
        <img
          src='empty.png'
          alt='empty'
          width={300}
          height={180}
          title='empty'
        />
        <p>Pas de projets</p>
      </div>
    </>
  );
}
