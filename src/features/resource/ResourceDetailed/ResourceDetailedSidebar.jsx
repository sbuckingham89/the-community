import React from 'react';
import { Segment, List, Item, Label } from 'semantic-ui-react';

const ResourceDetailedSidebar = ({ endorsers }) => {
  const isHost = false;
  return (
    <div>
      <Segment
        textAlign="center"
        style={{ border: 'none' }}
        attached="top"
        secondary
        inverted
        color="blue"
      >
        {endorsers && endorsers.length}{' '}
        {endorsers && endorsers.length === 1 ? 'Person' : 'People'} have
        endorsed this resource!
      </Segment>
      <Segment attached>
        <List relaxed divided>
          {endorsers &&
            endorsers.map(endorser => (
              <Item style={{ position: 'relative' }}>
                <Label
                  style={{ position: 'absolute' }}
                  color="orange"
                  ribbon="right"
                >
                  Members
                </Label>
                <Item.Image size="tiny" src={endorser.photoURL} />
                <Item.Content verticalAlign="middle">
                  <Item.Header as="h3">
                    <a>{endorser.name}</a>
                  </Item.Header>
                </Item.Content>
              </Item>
            ))}
        </List>
      </Segment>
    </div>
  );
};

export default ResourceDetailedSidebar;
