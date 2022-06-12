import React from 'react';
import IMG1 from '../img/photo_team.png';

const About = () => {
    return (
        <main className="main">
            <section className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mt-5">
                            <h2 className="about_title">About WebRes </h2>
                            <h3 className="about_help">WebRes is a platform to help you:</h3>
                            <ul type="disc" className="ul_upload">
                                <li>to declare oneself to the whole world;</li>
                                <li>find inspiration in other works;</li>
                                <li>improve their skills;</li>
                                <li>get a constructive feedback on the work;</li>
                                <li>find performers with diverse experience in the IT field;</li>
                                <li>in search of professional acquaintances</li>
                            </ul>
                            <h3 className="about_help2">We try to create an opportunity for everyone to demonstrate their
                                work and skills to those who need them.</h3>
                            <h3 className="about_help3">We are students of the National University "Lviv Polytechnic".
                                We study in one group on a specialty "Information systems and technologies". This subject
                                was
                                developed
                                in the discipline "Programming and teamwork".</h3>
                        </div>
                        <div className="col-md-4">
                            <div className="about_statistics_cont">
                                <div className="about_statistics">
                                    <h2 className="about_number">650+</h2>
                                    <h3 className="about_descp">the best specialists - our pride</h3>
                                </div>

                                <div className="about_statistics">
                                    <h2 className="about_number2">1000+</h2>
                                    <h3 className="about_descp2">projects from different <br></br> categories IT sphere</h3>
                                </div>

                                <div className="about_statistics">
                                    <h2 className="about_number3">200+</h2>
                                    <h3 className="about_descp3">preal employers who are ready to <br></br> take you to their
                                        team</h3>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-12">
                            <img className="about_photo" src={IMG1} alt=""></img>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
