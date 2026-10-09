import React, { useState } from "react";
import "./roster.css";
import aurelien from './photos/aurelien.png';
import kongolo from './photos/kongi.png';
import emmanuel from  "./photos/emmanuel.JPG";
import merci from "./photos/image_123655411.JPG";
import elijah from "./photos/elijah.JPG";
import Mohammed from "./photos/moe.JPG";
import Ngabo from "./photos/ngabo.JPG";
import Enock from "./photos/enock.JPG";
import Frank from "./photos/frank.JPG";
import Ronald from "./photos/IMG_1797.jpg";
import Justin from "./photos/justin.JPG";
import Lionel from "./photos/IMG_1798.JPG";
import Lwings from "./photos/IMG_1795.jpg";
import Elder from "./photos/IMG_1482.jpg";
import Darcy from "./photos/darcy2.JPG";
import Maurice from "./photos/IMG_1794.jpg";
import Danny from "./photos/dan.JPG";
import Bien from "./photos/bien.JPG";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Roster() {

    const [activeFilter, setActiveFilter] = useState("ALL PLAYERS");

    const players = [
        {
            number: 1,
            position: "GK",
            name: "Aurelien Kunangika",
            image: aurelien,
        },
        
        {
            number: 99,
            position: "GK",
            name: "Kongolo",
            image: kongolo
        },
        {
            number: 4,
            position: "DF",
            name: "Emmanuel Habimana",
            image: emmanuel
        },
        {
            number: 7,
            position: "MF",
            name: "Merci Rushikama",
            image: merci
        },
        {
            number: 10,
            position: "FW",
            name: "Elijah Kwizera",
            image: elijah
        },
        {
            number: 11,
            position: "FW",
            name: "Mohammed",
            image: Mohammed
        },
        {
            number: 6,
            position: "MF",
            name: "Ngabo",
            image: Ngabo
        },
        {
            number: 5,
            position: "DF",
            name: "Enock",
            image: Enock
        },
        
        {
            number: 2,
            position: "DF",
            name: "Frank",
            image:Frank
        },
        {
            number: 9,
            position: "FW",
            name: "Ronald Choute",
            image: Ronald
        },
        {
            number: 22,
            position: "FW",
            name: "Justin",
            image:Justin
        },
        {
            number: 8,
            position: "MF",
            name: "Lionel Meleki",
            image: Lionel
        },
        {
            number: 17,
            position: "FW",
            name: "Lwings Kabula",
            image: Lwings
        },
        {
            number: 90,
            position: "MF",
            name: "Elder Shields",
            image: Elder
        },
        {
            number: 12,
            position: "MF",
            name: "Darcy Lingard",
            image: Darcy
        },
        {
            number: 20,
            position: "MF",
            name: "Maurice",
            image: Maurice
        },

        {
            number: 25,
            position: "DF",
            name: "danny Matuid",
            image: Danny
        },

         {
            number: 23,
            position: "MF",
            name: "Bien",
            image: Bien
        }


    ];

    const filteredPlayers = players.filter((player) => {

        if (activeFilter === "ALL PLAYERS") {
            return true;
        }

        if (activeFilter === "GOALKEEPERS") {
            return player.position === "GK";
        }

        if (activeFilter === "DEFENDERS") {
            return player.position === "DF";
        }

        if (activeFilter === "MIDFIELDERS") {
            return player.position === "MF";
        }

        if (activeFilter === "FORWARDS") {
            return player.position === "FW";
        }

        return true;
    });

    return (

        <div className="roster-page">

            {/* ================= HEADER ================= */}

            <div className="roster-header">

                <div className="roster-logo">
                    <img
                        src= {require("./photos/CRSC-01.png")}
                        alt="CRSC Soccer Club"
                    />
                </div>


               <div className="roster-navigation">

                    <Link to="/" className="roster-nav-item roster-active">
                        HOME
                    </Link>

                    <Link to="/schedule" className="roster-nav-item">
                       SCHEDULE
                    </Link>

                    <Link to= "/roster" className="roster-nav-item">
                        ROSTER
                    </Link>

                    <Link to="/news" className="roster-nav-item">
                        NEWS
                    </Link>

                    <Link to= "/login" className="roster-nav-item">
                        LOGIN
                    </Link>

                    <Link to="/contact" className="roster-nav-item">
                        CONTACT
                    </Link>

                </div>


                <div className="roster-socials">

                     <div><a href="https://www.facebook.com" target="_blank" ><FontAwesomeIcon icon={faFacebook} size="2x" /></a></div>
                    <div><a href="https://www.instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram} size="2x" /></a></div>
                    <div><a href="https://www.instagram.com" target="_blank"><FontAwesomeIcon icon={faTwitter} size="2x" /></a></div>

                </div>

            </div>


            {/* ================= TITLE SECTION ================= */}

            <div className="roster-title-section">

                <div className="roster-title">

                    <h1>2025 ROSTER</h1>

                </div>


                <div className="roster-motto">

                    <div>ONE TEAM.</div>
                    <div>ONE CLUB.</div>

                </div>

            </div>


            {/* ================= FILTERS ================= */}

            <div className="roster-filters">

                <div
                    className={
                        activeFilter === "ALL PLAYERS"
                            ? "roster-filter active-filter"
                            : "roster-filter"
                    }
                    onClick={() => setActiveFilter("ALL PLAYERS")}
                >
                    ALL PLAYERS
                </div>


                <div
                    className={
                        activeFilter === "GOALKEEPERS"
                            ? "roster-filter active-filter"
                            : "roster-filter"
                    }
                    onClick={() => setActiveFilter("GOALKEEPERS")}
                >
                    GOALKEEPERS
                </div>


                <div
                    className={
                        activeFilter === "DEFENDERS"
                            ? "roster-filter active-filter"
                            : "roster-filter"
                    }
                    onClick={() => setActiveFilter("DEFENDERS")}
                >
                    DEFENDERS
                </div>


                <div
                    className={
                        activeFilter === "MIDFIELDERS"
                            ? "roster-filter active-filter"
                            : "roster-filter"
                    }
                    onClick={() => setActiveFilter("MIDFIELDERS")}
                >
                    MIDFIELDERS
                </div>


                <div
                    className={
                        activeFilter === "FORWARDS"
                            ? "roster-filter active-filter"
                            : "roster-filter"
                    }
                    onClick={() => setActiveFilter("FORWARDS")}
                >
                    FORWARDS
                </div>

            </div>


            {/* ================= PLAYER GRID ================= */}

            <div className="players-grid">

                {filteredPlayers.map((player) => (

                    <div className="player-card" key={player.number}>

                        {/* Number and Position */}

                        <div className="player-information">

                            <div className="player-number">
                                {player.number}
                            </div>

                            <div className="player-position">
                                {player.position}
                            </div>

                        </div>


                        {/* Player Image */}

                        <div className="player-image-container">

                            <img
                                src={player.image}
                                alt={player.name}
                                className="player-image"
                            />

                        </div>


                        {/* Bottom line */}

                        <div className="player-divider"></div>


                        {/* Player Name */}

                        <div className="player-name">
                            {player.name.toUpperCase()}
                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default Roster;