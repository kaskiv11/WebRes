import React, {useEffect, useState} from 'react';
import Loader from "../components/UI/Loader/Loader";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {useHistory, useParams} from "react-router-dom";
import PostItem from "../components/PostItem";
import PostList from "../components/PostList";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import img from "../img/Usign-Gradients-Featured-Image.png";
import MyButton from "../components/UI/button/MyButton";
import EditProfile from "../components/Edit-profile";
import AdminProfile from "../components/Admin-profile";

const Profile = () => {
    const router = useHistory()
    const params = useParams()
    const [post, setPost] = useState({});
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data);
    })

    useEffect(() => {
        fetchPostById(params.id)
    }, [])

    return (
        <main className="main profile">
            {isLoading
                ? <Loader/>
                :
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <div className="profile-user d-flex flex-column align-items-center">
                                <img src={img} alt="" className="profile-user__photo"/>
                                <div className="profile-user__name">
                                    Username: {post.id}
                                </div>
                            </div>
                        </div>
                    </div>
                    <Tabs>
                        <div className="row mb-5">
                        <div className="col-12 col-lg-2 mb-5">
                            <div className="profile-tabs">
                                <TabList>
                                    <Tab>
                                        <div className="profile-tabs__file"></div>
                                    </Tab>
                                    <Tab>
                                        <div className="proprofile-tabs__like"></div>
                                    </Tab>
                                    <Tab>
                                        <div className="profile-tabs__edit"></div>
                                    </Tab>
                                    <Tab>
                                        <div className="profile-tabs__admin"></div>
                                    </Tab>

                                    <div className="profile-post__add-plus"></div>

                                </TabList>
                            </div>
                        </div>
                        <div className="col-12 col-lg-10">
                            <TabPanel>
                                <div className="profile-post">
                                    <div className="row">
                                        {/*<div className="col-4">
                                            <div className="profile-post__add-projects cursor-pointer
                                    d-flex flex-column justify-content-center align-items-center">
                                                <div className="profile-post__add-plus"></div>
                                                <div className="profile-post__add-project">
                                                    Add projects
                                                </div>
                                            </div>
                                        </div>*/}
                                        <div className="col-12 col-md-6 col-lg-4">
                                            <div className="post">
                                                <div className="post__content ratio ratio-4x3">
                                                    <img src={img} alt="" className="post__img" />
                                                </div>
                                                <div className="post__info d-flex align-items-center">
                                                    <div className="post__info-img cursor-pointer" >
                                                        {post.id})
                                                    </div>
                                                    <div className="post__info-username cursor-pointer">
                                                        {post.title}
                                                    </div>
                                                    <div className="post__info-like d-flex align-items-center">
                                                        99
                                                    </div>
                                                    <div className="post__info-comments d-flex align-items-center">
                                                        15
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    {/*<PostList posts={post} title="Posts"/>*/}
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="row">
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="post">
                                            <div className="post__content ratio ratio-4x3">
                                                <img src={img} alt="" className="post__img" />
                                            </div>
                                            <div className="post__info d-flex align-items-center">
                                                <div className="post__info-img cursor-pointer" >
                                                    {post.id})
                                                </div>
                                                <div className="post__info-username cursor-pointer">
                                                    {post.title}
                                                </div>
                                                <div className="post__info-like d-flex align-items-center">
                                                    99
                                                </div>
                                                <div className="post__info-comments d-flex align-items-center">
                                                    15
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <EditProfile></EditProfile>
                            </TabPanel>
                            <TabPanel>
                                <AdminProfile></AdminProfile>
                            </TabPanel>
                        </div>
                    </div>
                    </Tabs>
                </div>
            }
        </main>
    );
};

export default Profile;