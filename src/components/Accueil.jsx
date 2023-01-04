import React from 'react'
import Aboutme from './accueil-comps/Aboutme'
import Services from './accueil-comps/Services'
import Personal from './accueil-comps/Personal'
import Fade from 'react-reveal/Fade';

export default function Accueil() {
  return (
    <>
      <div className="about border-bottom border-secondary border-opacity-25" id='about'>
        <div className=" container-xxl">
          <div className="element-de-accueil row">

          <Fade left>
            <div className="col-4 text-center p-lg-5">
              <Aboutme/>
            </div>
          </Fade>

          <Fade top>
            <div className=" col-4 text-center p-lg-5" id='col-4'>
              <Personal/>
            </div>
          </Fade>

          <Fade right>
            <div className="col-4 text-center p-lg-5">
              <Services/>
            </div>
          </Fade>
          
          </div>
        </div>
      </div>
    </>
  )
}
