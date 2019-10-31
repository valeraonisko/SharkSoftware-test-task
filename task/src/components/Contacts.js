import React from 'react';
import { Row, } from 'reactstrap';
import ContactItem from './ContactItem';

function Contacts (props) {
  const { contactsList } = props;
  const rowContactsList = [];
  for (let i = 0; i< contactsList.length; i+=4) {
    const sliceList = contactsList.slice(i, i+4).map(item => <ContactItem item={item} key={item.id.value}/>);
    rowContactsList.push((<Row key={contactsList[2].email}>{sliceList}</Row>));
  }

  return (
    <>
    {rowContactsList}
    </>
  );
}

export default Contacts;
