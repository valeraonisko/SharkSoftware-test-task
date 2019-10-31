import React from 'react';
import { Row, Col, Card, CardHeader, CardTitle, CardSubtitle,
  CardImg, CardLink, CardBody } from 'reactstrap';

function Profile (props) {
  const {profile} = props;
  if(profile === null) {
    return (
      <div>
        ...Loading Profile
      </div>
    )
  }
  const entries = Object.entries(profile);
  const fullName = entries[1][1];
  const userGender = `${entries[0][0]} : ${entries[0][1]}`;
  const userNat = `${entries[11][0]} : ${entries[11][1]}`;
  const userPhone = `${entries[7][0]} : ${entries[7][1]}`;
  const userCell = `${entries[8][0]} : ${entries[8][1]}`;
  const userImg = entries[10][1].large;
  const userEmail = entries[3][1];
  const mailto = `mailto:${userEmail}`;
  const userId = `name: ${entries[9][1].name}, value: ${entries[9][1].value}`;
  const userRegistered = `age: ${entries[6][1].age}, date: ${entries[6][1].date}`;
  const userDob = `age: ${entries[5][1].age}, date: ${entries[5][1].date}`;
  const userLogin = (Object.entries(entries[4][1])).map(entry => {

    return (
      <Row key={entry[1]}>
        <Col className="col-4">{entry[0]}:</Col>
        <Col className="col-8">{entry[1]}</Col>

      </Row>
    )
  });
  const userLocation = Object.entries(entries[2][1]);
  const fullLocation = [["street name", userLocation[0][1].name],
              ["number", userLocation[0][1].number],
              ["city", userLocation[1][1]],
              ["state", userLocation[2][1]],
              ["country", userLocation[3][1]],
              ["postcode", userLocation[4][1]],
              ["coordinates-latitude", userLocation[5][1].latitude],
              ["coordinates-longitude", userLocation[5][1].longitude],
              ["timezone-description", userLocation[6][1].description],
              ["timezone-offset", userLocation[6][1].offset]];
  const compliteUserLocation = fullLocation.map(entry => {
    return (
      <Row key={entry[1]}>
        <Col className="col-4">{entry[0]}:</Col>
        <Col className="col-8">{entry[1]}</Col>

      </Row>
    )
  })

  return (
  <Row className="m-4 wrapper api">
    <Col className="col-2"></Col>
    <Col className="col-8">
      <Card>
        <CardHeader className="card-size">
          <CardTitle className="center">Profile of {fullName.title + " "+ fullName.first + " " + fullName.last}</CardTitle>
        </CardHeader>
        <CardBody className="card-size">
          <Row className="text-center w-100">
            <CardImg className="contactImg profile-img" src={userImg}/>
          </Row>
          <Row className="grey m-top m-3"><Col>{userGender}</Col></Row>
          <Row className="grey m-top m-3"><Col>{userNat}</Col></Row>
          <Row className="grey m-top m-3"><Col>{userPhone}</Col></Row>
          <Row className="grey m-top m-3"><Col>{userCell}</Col></Row>
          <CardSubtitle className="center">ID</CardSubtitle>
          <Row className="grey m-top m-3"><Col>{userId}</Col></Row>
          <CardSubtitle className="center">Registered</CardSubtitle>
          <Row className="grey m-top m-3"><Col>{userRegistered}</Col></Row>
          <CardSubtitle className="center">Dob</CardSubtitle>
          <Row className="grey m-top m-3"><Col>{userDob}</Col></Row>
          <CardSubtitle className="center">Login</CardSubtitle>
          <Row className="grey m-top m-3"><Col>{userLogin}</Col></Row>
          <CardSubtitle className="center">Location</CardSubtitle>
          <Row className="grey m-top m-3"><Col>{compliteUserLocation}</Col></Row>
          <CardLink  href={mailto} className="m-3">Email adress: {userEmail}</CardLink>
        </CardBody>
      </Card>
    </Col>
    <Col className="col-2"></Col>
  </Row>
  );
}

export default Profile;
