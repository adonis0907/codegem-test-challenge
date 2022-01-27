import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    visibility: ${props => props.show ? "visible" : "hidden"};
    z-index: 20;
    opacity: ${props => props.show ? "1" : "0"};
    transition: visibility 0.5s linear, opacity 0.5s ease-in-out;
`;

const ToastContent = styled.div`
    background-color: black;
    opacity: 0.7;
    border-radius: 10px;
    color: white;
    padding: 15px 25px;
    margin: 0 20px;
`;

export const Toast = ({ content, show }) => {
    return (
        <Container show={show}>
            <ToastContent>
                {content}
            </ToastContent>
        </Container>
    );
};