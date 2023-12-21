import React from "react";
import TalentCarousel from "./TalentCarousel";
import "../css/Talent.css"

export default function Talent () {
    return (
        <>
            <div className="talent-container" id="talent">
                <h2>Talent</h2>
                <TalentCarousel/>
            </div>
        </>
    )
}