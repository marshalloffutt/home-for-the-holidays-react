import React from 'react';
import {
  Card, Button, CardTitle, CardText, Col,
} from 'reactstrap';
import './FriendItem.scss';

class FriendItem extends React.Component {
  render() {
    const { friend } = this.props;
    return (
      <Col>
        <Card body>
          <CardTitle><h3>{friend.name}</h3></CardTitle>
          <CardText>{friend.phoneNumber}</CardText>
          <CardText>{friend.email}</CardText>
          <CardText>{friend.relationship}</CardText>
          <Button>Edit</Button>
        </Card>
      </Col>
    );
  }
}

export default FriendItem;
