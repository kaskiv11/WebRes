import React, {useState} from 'react';
import MyButton from "./UI/button/MyButton";
import { useHistory } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import img from '../img/Usign-Gradients-Featured-Image.png';
import PostForm from "./PostForm";
import MyModal from "./UI/MyModal/MyModal";
import ModalPostWindow from "./ModalPostWindow";

const PostItem = (props) => {
    const router = useHistory()

    return (
        <div className="col-12 col-md-6 col-lg-3">
            <div className="post">
                <div className="post__content ratio ratio-4x3"
                     onClick={() => router.push(`/posts/${props.post.id}`)}>
                    <img src={img} alt="" className="post__img" />
                </div>
                <div className="post__info d-flex align-items-center">
                    <div className="post__info-img cursor-pointer" onClick={() => router.push(`/profile/${props.post.id}`)}>
                        {props.post.id})
                    </div>
                    <div className="post__info-username cursor-pointer">
                        {props.post.title}
                    </div>
                    <div className="post__info-like d-flex align-items-center">
                        99
                    </div>
                    <div className="post__info-comments d-flex align-items-center">
                        15
                    </div>
                    {/* <MyButton onClick={() => router.push(`/posts/${props.post.id}`)}>
                        Open
                    </MyButton> */}
                    {/*<MyButton onClick={() => props.remove(props.post)}>*/}
                    {/*    Delete*/}
                    {/*</MyButton>*/}
                </div>
            </div>
        </div>

    );
};

export default PostItem;
