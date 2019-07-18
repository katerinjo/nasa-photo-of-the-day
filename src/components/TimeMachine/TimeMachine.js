import React, { useState } from "react";
import styled from "styled-components";

const ControlPanel = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    border-top: 1px solid lightgrey;
    background-color: #F3F4F5;
    padding: 40px;
    display: flex;
    justify-content: space-around;
`;

const CommandInput = styled.input`
    background-color: black;

    &::-webkit-input-placeholder {
        color: grey;
        content: "hahtnsueoa";
    }
`;

const ValidIndicator = styled.p`
    ${props => props.isValid ? "color: darkgreen;" : "color: darkred;"}
`;

const QueryCount = styled.p`
    color: blue;
`;

export default function TimeMachine({ setDate, queryCount }) {
    const [valid, setValid] = useState(false);

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

        return null; //invalid date (defaults to today)
    }

    function tryUpdate(plainText) {
        console.log('plainText', plainText);
        console.log('makeValidDate', makeValidDate(plainText));
        const dateOrNull = makeValidDate(plainText);
        setValid(dateOrNull !== null);
        setDate(dateOrNull);
    }

    return (
        <ControlPanel>
            <ValidIndicator isValid={valid} children={valid ? `Valid` : `Invalid Date`} />
            <input
                type="text"
                placeHolder="YYYY-MM-DD"
                onChange={event => tryUpdate(event.target.value)}
            />
            <QueryCount children={queryCount} />
        </ControlPanel>
    );
}