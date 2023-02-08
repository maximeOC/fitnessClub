import React from "react";
import { useRef } from "react";
import "./join.css";
import emailjs from '@emailjs/browser'

const Join = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_817qlh6', 'template_hozrmb9', form.current, 'RpvDB_X2MY8nyPBb-')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className="join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">PRET A </span>
          <span>TRANSFORMEZ</span>
        </div>
        <div>
          <span className="stroke-text">VOTRE CORPS </span>
          <span>AVEC NOUS</span>
        </div>
      </div>
      <div className="right-j">

        <form ref={form} className="email-container" onSubmit={sendEmail}>
            <input type="email" name="user_email" placeholder="Entrez votre e-mail" />
            <input type="text" name="user_name" placeholder="votre nom"/>
            <button className="btn-j">Rejoinez nous !</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
