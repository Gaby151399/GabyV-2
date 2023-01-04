import React from 'react'

export default function Aboutme() {
  return (
    <>
    <div className='about-me text-start'>
      <h2 className=' text-start mb-lg-5'>Qui suis je?</h2>
      <h4 className=' text-start fs-5 pb-2'>Developpeur Front-end situé à Madagascar</h4>
      <p className=' text-start small text-secondary'>
        Un jeune Garçon agée de 22 ans de nationalité Malagasy. Passionné par le deloppement Web
        
      </p>

        <a href="/Gaby-Arson.pdf" target="_blank">
          <button className='download text-center'>Download my CV</button>
        </a>
    </div>
    </>
  )
}
