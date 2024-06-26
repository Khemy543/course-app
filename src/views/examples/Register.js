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
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Spinner,
  Row,
  Col,
  FormFeedback
} from "reactstrap";
import API from '../../api.js';
import swal from 'sweetalert';



const Register = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});
  const [isActive, setIsActive] = useState(false)

  
  const handleSubmit=(e)=>{
    e.preventDefault();
    setIsActive(true)
    let tempErrors = {};
    if(password != confirmPassword){
      tempErrors.confirmPassword = "Passwords do not match!"
      setErrors(tempErrors)
      return;
    }
    API.post('register-user',{
      name, email, password, phone
    })
    .then(response=>{
      swal({
        title: "Success",
        text:"Registration successful",
        icon: "success",
        buttons:false,
        timer:3000
      }).then((_)=>{
        props.history.push('/auth/login')
      })
      /* API.post('auth/login',{
        password,email
      }).then(res=>{
        localStorage.setItem('AuthToken', res.data.access_token);
        props.histroy.push('/dashboard')
      }) */
    })
    .catch(error=>{
      if(error && error.response && error.response.status == 422){
        setErrors(error.response.data.errors)
      }
    })
    .finally((_)=>setIsActive(false))
  }

  return (
    <>
      <Col lg="6" md="8">
        <Card className="bg-secondary shadow border-0">
          {/* <CardHeader className="bg-transparent pb-5">
            <div className="text-muted text-center mt-2 mb-4">
              <small>Sign up with</small>
            </div>
            <div className="text-center">
              <Button
                className="btn-neutral btn-icon mr-4"
                color="default"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <span className="btn-inner--icon">
                  <img
                    alt="..."
                    src={
                      require("../../assets/img/icons/common/github.svg")
                        .default
                    }
                  />
                </span>
                <span className="btn-inner--text">Github</span>
              </Button>
              <Button
                className="btn-neutral btn-icon"
                color="default"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <span className="btn-inner--icon">
                  <img
                    alt="..."
                    src={
                      require("../../assets/img/icons/common/google.svg")
                        .default
                    }
                  />
                </span>
                <span className="btn-inner--text">Google</span>
              </Button>
            </div>
          </CardHeader> */}
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Sign up with credentials</small>
            </div>
            <Form role="form" onSubmit={handleSubmit}>
              <FormGroup>
                {/* <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon> */}
                  <Input placeholder="Name" type="text" value={name} onChange={e=>setName(e.target.value)} invalid={errors.name} />
                  <FormFeedback>{errors.name}</FormFeedback>
                {/* </InputGroup> */}
              </FormGroup>
              <FormGroup>
                  <Input
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                    invalid={errors.email}
                  />
                  <FormFeedback>{errors.email}</FormFeedback>
              </FormGroup>
              <FormGroup>
                  <Input
                    placeholder="Phone Number"
                    type="text"
                    value={phone}
                    onChange={e=>setPhone(e.target.value)}
                    invalid={errors.phone}
                  />
                  <FormFeedback>{errors.phone}</FormFeedback>
              </FormGroup>
              <FormGroup>
                  <Input
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                    invalid={errors.password}
                  />
                  <FormFeedback>{errors.password}</FormFeedback>
              </FormGroup>
              <FormGroup>
                  <Input
                    placeholder="Confirm Password"
                    type="password"
                    autoComplete="new-password"
                    value={confirmPassword}
                    onChange={e=>setConfirmPassword(e.target.value)}
                    invalid={errors.confirmPassword}
                  />
                  <FormFeedback>{errors.confirmPassword}</FormFeedback>
              </FormGroup>
              {/* <div className="text-muted font-italic">
                <small>
                  password strength:{" "}
                  <span className="text-success font-weight-700">strong</span>
                </small>
              </div> */}
              <Row className="my-4">
                <Col xs="12">
                  <div className="custom-control custom-control-alternative custom-checkbox">
                    <input
                      className="custom-control-input"
                      id="customCheckRegister"
                      type="checkbox"
                      required
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheckRegister"
                    >
                      <span className="text-muted">
                        I agree with the{" "}
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                  </div>
                </Col>
              </Row>
              <div className="text-center">
                {!isActive?
                <Button className="mt-4" color="primary" type="submit">
                  Create account
                </Button>
                :
                <Button className="mt-4" color="primary" type="button" disabled><Spinner size="sm"/></Button>
                }
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Register;
