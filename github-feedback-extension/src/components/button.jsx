import styled from "@emotion/styled";
import React from "react";

const ButtonStyled = styled.button`
    border-radius: 5px;
    background-color: ${props => props.primary ? "#00cc00" : "#0000ff"};
    padding: 8px 18px;
    border: none;
    color: white;
    cursor: pointer;

    :disabled {
        pointer-events: none;
        opacity: 0.6;
    }
`;

export const ButtonContainer = styled.div`
    margin: 10px 0;
    overflow: auto;
    display: flex;
    justify-content: flex-end;

    ${ButtonStyled}:last-child {
        margin-left: 10px;
    }
`;

export const Button = ({ primary, onClick, ...rest }) => {
    return (
        <ButtonStyled type="button" onClick={onClick} primary={primary}>
            {rest.children}
        </ButtonStyled>
    );
};