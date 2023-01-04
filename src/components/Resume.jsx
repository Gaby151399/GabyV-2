import React from 'react'
import Education from './Resume-comps/Education'
import Expertise from './Resume-comps/Expertise'
import Skills from './Resume-comps/Skills'
import  Fade  from 'react-reveal/Fade'

export default function Resume() {
  return (
    <>
     <Fade left>
     <div className='resume' id='resume'>
        <div className="row justify-content-between">
          <div className="col-perso text-center border border-secondary border-opacity-25 p-3"><Expertise/></div>
          <div className="col-perso text-center border border-secondary border-opacity-25 p-3"><Education/></div>
          <div className="col-perso text-center border border-secondary border-opacity-25 p-3"><Skills/></div>
        </div>
    </div>
     </Fade>
    </>
  )
}
