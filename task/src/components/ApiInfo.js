import React from 'react';
import { Row, Col, Card, CardTitle, CardBody } from 'reactstrap';
import ApiItem from './ApiItem';
import './styles/ApiInfo.css';

function ApiInfo (props) {
  const {apiInfo} = props;
  console.log(apiInfo);
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
      <CardBody>
        <CardTitle>API info</CardTitle>
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
