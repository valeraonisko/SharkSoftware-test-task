import React from 'react';
import { Row, Col, Card, CardHeader, CardTitle, CardBody } from 'reactstrap';
import ApiItem from './ApiItem';
import './styles/ApiInfo.css';

function ApiInfo (props) {
  const {apiInfo} = props;
  if(apiInfo === null) {
    return (
      <div>
        ...Loading Api Info
      </div>
    )
  }
  const entries = Object.entries(apiInfo);
  const propItems = entries.map(item => <ApiItem item={item} key={item[0]}/>)
  return (
  <Row className="m-4 wrapper api">
    <Col >
    <Card className="m-large">
    <CardHeader className="card-size">
      <CardTitle className="center">API info</CardTitle>
    </CardHeader>
      <CardBody className="card-size">
        {propItems}
      </CardBody>
    </Card>
    </Col>
    <Col>
    </Col>
  </Row>
  );
}

export default ApiInfo;
