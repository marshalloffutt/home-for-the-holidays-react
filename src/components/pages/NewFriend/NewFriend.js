import React from 'react';
import PropTypes from 'prop-types';
import './NewFriend.scss';

const defaultFriend = {
  name: '',
  phoneNumber: '',
  email: '',
  relationship: '',
  isAvoiding: false,
  uid: '',
};

class NewFriend extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  }

  state = {
    newFriend: defaultFriend,
  }

  render() {
    const { newFriend } = this.state;
    return (
      <div className="friend-form col">
        <h2>New Friend</h2>
        <form onSubmit={this.formSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="nameHelp"
              placeholder="Booger McBoogerface"
              value={newFriend.name}
              onChange={this.nameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="text"
              className="form-control"
              id="phoneNumber"
              aria-describedby="phoneNumberHelp"
              placeholder="Phone number"
              value={newFriend.phoneNumber}
              onChange={this.phoneNumberChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="E-mail address"
              value={newFriend.email}
              onChange={this.emailChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="relationship">Relationship:</label>
            <input
              type="text"
              className="form-control"
              id="relationship"
              aria-describedby="relationshipHelp"
              placeholder="Hum Aapke Hain Koun..!"
              value={newFriend.relationship}
              onChange={this.relationshipChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="isAvoiding">Are you avoiding this person?</label>
            <input
              type="checkbox"
              className="form-check-input"
              id="isAvoiding"
              aria-describedby="isAvoidingHelp"
              value={newFriend.isAvoiding}
              onChange={this.isAvoidingChange}
            />
          </div>
          <button className="btn btn-primary">Save Friend</button>
        </form>
      </div>
    );
  }
}

export default NewFriend;
