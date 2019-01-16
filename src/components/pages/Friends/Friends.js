import React from 'react';
import { Row } from 'reactstrap';
import authRequests from '../../../helpers/data/authRequests';
import friendRequests from '../../../helpers/data/friendRequests';
import FriendItem from '../../FriendItem/FriendItem';
import './Friends.scss';

class Friends extends React.Component {
  state = {
    friends: [],
  }

  componentDidMount() {
    this.getAndDisplayFriends();
  }

  getAndDisplayFriends = () => {
    const uid = authRequests.getCurrentUid();
    friendRequests
      .getAllFriends(uid)
      .then((results) => {
        const friends = results;
        this.setState({
          friends,
        });
      })
      .catch(err => console.error('error in getting friends', err));
  }

  editFriendView = (e) => {
    const friendId = e.target.id;
    this.props.history.push(`/friends/${friendId}/edit`);
  }

  deleteFriend = (friendId) => {
    friendRequests.deleteFriendAxios(friendId)
      .then(() => {
        this.getAndDisplayFriends();
      })
      .catch(err => console.error('error in deleting friend', err));
  }

  render() {
    const {
      friends,
    } = this.state;

    const friendItemComponents = friendsArray => (
      friendsArray.map(friend => (
        <FriendItem
          key={friend.id}
          friend={friend}
          deleteFriend={this.deleteFriend}
        />
      ))
    );

    return (
      <div className="mx-auto">
        <h2 className="text-center">Your Friends</h2>
            <Row className="justify-content-center">
              {friendItemComponents(friends)}
            </Row>
      </div>
    );
  }
}

export default Friends;
