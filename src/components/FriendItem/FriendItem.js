import React from 'react';
import {
  Card, Button, CardTitle, CardText, Col,
} from 'reactstrap';
import './FriendItem.scss';

class FriendItem extends React.Component {
  deleteFriendEvent = (e) => {
    e.preventDefault();
    const friendId = e.target.id;
    const { deleteFriend } = this.props;
    deleteFriend(friendId);
  }

  render() {
    const { friend } = this.props;
    return (
      <Col>
        <Card body>
          <CardTitle><h3>{friend.name}</h3></CardTitle>
          <CardText>{friend.phoneNumber}</CardText>
          <CardText>{friend.email}</CardText>
          <CardText>{friend.relationship}</CardText>
          <div className="buttons">
            <Button color="danger" id={friend.id} onClick={this.deleteFriendEvent}>Delete</Button>
          </div>
        </Card>
      </Col>
    );
  }
}

export default FriendItem;
