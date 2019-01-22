import React, { Component } from 'react';
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
import ResourceListEndorsement from './ResourceListEndorsement';

class ResourceListItem extends Component {
  render() {
    const { resource } = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image
                size="tiny"
                circular
                src={resource.resourcePhotoURL}
              />
              <Item.Content>
                <Item.Header as="a">{resource.name} </Item.Header>
                <p>
                  <Item.Header as="a">{resource.category}</Item.Header>
                </p>
                <Item.Description>
                  Hosted by <a>{resource.hostedBy}</a>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" /> {resource.date} |
            <Icon name="marker" /> {resource.location}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {resource.endorsers && resource.endorsers.map(endorser => (
              <ResourceListEndorsement key={endorser.id} endorser={endorser} />
            ))}
          </List>
        </Segment>
        <Segment clearing>
          <span>{resource.description}</span>
          <Button as="a" color="orange" floated="right" content="View" />
        </Segment>
      </Segment.Group>
    );
  }
}

export default ResourceListItem;
