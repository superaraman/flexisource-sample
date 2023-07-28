import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function BackButton() {
    const navigateTo = useNavigate();

    return (
        <button type="button" className="btn btn-primary" onClick={() => navigateTo(-1)}>Go Back</button>
    )
}
