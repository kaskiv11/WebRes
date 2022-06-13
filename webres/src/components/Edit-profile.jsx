import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const EditProfile = () => {
    return (
        <Tabs>
            <div className="row">
                <div className="col-12">
                    <div className="profile-tab-edit">
                        <TabList>
                            <Tab>
                                General
                            </Tab>
                            <Tab>
                                Password
                            </Tab>
                        </TabList>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <TabPanel>
                        <form action="#" className="profile-tab-edit__general">
                            <div className="form-group d-flex align-items-center">
                                <label className={"exampleFormControlFile1"} htmlFor="exampleFormControlFile1"></label>
                                <input type="file" className="form-control-file" id="exampleFormControlFile1"></input>
                            </div>
                            <div className="form-group post-filter">
                                <label htmlFor="exampleInputName1">Name</label>
                                <input type="text" className="text-field__input" id="exampleInputName1"
                                       placeholder="Enter your name"></input>
                            </div>
                            <div className="form-group post-filter">
                                <label htmlFor="exampleFormControlTextarea1">BIO</label>
                                <textarea className="text-field__input" id="exampleFormControlTextarea1" rows="3" placeholder="Enter your BIO"></textarea>
                            </div>
                            <div className="form-group post-filter">
                                <label htmlFor="exampleInputEmail1">Email</label>
                                <input type="email" className="text-field__input " id="exampleInputEmail1"
                                       aria-describedby="emailHelp" placeholder="Enter your email"></input>
                            </div>
                            <button type="submit" className="btn">Save profile</button>
                        </form>
                    </TabPanel>
                    <TabPanel>
                        <form className="profile-tab-edit__password">
                            <div className="form-group post-filter">
                                <label htmlFor="exampleInputPassword1">New password</label>
                                <input type="password" className="text-field__input" id="exampleInputPassword1"
                                       placeholder="New password"></input>
                            </div>
                            <div className="form-group post-filter">
                                <label htmlFor="exampleInputPassword2">Repeat the new password</label>
                                <input type="password" className="text-field__input" id="exampleInputPassword2"
                                       placeholder="New password"></input>
                            </div>
                            <button type="submit" className="btn">Save</button>
                        </form>
                    </TabPanel>
                </div>
            </div>
        </Tabs>
    );
};

export default EditProfile;