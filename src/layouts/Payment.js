import React,{PropTypes} from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
import { connect } from 'react-redux';
import ToastNotification from 'components/Toast.js'

import routes from "routes.js";
import { ProtectedRoute } from "ProtectedRoute";

const Payment = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/payment") {
        return (
          <ProtectedRoute
            {...props}
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (
        props.location.pathname.indexOf(routes[i].layout + routes[i].path) !==
        -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };

  return (
    <>
      <div className="main-content" ref={mainContent}>
        <ToastNotification 
            {...props}
            color={props.notification.color}
            title={props.notification.title}
            text={props.notification.text}
            showToast={props.showToast}
            />
        <Switch>
          {getRoutes(routes)}
          <Redirect from="*" to="/user/index" />
        </Switch>
        <Container fluid>
          {/* <AdminFooter /> */}
        </Container>
      </div>
    </>
  );
};

function mapStateToProps(state, ownProps) {
    return {
        notification: state.notification,
        showToast: !(state.notification && Object.keys(state.notification).length === 0 && state.notification.constructor === Object)
      };
}

/* Admin.propTypes = {
  user: PropTypes.arra
}; */

export default connect(mapStateToProps)(Payment);
