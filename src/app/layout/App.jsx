import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import ResourceDashboard from '../../features/resource/ResourceDashboard/ResourceDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container className="main">
          <ResourceDashboard />
        </Container>
      </div>
    );
  }
}

export default App;
