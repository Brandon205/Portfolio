import React from 'react';
import { Redirect } from 'react-router-dom';

export default function CatchComponent() {

    let content = <Redirect to="/bidding-software" />

    return (
        <div>
            <h1>404 Error, don't worry I'll fix that, just let me do one thing...</h1>
            {content}
        </div>
    )
}
