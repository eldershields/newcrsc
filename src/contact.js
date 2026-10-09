import React, { useState } from "react";
import "./contact.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");


    const handleSubmit = (event) => {

        event.preventDefault();

        console.log({
            name,
            email,
            phone,
            message
        });

    };


    return (

        <div className="contact-page">


            {/* =========================================
                HEADER
            ========================================= */}

            <div className="contact-header">


                <div className="contact-logo">

                    <img
                        src={require("./photos/CRSC-01.png")}
                        alt="CRSC Soccer Club"
                    />

                </div>


               <div className="contact-navigation">

                    <Link to="/" className="contact-nav-item">
                        HOME
                    </Link>

                    <Link to="/schedule" className="contact-nav-item">
                       SCHEDULE
                    </Link>

                    <Link to= "/roster" className="contact-nav-item">
                        ROSTER
                    </Link>

                    <Link to="/news" className="contact-nav-item">
                        NEWS
                    </Link>

                    <Link to= "/login" className="contact-nav-item">
                        LOGIN
                    </Link>

                    <Link to="/contact" className="contact-nav-item">
                        CONTACT
                    </Link>

                </div>


                <div className="contact-socials">

                    <div><a href="https://www.facebook.com" target="_blank" ><FontAwesomeIcon icon={faFacebook} size="2x" /></a></div>
                    <div><a href="https://www.instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram} size="2x" /></a></div>
                    <div><a href="https://www.instagram.com" target="_blank"><FontAwesomeIcon icon={faTwitter} size="2x" /></a></div>

                </div>

            </div>


            {/* =========================================
                TITLE
            ========================================= */}

            <div className="contact-title">

                <h1>
                    CONTACT US
                </h1>

                <p>
                    Have a question? We'd love to hear from you.
                </p>

            </div>


            {/* =========================================
                CONTENT
            ========================================= */}

            <div className="contact-content">


                {/* =====================================
                    CONTACT FORM
                ===================================== */}

                <div className="contact-form-container">

                    <h2>
                        SEND US A MESSAGE
                    </h2>


                    <form onSubmit={handleSubmit}>


                        <div className="contact-input-group">

                            <label>
                                NAME
                            </label>

                            <input
                                type="text"
                                value={name}
                                onChange={(event) =>
                                    setName(event.target.value)
                                }
                                placeholder="Your name"
                            />

                        </div>


                        <div className="contact-input-group">

                            <label>
                                EMAIL
                            </label>

                            <input
                                type="email"
                                value={email}
                                onChange={(event) =>
                                    setEmail(event.target.value)
                                }
                                placeholder="Your email address"
                            />

                        </div>


                        <div className="contact-input-group">

                            <label>
                                PHONE
                            </label>

                            <input
                                type="text"
                                value={phone}
                                onChange={(event) =>
                                    setPhone(event.target.value)
                                }
                                placeholder="Your phone number"
                            />

                        </div>


                        <div className="contact-input-group">

                            <label>
                                MESSAGE
                            </label>

                            <textarea
                                value={message}
                                onChange={(event) =>
                                    setMessage(event.target.value)
                                }
                                placeholder="How can we help?"
                            ></textarea>

                        </div>


                        <button
                            type="submit"
                            className="contact-submit"
                        >
                            SEND MESSAGE
                        </button>


                    </form>

                </div>


                {/* =====================================
                    CONTACT INFORMATION
                ===================================== */}

                <div className="contact-information">


                    <h2>
                        GET IN TOUCH
                    </h2>


                    <div className="contact-info-item">

                        <div className="contact-info-icon">
                            ✉
                        </div>

                        <div>

                            <h3>
                                EMAIL
                            </h3>

                            <p>
                                elder'sportfolio@cedarrapidssoccerclub.com
                            </p>

                        </div>

                    </div>


                    <div className="contact-info-item">

                        <div className="contact-info-icon">
                            ☎
                        </div>

                        <div>

                            <h3>
                                PHONE
                            </h3>

                            <p>
                                (319) XXX-XXXX
                            </p>

                        </div>

                    </div>


                    <div className="contact-info-item">

                        <div className="contact-info-icon">
                            ●
                        </div>

                        <div>

                            <h3>
                                LOCATION
                            </h3>

                            <p>
                                Cedar Rapids, Iowa
                            </p>

                        </div>

                    </div>


                    <div className="contact-message">

                        <h3>
                            CEDAR RAPIDS SOCCER CLUB
                        </h3>

                        <p>
                            Driven by Determination.
                            Guided by Discipline.
                            Fueled by Dedication.
                        </p>

                    </div>


                </div>

            </div>

        </div>
    );
}

export default Contact;