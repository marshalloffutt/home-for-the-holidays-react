import React from 'react';
import {
  Button, Form, FormGroup, Label, Input,
} from 'reactstrap';
import './NewFriend.scss';

class NewFriend extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" id="inputName" placeholder="Friend McFriendface" />
        </FormGroup>
        <FormGroup>
          <Label for="phone">Phone</Label>
          <Input type="text" name="phone" id="inputPhone" placeholder="Phone number" />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="E-mail" />
        </FormGroup>
        <FormGroup>
          <Label for="relationship">Relationship</Label>
          <Input type="text" name="relationship" id="relationshipInput" placeholder="hum aapke hain koun..!" />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Are you avoiding this person?
          </Label>
        </FormGroup>
        <Button color="primary">Submit</Button>
      </Form>
    );
  }
}

export default NewFriend;
