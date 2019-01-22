import React, { Component } from 'react';
import ResourceListItem from './ResourceListItem';

class ResourceList extends Component {
  render() {
    const { resources, onResourceEdit, deleteResource } = this.props;
    return (
      <div>
        <h1>Resource List</h1>
        {resources.map(resource => (
          <ResourceListItem
            deleteResource={deleteResource}
            key={resource.id}
            resource={resource}
            onResourceEdit={onResourceEdit}
          />
        ))}
      </div>
    );
  }
}

export default ResourceList;
