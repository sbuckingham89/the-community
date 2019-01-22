import React from 'react';
import ResourceDetailedHeader from './ResourceDetailedHeader';
import ResourceDetailedChat from './ResourceDetailedChat';
import ResourceDetailedInfo from './ResourceDetailedInfo';
import ResourceDetailedSidebar from './ResourceDetailedSidebar';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';

const mapState = (state, ownProps) => {
  const resourceID = ownProps.match.params.id;

  let resource = {};

  if (resourceID && state.resources.length > 0) {
    resource = state.resources.filter(
      resource => resource.id === resourceID
    )[0];
  }

  return {
    resource,
  };
};

const ResourceDetailedPage = ({ resource }) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <ResourceDetailedHeader resource={resource} />
        <ResourceDetailedInfo resource={resource} />
        <ResourceDetailedChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <ResourceDetailedSidebar endorsers={resource.endorsers} />
      </Grid.Column>
    </Grid>
  );
};

export default connect(mapState)(ResourceDetailedPage);
