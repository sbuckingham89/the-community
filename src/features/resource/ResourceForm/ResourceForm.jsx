import React, { Component } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';



class ResourceForm extends Component {
  render() {
    return (
      <Segment>
        <Form>
          <Form.Field>
            <label>Resource Title</label>
            <input placeholder="Resource Name" />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input type="date" placeholder="Event Date" />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input placeholder="City event is located" />
          </Form.Field>
          <Form.Field>
            <label>Type</label>
            <input placeholder="Type of resource" />
          </Form.Field>
          <Form.Field>
            <label>Contact Information</label>
            <input placeholder="Enter the contact info" />
          </Form.Field>
          <Button color="orange" type="submit">
            Submit
          </Button>
          <Button color="orange" type="button">
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default ResourceForm;
