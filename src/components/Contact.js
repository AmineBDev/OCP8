import React, { useEffect, useRef, useState } from 'react';
import Map from './Map';
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef()
    const [spanForm, setSpanForm] = useState('')
    const [isVisibleAnim, setIsVisibleAnim] = useState(false)
    const animRef = useRef(null)

    useEffect(() => {
        const scrollAnim = () => {
            if (animRef.current) {
                const top = animRef.current.getBoundingClientRect().top
                const windowHeight = window.innerHeight

                if (top < windowHeight - 250) {
                    setIsVisibleAnim(true)
                }
            }
        }

        window.addEventListener('scroll', scrollAnim)

        return () => {
            window.removeEventListener('scroll', scrollAnim)
        }
    })

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
                    process.env.REACT_APP_EMAILJS_SERVICE_ID,
                    process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                    form.current,
                    process.env.REACT_APP_EMAILJS_USER_ID
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
            <div className="contact-container" ref={animRef}>
                <div className="contact-boxes">
                    <div className={`form-contact ${isVisibleAnim ? 'visible' : ''}`}>
                        <h3>CONTACT</h3>
                        <h2>N’hésitez pas à me faire signe ! <br />
                            Contactez-moi ! 👇</h2>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="details-contact">
                                <label htmlFor="name" className="sr-only">Nom</label>
                                <input type="text" name='name' id="name" placeholder='Nom*' required />

                                <label htmlFor="emailForm" className="sr-only">Email</label>
                                <input type="text" name='email' id='emailForm' placeholder='Email*' />
                            </div>

                            <label htmlFor="message" className="sr-only">Message</label>
                            <textarea name="message" id="message" placeholder='Votre message*' ></textarea>

                            <span style={{ display: spanForm === '' ? 'none' : "block", color: spanForm === 'Votre message a été envoyé avec succès !' ? 'green' : 'red' }}>{spanForm}</span>

                            <input type="submit" value="ENVOYER LE MESSAGE" />
                        </form>
                    </div>
                    <div className={`map-contact ${isVisibleAnim ? 'visible' : ''}`}>
                        <Map />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;