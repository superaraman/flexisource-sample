import React from 'react';

export default function PageComponent({ title, buttonComponent: ButtonComponent, children }) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 pt-2">
                    <div className="row mt-4 mb-2">
                        <div className="col-10">
                            <h1 className="display-one">{title}</h1>
                        </div>
                        <div className="col-2">
                            <ButtonComponent />
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
