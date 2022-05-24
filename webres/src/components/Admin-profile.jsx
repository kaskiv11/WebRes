import React, {useState} from 'react';
import PostFilter from "./PostFilter";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import img from "../img/Usign-Gradients-Featured-Image.png";

const AdminProfile = () => {

    const [filter, setFilter] = useState({sort: '', query: ''})
    const [posts, setPosts] = useState([])

    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPosts(response.data);
    })


    return (
    <Tabs>
        <div className="row">
            <div className="col-12">
                <div className="profile-tab-edit">
                    <TabList>
                        <Tab>
                            <div>all users</div>
                        </Tab>
                    </TabList>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <TabPanel>
                    <PostFilter
                        filter={filter}
                        setFilter={setFilter}
                    />
                    <div className="admin-users__wrap">
                        <div className="admin-users-item d-flex align-items-center justify-content-between">
                            <div className="admin-users__info d-flex align-items-center">
                                <div className="admin-users__img"></div>
                                <div className="admin-users__username">username</div>
                            </div>
                            <div className="admin-users__option">
                                <button className="button_m admin-users__btn">View profile</button>
                                <button className="button_m admin-users__btn">Edit profile</button>
                                <button className="button_m admin-users__btn">Stop profile</button>
                                <button className="button_m admin-users__btn">Delete profile</button>
                            </div>
                        </div>
                    </div>
                </TabPanel>
            </div>
        </div>
    </Tabs>

    );
};

export default AdminProfile;