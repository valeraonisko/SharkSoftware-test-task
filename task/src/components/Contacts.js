import React from 'react';
import { Row, Col, Card, CardTitle, CardImg, CardBody } from 'reactstrap';
import ContactItem from './ContactItem';

function Contacts (props) {
  const { contactsList } = props;
  console.log(contactsList);
  const rowContactsList = [];
  for (let i = 0; i< contactsList.length; i+=4) {
    const sliceList = contactsList.slice(i, i+4).map(item => <ContactItem item={item} key={item.id.value}/>);
    rowContactsList.push((<Row>{sliceList}</Row>));
  }

  // const contactItems = contactsList.map(item => <ContactItem item={item} key={item.id.value}/>);

  return (
    <>
    {rowContactsList}
    </>
  );
}

export default Contacts;
