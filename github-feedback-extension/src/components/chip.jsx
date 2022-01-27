import styled from "@emotion/styled";
import React from "react";

const Dismiss = styled.span`
    cursor: pointer;

    &::after {
        content: "\\00a0\\00a0";
    }
`;

const ChipComponent = ({ active, dismissible, onClick, onDismiss, className, ...rest }) => {
    let dismissChip = (e) => {
        e.stopPropagation();
        onDismiss(e);

        return false;
    };

    return (
        <div className={className} onClick={e => onClick(e)}>
            {dismissible && <Dismiss onClick={dismissChip}>{"\u00d7"}</Dismiss>}
            {rest.children}
        </div>
    );
};

export const Chip = styled(ChipComponent)`
    padding: 10px 15px;
    border-radius: 20px;
    background-color: ${props => props.active ? "#0000ff" : "#ccccff"};
    color: ${props => props.active ? "white" : "#0000ff"};
    cursor: pointer;
`;