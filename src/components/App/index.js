import React from 'react';
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {
  Landing,
  Forecast
} from '../../pages';

const Wrapper = styled.div`
  background: ${props => props.theme.palette.primary.main};
  background: ${props => props.theme.palette.primary.gradient};
  min-width: 100vw;
  min-height: 100vh;
`;

function App() {
  return (
    <Wrapper>
      <Router>
        <Switch>
          <Route path="/forecast">
            <Forecast />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </Wrapper>
  );
}

export default App;