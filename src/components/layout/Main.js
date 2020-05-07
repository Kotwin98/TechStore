import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from '../pages/HomePage';
import FaqPage from '../pages/FaqPage';
import PolicyPage from '../pages/PolicyPage';
import ContactPage from '../pages/ContactPage';
import NotFoundPage from '../pages/NotFoundPage';

const Main = () => (
    <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/faq" exact component={FaqPage} />
        <Route path="/policy" exact component={PolicyPage} />
        <Route path="/contact" exact component={ContactPage} />
        <Route component={NotFoundPage} />
    </Switch>
);

export default Main;