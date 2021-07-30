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
import data from '../../data.js'

export default function Training(){
    const [navbarColor, setNavbarColor] = React.useState('info');
    const [color, setColor] = React.useState('white');
    const [collapseOpen, setCollapseOpen] = React.useState(false);
    const [successProneManager, setSuccessProneManage] = React.useState([]);
    const [turbulenceProofLeader, setTurbulenceProofLeader]  = React.useState([])
    const [GeneralCapacityProductivityEnhancementTraining, setGeneralCapacityProductivityEnhancementTraining] = React.useState([])
    
    const handleAppClick=()=>{
      if(collapseOpen === true){
        document.documentElement.classList.toggle("nav-open");
        setCollapseOpen(false)
      }
    }

    React.useEffect(()=> {
      const success_prone_manager = data.filter(item => item.main === 'The Success-Prone Manager')
      const turbulence_proof_leader = data.filter(item => item.main === 'The Turbulence-Proof Leader')
      const enhancement_training = data.filter(item => item.main === 'General Capacity & Productivity Enhancement Training')
      
      setSuccessProneManage(success_prone_manager);
      setTurbulenceProofLeader(turbulence_proof_leader);
      setGeneralCapacityProductivityEnhancementTraining(enhancement_training)
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
{/*
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
              <h1>Our Training Offerings  </h1>
              <p>
              These fall into four broad categories:
              </p>
            </div>
              <br/>
                <h2 className="big-text" style={{marginLeft:0, color:"black"}}>
                    <strong>The Success-Prone Manager </strong>
                </h2>
                <p> (Management Development Training)</p>
                <hr/>
                <br/>
            <Row>
            <Col md="11" className="ml-auto mr-auto">
                <Row>
                {successProneManager.map((value, key)=>(
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
            <h2 className="big-text" style={{marginLeft:0, color:"black", marginTop:"100px"}}>
                    <strong>The Turbulence-Proof Leader </strong>
                </h2>
                <p> (Leadership Development Training)</p>
                <hr/>
                <br/>
                <Row>
            <Col md="11" className="ml-auto mr-auto">
                <Row>
                {turbulenceProofLeader.map((value, key)=>(
                    <Col md="4">
                    <Card className="main_card" style={{overflow:"hidden", marginBottom:"20px"}}>
                    <div className="cover">
                        <CardImg top width="100%" src={about} alt="Card image cap" className="card_image" style={{position:"relative"}}/>
                        
                        <a style={{textDecoration:"none", color:"white"}} className="next" href={`/course/${value.id}/details`}>View details <i className="fa fa-chevron-right"></i></a>
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

            <h2 className="big-text" style={{marginLeft:0, color:"black", marginTop:"100px"}}>
                    <strong>General Capacity & Productivity Enhancement Training</strong>
                </h2>
                <hr/>
                <br/>
                <Row>
            <Col md="11" className="ml-auto mr-auto">
                <Row>
                {GeneralCapacityProductivityEnhancementTraining.map((value, key)=>(
                    <Col md="4">
                    <Card className="main_card" style={{overflow:"hidden", marginBottom:"20px"}}>
                    <div className="cover">
                        <CardImg top width="100%" src={about} alt="Card image cap" className="card_image" style={{position:"relative"}}/>
                        
                        <a style={{textDecoration:"none", color:"white"}} className="next" href={`/course/${value.id}/details`}>View details <i className="fa fa-chevron-right"></i></a>
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
            
            <div>
                <Link to="/senior-level-public-leadership">
                <h4 style={{float:'right', cursor:"pointer"}}>
                    <span style={{color:"#58bbff", float:"right"}}>Next <i className="fa fa-chevron-right" /><i className="fa fa-chevron-right" /></span>
                    <br/>
                    <strong>Senior-Level Public Leadership Program </strong>
                </h4>
                </Link>
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