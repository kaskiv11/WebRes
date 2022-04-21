import React from 'react';
import {Link} from "react-router-dom";
import MyInput from "../input/MyInput";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer__info d-flex justify-content-between">
                        <div className="col-12 col-md-3">
                            <div className="footer__left">
                                <div className="logo">
                                    <Link to="/posts"></Link>
                                </div>
                                <p className="footer__description">
                                    WebRes is a platform to help you express yourself to the world and find inspiration in other works.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-3">
                            <div className="footer__right ">
                                <div className="text-field__icon text-field__icon_search">
                                    <MyInput className="text-field__input" type="text" placeholder="Search"/>
                                </div>
                                <div className="footer__team">
                                    <p>Developers: <br/>
                                        <span>"Four Apples"</span>  team</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <span className="footer__copyright">© 2022 WebRes. All rights reserved.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;