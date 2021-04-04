import React from 'react';
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,CardTitle,CardSubtitle,
  Col,
  Row
 
} from "reactstrap";
import AOS from 'aos';
import AuthFooter from 'components/Footers/AuthFooter.js'
import 'aos/dist/aos.css';
import about from 'assets/img/brand/aboutus.jpeg';
import { Link } from 'react-router-dom'

export default function CourseDetails(){
    const [navbarColor, setNavbarColor] = React.useState('info');
    const [color, setColor] = React.useState('white');
    const [collapseOpen, setCollapseOpen] = React.useState(false);

    const handleAppClick=()=>{
      if(collapseOpen === true){
        document.documentElement.classList.toggle("nav-open");
        setCollapseOpen(false)
      }
    }

    return(
        <div>
        <div id="app">
        
          {/*Home Start */}
        <h1 className="sr-only">Home section</h1>
        <Navbar className={"fixed-top " + navbarColor} expand="lg" style={{marginTop:0}}>
        <Container>
        <div className="navbar-translate">
          <NavbarBrand
          data-placement="bottom"
          >
          <a href="/">
          <h3 style={{fontWeight:300, textDecoration:"none", textTransform:"capitalize", fontSize:"30px", color:"black"}}>
          {/* <img alt="Course App" src={logo1} style={{height:"55px", width:"auto"}}/> */} <span style={{fontWeight:700}}>GSR</span> Consulting
          
          </h3>
          </a>
          </NavbarBrand>
          
        </div>
        <div
            className="phone-view-hide"
            style={{marginRight:"20px"}}
            onClick={() => {
              document.documentElement.classList.toggle("nav-open");
              setCollapseOpen(true);
            }}
            aria-expanded={collapseOpen}
          >
          <i className="fa fa-bars" style={{color:"white"}}/>
          </div>
        <Collapse
          className="justify-content-end"
          isOpen={collapseOpen}
          navbar
        >
          <Nav navbar>
            <NavItem className="active">
              <NavLink href="#Home"
              className="scroll mr-3"
              >
                HOME
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink  href="#about-us"
              className="scroll mr-3"
              >
                ABOUT
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink  href="#services"
              className="scroll mr-3"
              >
                SERVICES
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink  href="#contact-us"
              className="scroll mr-3"
              >
                CONTACT US
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink  
              className="mt--2"
              href="/auth/login"
              style={{fontWeight:"700",color:"yellow", backgroundColor:"#17d0cf", padding:"10px", borderRadius:"10px"}}                  
              >
                  GET STARTED <i className="fa fa-sign-in"/>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar> 
    <div>
      <div onClick={()=>handleAppClick()}>
        <div style={{marginTop:"120px", marginBottom:"100px"}}>
          <Container>
          <Row>
            <Col>
            <div>
              <h1>2021 Complete Python Bootcamp From Zero to Hero in Python</h1>
              <p>Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games</p>
              <p>4.6 <i className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star"/>
                (3555 ratings)
              </p>
              <p>Last Updated 3/12/21 <i className="fa fa-globe"/> English</p>
              <Button outline color="primary">WhisList</Button> <Button outline color="primary">Share <i className="fa fa-share-alt ml-1"/></Button> <Button outline color="primary">Like<i className="fa fa-heart ml-2"/></Button>
            </div>
              <br/>
            <div style={{backgroundColor:"#EEEEEE", padding:"15px"}}>
              <h1>What you'll learn</h1>
              <p><i className="fa fa-check mr-2" />Learn to use Python professionally, learning both Python 2 and Python 3!</p>
              <p><i className="fa fa-check mr-2" />Learn to use Python professionally, learning both Python 2 and Python 3!</p>
              <p><i className="fa fa-check mr-2" />Learn to use Python professionally, learning both Python 2 and Python 3!</p>
              <p><i className="fa fa-check mr-2" />Learn to use Python professionally, learning both Python 2 and Python 3!</p>
              <p><i className="fa fa-check mr-2" />Learn to use Python professionally, learning both Python 2 and Python 3!</p>

            </div>
             </Col>
            <Col md="4">
            <Card>
              <CardImg top width="100%" src={about} alt="Card image cap" />
              <CardBody>
                <h1 style={{fontWeight:700}}>GHS 20.00</h1>
                <CardTitle tag="h5">Course Title</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Link to="/payment/user-information">
                <Button color="primary" block >REGISTER</Button>
                </Link>
                <br/>
                <div>
                  <h3>This course includes</h3>
                  <small><i className="fa fa-camera mr-2"/> 22 hours on-demand video</small><br/>
                  <small><i className="fa fa-file mr-2"/> 14 articles</small><br/>
                  <small><i className="fa fa-certificate mr-2"/> Certificate of completion</small><br/>
                </div>
              </CardBody>
            </Card>
            </Col>
          </Row>
          </Container>
        </div>
      </div>
      <AuthFooter />
    </div>
    </div>
    </div>
    )
}