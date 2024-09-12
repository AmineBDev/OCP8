import React from 'react';
import Map from './Map';

const Contact = () => {

    return (
        <section className="contact">
            <div className="contact-container">
                <div className="contact-boxes">
                    <div className="form-contact">
                        <h3>CONTACT</h3>
                        <h2>N’hésitez pas à me faire signe ! <br />
                            Contactez-moi ! 👇</h2>
                        <form>
                            <div className="details-contact">
                                <input type="text" name='name' placeholder='Nom*' />
                                <input type="text" name='email' placeholder='Email*' />
                            </div>
                            <textarea name="text" placeholder='Votre message*' ></textarea>
                            <span id='incorrectForm' style={{ display: 'block', color: 'red' }}></span>
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