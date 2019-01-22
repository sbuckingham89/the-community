import React from 'react';
import { Segment, Image, Header, Button, Item } from 'semantic-ui-react';

const eventImageStyle = {
  filter: 'brightness(30%)',
};

const eventImageTextStyle = {
  position: 'absolute',
  bottom: '5%',
  left: '5%',
  width: '100%',
  height: 'auto',
  color: 'white',
};

const ResourceDetailedHeader = ({ resource }) => {
  return (
    <Segment.Group>
      <Segment basic attached="top" style={{ padding: '0' }}>
        <Image src="/assets/travel.jpg" fluid style={eventImageStyle} />

        <Segment basic style={eventImageTextStyle}>
          <Item.Group>
            <Item>
              <Item.Content>
                <Header
                  size="huge"
                  content={resource.name}
                  style={{ color: 'white' }}
                />
                <p>{resource.date}</p>
                <p>
                  Hosted by <strong>{resource.hostedBy}</strong>
                </p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>

      <Segment attached="bottom">
        <Button color="orange">FOLLOW THIS RESOURCE</Button>

        <Button color="orange" floated="right">
          Endorse Resource
        </Button>
      </Segment>
    </Segment.Group>
  );
};

export default ResourceDetailedHeader;
