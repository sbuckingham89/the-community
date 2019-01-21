import React, { Component } from 'react';
import ResourceListItem from './ResourceListItem';

class ResourceList extends Component {
  render() {
    const { resources } = this.props;
    return (
      <div>
        <h1>Resource List</h1>
        {resources.map(resource => (
          <ResourceListItem key={resource.id} resource={resource} />
        ))}
      </div>
    );
  }
}

export default ResourceList;
