import React from "react";
import styled from "@emotion/styled";

export const Card = styled.div`
    width: 360px;
    border-radius: 15px;
    border: 1px solid rgba(0,0,0,0.1);
    overflow: hidden;
    background-color: white;
    display: flex;
    flex-direction: column;
    height: 100%;

    &.closed {

    }
`;

const HeaderWrapper = styled.div`
    background-color: rgba(0,0,0,0.02);
    font-size: 1.2em;
    padding: 15px 20px;
    position: relative;
    border-bottom: 1px solid rgba(0,0,0,0.1);
`;

const Dismiss = styled.span`
    position: absolute;
    top: 10px;
    right: 20px;
    font-size: 1.3em;
    cursor: pointer;
`;

export const CardHeader = ({ dismissible, children }) => {
    return (
        <HeaderWrapper>
            {dismissible && <Dismiss className="card-dismiss">{"\u00d7"}</Dismiss>}
            {children}
        </HeaderWrapper>
    );
};

export const CardBody = styled.div`
    padding: 10px 15px;
    flex-grow: 1;
    overflow-y: auto;
`;

export const CardSection = styled.div`
    padding: 15px 0;
`;

export const CardFooter = styled.div`
    padding: 10px 15px;
    border-top: 1px solid rgba(0,0,0,0.1);
`;

export const CardInfo = styled.div`
    padding: 0 20px;
    color: rgba(0,0,0,0.8);
`;