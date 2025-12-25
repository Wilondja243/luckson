import React from "react";
import Button from "../../components/ui/button";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-header">
        <h1>Contact</h1>
        <p>
          Un projet, une idée ou une collaboration ?
          Envoyez-moi un message, je vous répondrai rapidement.
        </p>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Nom complet" />
        <input type="text" placeholder="Sujet" />
        <textarea rows="6" placeholder="Votre message"></textarea>
        <Button text="Envoyer le message" />
      </form>
    </section>
  );
}
