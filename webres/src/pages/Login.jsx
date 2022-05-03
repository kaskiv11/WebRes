import React, {useContext} from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {AuthContext} from "../context";
import {Link} from "react-router-dom";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
    }

    return (
        <main className="main">
            <div className="container">
                <div className="login-form d-flex flex-column align-items-center justify-content-center">
                    <form className="sign_up justify-content-center" action="" onSubmit={login}>
                        <div className="form-header d-flex align-items-center justify-content-center flex-column">
                            <div className="logo"></div>
                            <div className="form-header__fields">
                                <MyInput type="text"  placeholder="Email"  tabIndex="0"/>
                                <MyInput type="password"  placeholder="Password"  tabIndex="0"/>
                                <MyButton type="submit" className="btn form-header__button" value="Log In" tabIndex="0">
                                    Log In
                                </MyButton>
                            </div>
                            <div className="form-header__line d-flex align-items-center">
                                <div className="form-header__line_left"></div>
                                <div className="form-header__line_or">Or</div>
                                <div className="form-header__line_right"></div>
                            </div>
                            <button className="form-header__continue-google">
                                <span></span>Continue with google
                            </button>
                            <button className="form-header__forgot-password">You forgot the password?</button>
                        </div>
                    </form>
                    <div className="join">
                        <div className="join_title">You don’t an account?
                            <button className="border-0" id="join">
                                <Link to="/registration">
                                    Sign Up
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Login;
