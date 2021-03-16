import React, { Component } from 'react';
import { evaluate } from "mathjs";
import Button from './Button';
import Display from './Display';
import Keypad from './Keypad';
import '../App.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Calculator extends Component {
    cd
    constructor() {
        super();
        this.state = { data: '' }
    }

    calculate = () => {
        try {
            const result = evaluate(this.state.data);
            this.setState({ data: result });
        } catch (e) {
            this.setState({ data: 'error' })
        }
    }

    handleClick = e => {
        const value = e.target.getAttribute('data-value');
        switch (value) {
            case 'clear':
                this.setState({ data:''});
                break;
            case 'equal':
                this.calculate();
                break;
            default:
                this.setState({ data: this.state.data + value });
        }
    }
    render() {
        return (
            <Container className="Calculator">
                <Row>
                    <Col>
                        <Display data={this.state.data} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                         <Button onClick={this.handleClick} size="2" label="C" value="clear" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Keypad>
                            <Button onClick={this.handleClick} label="7" value="7" />
                            <Button onClick={this.handleClick} label="8" value="8" />
                            <Button onClick={this.handleClick} label="9" value="9" />
                            <Button onClick={this.handleClick} label="4" value="4" />
                            <Button onClick={this.handleClick} label="5" value="5" />
                            <Button onClick={this.handleClick} label="6" value="6" />
                            <Button onClick={this.handleClick} label="1" value="1" />
                            <Button onClick={this.handleClick} label="2" value="2" />
                            <Button onClick={this.handleClick} label="3" value="3" />
                            <Button value="null"/>
                            <Button onClick={this.handleClick} label="0" value="0" />
                            <Button onClick={this.handleClick} label="." value="." />
                        </Keypad>
                    </Col>
                    <Col className="oper">
                        <Button onClick={this.handleClick} label="/" value="/" />
                        <Button onClick={this.handleClick} label="x" value="*" />
                        <Button onClick={this.handleClick} label="-" value="-" />
                        <Button onClick={this.handleClick} label="+" value="+" />
                    </Col>
                </Row>
                <Row>
                    <Col className="footer">
                        <Button onClick={this.handleClick} size="2" label="=" value="equal" />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Calculator;