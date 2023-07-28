import React, { useEffect, useState, useMemo } from "react";
import PageComponent from "../components/PageComponent";
import axiosClient from "../axios";
import { Link, useParams } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';

export default function Article() {
    const { currentUser } = useStateContext();
    const [comment, setComment] = useState('');
    const [article, setArticle] = useState({
        comments: [],
    });
    const routeParams = useParams();

    const convertedLocalDate = useMemo(() => {
        return new Date(article.created_at).toLocaleDateString("en-US");
    }, [article]);

    useEffect(() => {
        fetchCurrentArticle();
    }, []);

    const fetchCurrentArticle = () => {
        axiosClient.get(`/articles/${routeParams.article_no}`).then(response => {
            setArticle(response.data);
        }).catch(error => console.log(error));
    };

    const handleSubmitComment = () => {
        axiosClient.post(`/articles/comments`, {
            article_no: routeParams.article_no,
            user_no: currentUser.user_no,
            comment: comment
        }).then(response => {
            setComment('');
            fetchCurrentArticle();
        }).catch(error => console.log(error));
    };

    return (
        <PageComponent title="Article Details">
            <div className="col">
                <div className="row g-0 b">
                    <div className="col d-flex flex-column">
                        <div className="col d-flex flex-row">
                            <h3 className="mb-0 text-truncate flex-grow-1">{article.title}</h3>
                            <div className="fw-bold">
                                {article.created_at ? convertedLocalDate : ''}
                            </div>
                        </div>
                        <p className="card-text">{article.content}</p>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="h4">
                        Comment List
                    </div>
                    {article.comments.map((comment) => (
                        <div key={comment.comment_no} className="card my-2">
                            <div className="card-body">
                                <h5 className="card-title">{comment.user.name}</h5>
                                <p className="card-text text-truncate">{comment.content}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="row mt-4">
                    <div className="card-body">
                        <div className="col d-flex fle-column">
                            <input
                                type="text"
                                className="form-control flex-grow-1"
                                value={comment}
                                onChange={(event) => setComment(event.target.value)}
                                />
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={handleSubmitComment}>
                                Add Comment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </PageComponent>
    )
}
