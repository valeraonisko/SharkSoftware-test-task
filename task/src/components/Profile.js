import React from 'react';
import { Row, Col, Card, CardTitle, CardImg, CardBody, Button } from 'reactstrap';
import ApiItem from './ApiItem';

function Profile (props) {
  const {profile} = props;
  console.log(profile);
  if(profile === null) {
    return (
      <div>
        ...Loading Profile
      </div>
    )
  }
  const entries = Object.entries(profile);
  const propItems = entries.map(item => <ApiItem item={item} key={item[0]}/>)
  return (
  <Row className="m-4 wrapper api">
    <Col >
    <Card className="m-large">
      <CardBody>
        <CardTitle>Profile</CardTitle>
        {propItems}
      </CardBody>
    </Card>
    </Col>
    <Col>
    </Col>
  </Row>
  );
}

export default Profile;
