import React from 'react';
// import App from './App';
import Home from './components/Home/Home.js';
import {
  Switch,
  Route
} from 'react-router-dom';
import Gallery from './components/Gallery/Gallery';
import ContactUs from './components/Contact Us/ContactUs';

const RouterWebSite = () => {
  return (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/ContactUs" component={ContactUs} />
        </Switch>
  );
};

export default RouterWebSite;
