import React from "react";

export default function Skills() {
  return (
    <>
      <div className='Skills text-start mb-4 border-bottom border-secondary border-opacity-25 pb-5'>
        <h4>Compétences</h4>

        <h5 className=' small fw-bold'>HTML & CSS</h5>
        <div className='progress'>
          <div
            className='pgb progress-bar '
            style={{ width: "90%" }}
            role='progressbar'
            aria-valuenow='90'
            aria-valuemin='0'
            aria-valuemax='100'></div>
        </div>

        <h5 className=' small fw-bold pt-2'>Bootstrap</h5>
        <div className='progress'>
          <div
            className='pgb progress-bar '
            style={{ width: "90%" }}
            role='progressbar'
            aria-valuenow='90'
            aria-valuemin='0'
            aria-valuemax='100'></div>
        </div>

        <h5 className='small fw-bold pt-2'>JavaScript</h5>
        <div className='progress'>
          <div
            className='pgb progress-bar'
            style={{ width: "70%" }}
            role='progressbar'
            aria-valuenow='70'
            aria-valuemin='0'
            aria-valuemax='100'></div>
        </div>

        <h5 className='small fw-bold pt-2'>JQuery</h5>
        <div className='progress'>
          <div
            className='pgb progress-bar'
            style={{ width: "60%" }}
            role='progressbar'
            aria-valuenow='60'
            aria-valuemin='0'
            aria-valuemax='100'></div>
        </div>

        <h5 className='small fw-bold pt-2'>PHP</h5>
        <div className='progress'>
          <div
            className='pgb progress-bar'
            style={{ width: "50%" }}
            role='progressbar'
            aria-valuenow='50'
            aria-valuemin='0'
            aria-valuemax='100'></div>
        </div>
      </div>

      <div className='Skills text-start mb-4 border-bottom border-secondary border-opacity-25 pb-5'>
        <h4>Bibliothèque JavasCript</h4>

        <h5 className=' small fw-bold'>ReactJs</h5>
        <div className='progress'>
          <div
            className='pgb progress-bar '
            style={{ width: "70%" }}
            role='progressbar'
            aria-valuenow='70'
            aria-valuemin='0'
            aria-valuemax='100'></div>
        </div>
      </div>

      <div className='langues text-start'>
        <h4>Langues parlées</h4>

        <h5 className=' small fw-bold'>MALAGASY</h5>
        <div className='progress'>
          <div
            className='pgb progress-bar '
            style={{ width: "95%" }}
            role='progressbar'
            aria-valuenow='95'
            aria-valuemin='0'
            aria-valuemax='100'></div>
        </div>

        <h5 className=' small fw-bold pt-2 text-uppercase'>FRANÇAIS</h5>
        <div className='progress'>
          <div
            className='pgb progress-bar '
            style={{ width: "70%" }}
            role='progressbar'
            aria-valuenow='70'
            aria-valuemin='0'
            aria-valuemax='100'></div>
        </div>

        <h5 className=' small fw-bold pt-2'>ANGLAIS</h5>
        <div className='progress'>
          <div
            className='pgb progress-bar '
            style={{ width: "50%" }}
            role='progressbar'
            aria-valuenow='50'
            aria-valuemin='0'
            aria-valuemax='100'></div>
        </div>
      </div>
    </>
  );
}
