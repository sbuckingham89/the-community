import React, { Component } from 'react';
import { Menu, Button, Container } from 'semantic-ui-react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import SignedOutMenu from '../Menus/SignedOutMenu';
import SignedInMenu from '../Menus/SignedInMenu';

class NavBar extends Component {
  state = {
    authenticated: false,
  };

  handleSignIn = () => {
    this.setState({
      authenticated: true,
    });
  };

  handleSignOut = () => {
    this.setState({
      authenticated: false,
    });
    this.props.history.push('/');
  };

  render() {
    const { authenticated } = this.state;
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={Link} to="./" header>
            <img src="/assets/connection.png" alt="logo" />
            The Community
          </Menu.Item>
          <Menu.Item as={NavLink} to="/resources" name="Resources" />
          {authenticated && (
            <Menu.Item as={NavLink} to="/people" name="People" />
          )}

          {authenticated && (
            <Menu.Item>
              <Button
                as={Link}
                to="/createResource"
                color="orange"
                floated="right"
                inverted
                content="Create Resource"
              />
            </Menu.Item>
          )}
          {authenticated ? (
            <SignedInMenu signOut={this.handleSignOut} />
          ) : (
            <SignedOutMenu signIn={this.handleSignIn} />
          )}
        </Container>
      </Menu>
    );
  }
}

export default withRouter(NavBar);
