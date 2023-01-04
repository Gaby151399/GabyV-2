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
          <strong>Addresse : </strong>
          <span className=' text-secondary'>Antananarivo Madagascar</span>
        </p>

        <div className='sociaux d-flex flex-row mt-4'>
          <button>
            <img
              src='facebook-2.svg'
              alt='facebook'
              width={20}
            />
          </button>
          <button>
            <img
              src='twitter-2.svg'
              alt='twitter'
              width={20}
            />
          </button>
          <button>
            <img
              src='youtube-2.svg'
              alt='youtube'
              width={20}
            />
          </button>
          <button>
            <img
              src='github-2.svg'
              alt='github'
              width={20}
            />
          </button>
        </div>
      </div>
    </>
  );
}
