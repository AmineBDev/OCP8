import React, { useRef, useState } from 'react';
import Map from './Map';
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef()
    const [spanForm, setSpanForm] = useState('')

    const validateEmail = (email) => {
        // Regex pour validation email
        // eslint-disable-next-line
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return regex.test(email);
    };

    const sendEmail = (e) => {
        e.preventDefault()

        const email = document.getElementById('emailForm').value;

        if (!validateEmail(email)) {
            setSpanForm("L'email saisi est incorrect. Veuillez entrer un email valide.")
        } else {
            emailjs
                .sendForm(
                    'gmail_8xg42pj',
                    'template_9bb8ydf',
                    form.current,
                    'EM1-y2_6Qv_7mHG7G'
                )
                .then(() => {
                    console.log('SUCCESS!');
                    form.current.reset();
                    setSpanForm('Votre message a été envoyé avec succès !')
                },
                    (error) => {
                        console.log('FAILED...', error.text);
                        setSpanForm("Erreur lors de l'envoi du message. Veuillez réessayer.")
                    });
        }
    }

    return (
        <section id="contact">
            <div className="contact-container">
                <div className="contact-boxes">
                    <div className="form-contact">
                        <h3>CONTACT</h3>
                        <h2>N’hésitez pas à me faire signe ! <br />
                            Contactez-moi ! 👇</h2>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="details-contact">
                                <input type="text" name='name' placeholder='Nom*' required />
                                <input type="text" name='email' id='emailForm' placeholder='Email*' />
                            </div>
                            <textarea name="message" placeholder='Votre message*' ></textarea>
                            <span style={{ display: spanForm === '' ? 'none' : "block", color: spanForm === 'Votre message a été envoyé avec succès !' ? 'green' : 'red' }}>{spanForm}</span>
                            <input type="submit" value="ENVOYER LE MESSAGE" />
                        </form>
                    </div>
                    <div className="map-contact">
                        <Map />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;