import API from 'api';
import React from 'react';
import { Link } from 'react-router-dom';
import {
    Form, InputGroup,
    Input,InputGroupAddon,
    Container,
    Button,
    Card,
    CardText,
    CardTitle,
    Col,
    Row
   
  } from "reactstrap";

  export default function VerifyPayment(props){ 
      return(
          <div>
              <Container style={{marginTop:"70px"}}>
                <Row>
                    <Col md="6" className="ml-auto mr-auto">
                    <Card body>
                        <CardTitle tag="h5">Payment is being processed</CardTitle>
                        <CardText>Please check your email to verify payment</CardText>
                        <Link to="/user/transactions">
                            <Button color="primary" block>Go to Dashboard</Button>
                        </Link>
                    </Card>
                    </Col>
                </Row>
            </Container>
          </div>
      )
  }