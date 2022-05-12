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
        <header className="header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-3">
                        <Link to="/posts">
                            <div className="logo"></div>
                        </Link>

                    </div>
                    <div className="col-4">
                        <div className="navbar__links">
                            <Link to="/posts">Posts</Link>
                            <Link to="/about">About</Link>
                            <Link to="/contact">Contact</Link>
                        </div>
                    </div>
                    <div className="offset-3 col-2 d-flex justify-content-end">
                        {/*<MyButton className={'navbar__add-project btn'} onClick={() => setModal(true)}>*/}
                        {/*    Add Project*/}
                        {/*</MyButton>*/}
                        {/*<MyModal visible={modal} setVisible={setModal}>*/}
                        {/*    <PostForm create={createPost}/>*/}
                        {/*</MyModal>*/}
                        {isAuth ?
                            <div>
                                <MyButton onClick={logout} className={'btn-invert'}>
                                    Log out
                                </MyButton>
                            </div>
                            :
                            <div className={'d-flex'}>
                                <MyButton className={'btn'}>
                                    <Link to="/login">
                                        Login
                                    </Link>
                                </MyButton>
                                <MyButton className={'btn-invert'}>
                                    <Link to="/registration">
                                        Sign Up
                                    </Link>
                                </MyButton>
                            </div>
                        }

                    </div>

                </div>
            </div>
        </header>
    );
};

export default Navbar;
