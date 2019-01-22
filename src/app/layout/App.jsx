import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import ResourceDashboard from '../../features/resource/ResourceDashboard/ResourceDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';
import UserDetailedPage from '../../features/user/UserDetailed/UserDetailedPage';
import ResourceDetailedPage from '../../features/resource/ResourceDetailed/ResourceDetailedPage';
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard';
import ResourceForm from '../../features/resource/ResourceForm/ResourceForm';
import HomePage from '../../features/home/HomePage';
import TestComponent from '../../features/testarea/TestComponent';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>

        <Route
          path="/(.+)"
          render={() => (
            <div>
              <NavBar />
              <Container className="main">
                <Switch>
                  <Route path="/resources" component={ResourceDashboard} />
                  <Route path="/test" component={TestComponent} />
                  <Route
                    path="/resource/:id"
                    component={ResourceDetailedPage}
                  />
                  <Route path="/people" component={PeopleDashboard} />
                  <Route path="/profile/:id" component={UserDetailedPage} />
                  <Route path="/settings" component={SettingsDashboard} />
                  <Route path="/createResource" component={ResourceForm} />
                </Switch>
              </Container>
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
