import React, { Component } from 'react';
import { Menu, Button, Container } from 'semantic-ui-react';

class NavBar extends Component {
  render() {
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item header>
            <img src="/assets/connection.png" alt="logo" />
            The Community
          </Menu.Item>
          <Menu.Item name="Resources" />
          <Menu.Item>
            <Button
              color="orange"
              floated="right"
              inverted
              content="Create Resource"
            />
          </Menu.Item>
          <Menu.Item position="right">
            <Button color="orange" inverted content="Login" />
            <Button
              color="orange"
              inverted
              content="Sign Out"
              style={{ marginLeft: '0.5em' }}
            />
          </Menu.Item>
        </Container>
      </Menu>
    );
  }
}

export default NavBar;
