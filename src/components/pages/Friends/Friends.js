import React from 'react';
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

  render() {
    const {
      friends,
    } = this.state;

    const friendItemComponents = friendsArray => (
      friendsArray.map(friend => (
        <FriendItem
          key={friend.id}
          friend={friend}
        />
      ))
    );

    return (
      <div className='Friends'>
        <h2>Your Friends</h2>
          <div className="container d-flex">
            {friendItemComponents(friends)}
          </div>
      </div>
    );
  }
}

export default Friends;
