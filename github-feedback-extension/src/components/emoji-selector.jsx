import { Emoji } from "./emoji";
import React, { useState } from "react";
import { Tooltip } from "./tooltip";
import Emojis from "../enums/emoji";
import { capitalizeFirst } from "../utils/string";
import styled from "@emotion/styled";

const EmojiSelector = styled.div`
    border-radius: 15px;
    border: ${props => props.error ? "2px solid rgba(255, 72, 72, 0.733)" : "1px solid rgba(0,0,0,0.1)"};
    padding: 20px;
    display: flex;
    margin: 10px 0;
    flex-wrap: wrap;

    ${Emoji} {
        font-size: 2em;
    }
`;

const EmojiContainer = styled.div`
    margin: 0 15px;
    position: relative;
`;

const EmojiDismiss = styled.span`
    position: absolute;
    top: -5px;
    right: -10px;
    cursor: pointer;
`;

const TooltipEmojiContainer = styled(EmojiContainer)`
    text-align: center; 
    color: rgba(0,0,0,0.7);
    cursor: pointer;
`;

const TooltipContentWrapper = styled.div`
    border-radius: 15px;
    width: 240px;
    background-color: white;
    border: 1px solid rgba(0,0,0,0.1);
    overflow: hidden;
`;

const TooltipContentHeader = styled.div`
    background-color: rgba(0,0,0,0.02);
    padding: 10px 15px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
`;

const TooltipContentBody = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
`;

const TooltipContentEmojiWrapper = styled.div`
    margin: 0 10px;
    cursor: pointer;
    text-align: center;
`;

export const Selector = ({ selected, onEmojiRemoved, addEmoji, error }) => {
    let [hovered, setHovered] = useState();

    const onHover = emoji => setHovered(emoji);

    return (
        <EmojiSelector error={error}>
            {selected && selected.map(emoji => (
                <EmojiContainer>
                    <EmojiDismiss onClick={e => onEmojiRemoved(emoji)}>{"\u00d7"}</EmojiDismiss>
                    <Emoji emoji={emoji.value} />
                </EmojiContainer>))}
            <Tooltip 
                offset={"-165px"}
                target={<TooltipEmojiContainer>
                            <span style={{ fontSize: "1.3em" }}>{"\u2795"}</span><br />
                            <span style={{ fontSize: "0.7em" }}>add mood</span>
                        </TooltipEmojiContainer>}
                content={<TooltipContentWrapper>
                    <TooltipContentHeader>
                        {hovered ? `${capitalizeFirst(hovered)}` : 'Mood'}
                    </TooltipContentHeader>
                    <TooltipContentBody>
                        {Object.keys(Emojis).map(k => (
                            <TooltipContentEmojiWrapper onClick={e => addEmoji(Emojis[k])} onMouseOut={e => onHover(null)} onMouseOver={e => onHover(Emojis[k].display)}>
                                <Emoji emoji={Emojis[k].value} />
                            </TooltipContentEmojiWrapper>))}
                    </TooltipContentBody>
                </TooltipContentWrapper>} />
        </EmojiSelector>
    );
};