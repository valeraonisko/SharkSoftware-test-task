import React from 'react';
import { Row, Col } from 'reactstrap';

function ApiItem (props) {
  const {item} = props;
  const key = item[0];
  let value = item[1];
  value = typeof value !== "string" ? String(value) : value;

  return (
  <Row className="grey m-4">
    <Col >
      {key}
    </Col>
    <Col>
      {value}
    </Col>
  </Row>
  );
}

export default ApiItem;
