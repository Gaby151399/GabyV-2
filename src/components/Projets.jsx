import React from "react";
import Carousele from "./Projets-commps/Carousele";

export default function Projets() {
  return (
    <div
      className='projets text-center mb-5 p-3'
      id='projets'>
      <div className='container-xxl border pb-4'>
        <h2 className=' pb-5'>Mes Projets</h2>
        <div className='projets-row row text-center justify-content-center'>
          <ul className='list-group col-5 p-0'>
            <li className=' list-group-item text-start fw-bold'>
              <h3 className=' fs-4'>Liste des projets</h3>
            </li>
            <li className=' list-group-item text-start fw-bold'>
              Pizza Gold :{" "}
              <span className=' text-blue'>
                un site vitrine restaurant réalisé avec HTML et CSS{" "}
              </span>
            </li>
            <li className=' list-group-item text-start fw-bold'>
              Calculatrice :{" "}
              <span className=' text-blue'>
                une machine à calculer réalisé avec React.js
              </span>
            </li>
            <li className=' list-group-item text-start fw-bold'>
              Coca coffee :{" "}
              <span className=' text-blue'>
                un site vitrine réalisé avec React.js
              </span>
            </li>
            <li className=' list-group-item text-start fw-bold'>
              TodosList :{" "}
              <span className=' text-blue'> réalisé avec React.js</span>
            </li>
          </ul>
          <div className='fleche col-2 align-self-center'></div>
          <div className='web col-3 text-center rounded-2'>
            <Carousele />
          </div>
        </div>
      </div>
    </div>
  );
}
