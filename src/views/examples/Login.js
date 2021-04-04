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
import React,{useState, useEffect} from "react";

// reactstrap components
import {
  Button,
  Card,
  Row,
  CardBody,
  FormGroup,
  Form,
  Input,
  Spinner,
  Col,
  FormFeedback
} from "reactstrap";
import API from '../../api.js';
import { addNotification } from '../../actions/indexActions.js'

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({});
  const [isActive, setIsActive] = useState(false)

useEffect(()=>{
  console.log(props.location.state.from)
},)
  const handleSubmit=(e)=>{
    e.preventDefault();
    setIsActive(true)
    API.post('auth/login',{
      email, password
    })
    .then(response=>{
      localStorage.setItem('AuthToken',response.data.access_token);
        if(!props.location.state.from){
          window.location.href=`https://course-online-app.herokuapp.com${props.location.state.from}`;
        }
        else{
          window.location.href='https://course-online-app.herokuapp.com/';
        }
      
      /* window.location.reload("/"); */
    })
    .catch(error=>{
      if(error.response && error.response.status == 401){
      return props.dispatch(addNotification({
        title:"Invalid Credentials",
        text:"Please check email and password",
        color:'danger'
      }))
    }
    if(error){
      return props.dispatch(addNotification({
        title:"Error!",
        text:"Something happened, please try again later",
        color:'danger'
      }))
    }
    })
    .finally((_)=>{setIsActive(false)})
  }

  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Sign in with credentials</small>
            </div>
            <Form role="form" onSubmit={handleSubmit}>
              <FormGroup className="mb-3">
                  <Input
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                    value={email}
                    invalid={errors.email}
                    onChange={e=>setEmail(e.target.value)}
                  />
                  <FormFeedback>{errors.email}</FormFeedback>
              </FormGroup>
              <FormGroup>
                  <Input
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                    invalid={errors.password}
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                  />
                  <FormFeedback>{errors.password}</FormFeedback>
              </FormGroup>
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                />
                <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  <span className="text-muted">Remember me</span>
                </label>
              </div>
              <div className="text-center">
                {!isActive?
                <Button className="my-4" color="primary"  type="submit">
                  Sign in
                </Button>
                :
                <Button className="my-4" color="primary" disabled><Spinner size="sm" /></Button>
                }
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Forgot password?</small>
            </a>
          </Col>
          <Col className="text-right" xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Create new account</small>
            </a>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Login;
