import React from 'react';
import { Row, Col, Card, CardTitle, CardBody,
  Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Login = (props) => {
    return (
      <Row className="mt-4">
        <Col sm="3"/>
        <Col sm="6">
        <Card>
        <CardBody>
          <CardTitle>Login form</CardTitle>
      <Form>
        <FormGroup>
          <Label for="login">Login</Label>
        <Input type="text"
          id="login" value={props.login}
          onChange={(event) => props.updateLogin(event.target.value)}
          placeholder="Login" />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
        <Input type="password"
          id="password"
          value={props.password}
          onChange={(event) => props.updatePassword(event.target.value)}
          placeholder="Password" />
        </FormGroup>
        <Button color="secondary" size="lg" className="float-left" disabled>Login</Button>{' '}
        <Button onClick={props.loginFacebook}
        color="primary" size="lg" className="float-right" active>Login with Facebook account</Button>
      </Form>
    </CardBody>
    </Card>
    </Col>
    </Row>
    );
};

export default Login;
