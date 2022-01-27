import styled from "@emotion/styled";
import React from "react";

const EmojiComponent = ({ emoji, className }) => {
    return (<span className={className}>{emoji}</span>);
};

export const Emoji = styled(EmojiComponent)``;