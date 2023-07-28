import React, { useEffect, useState } from "react";
import PageComponent from "../components/PageComponent";
import axiosClient from "../axios";
import { Link } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';

export default function Dashboard() {
    const { currentUser } = useStateContext();
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        requestFetchArticles();
    }, []);

    const requestDeleteArticle = (article_no) => {
        axiosClient.delete('/articles/' + article_no).then(response => {
            alert('Successfully deleted article!');
            requestFetchArticles();
        }).catch(error => console.log(error));
    };

    const requestFetchArticles = () => {
        axiosClient.get('/articles').then(response => {
            setArticles(response.data);
        }).catch(error => console.log(error));
    };

    const handleDeleteButtonClick = (event) => {
        let article_no = event.target.value;
        confirm('Are you sure you want to delete this article?', () => {
            return;
        });

        requestDeleteArticle(article_no);
    }

    return (
        <PageComponent title="Articles">
            {
                articles.map((article) => (
                    <div className="col-md-6" key={article.article_no}>
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250">
                            <div className="col p-4 d-flex flex-column">
                                <h3 className="mb-0 text-truncate flex-grow-1">{article.title}</h3>
                                <div className="mb-1 text-body-secondary">
                                    {new Date(article.created_at).toLocaleDateString("en-US")}
                                </div>
                                <p className="card-text text-truncate">{article.content}</p>
                                <div className="col d-flex mr-auto">
                                    <div className="col">
                                        <Link to={'/articles/' + article.article_no} className="icon-link gap-1 icon-link-hover">
                                            Continue reading
                                        </Link>
                                    </div>
                                    {article.user_no === currentUser.user_no ?
                                        <button
                                            type="button"
                                            className="btn btn-danger btn-sm ml-auto"
                                            value={article.article_no}
                                            onClick={handleDeleteButtonClick}>
                                            Delete
                                        </button> : null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </PageComponent>
    )
}
