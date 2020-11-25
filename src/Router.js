import React from 'react';
// import App from './App';
import {
  Switch,
  Route
} from 'react-router-dom';
import Home from './components/Home/Home.js';
import Gallery from './components/Gallery/Gallery';
import Ham from './components/Ham/Ham';
import ContactUs from './components/Contact Us/ContactUs.js';
// import MemberCards from './components/MemberCards/MemberCards.js';

const RouterWebSite = () => {
  return (
    <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/gallery" component={Gallery} />
    <Route path="/ham" component={Ham} />
    <Route path="/contact" component={ContactUs} />
    {/* <Route path="/aboutus" component={MemberCards} /> */}
  </Switch>
  );
};

export default RouterWebSite;
