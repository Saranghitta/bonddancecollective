import React from "react";
import "../css/Featured.css";

export default function Featured () {
    return (
        <>
            <div className="featured">
                <h2 className="featured-heading">Featured Video!</h2>
                <div className="video-container">
                    <iframe title="B-OND's most recent video." src="https://www.youtube.com/embed?listType=playlist&list=UUtapcJlcd3pv8MRHL5njHVw"/>
                </div>
            </div>
        </>
    )
}