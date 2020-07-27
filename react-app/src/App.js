import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Garage from './Garage';
import Clock from './Clock';
import Initial from './Initial';

class App extends Component {
    render() {
        return(
            <BrowserRouter>
              <Container>
                <Switch>
                  <Route exact path="/garage">
                    <Garage/>
                  </Route>
                 <Route exact path="/clock">
                   <Clock/>
                 </Route>
                 <Route exact path="/">
                   <Initial/>
                 </Route>
                </Switch>
              </Container>
            </BrowserRouter>
        )
    }
}

export default App;
