import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Proyects from './components/Proyects/Proyects';

function App() {
  return (
    <BrowserRouter>
      <div className='main'>
        <div className='navbar'>
          <Navbar />
        </div>
        <div className='switch'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/proyects' component={Proyects} />
            <Redirect path='/' />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
