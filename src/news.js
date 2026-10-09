import React from "react";
import "./news.css";
import gamepic1 from "./photos/gamepic1.jpg";
import gamepic15 from "./photos/gamepic15.jpg";
import gamepic16 from "./photos/gamepic16.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function News() {

    const news = [
        {
            date: "MAY 20",
            image: "/photos/news/semi-finals.png",
            title: "CRSC ADVANCES TO SEMI FINALS!",
            description: "The boys fought hard and earned their spot. Next stop: the finals."
        },
        {
            date: "MAY 15, 2025",
            image: gamepic1,
            title: "MATCH RECAP: CRSC 9 - 1 DIABLOS DEL SUR",
            description: "Solid performance from start to finish."
        },
        {
            date: "MAY 10, 2025",
            image: gamepic15,
            title: "PLAYER SPOTLIGHT: KONGOLO",
            description: "Get to know our #1 goalkeeper."
        },
        {
            date: "MAY 5, 2025",
            image: gamepic16,
            title: "CRSC COMMUNITY DAY A HUGE SUCCESS",
            description: "Thank you to everyone who came out!"
        }
    ];

    return (

        <div className="news-page">

            {/* ================= HEADER ================= */}

            <div className="news-header">

                <div className="news-logo">

                    <img
                        src={require("./photos/CRSC-01.png")}
                        alt="CRSC Soccer Club"
                    />

                </div>


               <div className="news-navigation">

                    <Link to="/" className="news-nav-item news-active">
                        HOME
                    </Link>

                    <Link to="/schedule" className="news-nav-item">
                       SCHEDULE
                    </Link>

                    <Link to= "/roster" className="news-nav-item">
                        ROSTER
                    </Link>

                    <Link to="/news" className="news-nav-item">
                        NEWS
                    </Link>

                    <Link to= "/login" className="news-nav-item">
                        LOGIN
                    </Link>

                    <Link to="/contact" className="news-nav-item">
                        CONTACT
                    </Link>

                </div>


                <div className="news-socials">

                    <div><a href="https://www.facebook.com" target="_blank" ><FontAwesomeIcon icon={faFacebook} size="2x" /></a></div>
                    <div><a href="https://www.instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram} size="2x" /></a></div>
                    <div><a href="https://www.instagram.com" target="_blank"><FontAwesomeIcon icon={faTwitter} size="2x" /></a></div>

                </div>

            </div>


            {/* ================= NEWS TITLE ================= */}

            <div className="news-title-section">

                <h1>LATEST NEWS</h1>

            </div>


            {/* ================= NEWS CONTENT ================= */}

            <div className="news-content">


                {/* ================= FEATURED NEWS ================= */}

                <div className="featured-news">

                    <div className="featured-image">
                        <Link to="/newspage">
                        <img
                            src={gamepic1}
                            alt={news[0].title}
                        />

                        </Link>

                    </div>


                    <div className="featured-bottom">


                        <div className="featured-date">
                            
                            <div className="date-month">
                                MAY
                            </div>

                            <div className="date-number">
                                20
                            </div>

                           

                        </div>


                        <div className="featured-information">

                            <h2>
                                {news[0].title}
                            </h2>

                            <p>
                                {news[0].description}
                            </p>

                            <div className="read-more">
                                <Link to="/newspage" className="read-more link">
                                READ MORE →
                                </Link>
                            </div>

                        </div>

                    </div>

                </div>


                {/* ================= SMALL NEWS ================= */}

                <div className="small-news-container">

                    {news.slice(1).map((article, index) => (

                        <div
                            className="small-news"
                            key={index}
                        >

                            <div className="small-news-image">

                                <img
                                    src={article.image}
                                    alt={article.title}
                                />

                            </div>


                            <div className="small-news-information">

                                <div className="small-news-date">
                                    {article.date}
                                </div>

                                <h3>
                                    {article.title}
                                </h3>

                                <p>
                                    {article.description}
                                </p>

                                <div className="small-read-more">
                                    READ MORE →
                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>


            {/* ================= VIEW ALL NEWS ================= */}

            <div className="view-all-container">

                <button className="view-all-button">
                    VIEW ALL NEWS
                </button>

            </div>

        </div>
    );
}

export default News;