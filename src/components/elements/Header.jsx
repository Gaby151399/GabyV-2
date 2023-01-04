import React from 'react'

export default function Header() {
  return (
    <div className='header' id='accueil'>
        <div className="content-head">
            <div className="sociaux-head">
                <a href="https://www.facebook.com/gabyarsonbina" target="_blank" rel="noreferrer"><button><img src="facebook.svg" alt="facebook" width={20} /></button></a>
                <a href="https://twitter.com/ArsonBina"target="_blank" rel="noreferrer"><button><img src="twitter.svg" alt="twitter" width={20} /></button></a>
                <a href="https://www.youtube.com/channel/UCVw76q_D7rOi0cS7LymhZdw" target="_blank" rel="noreferrer"><button><img src="youtube.svg" alt="youtube" width={20} /></button></a>
                <a href="https://github.com/Gaby151399" target="_blank" rel="noreferrer"><button><img src="github.svg" alt="github" width={20} /></button></a>
            </div>
            <div className="title">
                <h2 data-text= "Spotlight">Salut, je suis</h2>
                <h1>Gaby Arson</h1>
                <h4>Developpeur Front-end</h4>
            </div>
            <div className="print">
                <a href="/Gaby-Arson.pdf" target="_blank"><img src="printer.svg" alt="print" width={20} /> Print Resume</a>
            </div>
        </div>
    </div>
  )
}
