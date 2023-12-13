import React from "react";
import MaiPlaceholder from "../assets/MaiPlaceholder.JPG"
import "../css/About.css";

export default function About () {
    return (
    <>
        <div className="about-container">
            <div className="about-content">
                <h2>About</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat, tortor ut varius cursus, eros justo bibendum magna, vel tristique justo mauris vel libero. Integer sed turpis id purus gravida varius. Fusce non libero id mi fringilla bibendum. Sed pharetra ex sit amet elit pellentesque, ut aliquam felis efficitur. Sed euismod eros at mi lacinia, vel fermentum elit suscipit. Aliquam vel risus vel quam fringilla fringilla ut id erat. Integer euismod vulputate odio, nec venenatis elit condimentum vel. Suspendisse potenti. Quisque eu fringilla purus, ut imperdiet nulla. </p>
            </div>
            <img src={MaiPlaceholder} alt="Mai, the head of B-OND Dance Collective"/>
        </div>
    </>
    )
}