import React from 'react';
import { Panel } from './Panel';
import { PanelDivider } from './PanelDivider';

export class PanelContainer extends React.Component {

    /*
    Goal: Create a Panels with adjustable width.
    How:
        <div>
            <Panel/>
            <PanelDivider/>
            <Panel/>
        </div>

    Panel Num: X
    Divider Width: Y
    Initial Panel width: (window.innerWidth - X * Y) / X

    The PanelContainer handles the width of each child Panel. When a new Panel is added to the PanelContainer each Panel is reinitialized to equal width. The PanelDivider is responsible for updating the width of its neighboring Panels.


     */

    render () {
        const rowStyle = {
            outline: '5px dotted blue',
            height: window.innerHeight,
            width: window.innerWidth,
        };
        return <div style={rowStyle}>
            <Panel/>
            <Panel/>
            <Panel/>
        </div>
    }
}