import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import ResourceList from '../ResourceList/ResourceList';
import ResourceForm from '../ResourceForm/ResourceForm';
import cuid from 'cuid';
import { connect } from 'react-redux';
import {
  createResource,
  deleteResource,
  updateResource,
} from '../resourceActions';

const mapState = state => ({
  resources: state.resources,
});

const actions = {
  createResource,
  deleteResource,
  updateResource,
};

class ResourceDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      selectedResource: null,
    };
  }

  handleEditResource = resourceToUpdate => () => {
    this.setState({
      selectedResource: resourceToUpdate,
      isOpen: true,
    });
  };

  handleUpdateResource = updatedResource => {
    this.props.updateResource(updatedResource);
    this.setState({
      isOpen: false,
      selectedResource: null,
    });
  };

  handleDeleteResource = resourceID => () => {
    this.props.deleteResource(resourceID);
  };

  handleFormOpen = () => {
    this.setState({
      selectedResource: null,
      isOpen: true,
    });
  };

  handleCancel = () => {
    this.setState({
      isOpen: false,
    });
  };

  handleCreateResource = newResource => {
    newResource.id = cuid();
    newResource.resourcePhotoURL = '/assets/user.png';
    this.props.createResource(newResource);
    this.setState({
      isOpen: false,
    });
  };

  render() {
    const { selectedResource } = this.state;
    const { resources } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <ResourceList
            deleteResource={this.handleDeleteResource}
            onResourceEdit={this.handleEditResource}
            resources={resources}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            onClick={this.handleFormOpen}
            content="Create Resource"
            color="orange"
          />
          {this.state.isOpen && (
            <ResourceForm
              updateResource={this.handleUpdateResource}
              selectedResource={selectedResource}
              createResource={this.handleCreateResource}
              handleCancel={this.handleCancel}
            />
          )}
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(
  mapState,
  actions
)(ResourceDashboard);
