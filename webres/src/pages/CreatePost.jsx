import React from 'react';

const CreatePost = () => {
    return (
        <main className="main">
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-between mt-3 mb-3">
                        <button className="button_m">Cancel</button>
                        <button className="button_m">Save as draft</button>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-12 col-lg-10">
                        <form action="" className="profile-tab-edit__general">
                            <div className="col-12">
                                <div className="main_photo">
                                    <div className="ratio ratio-4x3">
                                        <img className="photo_one" src=" " alt=""></img>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="other_photos">
                                    <div className="other_photos__item d-flex align-items-center justify-content-between flex-wrap">
                                        <div className="col-12 col-lg-4">
                                            <img className="other_photos__photo" src=" " alt=""></img>
                                        </div>
                                        <div className="col-12 col-lg-8 mt-3">
                                            <div className="input-group justify-content-start justify-content-lg-end">
                                                <input type="file" className="button_m w-75" id="inputGroupFile04"
                                                       aria-describedby="inputGroupFileAddon04" aria-label="Upload"></input>
                                                <button className=" button_m w-25" type="button"
                                                        id="inputGroupFileAddon04">Button
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group post-filter post-create">
                                    <label htmlFor="exampleInputName1">Project name</label>
                                    <input type="text" className="text-field__input" id="exampleInputName1"
                                           placeholder="Enter a name for the project"></input>
                                </div>
                                <div className="form-group post-filter post-create">
                                    <label htmlFor="exampleFormControlTextarea1">Description</label>
                                    <textarea className="text-field__input" id="exampleFormControlTextarea1" rows="3" placeholder="Enter a description of the project"></textarea>
                                </div>
                                <div className="form-group post-filter post-create">
                                    <label htmlFor="exampleFormControlSelect">Category</label>
                                    <select className="form-select form-select-lg form-select__create mb-3"
                                            id="exampleFormControlSelect"
                                            aria-label=".form-select-lg example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className="row">
                                    <div className="col-12 d-flex justify-content-center">
                                        <button type="submit" className="btn mr">Save profile</button>
                                        <button type="delete" className="btn">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </main>
    );
};

export default CreatePost;