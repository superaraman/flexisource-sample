import React from 'react';
import { Link } from 'react-router-dom';

export default function PageComponent({ title, children }) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 pt-2">
                    <div className="row mt-4 mb-2">
                        <div className="col-10">
                            <h1 className="display-one">{title}</h1>
                        </div>
                        <div className="col-2">
                            <Link to={"/articles/create"}>
                                <button type="button" className="btn btn-success">Add new Article</button>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
