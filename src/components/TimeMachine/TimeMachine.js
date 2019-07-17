import React from "react";

export default function TimeMachine({ setDate }) {
    function parseDate(dateText) {
        return dateText.split('-').map(Number)
    }

    function makeValidDate(plainText) {
        //checks for valid YYYY-MM-DD date
        if (plainText.match(/^\d\d\d\d-\d\d-\d\d$/)) {
            console.log('it matched');
            const [year, month, day] = parseDate(plainText);
            if (year <= 2019 && year > 2011
                && month <= 12 && month > 0
                && day <= 28 && day > 0) {
                return plainText;
            }
        }

        return null;
    }

    function tryUpdate(plainText) {
        console.log('plainText', plainText);
        console.log('makeValidDate', makeValidDate(plainText));
        setDate(makeValidDate(plainText));
    }

    return <input type="text" onChange={event => tryUpdate(event.target.value)} />;
}