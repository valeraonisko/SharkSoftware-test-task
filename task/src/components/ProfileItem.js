import React from 'react';
import {  Col, Card, CardTitle, CardImg, CardBody, CardText, CardLink } from 'reactstrap';

function ProfileItem (props) {
  const { item } = props;
  console.log(item);
  const fullName = item.name;

  const userImg = item.picture.large;
  const userCity = item.location.city;
  const userEmail = item.email;
  const mailto = `mailto:${userEmail}`;


  return (

    <Col className="col-3">
      <Card className="m-top m-large">
        <CardBody className="card-size">
          <CardTitle className="center">{fullName.title + " "+ fullName.first + " " + fullName.last}</CardTitle>
          <CardImg className="contactImg" src={userImg}/>
          <CardText>{userCity}</CardText>
          <CardLink href={mailto}>Email adress: {userEmail}</CardLink>
        </CardBody>
      </Card>
    </Col>

  );
}

export default ProfileItem;
