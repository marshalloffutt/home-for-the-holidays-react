import React from 'react';
import { Button } from 'reactstrap';
import './Holidays.scss';

class Holidays extends React.Component {
  holidayDetailsView = (e) => {
    const holidayId = e.target.id;
    this.props.history.push(`/holidays/${holidayId}`);
  }

  render() {
    return (
      <div className='Holidays'>
        <h3>Holidays</h3>
        <Button className="btn btn-danger mt-5" id="12345" onClick={this.holidayDetailsView}>Go to Holiday Deets</Button>
      </div>
    );
  }
}

export default Holidays;
