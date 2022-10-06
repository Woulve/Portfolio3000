import React from "react";
import "./Contact.scss";
import emailjs from "@emailjs/browser";

type Props = {};

const Contact = (props: Props) => {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_4ntabux",
        "template_fjqf614",
        e.target as HTMLFormElement,
        "wuvsr_IMLEX9lfAIM"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container" id="Contact">
      <div className="content">
        <div className="contactcontent">
          <h1>Habe ich ihr Interesse geweckt?</h1>
          <h2>Kontaktieren sie Mich!</h2>
          <form onSubmit={sendEmail}>
            <div className="contactform">
              <div className="personinfo">
                <label>Name</label>
                <input type="text" name="from_name" />
                <label>Email</label>
                <input type="email" name="reply_to" />
              </div>
              <div className="message">
                <label>Nachricht</label>
                <textarea name="message" />
              </div>
              <button type="submit">Senden</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
