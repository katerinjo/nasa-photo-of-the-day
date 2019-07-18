import React from "react";
import { Card, Image } from "semantic-ui-react";

export default function SpacePanel({ date, imgUrl, explanation }) {
    return (
        // <div>
        //     <h2>Date: {date || "Today"}</h2>
        //     <img src={imgUrl} alt="regarding the glories of space" />
        //     <p>{explanation || "[no explanation available]"}</p>
        // </div>
        <Card>
            <Image src={imgUrl} alt="regarding the glories of space" />
            <Card.Content>
                <Card.Header>Date: {date || "Today"}</Card.Header>
                <Card.Description>
                    {explanation || "[no explanation available]"}
                </Card.Description>
            </Card.Content>
        </Card>
    );
}