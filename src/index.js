import React from "react";
import ReactDOM from "react-dom";
import { MyContexProvider } from './context.js';

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

ReactDOM.render(
  <MyContexProvider>
    <BrowserRouter>
        <Switch>
        <Route path="/user" render={(props) => <AdminLayout {...props} />} />
        <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
        <AuthRedirection path="/" component={LandingPage} />{/* 
        <Redirect from="/" to="/admin/index" /> */}
        </Switch>
    </BrowserRouter>
  </MyContexProvider>,
  document.getElementById("root")
);
