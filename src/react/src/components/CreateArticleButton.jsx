import React from 'react';
import { Link } from 'react-router-dom';

export default function CreateArticleButton() {
    return (
        <Link to={"/articles/create"}>
            <button type="button" className="btn btn-success">Add new Article</button>
        </Link>
    )
}
