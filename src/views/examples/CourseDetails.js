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
import logo from "../../assets/img/logo1.jpg";


export default function CourseDetails(props){
    const [navbarColor, setNavbarColor] = React.useState('info');
    const [collapseOpen, setCollapseOpen] = React.useState(false);
    const [course, setCourse] = React.useState({});
    const [title, setTitle] = React.useState('')

    const handleAppClick=()=>{
      if(collapseOpen === true){
        document.documentElement.classList.toggle("nav-open");
        setCollapseOpen(false)
      }
    }

    React.useEffect(() => {
      const { title, id, type } = props.match.params;
      const { training, consultancy } = data;

      setTitle(title)

      if(type === 'training'){
        const { courses } = training;
        const selctedCourse = courses.find(item => item.id === Number(id));

        setCourse(selctedCourse);
      }
    },[props.match.params])

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
          <Row>
            <Col>
            <div>
                <h2 className="big-text" style={{marginLeft:0, color:"black"}}>
                    <strong>{course.title}</strong>
                </h2>
                <p>{course.introduction}</p>
                
              {/* <h1>{course.name} </h1> */}
              {/* <p>
              Every government has good intentions to deliver public services at a level and quality expected by the electorate. However, in the context of limited resources amidst unending social needs, and worrying levels of inefficiency, and a public sector staffed with employees with lackadaisical attitudes towards work, realising such objective has remained a mirage for most governments. At the core of realising government’s electioneering manifesto are public sector senior managers (directors) who are involved in designing and implementing strategies and making crucial decisions on resource allocation. To the extent that such leaders exercise effective leadership, display excellence-orientation (commitment to working tirelessly to attain the highest level of quality), and identify and confront inhibiting habits and attitudes, and pursue the tenets of public service ethics and values, such objective can be fulfilled. 

              </p> */}
              {/* <p>4.6 <i className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star"/>
                (3555 ratings)
              </p> */}
              {/* <p>Last Updated 3/12/21 <i className="fa fa-globe"/> English</p>
              <Button outline color="primary">WhisList</Button> <Button outline color="primary">Share <i className="fa fa-share-alt ml-1"/></Button> <Button outline color="primary">Like<i className="fa fa-heart ml-2"/></Button> */}
            </div>
              <br/>
            <div style={{backgroundColor:"#EEEEEE", padding:"15px"}}>

                {course.objectives ?
                <div>
                  {course.objectives.length > 0 ? <h1>Objectives</h1> : ''}
                  {course.objectives && course.objectives.map((value, key) => (
                  <p><i className="fa fa-check mr-2"/>{value.name}</p>
                  ))}
                </div>
                :
                null}

              {course.modules ?
              <div>
               {course.modules.length > 0 ? <h1>Modules</h1> : ''}
                <br/>
                {course.modules && course.modules.map((value, key) => (
                  <div key={value.id} className="mb-4">
                  <h3>{value.name}</h3>
                  {value.aim ?
                  <div>
                    <p><strong>Aim :</strong></p>
                    <p className="mt--2">{value.aim}</p>
                  </div>
                  :null}
                  {value.objectives ?
                  <div>
                    {value.objectives.length > 0 ?  <p><strong>Objectives</strong></p> : ''}
                  
                    {value.objectives && value.objectives.map((obj, index)=>(
                    <p><i className="fa fa-check mr-2"/>{obj.message}</p>
                    ))}
                  </div>  
                  :null}
                  
                  </div>
                ))}
              </div>
              : null}

              {course.scope ?
              <div>
                <h1>Scope & Content</h1>
                <p>{course.scope.content}</p>
                <div className="list mb-4">
                <ul>
                  {course.scope.constituent && course.scope.constituent.map((value, key) => (
                      <li>{value}</li>
                  ))}
                </ul>
                </div>
              </div>
              : null}
            </div>
             </Col>
            <Col md="4">
            <Card>
              <CardImg top width="100%" bottom src={`/img/${course.image}`} alt="Card" className='card_image' />
              <CardBody>
                <h1 style={{fontWeight:700}}>{course.name}</h1>
                <CardTitle tag="h5">{course.title}</CardTitle>
                {/* <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
                <Link to="/payment/user-information">
                <Button color="primary" block >REGISTER</Button>
                </Link>
                {/* <br/>
                <div>
                  <h3>This course includes</h3>
                  <small><i className="fa fa-camera mr-2"/> 22 hours on-demand video</small><br/>
                  <small><i className="fa fa-file mr-2"/> 14 articles</small><br/>
                  <small><i className="fa fa-certificate mr-2"/> Certificate of completion</small><br/>
                </div> */}
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