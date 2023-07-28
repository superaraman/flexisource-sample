import React, { useEffect, useState, useMemo } from "react";
import PageComponent from "../components/PageComponent";
import axiosClient from "../axios";
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';
import BackButton from "../components/BackButton";


export default function CreateArticle() {
    const { currentUser } = useStateContext();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigateTo  = useNavigate();

    const handleSubmitArticle = () => {
        axiosClient.post(`/articles`, {
            user_no: currentUser.user_no,
            title: title,
            content: content
        }).then(response => {
            alert('Successfully created an Article');
            navigateTo('/');
        }).catch(error => console.log(error));
    };

    return (
        <PageComponent title="Create Article" buttonComponent={BackButton}>
            <div className="col">
                <div className="row mt-4">
                    <div className="card-body">
                        <div className="col d-flex flex-column">
                            <input
                                type="text"
                                className="form-control flex-grow-1 mb-4"
                                placeholder="Input Title"
                                value={title}
                                onChange={(event) => setTitle(event.target.value)}
                            />
                            <textarea
                                className="form-control flex-grow-1 mb-4"
                                placeholder="Input Content"
                                value={content}
                                onChange={(event) => setContent(event.target.value)}
                            />
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={handleSubmitArticle}>
                                Submit Article
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </PageComponent>
    )
}
