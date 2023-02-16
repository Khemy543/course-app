import React from "react";
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Row,
} from "reactstrap";
import AuthFooter from "components/Footers/AuthFooter.js";
import data from "../../data.js";
import logo from "../../assets/img/logo1.jpg";

export default function Training() {
  const [navbarColor, setNavbarColor] = React.useState("info");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [trainings, setTrainings] = React.useState([]);

  const handleAppClick = () => {
    if (collapseOpen === true) {
      document.documentElement.classList.toggle("nav-open");
      setCollapseOpen(false);
    }
  };

  React.useEffect(() => {
    const { courses } = data.training;
    console.log(courses);
    setTrainings(courses);
  }, []);

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
                <div>
                  <h2
                    className="big-text"
                    style={{ marginLeft: 0, color: "black" }}
                  >
                    <strong>Our Training Offerings </strong>
                  </h2>
                  <p>These fall into seven broad categories:</p>
                </div>
                <br />
                <div className="mb-5">
                  <Row>
                    <Col md="12" className="ml-auto mr-auto">
                      <Row>
                        {trainings.map((value, index) => (
                          <Col md="4" key={value.id}>
                            <Card
                              className="main_card"
                              style={{
                                overflow: "hidden",
                                marginBottom: "20px",
                              }}
                            >
                              <div className="cover">
                                <CardImg
                                  top
                                  width="100%"
                                  src={`./img/${value.image}`}
                                  alt="Card image cap"
                                  className="card_image"
                                  style={{ position: "relative" }}
                                />
                                <a
                                  style={{
                                    borderRadius: "10px",
                                    color: "white",
                                    backgroundColor: "#17d0cf",
                                  }}
                                  role="button"
                                  className="next btn button"
                                  href={`/course/${value.title}/${value.id}/training/details`}
                                >
                                  View details{" "}
                                  <i className="fa fa-chevron-right"></i>
                                </a>
                              </div>
                              <CardBody>
                                <CardTitle tag="h5">{value.title}</CardTitle>
                                <CardText>
                                  <small className="text-muted">
                                    modules(
                                    {value.modules && value.modules.length})
                                  </small>
                                </CardText>
                              </CardBody>
                            </Card>
                          </Col>
                        ))}
                      </Row>
                    </Col>
                  </Row>

                  <Row>
                    <Col className="mt-5">
                      <div>
                        <h2
                          className="big-text"
                          style={{ marginLeft: 0, color: "black" }}
                        >
                          <strong>Facilitators</strong>
                        </h2>
                        <p>View profile of our facilitators</p>
                      </div>
                      <Row className="mt-7">
                        {data.trainers.map((item) => (
                          <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
                            <Card className="card-profile shadow  mb-7">
                              <Row className="justify-content-center">
                                <Col className="order-lg-2" lg="3">
                                  <div className="card-profile-image">
                                    <a
                                      href={`/facilitator/${item.name}/profile`}
                                    >
                                      <img
                                        alt="..."
                                        className="rounded-circle"
                                        src={
                                          require(`../../assets/img/trainers/${item.image}`)
                                            .default
                                        }
                                        style={{ width: "180px", height: "180px", objectFit: "cover" }}
                                      />
                                    </a>
                                  </div>
                                </Col>
                              </Row>
                              
                              <CardBody className="pt-0 pt-md-9">
                                <div className="text-center">
                                  <h3>
                                    { item.name }
                                  </h3>
                                  <div className="h5 font-weight-300">
                                    Bucharest, Romania
                                  </div>
                                  <div className="h5 mt-4">
                                    <i className="ni business_briefcase-24 mr-2" />
                                    { item.excerpt }
                                  </div>
                                  {/* <div>
                                    <i className="ni education_hat mr-2" />
                                    University of Computer Science
                                  </div>
                                  <hr className="my-4" />
                                  <p>
                                    Ryan — the name taken by Melbourne-raised,
                                    Brooklyn-based Nick Murphy — writes,
                                    performs and records all of his own music.
                                  </p> */}
                                </div>
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
  );
}

