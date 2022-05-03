import React from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {Link} from "react-router-dom";

const Registration = () => {
    return (
        <main className="main">
            <div className="container">
                <div className="login-form d-flex flex-column align-items-center justify-content-center">
                    <form className="sign_up justify-content-center" action="">
                        <div className="form-header form-header_registration
                                        d-flex align-items-center justify-content-center flex-column">
                            <div className="logo"></div>
                            <p className="form-header__title">
                                Sign up to share your projects.
                            </p>
                            <button className="form-header__continue-google">
                                <span></span>Continue with google
                            </button>
                            <div className="form-header__line d-flex align-items-center">
                                <div className="form-header__line_left"></div>
                                <div className="form-header__line_or">Or</div>
                                <div className="form-header__line_right"></div>
                            </div>
                            <div className="form-header__fields">
                                <MyInput type="text"  placeholder="First name"  tabIndex="0"/>
                                <MyInput type="text"  placeholder="Last name"  tabIndex="0"/>
                                <MyInput type="email"  placeholder="Email"  tabIndex="0"/>
                                <MyInput type="password"  placeholder="Password"  tabIndex="0"/>
                                <MyButton type="submit" className="btn form-header__button" value="Log In" tabIndex="0">
                                    Sign Up
                                </MyButton>
                            </div>
                        </div>
                    </form>
                    <div className="join">
                        <div className="join_title">You don’t an account?
                            <button className="border-0" id="join">
                                <Link to="/login">
                                    Join
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Registration;