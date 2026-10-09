import React from "react";
import "./newspage.css";

function NewsArticle() {

    return (
        <div className="newsArticlePage">

            {/* ================= NAVBAR ================= */}

            <header className="articleNavbar">

                <div className="articleLogo">

                    <img
                        src="/photos/CRSC-01.png"
                        alt="CRSC Logo"
                    />

                    <div>
                        <h2>CEDAR RAPIDS</h2>
                        <h2>SOCCER CLUB</h2>
                    </div>

                </div>


                <nav className="articleNav">

                    <a href="/">SCHEDULE</a>
                    <a href="/">ROSTER</a>
                    <a href="/" className="active">
                        NEWS
                    </a>
                    <a href="/">GALLERY</a>
                    <a href="/">CONTACT</a>

                </nav>


                <div className="articleSocial">

                    <i className="fa-brands fa-facebook-f"></i>

                    <i className="fa-brands fa-instagram"></i>

                    <i className="fa-brands fa-twitter"></i>

                    <i className="fa-solid fa-right-to-bracket"></i>

                </div>

            </header>


            {/* ================= MAIN ================= */}

            <main className="articleContainer">


                {/* HERO IMAGE */}

                <div className="articleHero">

                    <img
                        src="/photos/crsc-news-headline-photo.png"
                        alt="Cedar Rapids Soccer Club players"
                    />

                </div>


                {/* ARTICLE + SIDEBAR */}

                <div className="articleLayout">


                    {/* ================= STORY ================= */}

                    <article className="articleStory">


                        {/* ARTICLE INFORMATION */}

                        <div className="articleInfo">

                            <span>
                                <i className="fa-regular fa-calendar"></i>
                                May 12, 2025
                            </span>

                            <span>
                                <i className="fa-solid fa-user"></i>
                                CRSC Media
                            </span>

                            <span>
                                <i className="fa-solid fa-tag"></i>
                                Team News
                            </span>

                        </div>


                        {/* HEADLINE */}

                        <h1>
                            CRSC Secures 6–1 Victory and
                            Advances to Semifinals
                        </h1>


                        {/* INTRO */}

                        <p className="articleIntro">

                            Cedar Rapids Soccer Club continues its
                            strong run in the Iowa Champions League
                            after a dominant 6–1 win in the
                            quarterfinals, earning a spot in the
                            semifinals.

                        </p>


                        {/* STORY */}

                        <p>
                            The Cedar Rapids Soccer Club delivered
                            one of its most complete performances
                            of the season on Saturday night,
                            defeating their opponent 6–1 in the
                            Iowa Champions League quarterfinals.
                        </p>


                        <p>
                            The team showed excellent chemistry,
                            control in possession, and a relentless
                            attacking mindset from the opening
                            whistle.
                        </p>


                        <p>
                            Goals came from multiple players, with
                            the offense clicking early and often.
                            The defense also looked solid, limiting
                            the opposition to just one goal
                            throughout the match.
                        </p>


                        <p>
                            This result marks another step forward
                            for CRSC as they continue their pursuit
                            of the championship.
                        </p>


                        {/* QUOTE */}

                        <blockquote>

                            "We played as a team, and it showed.
                            Everyone gave their best, and we're
                            excited to keep building."

                        </blockquote>


                        <p>
                            The semifinal match is set for next
                            weekend, and the team is already focused
                            on the challenge ahead.
                        </p>


                        <p>
                            Fans are encouraged to follow the club
                            on social media for match updates,
                            game details, and more news throughout
                            the tournament.
                        </p>


                        {/* BACK TO NEWS */}

                        <div className="backToNews">

                            <a href="/">

                                <i className="fa-solid fa-arrow-left"></i>

                                Back to News

                            </a>

                        </div>

                    </article>



                    {/* ================= SIDEBAR ================= */}

                    <aside className="recentNews">

                        <h2>Recent News</h2>


                        <div className="recentNewsItem">

                            <img
                                src="/photos/news1.jpg"
                                alt="CRSC"
                            />

                            <div>

                                <h3>
                                    CRSC Advances to
                                    Semifinals with 6–1 Win
                                </h3>

                                <span>
                                    May 12, 2025
                                </span>

                            </div>

                        </div>


                        <div className="recentNewsItem">

                            <img
                                src="/photos/news2.jpg"
                                alt="CRSC"
                            />

                            <div>

                                <h3>
                                    CRSC Dominates with
                                    10–2 Victory
                                </h3>

                                <span>
                                    May 5, 2025
                                </span>

                            </div>

                        </div>


                        <div className="recentNewsItem">

                            <img
                                src="/photos/news3.jpg"
                                alt="CRSC"
                            />

                            <div>

                                <h3>
                                    9–3 Win Keeps CRSC
                                    in the Title Hunt
                                </h3>

                                <span>
                                    April 28, 2025
                                </span>

                            </div>

                        </div>


                        <div className="recentNewsItem">

                            <img
                                src="/photos/CRSC-01.png"
                                alt="CRSC"
                            />

                            <div>

                                <h3>
                                    Meet the 2025 Roster
                                </h3>

                                <span>
                                    April 15, 2025
                                </span>

                            </div>

                        </div>


                        <div className="recentNewsItem">

                            <img
                                src="/photos/stadium.jpg"
                                alt="CRSC"
                            />

                            <div>

                                <h3>
                                    CRSC Announces
                                    Upcoming Fixtures
                                </h3>

                                <span>
                                    April 8, 2025
                                </span>

                            </div>

                        </div>

                    </aside>

                </div>

            </main>


            {/* ================= FOOTER ================= */}

            <footer className="articleFooter">

                <div>

                    Driven by Determination,
                    Guided by Discipline,<br />

                    Fueled by Dedication.
                    We Play to Win!

                </div>


                <div className="footerSocial">

                    <i className="fa-brands fa-facebook"></i>

                    <i className="fa-brands fa-instagram"></i>

                    <i className="fa-brands fa-twitter"></i>

                </div>


                <div className="copyright">

                    © 2025 Cedar Rapids Soccer Club.
                    All rights reserved.

                </div>

            </footer>

        </div>
    );
}

export default NewsArticle;