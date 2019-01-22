import React, { Component } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';

const emptyResource = {
  name: '',
  date: '',
  category: '',
  city: '',
  location: '',
  description: '',
  contactInformation: '',
  hostedBy: '',
};

class ResourceForm extends Component {
  state = {
    resource: emptyResource,
  };

  componentDidMount() {
    if (this.props.selectedResource !== null) {
      this.setState({
        resource: this.props.selectedResource,
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedResource !== this.props.selectedResource) {
      this.setState({
        resource: nextProps.selectedResource || emptyResource,
      });
    }
  }

  onFormSubmit = evt => {
    evt.preventDefault();
    if (this.state.resource.id) {
      this.props.updateResource(this.state.resource);
    } else {
      this.props.createResource(this.state.resource);
    }
  };

  onInputChange = evt => {
    const newResource = this.state.resource;
    newResource[evt.target.name] = evt.target.value;
    this.setState({
      resource: newResource,
    });
  };

  render() {
    const { handleCancel } = this.props;
    const { resource } = this.state;
    return (
      <Segment>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <label>Resource Name</label>
            <input
              name="name"
              onChange={this.onInputChange}
              value={resource.name}
              placeholder="Resource Name"
            />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input
              name="date"
              onChange={this.onInputChange}
              value={resource.date}
              type="date"
              placeholder="Event Date"
            />
          </Form.Field>
          <Form.Field>
            <label>Category</label>
            <input
              name="category"
              onChange={this.onInputChange}
              value={resource.category}
              placeholder="Type of Resource"
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              name="city"
              onChange={this.onInputChange}
              value={resource.city}
              placeholder="City event is located"
            />
          </Form.Field>
          <Form.Field>
            <label>Location</label>
            <input
              name="location"
              onChange={this.onInputChange}
              value={resource.location}
              placeholder="Street Address of Resource"
            />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <input
              name="description"
              onChange={this.onInputChange}
              value={resource.description}
              placeholder="Description of resource"
            />
          </Form.Field>
          <Form.Field>
            <label>Contact Information</label>
            <input
              name="contactInformation"
              onChange={this.onInputChange}
              value={resource.contactInformation}
              placeholder="Enter the contact info"
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              name="hostedBy"
              onChange={this.onInputChange}
              value={resource.hostedBy}
              placeholder="Hosted By"
            />
          </Form.Field>
          <Button color="orange" type="submit">
            Submit
          </Button>
          <Button onClick={handleCancel} color="orange" type="button">
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default ResourceForm;
