import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import './Mavbar.scss';

class Mavbar extends React.Component {
  static propTypes = {
    isAuthed: PropTypes.bool,
    logoutClicky: PropTypes.func,
  }

  state = {
    isOpen: false,
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const { isAuthed, logoutClicky } = this.props;
    const buildNavbar = () => {
      if (isAuthed) {
        return (
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink tag={RRNavLink} to="/friends">Friends</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} to="/friends/new">New Friend</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} to="/holidays">Holidays</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} to="/holidays/new">New Holiday</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={logoutClicky}>Logout</NavLink>
          </NavItem>
        </Nav>
        );
      }
      return <Nav className="ml-auto" navbar />;
    };

    return (
      <div className="mavbar">
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Home For the Holidays</NavbarBrand>
          <NavbarToggler onClick={e => this.toggle(e)} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {buildNavbar()}
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Mavbar;
