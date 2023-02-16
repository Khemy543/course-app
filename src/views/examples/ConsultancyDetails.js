import React from "react";
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
  CardTitle,
  Col,
  Row,
  Table
} from "reactstrap";
import AuthFooter from "components/Footers/AuthFooter.js";
import { Link } from "react-router-dom";
import data from "../../data.js";
import logo from "../../assets/img/logo1.jpg";

export default function CourseDetails(props) {
  const [navbarColor] = React.useState("info");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [course, setCourse] = React.useState({});

  const handleAppClick = () => {
    if (collapseOpen === true) {
      document.documentElement.classList.toggle("nav-open");
      setCollapseOpen(false);
    }
  };

  React.useEffect(() => {
    const { id, type } = props.match.params;
    const { consultancy } = data;

    const { private: privateConsutancy, public: publicConsultancy } =
      consultancy;
    let selctedCourse = [];
    if (type === "private") {
      selctedCourse = privateConsutancy.find((item) => item.id === Number(id));
    } else {
      selctedCourse = publicConsultancy.find((item) => item.id === Number(id));
    }

    setCourse(selctedCourse);
  }, [props.match.params]);

  return (
    <div>
      <div id="app">
        {/*Home Start */}
        <h1 className="sr-only">Home section</h1>
        <Navbar
          className={"fixed-top " + navbarColor}
          expand="lg"
          style={{ marginTop: 0 }}
        >
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
              style={{ marginRight: "20px" }}
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(true);
              }}
              aria-expanded={collapseOpen}
            >
              <i className="fa fa-bars" style={{ color: "white" }} />
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
                    style={{
                      fontWeight: "700",
                      color: "yellow",
                      backgroundColor: "#17d0cf",
                      padding: "10px",
                      borderRadius: "10px",
                    }}
                  >
                    GET STARTED <i className="fa fa-sign-in" />
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
        <div>
          <div onClick={() => handleAppClick()}>
            <div style={{ marginTop: "120px", marginBottom: "100px" }}>
              <Container>
                <Row>
                  <Col>
                    <div>
                      <h2
                        className="big-text"
                        style={{ marginLeft: 0, color: "black" }}
                      >
                        <strong>{course.title}</strong>
                      </h2>
                      <p>{course.aim}</p>
                    </div>
                    <br />
                    {course.title !== 'HR Outsourcing Modules' && (
                    <div
                      style={{ backgroundColor: "#EEEEEE", padding: "15px" }}
                    >
                      {course.objectives ? (
                        <div>
                          {course.objectives &&
                            course.objectives.map((value, key) => (
                              <div key={key}>
                              <h2>{value.subtitle}</h2>  
                              <p><strong>{ value.shorts }</strong></p>
                               {value.list && value.list.map((item, index) => (
                                <p key={index}>
                                  <i className="fa fa-check mr-2" />
                                  {item.value}
                                </p>
                               ))}
                               <br/>
                              </div>
                            ))}
                        </div>
                      ) : null}
                    </div>
                    )}

                    {course.title === 'HR Outsourcing Modules' && (
                    <div>
                      <table striped style={{borderTop:'none', textAlign:"left"}}>
                        <thead>
                          <tr>
                            <th style={{fontSize:"16px"}}>MODEL</th>
                            <th style={{fontSize:"16px"}}>DESCRIPTION</th>
                            <th style={{fontSize:"16px"}}>CLIENT RECEIVES</th>
                            <th style={{fontSize:"16px"}}>COST</th>
                          </tr>
                        </thead>
                        <tbody>
                          {course.tables && course.tables.map((value) => (
                          <tr>
                            <th><p>{value.model}</p></th>
                            <td style={{maxWidth: 600}}>
                            <p>{value.description}</p>
                            </td>
                            <td><p>{value.client}</p></td>
                            <td><p>{value.cost || 'N/A'}</p></td>
                          </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    )}
                  </Col>
                  <Col md="4">
                    <Card>
                      <CardImg
                        top
                        width="100%"
                        bottom
                        src={`/img/${course.image}`}
                        alt="Card"
                        className="card_image"
                      />
                      <CardBody>
                        <h1 style={{ fontWeight: 700 }}>{course.name}</h1>
                        <CardTitle tag="h5">{course.title}</CardTitle>
                        {/* <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
                        <Link to="/payment/user-information">
                          <Button color="primary" block>
                            REGISTER
                          </Button>
                        </Link>
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
  );
}
