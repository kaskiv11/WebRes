import React from 'react';
import IMG1 from "../img/Іmage.png";
import ImageUploading from 'react-images-uploading';

const CreatePost = () => {

    const [images, setImages] = React.useState([]);
    const maxNumber = 69;

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

    return (
        <main className="main">
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-12 col-lg-10">
                        <div className="profile-tab-edit__general">
                            <ImageUploading
                                multiple
                                value={images}
                                onChange={onChange}
                                maxNumber={maxNumber}
                                dataURLKey="data_url"
                            >
                                {({
                                      imageList,
                                      onImageUpload,
                                      onImageRemoveAll,
                                      onImageUpdate,
                                      onImageRemove,
                                      isDragging,
                                      dragProps,
                                  }) => (
                                    // write your building UI
                                    <div className="col-12">
                                        <div className="upload__image-wrapper d-flex flex-column">
                                            <button
                                                style={isDragging ? { color: 'red' } : undefined}
                                                onClick={onImageUpload}
                                                {...dragProps} className="photo_one"
                                            >
                                                <div className="main_photo">
                                                    <div className="ratio ratio-4x3">
                                                        <img className="photo_one" src=" " alt=""></img>
                                                        <div className="upload_file d-flex justify-content-center align-items-center flex-column">
                                                            <div className="upload_photo">
                                                                <img src={IMG1} alt=""></img>
                                                            </div>
                                                            <div className="col-12">
                                                                <h3 className="descr_title_upl">Drag and drop an image, or Browser</h3>
                                                                <div className="d-none d-md-flex ul_upl d-flex justify-content-center mt-5">
                                                                    <div className="ul_one me-2 me-lg-5">
                                                                        <ul type="disc" className="ul_upload">
                                                                            <li>High resolution image (png, jpg, svg)</li>
                                                                            <li>Different projects (C, C++, Java, JavaScript, <br></br> HTML,
                                                                                CSS, Python, PHP)</li>
                                                                        </ul>
                                                                    </div>

                                                                    <div className="ul_two">
                                                                        <ul type="disc" className="ul_upload">
                                                                            <li>Videos (mp4, avi, wmv)</li>
                                                                            <li>Animated gifs</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </button>
                                            &nbsp;
                                            <button className="button_m mb-5" onClick={onImageRemoveAll}>Remove all images</button>
                                            {imageList.map((image, index) => (
                                                <div key={index} className="image-item other_photos__item d-flex align-items-center justify-content-between flex-wrap">
                                                    <div className="col-12 col-lg-4">
                                                        <img className="other_photos__photo" src={image['data_url']} alt=""></img>
                                                    </div>
                                                    <div className="col-12 col-lg-8 mt-3">
                                                        <div className="image-item__btn-wrapper input-group justify-content-start justify-content-lg-end">
                                                            <button className="button_m" onClick={() => onImageUpdate(index)}>Update</button>
                                                            <button className="button_m" onClick={() => onImageRemove(index)}>Remove</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </ImageUploading>
                            <div className="col-12 mt-5">
                                <form action="">
                                    <div className="form-group post-filter post-create">
                                        <label htmlFor="exampleInputName1">Project name</label>
                                        <input type="text" className="text-field__input" id="exampleInputName1"
                                               placeholder="Enter a name for the project"></input>
                                    </div>
                                    <div className="form-group post-filter post-create">
                                        <label htmlFor="exampleFormControlTextarea1">Description</label>
                                        <textarea className="text-field__input" id="exampleFormControlTextarea1" rows="3" placeholder="Enter a description of the project"></textarea>
                                    </div>
                                    <div className="form-group post-filter post-create">
                                        <label htmlFor="exampleFormControlSelect">Category</label>
                                        <select className="form-select form-select-lg form-select__create mb-3"
                                                id="exampleFormControlSelect"
                                                aria-label=".form-select-lg example">
                                            <option selected>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 d-flex justify-content-center">
                                            <button type="submit" className="btn mr">Save as draft</button>
                                            <button type="delete" className="btn">Cancel</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default CreatePost;