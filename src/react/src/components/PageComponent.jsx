import React from 'react';

export default function PageComponent({ title, buttons = '', children }) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 pt-2">
                    <div className="row">
                        <div className="col-8">
                            <h1 className="display-one">{title}</h1>
                        </div>
                        <div className="col-4">
                            {buttons}
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
