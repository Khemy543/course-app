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
import data from '../../data.js';

export default function SeniorLevel(){
    const [navbarColor, setNavbarColor] = React.useState('info');
    const [color, setColor] = React.useState('white');
    const [collapseOpen, setCollapseOpen] = React.useState(false);
    const [courses, setCourses] = React.useState([])

    const handleAppClick=()=>{
      if(collapseOpen === true){
        document.documentElement.classList.toggle("nav-open");
        setCollapseOpen(false)
      }
    }

    React.useEffect(() => {
      const tempCourses = data.filter(item => item.main === 'Senior-Level Public Leadership Program');
      setCourses(tempCourses)
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
            {/*
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
            </NavItem> */}
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
              <h1>Senior-Level Public Leadership Program </h1>
              <p>
              Every government has good intentions to deliver public services at a level and quality expected by the electorate. However, in the context of limited resources amidst unending social needs, and worrying levels of inefficiency, and a public sector staffed with employees with lackadaisical attitudes towards work, realising such objective has remained a mirage for most governments. At the core of realising government’s electioneering manifesto are public sector senior managers (directors) who are involved in designing and implementing strategies and making crucial decisions on resource allocation. To the extent that such leaders exercise effective leadership, display excellence-orientation (commitment to working tirelessly to attain the highest level of quality), and identify and confront inhibiting habits and attitudes, and pursue the tenets of public service ethics and values, such objective can be fulfilled. 
              </p>
              <h4><strong>General Aim</strong></h4>
              <p>
              The purpose of the Senior Level Public Leadership Program (SLPLP) is to offer an overarching capacity development curriculum capable of effectively preparing directors in the MDAs in Africa to be effective in delivering the outcomes for which their respective MDAs have been established. Specifically, the SLPLP is offered in three modules and delivered by consultants from GSR Consulting
              </p>

              <h4><strong>Focus & Target Audience</strong></h4>
              <p>
              The SLPLP focuses exclusively on Senior Management (Chief Directors, Directors & Assistant Directors) in the public sector: government, parliament, public and civil service, the ministries and local governments, including district assemblies, ministries, departments and agencies (MDAs). 
              </p>
              <h4><strong>Scope</strong></h4>
              <p>
              Designed specifically to address crucial leadership issues at the senior level in the public sector, the SLPLP package is wide-ranging in scope, dealing with high-level strategic leadership issues. Indeed, public service quality has remained poor, and in many cases, fallen well below acceptable standards at all levels in many public, civil and government sector organisations. This not only affects the public sector but also the private sector, which depends on the public sector for its survival. Since in Africa, as in many parts of Africa, the private sector is viewed strategically as the engine of growth of the economy, how the public sector works is of crucial importance if the former is indeed to play its role as the engine of growth. This is particularly so because it is the public sector that provides the framework within which the private sector should operate. Moreover, private sector organisations depend on the public sector in performing several functions: processing registration documents; taxation; processing tender documents; paying for services provided by private institution to the public; the list is endless. 
              </p>
            </div>
            
            <div style={{marginTop:"100px"}}>
                <h2>The Modules</h2>
                <p>The three modules are as follows:</p>
            <Row>
            {courses.map((value, key)=>(
            <Col md="4 mt-5">
            <Card className="main_card">
            <div className="cover">
                <CardImg top width="100%" src={about} alt="Card image cap" className="card_image" style={{position:"relative"}}/>
                
                <a style={{borderRadius:"10px", color:"white",backgroundColor:"#17d0cf"}}
                        role="button" className="next btn button" href={`/course/${value.id}/details`}>
                        View details <i className="fa fa-chevron-right"></i>
                      </a>
            </div>
            <CardBody>
                <CardTitle tag="h5">{value.title}</CardTitle>
                <CardText>{value.aim}</CardText>
                <CardText>
                <small className="text-muted">duration {value.duration} days</small>
                </CardText>
            </CardBody>
            </Card>
            </Col>
            ))}
            </Row>
            </div>
          </Container>
        </div>
      </div>
      <AuthFooter />
    </div>
    </div>
    </div>
    )
}