import React, {Component} from "react";

export enum GridDirection{
    Row="", RowReversed = "p-dir-rev",
    Column = "p-dir-col", ColumnReversed = "p-dir-col-rev"
}

export enum HorizontalAlignment{
    JustifyStart= "p-justify-start",
    JustifyEnd = "p-justify-end",
    JustifyCenter = "p-justify-center",
    JustifyBetween = "p-justify-between",
    JustifyAround = "p-justify-around",
    JustifyEven = "p-justify-even"
}

export enum VerticalAlignment{
    AlignStretch = "p-align-stretch",
    AlignStart = "p-align-start",
    AlignEnd = "p-align-end",
    AlignCenter = "p-align-center",
    AlignBaseline = "p-align-baseline",
}

export interface GridProps {
    direction?: GridDirection,
    horizontalAlignment?: HorizontalAlignment,
    verticalAlignment?: VerticalAlignment,
    noGutter?: boolean,
    style?: object,
    className?: string,
}

class Grid extends Component<GridProps>{

    render(){
        const { direction, horizontalAlignment, verticalAlignment, noGutter, style, className} = this.props;
        let gridClass = "p-grid";
        let inlineStyle = style ? style : {};
        if(direction) gridClass+=` ${direction}`;
        gridClass+= ` ${ horizontalAlignment ? horizontalAlignment.toString() : HorizontalAlignment.JustifyStart.toString() }`;
        gridClass+= ` ${verticalAlignment ? verticalAlignment.toString() : VerticalAlignment.AlignStretch.toString() }`;
        if(noGutter) gridClass+= " p-nogutter";
        gridClass += className ? " " + className : "";
        return <div className={gridClass} style={inlineStyle}>
            {this.props.children}
        </div>
    }
}

export default Grid