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
import OverseasTrainingTable from "components/Tables/OverseasTrainingTable";

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
                    href="/overseas-training-calendar"
                    style={{
                      fontWeight: "700",
                      color: "yellow",
                      backgroundColor: "#17d0cf",
                      padding: "10px",
                      borderRadius: "10px",
                    }}
                  >
                    TRAINING CALENDAR
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
        <div>
          <div onClick={() => handleAppClick()}>
            <div style={{ marginTop: "150px", marginBottom: "100px" }}>
              <Container>
                <h4 className="head-subtitle">calendar</h4>
                <h2 className="big-text" style={{ marginLeft: "0px", marginBottom: '50px' }}>
                  Overseas Training <strong>Calendar </strong>2024
                </h2>
                <div className="row wow fadeInUp" data-wow-duration="2s">
                  <div className="col-sm-12">
                    <div
                      className="bottom-section text-center"
                      style={{ overflow: "auto" }}
                    >
                      <OverseasTrainingTable />
                    </div>
                  </div>
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
