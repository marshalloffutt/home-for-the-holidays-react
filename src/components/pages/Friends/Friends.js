import React from 'react';
import { Button } from 'reactstrap';
import './Friends.scss';

class Friends extends React.Component {
  changeView = (e) => {
    const friendId = e.target.id;
    this.props.history.push(`/friends/${friendId}/edit`);
  }

  render() {
    return (
      <div className='Friends'>
        <h2>Friends Component</h2>
          <Button className="btn btn-danger mt-5" id="12345" onClick={this.changeView}>This is the edit friend button</Button>
      </div>
    );
  }
}

export default Friends;
