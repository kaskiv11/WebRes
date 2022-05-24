import React, {useEffect, useState} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import MyButton from "../components/UI/button/MyButton";
import img from "../img/Usign-Gradients-Featured-Image.png";
import { Carousel } from 'react-carousel-minimal';
import img1 from "../img/slider/greg-banek-U7gWXwap7Kg-unsplash.jpg";
import img2 from "../img/slider/marek-piwnicki-piat4gc2CKo-unsplash.jpg";
import img3 from "../img/slider/windows-QKuAz8zJRng-unsplash.jpg";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data);
    })
    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data);
    })

    const data = [
        {
            image: img1,
            caption: "Scotland"
        },
        {
            image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
            caption: "Darjeeling"
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
            caption: "San Francisco"
        },
        {
            image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
            caption: "Scotland"
        },
        {
            image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
            caption: "Darjeeling"
        },
        {
            image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
            caption: "Scotland"
        },
        {
            image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
            caption: "Darjeeling"
        }
    ];

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }


    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])

    return (
        <main className="main">
            {isLoading
                ? <Loader/>
                :
                <div className="container">
                    <div className="row">
                        <div className="post-wrap">
                            <div className="col d-flex align-items-center post-wrap__header">
                                <div className="col-8 d-flex align-items-center post-wrap__info">
                                    <img src="" alt="user" className="post-wrap__photo-user"/>
                                    <div className="post-wrap__username">
                                        username: {post.id}
                                    </div>
                                    <span>&#8212;</span>
                                    <div className="post-wrap__post-title">
                                        title: {post.title}
                                    </div>
                                </div>

                                <div className="post-wrap__buttons d-flex ms-auto align-items-center">
                                    <MyButton className="btn post-wrap__btn-like d-flex">
                                        Like
                                    </MyButton>
                                    <MyButton className="btn" onClick={() => params.remove(params.post)}>
                                        Delete
                                    </MyButton>
                                    <MyButton className="btn-close-post">
                                    </MyButton>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<div className="row">
                        <div className="col-8 m-auto">
                            <div className="post-wrap">
                                <div className="post-wrap__main-photo">
                                    <img src={img} alt="" className="post__img post-wrap__img" />
                                </div>
                                <div className="post-wrap__all-photo d-flex justify-content-center">
                                    <div className="post-wrap__photo-item ratio ratio-4x3 active">
                                        <img src={img} alt="" className="post__img post-wrap__img" />
                                    </div>
                                    <div className="post-wrap__photo-item ratio ratio-4x3">

                                    </div>
                                    <div className="post-wrap__photo-item ratio ratio-4x3">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>*/}
                    <div className="row">
                        <div className="col-10 m-auto">
                            <div className="post-wrap">
                                <Carousel
                                    data={data}
                                    time={2000}
                                    width="1000px"
                                    height="750px"
                                    captionStyle={captionStyle}
                                    radius="20px"
                                    slideNumber={true}
                                    slideNumberStyle={slideNumberStyle}
                                    captionPosition="bottom"
                                    automatic={false}
                                    dots={true}
                                    pauseIconColor={false} //"white"
                                    pauseIconSize="40px"
                                    slideBackgroundColor={false} //"darkgrey"
                                    slideImageFit="cover"
                                    thumbnails={true}
                                    thumbnailWidth="210px"
                                    style={{
                                        textAlign: "center",
                                        maxWidth: "1000px",
                                        maxHeight: "1000px",
                                        margin: "40px auto",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                {/*{isLoading
                ? <Loader/>
                :  <div>{post.id}. {post.title}</div>
            }*/}
                {isComLoading
                    ?
                    <Loader/>
                    :
                    <div className="post-description__wrap">
                        <div className="row">
                            <div className="col-12">
                                <div className="post-description">
                                    <div className="col-10 offset-1">
                                        <h2>Description</h2>
                                        <div>{post.body}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="post-comments">
                                    <div className="col-10 offset-1">
                                        <h2>Comments</h2>
                                        {comments.map(comm =>
                                            <div className="row" key={comm.id} style={{marginTop: 15}}>
                                                <div className="col-1">
                                                    <img src="" className="post-comments__img" alt=""/>
                                                </div>
                                                <div className="col-3 d-flex flex-column ">
                                                    <h5 className="post-comments__name">{comm.email}</h5>
                                                    <span className="post-comments__date">22.2.2222</span>
                                                </div>
                                                <div className="col-8">
                                                    <p className="post-comments__coments">{comm.body}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="post-comments-add">
                                    <div className="col-10 offset-1">
                                        <form className="post-comments-add__form">
                                            <div className="row">
                                                <div className="col-1">
                                                    <div className="post-comments-add__smile"></div>
                                                </div>
                                                <div className="col-9">
                                                    <textarea type="textarea" className="post-comments-add__form-control"
                                                              id="exampleInputPassword1" placeholder="Add a comment..." rows="2"></textarea>
                                                </div>
                                                <div className="col-2">
                                                    <button type="submit" className="btn btn-primary">Submit</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
            }
        </main>
    );
};

export default PostIdPage;
