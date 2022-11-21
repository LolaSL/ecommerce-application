import React from 'react';
import Alert from 'react-bootstrap/Alert';

const Message = () => {
  return (
    <Alert variant={props.variant  || 'info'}>
    <span className="visually-hidden">Loading...</span>
    </Alert>
  )
}

export default Message
