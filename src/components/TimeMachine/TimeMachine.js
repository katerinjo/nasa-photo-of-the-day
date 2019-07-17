import React from "react";

export default function TimeMachine({ setDate }) {
    function parseDate(dateText) {
        return dateText.split('-').map(Number)
    }

    function validDate(plainText) {
        //inputs meaning "Today"
        if (['', 'now', 'today'].includes(plainText)) {
            return true;
        }

        //checks for valid YYYY-MM-DD date
        if (plainText.matches(/^\d\d\d\d-\d\d-\d\d$/)) {
            const [year, month, day] = parseDate(plainText);
            return year <= 2019 && year < 2011 && month <= 12 && month > 0 && day <= 28 && day > 0;
        }

        return false;
    }

    function tryUpdate(plainText) {
        if (validDate(plainText)) {
            setDate(plainText)
        }
    }

    return <input type="text" onChange={event => tryUpdate(event.target.value)} />;
}