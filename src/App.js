import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
//import all the components
import TopContainer from './top-container'
import Home from './home'
import Calculator from './calculator'
import Campaigns from './campaigns';

function App() {
  return (
    <Router>
      <Container fluid className='p-0 m-0 min-vh-100 d-flex flex-column'>
        <Row noGutters className='flex-grow-0 flex-shrink-0 shadow'>
          <Col className='px-3 py-2' style={{ backgroundColor: '#fff' }}>
            <TopContainer />
          </Col>
        </Row>
        <Row noGutters className='flex-grow-1'>
          <Col md='12'>
            <Switch>
              <Route path='/calculator'>
                <Calculator />
              </Route>
              <Route path="/">
                <Home />
              </Route>
              <Route path='/campaigns'>
                <Campaigns />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;