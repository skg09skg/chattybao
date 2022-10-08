import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import NewHome from '../pages/newhome';
import PrivacyPlicy from '../pages/privacypolicy';
import UserAgreement from '../pages/useragreement';
import ContactUs from '../pages/contactus';
import Parallax from '../pages/parallax';


const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Switch location={location} key={location.pathname}>
        <Route exact path='/' component={NewHome} />
        <Route exact path='/privacy-policy' component={PrivacyPlicy} />
        <Route exact path='/user-agreement' component={UserAgreement} />
        <Route exact path='/contact-us' component={ContactUs} />
        <Route exact path='/parallax' component={Parallax} />
      </Switch>
    </AnimatePresence>
  )
}

export default AnimatedRoutes;