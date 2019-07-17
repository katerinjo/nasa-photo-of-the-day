import React from "react";
import { tsPropertySignature } from "@babel/types";

export default function SpacePanel({ date, imgUrl, explanation }) {
    return (
        <div>
            <h2>Date: {date || "Today"}</h2>
            <img src={imgUrl} alt="regarding the glories of space" />
            <p>{explanation || "[no explanation available]"}</p>
        </div>
    );
}