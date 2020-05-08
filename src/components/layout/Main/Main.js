import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from '../../pages/Home/HomePage';
import FaqPage from '../../pages/Faq/FaqPage';
import PolicyPage from '../../pages/Policy/PolicyPage';
import ContactPage from '../../pages/Contact/ContactPage';
import NotFoundPage from '../../pages/NotFound/NotFoundPage';

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