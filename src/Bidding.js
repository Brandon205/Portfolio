import React from 'react';
import { Link } from 'react-router-dom';

export default function Bidding() {
    return (
        <div className="App">
            <h1>PrimeBid Excel Usage video:</h1>
            <Link to="/" className="">Go Back</Link>
            <iframe title="Prime Bid Excel usage video" width="420" height="315" src="https://youtube.com/embed/DWPjwMcuEyQ?mute=1"> </iframe>
        </div>
    )
}
