import React, { useState } from "react";
import "./loginRegister.css";

function LoginRegister() {

    const [activeTab, setActiveTab] = useState("LOGIN");

    return (

        <div className="login-page">


            {/* =========================================
                LEFT BLUE SECTION
            ========================================= */}

            <div className="login-left">


                <div className="login-left-content">


                    {/* LOGO */}

                    <div className="login-logo">

                        <img
                            src={require("./photos/CRSC-01.png")}
                            alt="CRSC Soccer Club"
                        />

                    </div>


                    {/* TITLE */}

                    <h1>
                        WELCOME TO CRSC
                    </h1>


                    <p className="login-description">
                        Login or create an account to stay
                        connected with your team.
                    </p>


                    {/* FEATURES */}

                    <div className="login-features">


                        <div className="login-feature">

                            

                            <div className="feature-icon">
                                <a href="/schedule">
                                ▣
                               </a>
                            </div>

                            <div className="feature-text">
                                <a href="/schedule">
                                TEAM
                                <br />
                                SCHEDULES

                                </a>

                                
                            </div>

                            

                        </div>


                        <div className="login-feature">

                            <div className="feature-icon">
                                <a href="/news">
                                ▤

                                </a>
                            </div>

                            <div className="feature-text">

                                <a href="/news">
                                CLUB
                                <br />
                                NEWS

                                </a>
                            </div>

                        </div>


                        <div className="login-feature">

                            <div className="feature-icon">
                                <a href="/roster">
                                ●

                                </a>
                            </div>

                            <div className="feature-text">
                                <a href="/roster">
                                PLAYER
                                <br />
                                PROFILES

                                </a>
                            </div>

                        </div>


                        


                    </div>

                </div>

            </div>


            {/* =========================================
                RIGHT FORM SECTION
            ========================================= */}

            <div className="login-right">


                {/* TABS */}

                <div className="login-tabs">


                    <div
                        className={
                            activeTab === "LOGIN"
                                ? "login-tab login-tab-active"
                                : "login-tab"
                        }

                        onClick={() => setActiveTab("LOGIN")}
                    >
                        LOGIN
                    </div>


                    <div
                        className={
                            activeTab === "REGISTER"
                                ? "login-tab login-tab-active"
                                : "login-tab"
                        }

                        onClick={() => setActiveTab("REGISTER")}
                    >
                        REGISTER
                    </div>

                </div>


                {/* =========================================
                    LOGIN FORM
                ========================================= */}

                {activeTab === "LOGIN" && (

                    <div className="login-form">


                        <div className="input-container">

                            <span className="input-icon">
                                ✉
                            </span>

                            <input
                                type="email"
                                placeholder="Email Address"
                            />

                        </div>


                        <div className="input-container">

                            <span className="input-icon">
                                🔒
                            </span>

                            <input
                                type="password"
                                placeholder="Password"
                            />

                        </div>


                        <div className="forgot-password">
                            Forgot password?
                        </div>


                        <button className="login-button">
                            LOGIN
                        </button>


                        <div className="or-divider">

                            <span></span>

                            <p>OR</p>

                            <span></span>

                        </div>


                        <button
                            className="create-account-button"
                            onClick={() => setActiveTab("REGISTER")}
                        >
                            CREATE AN ACCOUNT
                        </button>

                    </div>

                )}


                {/* =========================================
                    REGISTER FORM
                ========================================= */}

                {activeTab === "REGISTER" && (

                    <div className="login-form">


                        <div className="input-container">

                            <span className="input-icon">
                                👤
                            </span>

                            <input
                                type="text"
                                placeholder="First Name"
                            />

                        </div>


                        <div className="input-container">

                            <span className="input-icon">
                                👤
                            </span>

                            <input
                                type="text"
                                placeholder="Last Name"
                            />

                        </div>


                        <div className="input-container">

                            <span className="input-icon">
                                ✉
                            </span>

                            <input
                                type="email"
                                placeholder="Email Address"
                            />

                        </div>


                        <div className="input-container">

                            <span className="input-icon">
                                🔒
                            </span>

                            <input
                                type="password"
                                placeholder="Password"
                            />

                        </div>


                        <div className="input-container">

                            <span className="input-icon">
                                🔒
                            </span>

                            <input
                                type="password"
                                placeholder="Confirm Password"
                            />

                        </div>


                        <button className="login-button">
                            CREATE ACCOUNT
                        </button>


                        <div className="or-divider">

                            <span></span>

                            <p>OR</p>

                            <span></span>

                        </div>


                        <button
                            className="create-account-button"
                            onClick={() => setActiveTab("LOGIN")}
                        >
                            BACK TO LOGIN
                        </button>

                    </div>

                )}

            </div>

        </div>
    );
}

export default LoginRegister;