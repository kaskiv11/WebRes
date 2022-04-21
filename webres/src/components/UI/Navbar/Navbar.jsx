import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import { AuthContext } from "../../../context";
import MyButton from "../button/MyButton";
import MyModal from "../MyModal/MyModal";
import PostForm from "../../PostForm";


const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    /*added*/
    const [modal, setModal] = useState(false);
    const [posts, setPosts] = useState([])
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }
    //////////////////
    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }

    return (
        <header className="navbar container">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-2">
                        <div className="logo">
                            <Link to="/posts"></Link>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="navbar__links">
                            <Link to="/posts">Posts</Link>
                            <Link to="/about">About</Link>
                            <Link to="/contact">Contact</Link>
                        </div>
                    </div>
                    <div className="col-6 ms-auto d-flex">
                        <MyButton /*style={{marginLeft: 'auto'}}*/ onClick={() => setModal(true)} className={'navbar__add-project btn'}>
                            Add Project
                        </MyButton>
                        <MyModal visible={modal} setVisible={setModal}>
                            <PostForm create={createPost}/>
                        </MyModal>

                        <MyButton onClick={logout} className={'btn-invert'}>
                            Log out
                        </MyButton>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Navbar;
