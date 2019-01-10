import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <button className='btn btn-danger'>Bootstrap button</button>
          <Button
            tag="a"
            color="success"
            size="large"
            href="http://reactstrap.github.io"
            target="_blank"
          >
          Reactstrap button
        </Button>
      </div>
    );
  }
}

export default App;
