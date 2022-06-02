import React, {useState} from 'react';
import PostFilter from "./PostFilter";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import img from "../img/Usign-Gradients-Featured-Image.png";
import PostForm from "./PostForm";
import MyModal from "./UI/MyModal/MyModal";

const AdminProfile = () => {

    const [filter, setFilter] = useState({sort: '', query: ''})
    const [posts, setPosts] = useState([])
    const [modal1, setModal1] = useState(false);
    const [modal2, setModal2] = useState(false);

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
                    <div className="col-12 admin-users__wrap">
                        <div className="admin-users-item d-flex align-items-center flex-wrap">
                            <div className="col-12 col-lg-4 admin-users__info d-flex align-items-center">
                                <div className="admin-users__img"></div>
                                <div className="admin-users__username">username</div>
                            </div>
                            <div className="col-12 col-lg-8 admin-users__option mt-3 mt-lg-0">
                                <button className="button_m admin-users__btn">View profile</button>
                                <button className="button_m admin-users__btn">Edit profile</button>
                                <button className="button_m admin-users__btn" onClick={() => setModal1(true)}>Stop profile</button>
                                <button className="button_m admin-users__btn" onClick={() => setModal2(true)}>Delete profile</button>
                                <MyModal visible={modal1} setVisible={setModal1}>
                                    <div className="row">
                                        <p>Are you sure you want to stop this user's profile?</p>
                                    </div>
                                    <div className="row">
                                        <div className="d-flex justify-content-around">
                                            <button className="button_m admin-users__btn">Stop profile</button>
                                            <button className="button_m admin-users__btn">Cancel</button>
                                        </div>
                                    </div>
                                </MyModal>
                                <MyModal visible={modal2} setVisible={setModal2}>
                                    <div className="row">
                                        <p>Are you sure you want to delete this user's profile?</p>
                                    </div>
                                    <div className="row">
                                        <div className="d-flex justify-content-around">
                                            <button className="button_m admin-users__btn">Delete profile</button>
                                            <button className="button_m admin-users__btn">Cancel</button>
                                        </div>
                                    </div>
                                </MyModal>
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