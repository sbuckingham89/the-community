import React from 'react';
import { Segment, Comment, Form, Button, Header } from 'semantic-ui-react';

const ResourceDetailedChat = () => {
  return (
    <div>
      <Segment
        textAlign="center"
        attached="top"
        inverted
        color="orange"
        style={{ border: 'none' }}
      >
        <Header>Write a review about this resource</Header>
      </Segment>

      <Segment attached>
        <Comment.Group>
          <Comment>
            <Comment.Avatar src="/assets/user.png" />
            <Comment.Content>
              <Comment.Author as="a">Matt</Comment.Author>
              <Comment.Metadata>
                <div>Today at 5:42PM</div>
              </Comment.Metadata>
              <Comment.Text>
                I highly recommend this resource. They taught me amazing CBT
                skills!
              </Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>

          <Comment>
            <Comment.Avatar src="/assets/user.png" />
            <Comment.Content>
              <Comment.Author as="a">Elliot Fu</Comment.Author>
              <Comment.Metadata>
                <div>Yesterday at 12:30AM</div>
              </Comment.Metadata>
              <Comment.Text>
                <p>James was really welcoming and did not judge me!</p>
              </Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
            <Comment.Group>
              <Comment>
                <Comment.Avatar src="/assets/user.png" />
                <Comment.Content>
                  <Comment.Author as="a">Jenny Hess</Comment.Author>
                  <Comment.Metadata>
                    <div>Just now</div>
                  </Comment.Metadata>
                  <Comment.Text>
                    James was the best counselor, no doubt! :)
                  </Comment.Text>
                  <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>
            </Comment.Group>
          </Comment>

          <Comment>
            <Comment.Avatar src="/assets/user.png" />
            <Comment.Content>
              <Comment.Author as="a">Joe Henderson</Comment.Author>
              <Comment.Metadata>
                <div>5 days ago</div>
              </Comment.Metadata>
              <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>

          <Form reply>
            <Form.TextArea />
            <Button
              content="Add Reply"
              labelPosition="left"
              icon="edit"
              primary
            />
          </Form>
        </Comment.Group>
      </Segment>
    </div>
  );
};

export default ResourceDetailedChat;
