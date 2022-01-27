import styled from "@emotion/styled";

export const Container = styled.div`
    ${props => props.flex ? "display: flex;" : ""}
    ${props => props.bordered ? `
    border-radius: 15px;
    border: 1px solid rgba(0,0,0,0.1);` : ""}
`;