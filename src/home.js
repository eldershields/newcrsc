import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState, useRef } from "react";
import { options } from "pg/lib/defaults";



function Home() {

    const [IsOnscreen, setIsOnscreen]= useState(false);
    const containerRef = useRef(null);

   

    useEffect(() =>{

        const options= {
        root: null,
        rootMargin: "0px",
        threshold: 1.0
    };
        const observer= new IntersectionObserver(([entry])=>{
            setIsOnscreen(entry.isIntersecting);
        }, options);

        
        if(containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if(containerRef.current) {
                observer.unobserve(containerRef.current);
            };
        }
    }, [containerRef]);




    return (

        <div className="home-page">


            {/* =========================================
                HEADER
            ========================================= */}

            <div className="home-header">


                {/* LOGO */}

                <div className="home-logo">

                    <img
                        src={require("./photos/CRSC-01.png")}
                        alt="CRSC Soccer Club"
                    />

                </div>


                {/* NAVIGATION */}

                <div className="home-navigation">

                    <Link to="/" className="home-nav-item home-active">
                        HOME
                    </Link>

                    <Link to="/schedule" className="home-nav-item">
                       SCHEDULE
                    </Link>

                    <Link to= "/roster" className="home-nav-item">
                        ROSTER
                    </Link>

                    <Link to="/news" className="home-nav-item">
                        NEWS
                    </Link>

                    <Link to= "/login" className="home-nav-item">
                        LOGIN
                    </Link>

                    <Link to="/contact" className="home-nav-item">
                        CONTACT
                    </Link>

                </div>


                {/* SOCIAL ICONS */}

                <div className="home-socials">

                     <div><a href="https://www.facebook.com" target="_blank" ><FontAwesomeIcon icon={faFacebook} size="2x" /></a></div>
                    <div><a href="https://www.instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram} size="2x" /></a></div>
                    <div><a href="https://www.instagram.com" target="_blank"><FontAwesomeIcon icon={faTwitter} size="2x" /></a></div>

                </div>

            </div>


            {/* =========================================
                HERO SECTION
            ========================================= */}

            <div className="home-hero">


                {/* LEFT SIDE */}

                <div className="home-hero-content">


                    <div className={IsOnscreen? "welcome-text": "welcome-text"} ref={containerRef}>
                        WELCOME TO
                    </div>


                    <div className="crsc-title">
                        CRSC
                    </div>


                    <div className="soccer-club-title">
                        S O C C E R &nbsp; C L U B
                    </div>


                    <p className="home-description">

                        Driven by Determination. Guided by Discipline.
                        <br />
                        Fueled by Dedication.

                    </p>


                    <button className="latest-news-button">
                        LATEST NEWS
                    </button>


                </div>


               

                

            </div>


            {/* =========================================
                BOTTOM FEATURES
            ========================================= */}

            <div className="home-features">


                {/* COMPETE */}

                <div className="home-feature">

                    <div className="feature-large-icon">
                        ★
                    </div>


                    <div className="feature-content">

                        <h3>
                            COMPETE
                        </h3>

                        <p>
                            We play to win.
                        </p>

                    </div>

                </div>


                {/* DIVIDER */}

                <div className="home-feature-divider"></div>


                {/* TOGETHER */}

                <div className="home-feature">

                    <div className="feature-large-icon">
                        ●●
                    </div>


                    <div className="feature-content">

                        <h3>
                            TOGETHER
                        </h3>

                        <p>
                            Stronger as one.
                        </p>

                    </div>

                </div>


                {/* DIVIDER */}

                <div className="home-feature-divider"></div>


                {/* DEVELOP */}

                <div className="home-feature">

                    <div className="feature-large-icon">
                        ◇
                    </div>


                    <div className="feature-content">

                        <h3>
                            DEVELOP
                        </h3>

                        <p>
                            Better every day.
                        </p>

                    </div>

                </div>


                {/* DIVIDER */}

                <div className="home-feature-divider"></div>


                {/* COMMUNITY */}

                <div className="home-feature">

                    <div className="feature-large-icon">
                        ♥
                    </div>


                    <div className="feature-content">

                        <h3>
                            COMMUNITY
                        </h3>

                        <p>
                            We give back.
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Home;