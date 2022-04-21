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

    const [modal, setModal] = useState(false);

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="post">
                <div className="post__content ratio ratio-4x3"
                     onClick={() => router.push(`/posts/${props.post.id}`)}
                    /* onClick={() => setModal(true)}*/>
                    <img src={img} alt="" className="post__img" />
                </div>
                <div className="post__btns d-flex">
                    <div>
                        {props.post.id}. {props.post.title}
                    </div>
                    {/* <MyButton onClick={() => router.push(`/posts/${props.post.id}`)}>
                        Open
                    </MyButton> */}
                    <MyButton onClick={() => props.remove(props.post)}>
                        Delete
                    </MyButton>
                </div>
            </div>
            <MyModal visible={modal} setVisible={setModal}>
                <ModalPostWindow/>
            </MyModal>
        </div>
        
    );
};

export default PostItem;
