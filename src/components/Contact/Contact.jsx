import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function Contact() {
  const form = useRef();
  const [textUn, setTextUn] = useState("");
  const [textDeux, setTextDeux] = useState("");
  const [textTrois, setTextTrois] = useState("");
  const [textQuatre, setTextQuatre] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setTextUn("");
    setTextDeux("");
    setTextTrois("");
    setTextQuatre("");

    emailjs
      .sendForm(
        "service_keofitp",
        "template_32sapnm",
        form.current,
        "vnz2pg-hBiWYIgOk7",
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("success");
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <div
      className=' d-flex flex-column  border border-blue border-2 mb-5 bg-secondary bg-opacity-10'
      id='contact'>
      <div className='col-contact-title col-12 text-center align-self-center '>
        <h2>Contact</h2>
        <p className=' small'>
          Telephone : <span className=' text-blue'>+261326431231</span>
        </p>
        <p className=' small'>
          Email : <span className=' text-blue'>binagabyarson@gmail.com</span>
        </p>
      </div>

      <div className=' col-contact-from col-12 text-center '>
        <div className='pre-form pb-3'>
          <h3 className=' text-blue fs-4'>Pour me contacter</h3>
        </div>

        <form
          className=' d-flex flex-column'
          ref={form}
          onSubmit={sendEmail}>
          <div className=' row text-center d-flex justify-content-center'>
            <div className='col-4 d-flex flex-column text-center'>
              <input
                className=' mb-3'
                type='text'
                name='user_name'
                id='name'
                placeholder='nom'
                value={textUn}
                onChange={(e) => {
                  setTextUn(e.target.value);
                }}
              />
              <input
                className=' mb-3'
                type='email'
                name='user_email'
                id='email'
                placeholder='email'
                value={textDeux}
                onChange={(e) => {
                  setTextDeux(e.target.value);
                }}
              />
              <input
                type='tel'
                name='user_phone'
                id='phone'
                placeholder='N° de telephone'
                value={textTrois}
                onChange={(e) => {
                  setTextTrois(e.target.value);
                }}
              />
            </div>
            <div className='textarea col-4 text-center align-items-center'>
              <textarea
                className=' p-1'
                name='message'
                id='message'
                placeholder='message'
                cols='20'
                rows='4'
                value={textQuatre}
                onChange={(e) => {
                  setTextQuatre(e.target.value);
                }}></textarea>
            </div>
          </div>
          <div className='text-center mt-3'>
            <input
              type='submit'
              value='Envoyez'
              className=' btn-sub btn bg-blue'
            />
          </div>
        </form>
      </div>
    </div>
  );
}
