import React from "react";

export default function TimeMachine({ setDate }) {
    function validDate(plainText) {
        return plainText === "2019-7-15";
    }

    function tryUpdate(event) {
        console.log(event);
    }

    return <input type="text" onChange={event => tryUpdate(event.target.value)} />;
}