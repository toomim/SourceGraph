import React from 'react';
import { WritingPanel } from "./WritingPanel";

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

    When a PanelDivider is selected (onmousedown) a PanelContainer method will be triggered that continually polls the x value of the divider. That x value will need to impact the width of the two surrounding panels.


    What data should be passed in for the panels?
    Reading: Text
    Writing: Text

    How to adjust the number of panels? How to keep track of the data being passed in?
     */
    constructor(props) {
      super(props);
      this.state = {};
      this.state.tabCount = 1;
      this.state.dividerCount = 0;
    }

    recalculateDivider() {

    }

    pollWidth(name, e) {

    }

    addTab() {

    }

    removeTab() {

    }

    addDivider() {

    }

    removeDivider() {

    }

    render () {
        const rowStyle = {
            outline: '5px dotted blue',
            height: window.innerHeight,
            width: window.innerWidth,
        };
        return <div style={rowStyle}>
          <WritingPanel/>
        </div>
    }
}