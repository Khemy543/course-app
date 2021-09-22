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
import data from '../../data.js'
import logo from "../../assets/img/logo.jpeg";

export default function Training(){
    const [navbarColor, setNavbarColor] = React.useState('info');
    const [collapseOpen, setCollapseOpen] = React.useState(false);
    const [trainings, setTrainings] = React.useState([])
    
    const handleAppClick=()=>{
      if(collapseOpen === true){
        document.documentElement.classList.toggle("nav-open");
        setCollapseOpen(false)
      }
    }

    React.useEffect(() => {
      const { courses } = data.training;
      console.log(courses)
      setTrainings(courses)
    },[])
    
    
    return(
        <div>
        <div id="app">
        
          {/*Home Start */}
        <h1 className="sr-only">Home section</h1>
        <Navbar className={"fixed-top " + navbarColor} expand="lg" style={{marginTop:0}}>
        <Container>
        <div className="navbar-translate">
        <NavbarBrand data-placement="bottom">
                <a href="/">
                  <div className="d-flex">
                    <img
                      alt="Course App"
                      src={logo}
                      style={{
                        height: "40px",
                        width: "auto",
                        borderRadius: "4px",
                        marginRight: "5px",
                      }}
                    />

                    <h3
                      style={{
                        fontWeight: 600,
                        textDecoration: "none",
                        textTransform: "capitalize",
                        fontSize: "22px",
                      }}
                    >
                      GSR CONSULTING
                    </h3>
                  </div>
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
              <NavLink tag="a" href="/" className="mr-3">
                  HOME
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
              <h2 className="big-text" style={{marginLeft:0, color:"black"}}>
                  <strong>Our Training Offerings  </strong>
              </h2>
              <p>
              These fall into seven broad categories:
              </p>
            </div>
              <br/>
              <div className="mb-5">
            <Row>
            <Col md="11" className="ml-auto mr-auto">
                <Row>
                {trainings.map((value, index)=>(
                    <Col md="4">
                    <Card className="main_card" style={{overflow:"hidden", marginBottom:"20px"}}>
                    <div className="cover">
                        <CardImg top width="100%" src={about} alt="Card image cap" className="card_image" style={{position:"relative"}}/>
                        
                        <a style={{borderRadius:"10px", color:"white",backgroundColor:"#17d0cf"}}
                        role="button" className="next btn button" href={`/course/${value.title}/${value.id}/training/details`}>View details <i className="fa fa-chevron-right"></i></a>
                    </div>
                    <CardBody>
                        <CardTitle tag="h5">{value.title}</CardTitle>
                       <CardText>
                        <small className="text-muted">modules({value.modules && value.modules.length})</small>
                        </CardText>
                    </CardBody>
                    </Card>
                    </Col>
                    ))}
                </Row>
            </Col>
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