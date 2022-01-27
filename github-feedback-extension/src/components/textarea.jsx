import styled from "@emotion/styled";

export const Textarea = styled.textarea`
    ${props => props.bordered ? 
        `border-radius: 15px;
        ${props.error ? "border: 2px solid rgba(255, 72, 72, 0.733);" 
                    : "border: 1px solid rgba(0,0,0,0.1);"}` : ""}
    resize: none;
    ${props => props.full ? "width: 100%;" : ""}
`;