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


export default function CourseDetails(props){
    const [navbarColor, setNavbarColor] = React.useState('info');
    const [color, setColor] = React.useState('white');
    const [collapseOpen, setCollapseOpen] = React.useState(false);
    const [course, setCourse] = React.useState({})

    const handleAppClick=()=>{
      if(collapseOpen === true){
        document.documentElement.classList.toggle("nav-open");
        setCollapseOpen(false)
      }
    }

    React.useEffect(() => {
      console.log(props.match.params.id, data)
      const tempCourse = data.find(item => item.id ===  Number(props.match.params.id));
      setCourse(tempCourse);
      console.log(tempCourse)
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
          <Row>
            <Col>
            <div>
              <h1>{course.title} </h1>
              <p>
              Every government has good intentions to deliver public services at a level and quality expected by the electorate. However, in the context of limited resources amidst unending social needs, and worrying levels of inefficiency, and a public sector staffed with employees with lackadaisical attitudes towards work, realising such objective has remained a mirage for most governments. At the core of realising government’s electioneering manifesto are public sector senior managers (directors) who are involved in designing and implementing strategies and making crucial decisions on resource allocation. To the extent that such leaders exercise effective leadership, display excellence-orientation (commitment to working tirelessly to attain the highest level of quality), and identify and confront inhibiting habits and attitudes, and pursue the tenets of public service ethics and values, such objective can be fulfilled. 

              </p>
              <p>4.6 <i className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star"/>
                (3555 ratings)
              </p>
              <p>Last Updated 3/12/21 <i className="fa fa-globe"/> English</p>
              <Button outline color="primary">WhisList</Button> <Button outline color="primary">Share <i className="fa fa-share-alt ml-1"/></Button> <Button outline color="primary">Like<i className="fa fa-heart ml-2"/></Button>
            </div>
              <br/>
            <div style={{backgroundColor:"#EEEEEE", padding:"15px"}}>
              <h1>What you'll learn</h1>
              <h4><i className="fa fa-check mr-2" />Module 1</h4>
              <p>Director Leadership Effectiveness in the Public Sector</p>
              <p><strong>Aim :</strong>To draw attention to essential leadership skills required of directors of MDAs in evolving a professional public sector organisation that delivers excellence to its stakeholders;</p>
              <small>Duration: 3 days</small>
              <br/>
              <h4><i className="fa fa-check mr-2" />Module 2</h4>
              <p>Directing Effectively in an Environment of Political Influence</p>
              <p><strong>Aim :</strong>To emphasize the core skills and mindset required for succeeding as professionals and technocrats in an environment heavily dominated and influenced by politicians;</p>
              <small>Duration: 2 days</small>
              <br/>
              <h4><i className="fa fa-check mr-2" />Module 3</h4>
              <p>Exploiting the Benefits of New Public Management</p>
              <p><strong>Aim :</strong>To introduce the basic tenets of new public management (NPM) to directors of MDAs as a way of driving efficiency and cost containment in the public sector.</p>
              <small>Duration: 3 days</small>
            </div>
             </Col>
            <Col md="4">
            <Card>
              <CardImg top width="100%" src={about} alt="Card image cap" />
              <CardBody>
                <h1 style={{fontWeight:700}}>GHS 20.00</h1>
                <CardTitle tag="h5">{course.title}</CardTitle>
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