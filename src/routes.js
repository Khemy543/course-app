/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import UserInformation from "views/payment/userInformation";
import AccountDetails from "views/payment/AccountDetails";
import VerifyPayment from "views/payment/verifyPayment";
import Transactions from "views/examples/transactions";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/user",
  },
  {
    path: '/transactions',
    name: 'Transactions',
    icon: 'ni ni-briefcase-24',
    component: Transactions,
    layout: '/user'
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
  },
  {
    path:'/user-information',
    name:'User Information',
    component: UserInformation,
    layout:"/payment"
  },
  {
    path:'/account',
    name:"Account Details",
    component:AccountDetails,
    layout:"/payment"
  },
  {
    path: '/verify',
    name :'Payment',
    component :VerifyPayment,
    layout:'/payment'
  },
];
export default routes;
