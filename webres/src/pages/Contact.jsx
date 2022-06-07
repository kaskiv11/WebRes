import React from 'react';

const Contact = () => {
    return (
        <main className="main">
            <section className="contact_main">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="ques_wrapper">
                                <h3 className="questions_contact">Do you have any <span>questions? </span> This is a form to
                                    contact us
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="main_content_contact">
                                <div className="col-12 col-lg-11 m-auto">
                                    <div className="row">
                                        <div className="col-12 col-lg-9">
                                            <div className="row">
                                                <div className="contact_desc">
                                                    <h2 className="contact_title"> Contact us</h2>
                                                    <p className="contact_about">We are here to answer any questions you may
                                                        have about our
                                                        project.
                                                        Reach out to us <br></br> and we'll respond as soon as we can.</p>
                                                    <p className="contact_about">Even if you can't find something on the
                                                        WebRes, let
                                                        us know and we promise to do our <br></br> best to resolve the issue.</p>
                                                </div>
                                            </div>
                                            <form action="#">
                                                <div className="row">
                                                    <div className="col-12 col-lg-6">
                                                        <div className="d-flex flex-column">
                                                            <div className="desc_input">NAME:*</div>
                                                            <div className="text_fild_contact">
                                                                <input type="text" className="cont_name"
                                                                       placeholder="Enter a your name"
                                                                       required tabIndex="0"></input>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-lg-6">
                                                        <div className="d-flex flex-column">
                                                            <div className="desc_input">EMAIL:*</div>
                                                            <div className="text_fild_contact">
                                                                <input type="text" className="cont_em"
                                                                       placeholder="Enter a your email"
                                                                       required tabIndex="0"></input>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="d-flex flex-column mt-4">
                                                        <div className="desc_input">MESSAGE:*</div>
                                                        <div className="text_fild_contact_mes mt-2">
                                                            <textarea className="cont_mes"
                                                                   placeholder="Enter a your message"
                                                                   required tabIndex="0" rows="6"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button type="submit" className="button_mnn button_pub_send ">Send</button>
                                            </form>
                                        </div>
                                        <div className="col-12 col-lg-3 mt-5 mt-lg-0">
                                            <div className="contact_info_bloc">
                                                <div className="contact_wrap_all">
                                                    <div className="contact_wrap">
                                                        <h2 className="contact_our_desc_email">EMAIL</h2>
                                                        <h3 className="contact_our_email">webres.gmail.com</h3>
                                                    </div>

                                                    <div className="contact_wrap">
                                                        <h2 className="contact_our_desc_phone">TELEPHONE</h2>
                                                        <h3 className="contact_our_phone">+380 67 94 57 418</h3>
                                                    </div>

                                                    <div className="contact_wrap">
                                                        <h2 className="contact_our_desc_telegram">TELEGRAM</h2>
                                                        <h3 className="contact_our_telegram">@webres_project</h3>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    );
};

export default Contact;