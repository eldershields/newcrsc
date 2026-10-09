import React, { useState } from "react";
import "./schedule.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Schedule() {

    const [activeFilter, setActiveFilter] = useState("ALL");

    const games = [
        {
            date: "APR 12",
            day: "SAT",
            opponent: "Diablos Del Sur",
            location: "Kirkwood Community College",
            city:  "Cedar Rapids, IA",
            time: "2:00 PM",
            type: "HOME",
            status: "UPCOMING"
        },
        {
            date: "APR 19",
            day: "SAT",
            opponent: "Young Boys FC",
            location: "Spring Creek Field",
            city: "Altoona, IA",
            time: "4:00 PM",
            type: "AWAY",
            status: "UPCOMING"
        },
        {
            date: "APR 26",
            day: "SAT",
            opponent: "Imperio FC",
            location: "Kirkwood Community College",
            city:  "Cedar Rapids, IA",
            time: "2:00 PM",
            type: "HOME",
            status: "UPCOMING"
        },
        {
            date: "MAY 3",
            day: "SAT",
            opponent: "Juventud FC",
            location: "Spring Creek Field",
            city:  "Altoona, IA",
            time: "5:00 PM",
            type: "AWAY",
            status: "UPCOMING"
        },
        {
            date: "MAY 10",
            day: "SAT",
            opponent: "Zamalek FC",
            location: "Kirkwood Community College",
            city:  "Cedar Rapids, IA",
            time: "2:00 PM",
            type: "HOME",
            status: "UPCOMING"
        },
        {
            date: "MAY 17",
            day: "SAT",
            opponent: "DSM Congolese",
            location: "Kirkwood Community College",
            city:  "Cedar Rapids, IA",
            time: "2:00 PM",
            type: "HOME",
            status: "UPCOMING"
        }
    ];

    const filteredGames = games.filter((game) => {

        if (activeFilter === "ALL") {
            return true;
        }

        return game.type === activeFilter;
    });


    return (

        <div className="schedule-page">


            {/* =========================================
                HEADER
            ========================================= */}

            <div className="schedule-header">


                <div className="schedule-logo">

                    <img
                        src={require("./photos/CRSC-01.png")}
                        alt="CRSC Soccer Club"
                    />

                </div>


               <div className="schedule-navigation">

                    <Link to="/" className="schedule-nav-item schedule-active">
                        HOME
                    </Link>

                    <Link to="/schedule" className="schedule-nav-item">
                       SCHEDULE
                    </Link>

                    <Link to= "/roster" className="schedule-nav-item">
                        ROSTER
                    </Link>

                    <Link to="/news" className="schedule-nav-item">
                        NEWS
                    </Link>

                    <Link to= "/login" className="schedule-nav-item">
                        LOGIN
                    </Link>

                    <Link to="/contact" className="schedule-nav-item">
                        CONTACT
                    </Link>

                </div>

                <div className="schedule-socials">

                     <div><a href="https://www.facebook.com" target="_blank" ><FontAwesomeIcon icon={faFacebook} size="2x" /></a></div>
                    <div><a href="https://www.instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram} size="2x" /></a></div>
                    <div><a href="https://www.instagram.com" target="_blank"><FontAwesomeIcon icon={faTwitter} size="2x" /></a></div>

                </div>

            </div>


            {/* =========================================
                TITLE
            ========================================= */}

            <div className="schedule-title-section">

                <div>

                    <h1>
                        6 SCHEDULE
                    </h1>

                    <p>
                        Cedar Rapids Soccer Club
                    </p>

                </div>


                <div className="schedule-season">
                    2026 SEASON
                </div>

            </div>


            {/* =========================================
                FILTERS
            ========================================= */}

            <div className="schedule-filters">

                <div
                    className={
                        activeFilter === "ALL"
                            ? "schedule-filter schedule-filter-active"
                            : "schedule-filter"
                    }

                    onClick={() => setActiveFilter("ALL")}
                >
                    ALL GAMES
                </div>


                <div
                    className={
                        activeFilter === "HOME"
                            ? "schedule-filter schedule-filter-active"
                            : "schedule-filter"
                    }

                    onClick={() => setActiveFilter("HOME")}
                >
                    HOME
                </div>


                <div
                    className={
                        activeFilter === "AWAY"
                            ? "schedule-filter schedule-filter-active"
                            : "schedule-filter"
                    }

                    onClick={() => setActiveFilter("AWAY")}
                >
                    AWAY
                </div>

            </div>


            {/* =========================================
                SCHEDULE
            ========================================= */}

            <div className="games-container">


                {filteredGames.map((game, index) => (

                    <div
                        className="game-card"
                        key={index}
                    >


                        {/* DATE */}

                        <div className="game-date">

                            <div className="game-day">
                                {game.day}
                            </div>

                            <div className="game-date-number">
                                {game.date}
                            </div>

                        </div>


                        {/* HOME / AWAY */}

                        <div className="game-type">

                            <div
                                className={
                                    game.type === "HOME"
                                        ? "home-label"
                                        : "away-label"
                                }
                            >
                                {game.type}
                            </div>

                        </div>


                        {/* OPPONENT */}

                        <div className="game-opponent">

                            <div className="vs-text">
                                VS
                            </div>

                            <h2>
                                {game.opponent}
                            </h2>

                        </div>


                        {/* LOCATION */}

                        <div className="game-location">

                            <div className="location-title">
                                LOCATION
                            </div>

                            <div>
                                {game.location}
                            </div>

                            <div>
                                {game.city}
                            </div>

                        </div>


                        {/* TIME */}

                        <div className="game-time">

                            <div className="time-title">
                                KICKOFF
                            </div>

                            <div>
                                {game.time}
                            </div>

                        </div>


                        {/* STATUS */}

                        <div className="game-status">

                            <div>
                                {game.status}
                            </div>

                        </div>

                    </div>

                ))}

            </div>


            {/* =========================================
                FOOTER NOTE
            ========================================= */}

            <div className="schedule-note">

                <p>
                    All match times and locations are subject to change.
                </p>

            </div>

        </div>
    );
}

export default Schedule;