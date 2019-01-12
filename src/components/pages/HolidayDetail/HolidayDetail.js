import React from 'react';
import { Button } from 'reactstrap';
import './HolidayDetail.scss';

class HolidayDetail extends React.Component {
  editHolidayView = (e) => {
    const holidayId = e.target.id;
    this.props.history.push(`/holidays/${holidayId}/edit`);
  }

  holidayFriendsView = (e) => {
    const holidayFriendId = e.target.id;
    this.props.history.push(`/holidays/${holidayFriendId}/friends`);
  }

  render() {
    return (
      <div className='HolidayDetail'>
        <h2>HolidayDetail Component</h2>
          <Button className="btn btn-danger mt-5" id="12345" onClick={this.editHolidayView}>This is the edit holiday button</Button>
          <Button className="btn btn-danger mt-5" id="1245" onClick={this.editHolidayView}>This is Holiday Friends</Button>
      </div>
    );
  }
}

export default HolidayDetail;
