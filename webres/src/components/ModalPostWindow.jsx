import React from 'react';
import MyButton from "./UI/button/MyButton";

const ModalPostWindow = () => {
    return (
        <div className="container ">
            <div className="row">
                <div className="post-wrap">
                    <div className="col d-flex align-items-center post-wrap__header">
                        <div className="col-8 d-flex align-items-center post-wrap__info">
                            <img src="" alt="user" className="post-wrap__photo-user"/>
                            <div className="post-wrap__username">
                                username
                            </div>
                            <span>&#8212;</span>
                            <div className="post-wrap__post-title">
                                title post
                            </div>
                        </div>

                        <div className="post-wrap__buttons d-flex ms-auto align-items-center">
                            <MyButton className="btn post-wrap__btn-like d-flex">
                                Like
                            </MyButton>
                            <MyButton className="btn">
                                Delete
                            </MyButton>
                            <MyButton className="btn-close-post">
                            </MyButton>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ModalPostWindow;