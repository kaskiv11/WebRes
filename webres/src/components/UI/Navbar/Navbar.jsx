import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import { AuthContext } from "../../../context";
import MyButton from "../button/MyButton";
import MyModal from "../MyModal/MyModal";
import PostForm from "../../PostForm";
import IMG1 from "../../../img/menu.png"

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
                    <div className="col-6 col-lg-3">
                        <Link to="/posts">
                            <div className="logo"></div>
                        </Link>
                    </div>
                    <div className="col-4 d-none d-lg-block">
                        <div className="navbar__links">
                            <Link to="/posts">Posts</Link>
                            <Link to="/about">About</Link>
                            <Link to="/contact">Contact</Link>
                        </div>
                    </div>
                    <div className="col-5 d-none d-lg-flex justify-content-end">

                        {/*<MyModal visible={modal} setVisible={setModal}>*/}
                        {/*    <PostForm create={createPost}/>*/}
                        {/*</MyModal>*/}
                        {isAuth ?
                            <div className={'d-flex'}>
                                <Link to="/create">
                                    <MyButton className={'navbar__add-project btn'} /*onClick={() => setModal(true)}*/>
                                        Add Project
                                    </MyButton>
                                </Link>
                                <MyButton onClick={logout} className={'btn-invert'}>
                                    Log out
                                </MyButton>
                            </div>
                            :
                            <div className={'d-flex'}>
                                <Link to="/login" className="navbar__add-project">
                                    <MyButton className={'btn'}>
                                            Login
                                    </MyButton>
                                </Link>
                                <Link to="/registration">
                                    <MyButton className={'btn-invert'}>
                                            Sign Up
                                    </MyButton>
                                </Link>
                            </div>
                        }

                    </div>
                    <div className="col-6 d-flex justify-content-end d-lg-none">
                        <img src={IMG1} alt="" className="header-burger" data-bs-toggle="offcanvas"
                             data-bs-target="#offcanvasTop" aria-controls="offcanvasTop"/>
                    </div>
                    <div className="offcanvas offcanvas-top header-offcanvas" tabIndex="-1" id="offcanvasTop"
                         aria-labelledby="offcanvasTopLabel">
                        <div className="offcanvas-header">
                            <div className="logo" id="offcanvasTopLabel"></div>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <div className="col-12 d-flex justify-content-center">
                                <div className="navbar__links d-flex align-items-center flex-column" data-bs-dismiss="offcanvas">
                                    <Link to="/posts">Posts</Link>
                                    <Link to="/about">About</Link>
                                    <Link to="/contact">Contact</Link>
                                </div>
                            </div>
                            <div className="col-12">
                                {isAuth ?
                                    <div className="d-flex justify-content-center mt-5">
                                        <Link to="/create">
                                            <MyButton className={'navbar__add-project btn'} data-bs-dismiss="offcanvas">
                                                Add Project
                                            </MyButton>
                                        </Link>
                                        <MyButton onClick={logout} className={'btn-invert'} data-bs-dismiss="offcanvas">
                                            Log out
                                        </MyButton>
                                    </div>
                                    :
                                    <div className="d-flex justify-content-center mt-5">
                                        <MyButton className={'navbar__add-project btn '} data-bs-dismiss="offcanvas">
                                            <Link to="/login">
                                                Login
                                            </Link>
                                        </MyButton>
                                        <MyButton className={'btn-invert'} data-bs-dismiss="offcanvas">
                                            <Link to="/registration">
                                                Sign Up
                                            </Link>
                                        </MyButton>
                                    </div>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
