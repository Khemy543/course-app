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
import AuthFooter from 'components/Footers/AuthFooter.js'
import about from 'assets/img/brand/aboutus.jpeg';
import { Link } from 'react-router-dom';
import data from '../../data.js';


export default function Consultancy(props){
    const [navbarColor, setNavbarColor] = React.useState('info');
    const [color, setColor] = React.useState('white');
    const [collapseOpen, setCollapseOpen] = React.useState(false);
    const [pub, setPublic] = React.useState([]);
    const [pri, setPrivate] = React.useState([])

    const handleAppClick=()=>{
      if(collapseOpen === true){
        document.documentElement.classList.toggle("nav-open");
        setCollapseOpen(false)
      }
    }

    React.useEffect(() => {
      const tempCourse = data.filter(item => item.main == 'Consultancy' && item.sector == 'Public');
      setPublic(tempCourse);

      const temp = data.filter(item => item.main == 'Consultancy' && item.sector == 'Private');
      setPrivate(temp)
    },[])

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
          <div>
              <h1>Consultancy</h1>
              <p>
              We have three consultancy products that have been designed exclusively for public sector organisation, and
                two others for private sectors organisation, but which public sector organisations would also find useful.
              </p>
            </div>
            <br/>
            <h3>PUBLIC SECTORS</h3>
            <br/>
            <Row>
            <Col md="11" className="ml-auto mr-auto">
                <Row>
                {pub.map((value, key)=>(
                    <Col md="4">
                    <Card className="main_card" style={{overflow:"hidden", marginBottom:"20px"}}>
                    <div className="cover">
                        <CardImg top width="100%" src={about} alt="Card image cap" className="card_image" style={{position:"relative"}}/>
                        
                        <a style={{borderRadius:"10px", color:"white",backgroundColor:"#17d0cf"}}
                        role="button" className="next btn button" href={`/course/${value.id}/details`}>View details <i className="fa fa-chevron-right"></i></a>
                    </div>
                    <CardBody>
                        <CardTitle tag="h5">{value.title}</CardTitle>
                       <CardText>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </CardText>
                    </CardBody>
                    </Card>
                    </Col>
                    ))}
                </Row>
            </Col>
            </Row>

            <h3>PRIVATE SECTORS </h3>
            <br/>
            <Row>
            <Col md="11" className="ml-auto mr-auto">
                <Row>
                {pri.map((value, key)=>(
                    <Col md="4">
                    <Card className="main_card" style={{overflow:"hidden", marginBottom:"20px"}}>
                    <div className="cover">
                        <CardImg top width="100%" src={about} alt="Card image cap" className="card_image" style={{position:"relative"}}/>
                        
                        <a style={{borderRadius:"10px", color:"white",backgroundColor:"#17d0cf"}}
                        role="button" className="next btn button" href={`/course/${value.id}/details`}>View details <i className="fa fa-chevron-right"></i></a>
                    </div>
                    <CardBody>
                        <CardTitle tag="h5">{value.title}</CardTitle>
                       <CardText>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </CardText>
                    </CardBody>
                    </Card>
                    </Col>
                    ))}
                </Row>
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