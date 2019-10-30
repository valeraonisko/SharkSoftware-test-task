import React from 'react';
import {  Row, Col, Card, CardTitle, CardImg, CardBody, CardText, CardLink } from 'reactstrap';

function ContactItem (props) {
  const { item } = props;
  const fullName = item.name;
  const userImg = item.picture.large;
  const userCity = item.location.city;
  const userEmail = item.email;
  const mailto = `mailto:${userEmail}`;


  return (

    <Col className="col-3">
      <Card>
        <CardBody>
          <CardTitle>{fullName.title + " "+ fullName.first + " " + fullName.last}</CardTitle>
          <CardImg src={userImg}/>
          <CardText>{userCity}</CardText>
          <CardLink href={mailto}>Email adress: {userEmail}</CardLink>
        </CardBody>
      </Card>
    </Col>

  );
}

export default ContactItem;
