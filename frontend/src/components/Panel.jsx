import React from 'react';

export class Panel extends React.Component {
    render () {
        const margin = 5;
        const colStyle = {
            outline: '5px dotted black',
            height: '100%',
            width: `33%`,
            minWidth: '200px',
            float: 'left',
            margin: `${margin}px`,
        };
        return <div style={colStyle}/>;
    };
}