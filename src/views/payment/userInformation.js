import API from 'api';
import React from 'react';
import {
    Form, InputGroup,
    Input,InputGroupAddon,
    Container,
    Button,
    Card,
    CardBody,
    InputGroupText,
    Col,
    Row
   
  } from "reactstrap";

  export default function UserInformation(props){  
    const [firtsname, setFirstname] = React.useState("");
    const [lastname, setLastname] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [amount, setAmount] = React.useState(20)
    const [phone, setPhoneNumber] = React.useState('');

    const handleSubmit=(e)=>{
       e.preventDefault();
       props.history.push('/payment/account',{
           firtsname,
           lastname,
           email,
           amount,
           phone
       })
    }
    

      return(
          <div>
              <Container style={{marginTop:"70px"}}>
                <Row>
                <Col md="5" className="ml-auto mr-auto">
                <Row>
                    <Col md ="4">
                    <div style={{textAlign:"center"}}>
                    {/* <img
                        alt="#"
                        src={require("../../assets/img/martlogo.png")}
                        style={{width:"70px" ,height:"auto", marginTop:"20px"}}
                    /> */}
                    </div>
                    </Col>
                    <Col md="4">
                        <h3><strong>GRS</strong> Consulting</h3>
                        <p style={{fontSize:"11px", fontWeight:600}}>By <strong>GRS</strong> Consulting</p>
                        <hr className="my-4" />

                    </Col>
                    <Col md="4">

                    </Col>
                </Row>
                    
                    
                    <Card style={{borderRadius:"0px", marginTop:"-25px"}} className="card-plain">
                    <CardBody>
                        <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col>
                            <label style={{fontSize:"13px" , fontWeight:600}}>First Name</label>
                            <Input type="text" value={firtsname} required onChange={e=>setFirstname(e.target.value)} placeholder="First Name"/>
                            </Col>
                            <Col>
                            <label  style={{fontSize:"13px" , fontWeight:600}}>last Name</label>
                            <Input type="text" required value={lastname} onChange={e=>setLastname(e.target.value)} placeholder="Last Name"/>
                            </Col>
                        </Row>
                        
                        <Row style={{marginTop:"20px"}}>
                            <Col>
                            <label  style={{fontSize:"13px" , fontWeight:600}}>Email Address</label>
                            <Input type="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email Address"/>
                            </Col>
                            
                        </Row>
                        <Row style={{marginTop:"20px"}}>
                            <Col>
                            <label style={{fontSize:"13px" , fontWeight:600}}>Phone Number</label>
                            <Input type="text" value={phone} required onChange={e=>setPhoneNumber(e.target.value)} placeholder="Phone Number"/>
                            </Col>
                        </Row>
                        <Row style={{marginTop:"30px"}}>
                            <Col> 
                                <Button color="primary" block type="submit">Pay GHS {amount.toFixed(2)}</Button>
                            </Col>
                            {/* <Col md="6" sm="6" xs="6" lg="6" xl="6">
                                <h4 style={{fontSize:"14px", fontWeight:600, marginTop:"4px",color:"#6ec7e0", cursor:"pointer"}}
                                onClick={()=>activateFreeTrial()}
                                >Try Free Now ! <i className="fa fa-chevron-right"/></h4>
                            </Col> */}
                        </Row>
                        <p style={{textAlign:"center", marginTop:"15px", fontSize:"12px",fontWeight:600}}>Contact <a style={{color:"#6ec7e0"}} href="mailto://enquiries@strategicresourcers.com">enquiries@strategicresourcers.com.com</a> for any questions</p>
                        </Form>
                    </CardBody>
                    </Card>
                    {/* <Row style={{marginTop:"20px"}}>
                        <Col md="6" className="ml-auto mr-auto">
                            <img src={require("../../assets/img/mastercard.png")} alt="#" style={{width:"60px", height:"auto"}}/>
                            <img src={require("../../assets/img/visa.png")} alt="#" style={{width:"60px", height:"auto"}}/>
                            <img src={require("../../assets/img/mobilemoney.png")} alt="#" style={{width:"80px", height:"auto"}}/>
                        </Col>
                    </Row> */}
                </Col>
                </Row>
            </Container>
          </div>
      )
  }