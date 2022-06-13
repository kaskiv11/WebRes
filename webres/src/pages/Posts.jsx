import React, {useEffect, useRef, useState} from 'react';
import PostService from "../API/PostService";
import {usePosts} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import {getPageCount} from "../utils/pages";
import MyButton from "../components/UI/button/MyButton";
import PostForm from "../components/PostForm";
import MyModal from "../components/UI/MyModal/MyModal";
import PostFilter from "../components/PostFilter";
import PostList from "../components/PostList";
import Loader from "../components/UI/Loader/Loader";
import Pagination from "../components/UI/pagination/Pagination";
import {useObserver} from "../hooks/useObserver";
import MySelect from "../components/UI/select/MySelect";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import IMG1 from '../img/Group.png';

import {Link} from "react-router-dom";

function Posts() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(16);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const lastElement = useRef()

    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page);
        setPosts([...posts, ...response.data])
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit));
    })

    useObserver(lastElement, page < totalPages, isPostsLoading, () => {
        setPage(page + 1);
    })

    useEffect(() => {
        fetchPosts(limit, page)
    }, [page, limit])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    // Получаем post из дочернего компонента
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page)
    }

    return (
        <main className="main">
            <div className="App">
                <section className='background'>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="billboard">
                                    <div className="col-12 col-lg-6 content_main">
                                        <h1 className="site_name"> WEB SOLUTION</h1>
                                        <h4 className="site_descr">A service that helps beginners and professionals
                                            to spread and demonstrate their own
                                            projectsto promote the portfolio around the
                                            world. </h4>
                                        <Link to="/create">
                                            <button className="main_button"> Add project</button>
                                        </Link>
                                    </div>
                                    <div className="col-6 content_image d-none d-lg-flex">
                                        <img alt="" src={IMG1}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container">
                    {/*<MyButton style={{marginTop: 30}} onClick={() => setModal(true)} className={'btn-invert'}>
                        Add Project
                    </MyButton>
                    <MyModal visible={modal} setVisible={setModal}>
                        <PostForm create={createPost}/>
                    </MyModal>
                    <hr style={{margin: '15px 0'}}/>
                    <PostFilter
                        filter={filter}
                        setFilter={setFilter}
                    />
                    <MySelect
                        value={limit}
                        onChange={value => setLimit(value)}
                        defaultValue="Number of elements per page"
                        options={[
                            {value: 5, name: '5'},
                            {value: 10, name: '10'},
                            {value: 25, name: '25'},
                            {value: -1, name: 'All'},
                        ]}
                    />*/}
                    {postError &&
                        <h1>Error ${postError}</h1>
                    }
                    <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Posts"/>
                    <div ref={lastElement} style={{height: 0, background: 'red'}}/>
                    {isPostsLoading &&
                        <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
                    }
                    <Pagination
                        page={page}
                        changePage={changePage}
                        totalPages={totalPages}
                    />
                </div>

            </div>
        </main>

    );
}

export default Posts;
