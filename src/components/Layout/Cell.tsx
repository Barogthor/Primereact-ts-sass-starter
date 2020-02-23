import React, {Component} from "react";

import {Button} from "primereact/button";

export enum VerticalAlignment{
    AlignStretch = "p-col-align-stretch",
    AlignStart = "p-col-align-start",
    AlignEnd = "p-col-align-end",
    AlignCenter = "p-col-align-center",
    AlignBaseline = "p-col-align-baseline",
}

export interface CellProps {
    columnWidth?: number,
    tabletWidth?: number,
    desktopWidth?: number,
    fixedWith?: boolean,
    verticalAlignment?: VerticalAlignment
    tabletOffset?: number,
    desktopOffset?: number,
    noGutter?: boolean,
    style?: object,
    className?: string
}

class Cell extends Component<CellProps>{

    render(){
        const {columnWidth, tabletWidth, desktopWidth, fixedWith, verticalAlignment, tabletOffset, desktopOffset, noGutter, style, className} = this.props;
        let cellClass = "";
        let inlineStyle = style ? style : {};
        if(fixedWith) cellClass += "p-col-fixed";
        else if(columnWidth && columnWidth > 0) cellClass+=`p-col-${columnWidth}`;
        else cellClass+="p-col";
        if(tabletWidth && tabletWidth > 0) cellClass+=` p-md-${tabletWidth}`;
        if(desktopWidth && desktopWidth > 0) cellClass+=` p-lg-${desktopWidth}`;
        if(tabletOffset && tabletOffset > 0) cellClass+=` p-md-offset-${tabletOffset}`;
        if(desktopOffset && desktopOffset > 0) cellClass+=` p-lg-offset-${tabletOffset}`;
        if(verticalAlignment) cellClass+= ` ${verticalAlignment.toString()}`;
        if(noGutter) cellClass+= " p-nogutter";
        cellClass += className ? " " + className : "";
        return <div className={cellClass} style={inlineStyle}>
            {this.props.children}
        </div>
    }
}

export default Cell