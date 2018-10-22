import React from 'react';

export class PanelDivider extends React.Component {

    /*
    Goal: Divider used for adjusting the width of neighboring

    How: Onmousedown find the x position of the divider. Poll the arrow while onmousedown. There will be two cases to consider:
        1. If x is positive (mouse moving to right) then (a) add the x value to the width of the component to the left and (b) subtract the x value of the component to the right
        2. If x is negative then invert 1

       The updated value is bounded by the minwidth of the Panel component
     */

    render () {
        const dividerStyle = {
            backgroundColor: 'blue',
            width: '5px',
            cursor: 'pointer',
            height: '100%'
        };

        return <div style={dividerStyle}/>;
    }
}