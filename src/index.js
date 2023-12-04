import React from "react";
import ReactDOM from "react-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';
import { AuthRedirection } from "ProtectedRoute.js";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import LandingPage from "views/LandingPage";

import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { getuserData } from "actions/userActions";
import CourseDetails from "views/examples/CourseDetails";
import Payment from "layouts/Payment";
import Training from "views/examples/Training";
import SeniorLevel from "views/examples/SeniorLevelProgram";
import SrollToTop from "react-router-scroll-top";
import Consultancy from "views/examples/Consutancy";
import ConsultancyDetails from "views/examples/ConsultancyDetails";
import Profile from "views/examples/Profile";
import OverseasTrainingCalendar from "views/examples/OverseasTrainingCalendar";


const store =  configureStore();

if(localStorage.getItem('AuthToken')){
  store.dispatch(getuserData);
}



ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <SrollToTop />
        <Switch>
        <Route path="/user" render={(props) => <AdminLayout {...props} />} />
        <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
        <AuthRedirection exact path="/" component={LandingPage} />
        <Route path="/payment" render={(props) => <Payment {...props} />} />
        <AuthRedirection exact path="/course/:title/:id/:type/details" component={CourseDetails} />
        <AuthRedirection exact path="/course/:title/:id/:type/consultancy-details" component={ConsultancyDetails} />
        <AuthRedirection exact path="/training-offerings" component={Training} />
        <AuthRedirection exact path="/senior-level-public-leadership" component={SeniorLevel} />
        <AuthRedirection exact path="/consultancy" component={Consultancy} />
        <AuthRedirection exact path="/facilitator/:name/profile" component={Profile} />
        <AuthRedirection exact path="/overseas-training-calendar" component={OverseasTrainingCalendar} />
        </Switch>
    </BrowserRouter>
    </Provider>,
  document.getElementById("root")
);
