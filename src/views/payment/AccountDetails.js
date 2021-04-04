import React,{useEffect} from 'react';
import {
    InputGroup,
    InputGroupAddon,
    Container,
    Button,
    Form,
    InputGroupText,
    Input,
    Col,
    Row
   
  } from "reactstrap";
  import manager from 'assets/img/brand/manager.jpeg';
  import { addNotification } from 'actions/indexActions.js'
import API from 'api';

  export default function AccountDetails(props){
    const [email, setEmail] = React.useState(props.location.state.email);
    const [phone, setPhone] = React.useState(props.location.state.phone)
    const [amount, setAmount] = React.useState(props.location.state.amount);
    const [card, setCard] = React.useState('');
    const [cvv, setCvv] = React.useState('');
    const [date, setDate] = React.useState('');
    const [payment, setPayment] = React.useState('card_payment');
    const [city, setCity] = React.useState('');
    const [state, setState] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [active, setActive] = React.useState(false);
    const [network, setNetwork] = React.useState('MTN');
    const [voucher, setVoucher] = React.useState('');

    useEffect(()=>{
        console.log(props)
    },[])

    const handleCardSubmit=(e)=>{
        e.preventDefault();
        let tempDate = date;
        let splitArray = tempDate.split("/");
        console.log(splitArray[0], splitArray[1])
        setActive(true)
    
        API.post("user/payment",
        {
            cardno: card,
            cvv: cvv,
            expirymonth: splitArray[0],
            expiryyear: splitArray[1],
            phonenumber:props.location.state.phone,
            firstname : props.location.state.firtsname,
            lastname: props.location.state.lastname, 
            email:props.location.state.email,
            billingzip:"233",
            billingcity:city,
            billingaddress:address,
            billingstate:state,
            payment_method:'card_payment'
        })
        .then(res=>{
            window.location=`${res.data.authurl}`
        })
        .catch(error=>{
            if(error){
                return props.dispatch(addNotification({
                  title:"Error!",
                  text:"Something happened, please try again later",
                  color:'danger'
                }))
              }
        })
        .finally((_)=>{
            setActive(false)
        })
    }
   const handleChange=(value)=>{
    let newval="";
    /* for(var i = 0; i < value.length; i++) {
        if(i%4 == 0 && i > 0) newval = newval.concat(' ');
        newval = newval.concat(value[i]);
    } */
    setCard(value)
   /*  cardRef.on('keyup', function(e){
            var val = $(this).val();
            var newval = '';
            val = val.replace(/\s/g, '');
            for(var i = 0; i < val.length; i++) {
                if(i%4 == 0 && i > 0) newval = newval.concat(' ');
                newval = newval.concat(val[i]);
            }
            $(this).val(newval);
        }); */
    }

    const handleMobileSubmit=(e)=>{
        e.preventDefault();
            API.post("user/payment",
        {
            phonenumber:phone,
            firstname: props.location.state.firtsname,
            lastname: props.location.state.lastname,
            email:email,
            vendor:network,
            ...(network == 'VODAFONE'?{voucher:voucher}:{}),
            payment_method:'momo'
        })
        .then(res=>{
            console.log(res.data);
            window.location=`${res.data.data.link}`
        })
        .catch(error=>{
            console.log(error);
            if(error){
                return props.dispatch(addNotification({
                  title:"Error!",
                  text:"Something happened, please try again later",
                  color:'danger'
                }))
              }
        })
    }
    
    
    
      return(
          <div style={{height:"100vh", display:"flex", alignItems:"center"}}>
              <Container>
                <Row>
                    <Col md="12" className="ml-auto mr-auto">
                    <div className="container">
                      <div className="row" style={{boxShadow:"0 2px 12px rgba(0,0,0,0.1)"}}>
                        <div className="col-md-6" style={{paddingLeft:"0px", paddingRight:"0px"}}>
                        <div className="tabs-bg bg-primary" style={{height:"100%", padding:"50px"}}>
                            <h3 style={{fontWeight:300, textDecoration:"none", textTransform:"capitalize", fontSize:"30px",color:"white"}}>
                                <span style={{fontWeight:700}}>GSR</span> Consulting
                            </h3>
                            
                        </div>
                        </div>
                        <div className="col-md-6" style={{paddingLeft:"0px", paddingRight:"0px"}}>
                          <div className="tabs-bg bg-white" style={{padding:"50px"}}>
                            <Row>
                                <Col style={{display:"flex", justifyContent:"space-between"}}>
                                    <label style={{marginLeft:"40px", fontWeight:"bold"}}>
                                        <Input type="radio" name="payment" value='card_payment' checked={payment == 'card_payment'} onChange={
                                            e=>{
                                                setPayment(e.target.value);
                                                setPhone(props.location.state.phone)
                                            }}/>
                                        Card Payment
                                    </label>
                                    <label style={{marginRight:"40px", fontWeight:"bold"}}>
                                        <Input type="radio" name="payment" value='momo' checked={payment == 'momo'} onChange={
                                            e=> {
                                                setPayment(e.target.value)
                                                setPhone('')
                                            }}/>
                                        Mobile Money
                                    </label>
                                </Col>
                            </Row>
                        {payment == 'card_payment'?
                          <Form onSubmit={handleCardSubmit}>
                            <Row style={{marginTop:"20px"}}>
                                <Col>
                                <label style={{fontSize:"13px" , fontWeight:600}}>Card Number</label>
                                <Input size="20" autocomplete="off" class="form-control" id="number" type="number" value={card} required onChange={e=>handleChange(e.target.value)} placeholder="Card Number"/>
                                </Col>
                            </Row>
                            <Row style={{marginTop:"20px"}}>
                                <Col>
                                    <label style={{fontSize:"13px" , fontWeight:600}}>Expiry Date</label>
                                    <Input  class="form-control" type="text" value={date} required onChange={e=>setDate(e.target.value)} placeholder="MM/YY"/>
                                </Col>
                                <Col>
                                    <label style={{fontSize:"13px" , fontWeight:600}}>CVV</label>
                                    <Input  class="form-control" type="number" value={cvv} required onChange={e=>setCvv(e.target.value)} placeholder="CVV"/>
                                </Col>
                            </Row>
                            <Row style={{marginTop:"20px"}}>
                                <Col>
                                    <label style={{fontSize:"13px" , fontWeight:600}}>State</label>
                                    <Input  class="form-control" type="text" value={state} required onChange={e=>setState(e.target.value)} placeholder="Billing State"/>
                                </Col>
                            </Row>
                            <Row style={{marginTop:"20px"}}>
                                <Col>
                                    <label style={{fontSize:"13px" , fontWeight:600}}>City</label>
                                    <Input  class="form-control"  type="text" required value={city} onChange={e=>setCity(e.target.value)} placeholder="Billing City"/>
                                </Col>
                                <Col>
                                    <label style={{fontSize:"13px" , fontWeight:600}}>Address</label>
                                    <Input  class="form-control" type="text" required value={address} onChange={e=>setAddress(e.target.value)} placeholder="Billing Address" />
                                </Col>
                            </Row>
                            <Row style={{marginTop:"20px"}}>
                                <Col>
                                    <Button color="primary" block>Pay GHS {amount.toFixed(2)}</Button>
                                </Col>
                            </Row>
                            </Form>
                            :
                            <Form onSubmit={handleMobileSubmit}>
                                <Row style={{marginTop:"20px"}}>
                                    <Col>
                                        <label style={{fontSize:"13px" , fontWeight:600}}>Email</label>
                                        <Input  class="form-control" type="email" value={email} required onChange={e=>setEmail(e.target.value)} placeholder="Billing State"/>
                                    </Col>
                                </Row>
                                <Row style={{marginTop:"20px"}}>
                                    <Col>
                                        <label style={{fontSize:"13px" , fontWeight:600}}>Network</label>
                                        <Input  class="form-control" type="select" value={network} required onChange={e=>setNetwork(e.target.value)}>
                                        <option value="MTN">MTN</option>
                                        <option value="TIGO">AIRTEL-TIGO</option>
                                        <option value="VODAFONE">VODAFONE</option>
                                        </Input>
                                    </Col>
                                </Row>
                                {network=="VODAFONE"?
                                <Row style={{marginTop:"20px"}}>
                                    <Col>
                                        <label style={{fontSize:"13px" , fontWeight:600}}>Voucher</label>
                                        <Input  class="form-control" type="text" value={voucher} required onChange={e=>setVoucher(e.target.value)} placeholder="Voucher"/>
                                    </Col>
                                </Row>
                                :
                                null}
                                <Row style={{marginTop:"20px"}}>
                                    <Col>
                                        <label style={{fontSize:"13px" , fontWeight:600}}>Phone Number</label>
                                        <Input  class="form-control" type="number" value={phone} required onChange={e=>setPhone(e.target.value)} placeholder="Momo Number"/>
                                    </Col>
                                </Row>
                                <Row style={{marginTop:"40px"}}>
                                    <Col>
                                        <Button color="primary" block>Pay GHS {amount.toFixed(2)}</Button>
                                    </Col>
                                </Row>
                            </Form>
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                    </Col>
                </Row>
            </Container>
          </div>
      )
  }