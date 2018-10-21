import React from 'react';
import { Container, Row, Col, } from 'reactstrap';

export class PanelContainer extends React.Component {

    render () {
        const rowStyle = {
            outline: '5px dotted blue',
            height: window.innerHeight,
            width: window.innerWidth,
            padding: '10px',
        };
        const colStyle = {
            outline: '5px dotted black',
            height: '100px',
            //width: '300px',
            //margin: '20px',
        };
        const xs = "auto";
        /*
<Col xs={xs} style={colStyle}>.Col</Col>
                <Col xs={xs} style={colStyle}>.Col</Col>
                <Col xs={xs} style={colStyle}>.Col</Col>
        */

        return <Container>
            <Row style={rowStyle}>
                <Col xs={xs} style={colStyle}>.Col</Col>
                <Col xs={xs} style={colStyle}>.Col</Col>
                <Col xs={xs} style={colStyle}>.Col</Col>
            </Row>
        </Container>;
    }
}