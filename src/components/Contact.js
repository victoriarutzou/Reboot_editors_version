import React, { useState } from 'react';
import motiongraphic from "../images/motiongraphic.gif";

const ContactForm = () => {
  const [name, setName] = useState('');/*Navn */
  const [phoneNumber, setPhoneNumber] = useState(''); /*telefon nr. */
  const [email, setEmail] = useState(''); /*Email */
  const [question, setQuestion] = useState(''); /*Tekstfelt til spørgsmålet sættes til at være tomt */
  const [isMeeting, setIsMeeting] = useState(false); /*Møde sættes som default til false (feltet er ikke blevet klikket) */
  const [isQuestion, setIsQuestion] = useState(false); /*Spørgsmål sættes som default til false (feltet er ikke blevet klikket) */
  const [isSubmitted, setIsSubmitted] = useState(false); /*Tjekker om kontaktformularen er blevet sendt - er sat som default til false (ikke sendt) */

  const handleSubmit = (event) => { /*Når knappen trykkes ændres IsSubmitted til true (er sendt)*/
    event.preventDefault();
    // Her kunne man bede den om at sende os en mail eller sende den til en database, hvis det var et virkelig webbureau
    setIsSubmitted(true);
  }

  const renderForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="contact_left_right">
          <div className="contact_left">
            <div className="klikfelter">
              <label className="klik_felt">
                Møde
                <input type="checkbox" checked={isMeeting} onChange={(event) => setIsMeeting(event.target.checked)} />
              </label>

              <label className="klik_felt">
                Spørgsmål
                <input type="checkbox" checked={!isQuestion} onChange={(event) => setIsQuestion(!event.target.checked)} />
              </label>
            </div>

            <label>
              Navn:
              <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
            </label>

            <label>
              Tlf.:
              <input type="tel" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} />
            </label>

            <label>
              Email:
              <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
            </label>
          </div>

          <div>
            <label>
              Spørgsmål eller kommentar:
              <textarea value={question} onChange={(event) => setQuestion(event.target.value)} />
            </label>
          </div>
        </div>

        <button className="knap_lysegrøn" type="submit">SEND</button>
      </form>
    );
  };

  const renderSuccessMessage = () => {
    
    return (
      <div>
        <h2 className="sucessbesked mellemparagraffer">Tak for din besked! Vi vender tilbage til dig hurtigst muligst via mail</h2>
        <img className="paddingbottom" src={motiongraphic} alt="Success" />
        
      </div>
    );
  };

  return isSubmitted ? renderSuccessMessage() : renderForm();
};

export default ContactForm;
