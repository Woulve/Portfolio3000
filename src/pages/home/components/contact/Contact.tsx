import React, { useState, useContext, useEffect } from "react";
import "./Contact.scss";
import emailjs from "@emailjs/browser";
import { LanguageContext } from "App";
import TextareaAutosize from "react-textarea-autosize";
import { FiMail, FiUser, FiMessageSquare } from "react-icons/fi";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";

type Props = {};

const Contact = (props: Props) => {
  const { language } = useContext(LanguageContext);

  const [sendButtonActive, setSendButtonActive] = useState(false);
  const [mailError, setMailError] = useState(false);

  const [formValues, setFormValues] = useState({
    from_name: "",
    reply_to: "",
    message: "",
  });

  const [result, setResult] = useState({ error: -1, text: "" });

  const handleFormChange = (e: any) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (
      formValues.from_name !== "" &&
      formValues.message !== "" &&
      formValues.reply_to !== ""
    ) {
      setSendButtonActive(true);
    } else {
      setSendButtonActive(false);
    }
  }, [formValues]);

  const validate_send = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (formValues.reply_to.match(validRegex)) {
      setMailError(false);
      sendEmail(e);
      setSendButtonActive(false);
    } else {
      setMailError(true);
    }
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    emailjs
      .sendForm(
        "service_4ntabux",
        "template_fjqf614",
        e.target as HTMLFormElement,
        "wuvsr_IMLEX9lfAIM"
      )
      .then((res) => {
        if (res.status === 200 && res.text === "OK") {
          language === "de"
            ? setResult({ error: 0, text: "Nachricht erfolgreich verschickt!" })
            : setResult({ error: 0, text: "Message sent successfully!" });

          setTimeout(() => {
            setResult({ error: -1, text: "" });
          }, 6000);
        }
        console.log(res);
      })
      .catch((err) => {
        setResult({ error: 1, text: JSON.stringify(err) });
        setTimeout(() => {
          setResult({ error: -1, text: "" });
        }, 6000);
        console.log(err);
      });
  };

  return (
    <div className="container" id="Contact">
      <div className="content">
        <div className="contactcontent">
          {language === "de" ? (
            <>
              <h1>Habe ich ihr Interesse geweckt?</h1>
              <h2>Kontaktieren sie Mich!</h2>
            </>
          ) : (
            <>
              <h1>Did I peak your interest?</h1>
              <h2>Send me a message!</h2>
            </>
          )}

          <form onSubmit={validate_send}>
            <div className="contactform">
              <div className="personinfo">
                <label>
                  <FiUser />
                  Name
                </label>
                {language === "de" ? (
                  <input
                    value={formValues.from_name}
                    onChange={handleFormChange}
                    type="text"
                    placeholder="z.B. Max Mustermann"
                    name="from_name"
                  />
                ) : (
                  <input
                    value={formValues.from_name}
                    type="text"
                    placeholder="e.g. Max Mustermann"
                    name="from_name"
                  />
                )}
                <label>
                  <FiMail />
                  Email
                </label>
                <input
                  value={formValues.reply_to}
                  onChange={handleFormChange}
                  type="text"
                  placeholder="email@domain.com"
                  name="reply_to"
                />
                <div className="mailwarning">
                  {mailError ? (
                    language === "de" ? (
                      <p className="mailwarningtext">E-Mail nicht valide!</p>
                    ) : (
                      <p className="mailwarningtext">E-Mail invalid!</p>
                    )
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className="message">
                {language === "de" ? (
                  <label>
                    <FiMessageSquare />
                    Nachricht
                  </label>
                ) : (
                  <label>
                    <FiMessageSquare />
                    Message
                  </label>
                )}

                {language === "de" ? (
                  <TextareaAutosize
                    value={formValues.message}
                    onChange={handleFormChange}
                    className="textarea"
                    name="message"
                    placeholder="z.B. Du bist eingestellt!"
                  />
                ) : (
                  <TextareaAutosize
                    value={formValues.message}
                    onChange={handleFormChange}
                    className="textarea"
                    name="message"
                    placeholder="e.g. we want to hire you on the spot!"
                  />
                )}
              </div>
              {language === "de" ? (
                sendButtonActive ? (
                  <button className="sendbtn glow" type="submit">
                    Senden
                  </button>
                ) : (
                  <button
                    className="sendbtn btndisabled"
                    type="submit"
                    disabled
                  >
                    Senden
                  </button>
                )
              ) : sendButtonActive ? (
                <button className="sendbtn glow" type="submit">
                  Send
                </button>
              ) : (
                <button className="sendbtn btndisabled" type="submit" disabled>
                  Send
                </button>
              )}
            </div>
          </form>
          <LazyMotion features={domAnimation}>
            <AnimatePresence>
              {result.error !== -1 ? (
                <m.div
                  key="send_result"
                  initial={{ opacity: 0, scale: 0.5, right: "-3%" }}
                  animate={{ opacity: 1, scale: 1, right: "3%" }}
                  transition={{ duration: 0.2 }}
                  exit={{ opacity: 0, scale: 0.5, right: "-3%" }}
                  className="sendresult"
                >
                  <p>{result.text}</p>
                  {/* <h3>Success!</h3> */}
                </m.div>
              ) : (
                <></>
              )}
            </AnimatePresence>
          </LazyMotion>
        </div>
      </div>
    </div>
  );
};

export default Contact;
