import React from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

const Example = (props) => {
    return (
        <Form className="p-4" style={{
            margin: '0',
            padding: '0',
            color: '#E5C595',
        }} data-netlify="true" data-netlify-honeypot="bot-field">
            <h1>Request A Quote</h1>
            <Row form>
                <Col md={6}>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" id="name" placeholder="Enter your name" required/>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Enter your email" required/>
                    </FormGroup>
                </Col>
            </Row>
            <Row form>
                <Col md={6}>
                    <FormGroup>
                        <Label for="phone">Phone</Label>
                        <Input type="tel" name="phone" id="phone" placeholder="Enter your phone #" required/>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="timetocall">Best time to call?</Label>
                        <Input type="text" name="timetocall" id="timetocall" placeholder="What is the best time to call?" />
                    </FormGroup>
                </Col>
            </Row>
            <FormGroup>
                <Label for="comments">Project Details</Label>
                <Input type="textarea" placeholder="Enter project details" required/>
            </FormGroup>
            <Button className="text-dark" style={{
                background: '#E5C595',
                boxShadow: '0px 0px 10px 1px #000'
            }}>Submit</Button>
            <input type="hidden" name="form-name" value="contact" />
        </Form>
    );
}

export default Example;
