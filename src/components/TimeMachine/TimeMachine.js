import React from "react";
import styled from "styled-components";

const ControlPanel = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    border-top: 1px solid lightgrey;
    background-color: #F3F4F5;
    padding: 40px;
    display: flex;
    justify-content: center;
`;

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

    return (
        <ControlPanel>
            <input type="text" onChange={event => tryUpdate(event.target.value)} />
        </ControlPanel>
    );
}