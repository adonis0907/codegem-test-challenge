import styled from "@emotion/styled";
import React, { Component } from "react";
import TooltipManager from "../services/tooltip_manager";

let tooltipId = 1;
const TooltipManagerInstance = new TooltipManager();

const TooltipContent = styled.div`
    display: ${props => props.open ? "block" : "none"};
    position: absolute;
    z-index: 999;
    margin-top: 10px;
    transform: translateX(${props => props.offset || 0});
`;

const TooltipContentWrapper = styled.div`
    position: static;
`;

export class Tooltip extends Component {
    constructor(props) {
        super(props);

        this.id = tooltipId++;
        this.tooltipRef = React.createRef();
        this.contentRef = React.createRef();

        this.state = {
            open: false
        };
    }

    componentWillUnmount() {
        TooltipManagerInstance.remove(this.id);
    }

    openTooltip = () => {
        TooltipManagerInstance.initialize(this.id, this.closeTooltip);
        this.contentRef.current.style.left = this.tooltipRef.current.offsetLeft;
        this.contentRef.current.style.top = this.tooltipRef.current.offsetTop;

        this.setState({ open: true });
    }

    closeTooltip = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <div className="tooltip" ref={this.tooltipRef}>
                <div onClick={this.openTooltip} className="tooltip-trigger" id={this.id}>{this.props.target}</div>
                <TooltipContentWrapper>
                    <TooltipContent open={this.state.open} offset={this.props.offset} ref={this.contentRef}>
                        {this.props.content}
                    </TooltipContent>
                </TooltipContentWrapper>
            </div>
        );
    }
}

document.addEventListener("click", e => {
    let el = e.target && e.target.closest(".tooltip-trigger");

    if(!el) {
        TooltipManagerInstance.clear();
    } else {
        TooltipManagerInstance.clear(+el.id);
    }
});