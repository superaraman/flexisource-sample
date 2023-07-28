import React, { useEffect, useState } from "react";
import PageComponent from "../components/PageComponent";
import axiosClient from "../axios";

export default function Dashboard() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axiosClient.get('/articles').then(response => {
            setArticles(response.data);
        }).catch(error => console.log(error));
    }, []);

    return (
        <PageComponent title="Articles" buttons="Add New Article">
            {
                articles.map((article) => (
                    <div className="card mb-2" key={article.article_no}>
                        <div className="card-body">
                            <h5 className="card-title">{article.title}</h5>
                            <p className="card-text text-truncate">{article.content}</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                ))
            }
        </PageComponent>
    )
}
