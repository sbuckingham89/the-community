import React, { Component } from 'react';
import { List, Image } from 'semantic-ui-react';

class ResourceListEndorsement extends Component {
  render() {
    const { endorser } = this.props;
    return (
      <List.Item>
        <Image as="a" size="mini" circular src={endorser.photoURL} />
      </List.Item>
    );
  }
}
export default ResourceListEndorsement;
