import React from "react";
import AuthFooter from "components/Footers/AuthFooter";
// Import css files
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
import AOS from "aos";
import "aos/dist/aos.css";
import data from '../data.js'
//images
import logo from "../assets/img/logo.jpeg";
import client1 from "../assets/img/brand/client1.jpeg";
import client2 from "../assets/img/brand/client2.jpeg";
import client3 from "../assets/img/brand/client3.jpeg";
import client4 from "../assets/img/brand/client4.jpeg";
import client5 from "../assets/img/brand/client5.jpeg";
import client6 from "../assets/img/brand/client6.jpeg";
import client7 from "../assets/img/brand/client7.jpeg";
import client8 from "../assets/img/brand/client8.jpg";
import client9 from "../assets/img/brand/client9.jpeg";
import client10 from "../assets/img/brand/client10.jpeg";
import client11 from "../assets/img/brand/client11.jpeg";
import client12 from "../assets/img/brand/client12.jpeg";
import client13 from "../assets/img/brand/client13.jpeg";
import client14 from "../assets/img/brand/client14.jpeg";
import client15 from "../assets/img/brand/client15.jpeg";
import client16 from "../assets/img/brand/client16.jpeg";
import client17 from "../assets/img/brand/client17.jpeg";
import client18 from "../assets/img/brand/client18.jpeg";
import client19 from "../assets/img/brand/client19.jpeg";
import client20 from "../assets/img/brand/client20.jpeg";
import client21 from "../assets/img/brand/client21.jpeg";
import client22 from "../assets/img/brand/client22.jpeg";
import client23 from "../assets/img/brand/client23.jpeg";
import society from "assets/img/brand/society.png";
import slider1 from "../assets/img/brand/slider4.jpg";
import slider2 from "../assets/img/brand/slider2.jpeg";
import slider3 from "../assets/img/brand/slider5.jpg";
import about from "assets/img/brand/aboutus.jpeg";
import nedco from "assets/img/brand/nedco.png";
import gra from "assets/img/brand/gra.png";
import face4 from "assets/img/brand/face4.jpg";
import face1 from "assets/img/brand/face1.jpg";
//components
import Slider from "react-slick";

var settings = {
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  dots: false,
  responsive: [
    {
      breakpoint: 450,
      settings: {
        centerMode: true,
        slidesToShow: 1,
      },
    },
  ],
};

var clientSettings = {
  infinite: true,
  speed: 4000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  dots: false,
  responsive: [
    {
      breakpoint: 450,
      settings: {
        centerMode: true,
        slidesToShow: 1,
      },
    },
  ],
};

function handleFormSubmit() {
  console.log("submitted");
}

function LandingPage() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [color, setColor] = React.useState("white");
  const [collapseOpen, setCollapseOpen] = React.useState(false);

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");

  const newItems = [
    {
      id: 1,
      img: client1,
    },
    {
      id: 2,
      img: client2,
    },
    {
      id: 3,
      img: client3,
    },
    {
      id: 4,
      img: client4,
    },
    {
      id: 5,
      img: client5,
    },
    {
      id: 6,
      img: client6,
    },
    {
      id: 7,
      img: client7,
    },
    {
      id: 8,
      img: client8,
    },
    {
      id: 9,
      img: client9,
    },
    {
      id: 10,
      img: client10,
    },
    {
      id: 11,
      img: client11,
    },
    {
      id: 12,
      img: client12,
    },
    {
      id: 13,
      img: client13,
    },
    {
      id: 14,
      img: client14,
    },
    {
      id: 15,
      img: client15,
    },
    {
      id: 16,
      img: client16,
    },
    {
      id: 17,
      img: client17,
    },
    {
      id: 18,
      img: client18,
    },
    {
      id: 19,
      img: client19,
    },
    {
      id: 20,
      img: client20,
    },
    {
      id: 21,
      img: client21,
    },
    {
      id: 22,
      img: client22,
    },
    {
      id: 23,
      img: client23,
    },
  ];

  const courses = [
    {
      id: 1,
      title: "Modules 1",
      aim: "To draw attention to essential leadership skills required of directors of MDAs in evolving a professional public sector organisation that delivers excellence to its stakeholders;",
      duration: "3",
    },
    {
      id: 2,
      title: "Modules 2",
      aim: "To emphasize the core skills and mindset required for succeeding as professionals and technocrats in an environment heavily dominated and influenced by politicians;",
      duration: "2",
    },
    {
      id: 3,
      title: "",
      aim: "",
      duration: "",
    },
  ];

  const clients = [
    {
      id: 1,
      logo: gra,
      title: "Change Management Coordinator, Ghana Revenue Authority",
      text: "We’re very impressed with how GSR consulting provided quality and tailor-made training services on project management to some of our key staff who are engaged on different projects. Their ability to make the training very practical is commendable”.",
    },
    {
      id: 2,
      logo: nedco,
      title: "Performance Management and HR Services, NEDCo",
      text: "“GSR Consulting’s training has dismantled certain assumptions I had about people management. I recommend their services to managers at all levels and people who aspire to be in any management position”. ",
    },
    {
      id: 3,
      logo: society,
      title: " Head of Human Resource, Societe General Ghana",
      text: "“GSR Consulting has well-seasoned and expert resource persons who are able to relate theory to practice. The organization is always focused on delivering high-impact interventions that impact the bottom line. They are reliable” ",
    },
    {
      id: 4,
      logo: client12,
      title: "Health and Safety Unit, VRA – Accra",
      text: "“GSR Consulting facilitated a training Workplace Relations and Occupational Health for some of our Staff. This program has helped to establish stronger ties among our staff and improved the services we offer to our clients. Good work and well done GSR”. ",
    },
  ];
  const { bestCourses } = data;

  React.useEffect(() => {
    AOS.init({
      duration: 2000,
    });


    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("info");
        setColor("black");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
        setColor("white");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  }, []);

  const handleAppClick = () => {
    if (collapseOpen === true) {
      document.documentElement.classList.toggle("nav-open");
      setCollapseOpen(false);
    }
  };

  return (
    <div>
      <div id="app">
        {/*Home Start */}
        <h1 className="sr-only">Home section</h1>
        <Navbar className={"fixed-top " + navbarColor} expand="lg">
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
                      className={color + " my-auto"}
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
                  <NavLink href="#Home" className="scroll mr-3">
                    HOME
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink href="#about-us" className="scroll mr-3">
                    ABOUT
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink href="#services" className="scroll mr-3">
                    SERVICES
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#contact-us" className="scroll mr-3">
                    CONTACT US
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

        <div onClick={() => handleAppClick()}>
          <section id="Home">
            {/*nav end*/}
            <div id="slider">
              {/* START REVOLUTION SLIDER 5.0 */}
              <div className="rev_slider_wrapper">
                <div id="slider1" className="rev_slider" data-version="5.0">
                  <ul>
                    <li
                      data-transition="slideup"
                      data-title="01"
                      data-delay="5000"
                      style={{
                        backgroundColor: "black",
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      {/* MAIN IMAGE */}
                      <img
                        src={slider1}
                        alt="cover"
                        style={{
                          width: "100%",
                          height: "100%",
                          opacity: "0.4",
                          objectFit: "cover",
                        }}
                      />
                      {/* LAYER NR. 1 */}
                      <h1
                        className="tp-caption News-Title text-center"
                        data-x="middle"
                        data-hoffset=""
                        data-y="middle"
                        data-voffset=""
                        data-whitespace="normal"
                        data-transform_idle="o:1;"
                        data-transform_in="y:-50px;opacity:0;s:1500;e:Power3.easeOut;"
                        data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"
                        data-start="1000"
                        data-fontsize="65"
                      >
                        Management
                      </h1>
                      <h1
                        className="tp-caption News-Title  text-center middleman"
                        data-x="middle"
                        data-hoffset=""
                        data-y="middle"
                        data-voffset="70"
                        data-whitespace="normal"
                        data-transform_idle="o:1;"
                        data-transform_in="x:-50px;opacity:0;s:2000;e:Power3.easeOut;"
                        data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"
                        data-start="1500"
                        data-width="670"
                        data-fontsize="65"
                      >
                        and <span>leadership</span>
                      </h1>
                      <p
                        className="tp-caption News-Title  text-center news-liner"
                        data-x="middle"
                        data-hoffset=""
                        data-y="middle"
                        data-voffset="125"
                        data-whitespace="normal"
                        data-transform_in="z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;s:1000;e:Power2.easeOut;"
                        data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"
                        data-start="2200"
                        data-width="870"
                      >
                        Management and leadership development training and
                        consulting.
                      </p>
                    </li>
                    <li
                      data-transition="slideup"
                      data-title="02"
                      data-delay="5000"
                      style={{
                        backgroundColor: "black",
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      {/* MAIN IMAGE */}
                      <img
                        src={slider2}
                        alt="cover"
                        style={{
                          width: "100%",
                          height: "100%",
                          opacity: "0.4",
                          objectFit: "cover",
                        }}
                      />
                      {/* LAYER NR. 1 */}
                      <h1
                        className="tp-caption News-Title text-center"
                        data-x="middle"
                        data-hoffset=""
                        data-y="middle"
                        data-voffset=""
                        data-whitespace="normal"
                        data-transform_idle="o:1;"
                        data-transform_in="y:-50px;opacity:0;s:1500;e:Power3.easeOut;"
                        data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"
                        data-start="1000"
                        data-fontsize="65"
                      >
                        Management
                      </h1>
                      <h1
                        className="tp-caption News-Title  text-center middleman"
                        data-x="middle"
                        data-hoffset=""
                        data-y="middle"
                        data-voffset="70"
                        data-whitespace="normal"
                        data-transform_idle="o:1;"
                        data-transform_in="x:-50px;opacity:0;s:2000;e:Power3.easeOut;"
                        data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"
                        data-start="1500"
                        data-width="670"
                        data-fontsize="65"
                      >
                        and <span>leadership</span>
                      </h1>
                      <p
                        className="tp-caption News-Title  text-center news-liner"
                        data-x="middle"
                        data-hoffset=""
                        data-y="middle"
                        data-voffset="125"
                        data-whitespace="normal"
                        data-transform_in="z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;s:1000;e:Power2.easeOut;"
                        data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"
                        data-start="2200"
                        data-width="870"
                      >
                        Management and leadership development training and
                        consulting.
                      </p>
                    </li>
                    <li
                      data-transition="slideup"
                      data-title="03"
                      data-delay="5000"
                      style={{
                        backgroundColor: "black",
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      {/* MAIN IMAGE */}
                      <img
                        src={slider3}
                        alt="cover"
                        style={{
                          width: "100%",
                          height: "100%",
                          opacity: "0.4",
                          objectFit: "cover",
                        }}
                      />
                      {/* LAYER NR. 1 */}
                      <h1
                        className="tp-caption News-Title text-center"
                        data-x="middle"
                        data-hoffset=""
                        data-y="middle"
                        data-voffset=""
                        data-whitespace="normal"
                        data-transform_idle="o:1;"
                        data-transform_in="y:-50px;opacity:0;s:1500;e:Power3.easeOut;"
                        data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"
                        data-start="1000"
                        data-fontsize="60"
                      >
                        Management
                      </h1>
                      <h1
                        className="tp-caption News-Title  text-center middleman"
                        data-x="middle"
                        data-hoffset=""
                        data-y="middle"
                        data-voffset="70"
                        data-whitespace="normal"
                        data-transform_idle="o:1;"
                        data-transform_in="x:-50px;opacity:0;s:2000;e:Power3.easeOut;"
                        data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"
                        data-start="1500"
                        data-width="670"
                        data-fontsize="60"
                      >
                        {" "}
                        and <span>leadership</span>{" "}
                      </h1>
                      <p
                        className="tp-caption News-Title  text-center news-liner"
                        data-x="middle"
                        data-hoffset=""
                        data-y="middle"
                        data-voffset="125"
                        data-whitespace="normal"
                        data-transform_in="z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;s:1000;e:Power2.easeOut;"
                        data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"
                        data-start="2200"
                        data-width="870"
                      >
                        Management and leadership development training and
                        consulting.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              {/* END OF SLIDER WRAPPER */}
              {/* END REVOLUTION SLIDER */}
            </div>
          </section>
          <section id="about-us">
            <div id="about us-1" className="big-padding">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="left-section">
                      <img
                        src={face1}
                        width={542}
                        height={470}
                        style={{ objectFit: "cover" }}
                        alt="pineapple"
                        className="element-center"
                      />
                      <div
                        className="overlay"
                        style={{ width: 542, height: 470 }}
                      ></div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="right-section">
                      <h4 className="head-subtitle">About Us</h4>
                      <h2 className="big-text" style={{ marginLeft: "0px" }}>
                        We Are <strong>GSR </strong>Consulting
                      </h2>
                      <hr />
                      <p>
                        Welcome to our site! We’re excited you’re exploring our
                        service offerings. For more than a decade, our Company
                        has been a key industry player in management and
                        leadership development training and consulting.
                      </p>

                      <h4>Our Passion</h4>
                      <p>
                        We take a great delight in seeing organizations become
                        efficient and deliver results through the deployment of
                        well-developed and motivated employees, particularly top
                        executives.
                      </p>
                      <h4>Our Vision</h4>
                      <p>
                        We exist to deliver affordable, quality and relevant
                        management and leadership training and consultancy
                        solutions, employing modern adult learning tools and
                        methods
                      </p>
                      <h4>Our Mission</h4>
                      <p>
                        To be Africa’s leading provider of high-impact,
                        leadership and management training and consultancy
                        services
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="services" style={{ marginTop: "-70px" }}>
            <div id="service-2" className="big-padding">
              <div className="container">
                <h4 className="head-subtitle">Our Services</h4>
                <h2 className="big-text" style={{ marginLeft: "0px" }}>
                  What We <strong>Do</strong>
                </h2>
                <hr />
                <div className="container">
                        <h2 className="big-text text-center mb-5"><strong>TRAININGS</strong></h2>
                  <div className="row">
                    <div className="col-md-6">
                      <img
                        src={face4}
                        width={542}
                        alt="pineapple"
                        className="element-center"
                        style={{ objectFit: "cover", height: "100%" }}
                      />
                    </div>
                    <div className="col-md-6">
                      <div>
                        <h3>Our Training Philosophy & Pedagogy</h3>
                        <p>
                          We operate a philosophy of training built on a
                          methodology that incorporates a variety of relevant
                          practical, reflective sessions involving exercises and
                          activities. <br />
                          This means that training sessions are necessarily
                          followed by a list of:
                        </p>
                        <p>
                          a) <strong>Key Ideas</strong> that can be applied to
                          the work situation;
                        </p>
                        <p>
                          b) <strong>Learning & Growth Points</strong> outlining
                          the{" "}
                          <strong>
                            habits, attitudes and behaviours (HABs)
                          </strong>{" "}
                          that delegates would need to{" "}
                          <strong>stop, start or strengthen (3S)</strong> in
                          order to activate and implement the necessary changes
                          arising from the knowledge gained from the training:
                        </p>
                        <p>
                          c) <strong>A Personal Action Plan</strong> – which
                          outlines:
                          <span className="list">
                            <ul>
                              <li>
                                <p>The Major Actions to be taken;</p>
                              </li>
                              <li>
                                <p>
                                  Resources required for taking such actions;
                                </p>
                              </li>
                              <li>
                                <p>
                                  Specific help/assistance required from any
                                  person or entity;
                                </p>
                              </li>
                              <li>
                                <p>Timelines for accomplishing such action.</p>
                              </li>
                            </ul>
                          </span>
                        </p>
                        <a
                          style={{ color: "white", backgroundColor: "#17d0cf" }}
                          role="button"
                          href="/training-offerings"
                          className="btn button"
                        >
                          See All Training offerings
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="container mid-level-padding">
                        <h2 className="big-text text-center mb-5"><strong>CONSULTANCY</strong></h2>
                    <div className="row">
                        <div className="col-md-6">
                        <div>
                            <h3>We have three consultancy products that have been designed exclusively for public sector organisation, and
                              two others for private sectors organisation, but which public sector organisations would also find useful.
                            </h3>
                            <br/>
                            <h3>Public Sector</h3>
                            <div className="list">
                              <ul>
                                <li><p>Exclusively Public Sector Chief Executives (EPSCE)<br/>
                                  (Support Public Sector Leaders to Achieve Extraordinary Results)
                                </p></li>
                                <li><p>Public Sector Support International (Retooling Government for Results) 
                                  Cost-Saving Strategies for Government and Public Sectors.
                                  </p></li>
                                <li><p>Public Service Excellence Program</p></li>
                              </ul>
                            </div>
                            
                           <h3>Private Sectors</h3>

                           <div className="list">
                              <ul>
                                <li><p>HR Transformations</p></li>
                                <li><p>HR Outsourcing Modules</p></li>
                              </ul>
                            </div>

                            <a
                              style={{ color: "white", backgroundColor: "#17d0cf" }}
                              role="button"
                              href="/consultancy"
                              className="btn button mt-2"
                            >
                              See All Consultancy Offerings
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                        <img
                            src={face1}
                            width={542}
                            style={{objectFit:"cover", height:"100%"}}
                            alt="pineapple"
                            className="element-center"
                          />
                        </div>
                    </div>
                </div>  
              </div>

              {/*  service-2 end */}
              {/* service-2 start */}
              <div id="service-3" className="pt-8">
                <div className="container">
                  <h4 className="head-subtitle">Our Clients</h4>
                  <h2
                    className="big-text"
                    style={{ marginLeft: 0, color: "black" }}
                  >
                    <strong>Excellence</strong> Services
                  </h2>
                  <hr />
                  <div className="row wow fadeInUp" data-wow-duration="2s">
                    <div className="col-sm-12">
                      <div className="bottom-section text-center">
                        <Row>
                          <Col md="11" className="ml-auto mr-auto">
                            <Slider
                              {...settings}
                              infinite={newItems.length > 4}
                            >
                              {newItems.map((value, key) => (
                                <div className="col-sm-3 col-xs-6" key={key}>
                                  <div style={{ textAlign: "center" }}>
                                    <img src={value.img} alt=""
                                      style={{width: "200px",height: "auto",objectFit: "cover",}}
                                    />
                                  </div>
                                </div>
                              ))}
                            </Slider>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* service-2 end */}
          </section>
          {/*  services end*/}
          <section id="portfolio">
            <div id="portfolio3" className="mid-level-padding">
              <div className="container">
                {/* <div className="row">
                    <div className="col-xs-12">
                      <div className="section-top-heading">
                        <h4 className="head-subtitle">Search our courses</h4>
                        <h2 className="big-text" style={{marginLeft:0}}>Browse Our <strong>Best Courses</strong></h2>
                        <hr/>
                      </div>
                    </div>
                  </div> */}
                <h4 className="head-subtitle">Search our courses</h4>
                <h2 className="big-text" style={{ marginLeft: "0px" }}>
                  Browse Our <strong>Best Courses</strong>
                </h2>
                <hr />
                <Row>
                  {bestCourses.map((value, key) => (
                    <Col md="4" key={value.id}>
                      <Card className="main_card">
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
                            View details <i className="fa fa-chevron-right"></i>
                          </a>
                        </div>
                        <CardBody>
                          <CardTitle tag="h5">{value.title}</CardTitle>
                          {/* <CardText>
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                          </CardText> */}
                          <CardText>
                            <small className="text-muted">
                              Modules ({value.modules && value.modules.length})
                            </small>
                          </CardText>
                        </CardBody>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            </div>

            <div id="portfolio3" className="mid-level-padding">
              <div className="container">
                <h4 className="head-subtitle">our clients</h4>
                <h2 className="big-text" style={{ marginLeft: "0px" }}>
                  What Our <strong>Clients </strong>Say About Us
                </h2>
                <hr />
                <Row>
                  <Col md="12" className="mr-auto ml-auto">
                    <Slider {...clientSettings} infinite={clients.length > 3}>
                      {clients.map((value, key) => (
                        <Col>
                          <Card
                            style={{
                              border: "1px solid #f8f9fa",
                              width: "auto",
                            }}
                          >
                            <img
                              alt="#"
                              src={value.logo}
                              style={{
                                borderRadius: "100%",
                                width: "70px",
                                height: "70px",
                                marginTop: "10px",
                                marginLeft: "15px",
                                objectFit: "cover",
                              }}
                            />
                            <CardBody>
                              <CardTitle
                                style={{ fontWeight: "bold", height: "30px" }}
                              >
                                {value.title}
                              </CardTitle>
                              <p style={{ marginTop: "40px" }}>{value.text}</p>
                            </CardBody>
                          </Card>
                        </Col>
                      ))}
                    </Slider>
                  </Col>
                </Row>
              </div>
            </div>

            {/*contact-us-1 end*/}
            {/* contact-us2 start */}
            <div id="contact-us" className="mid-level-padding">
              <div className="container">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="left-section">
                      <div className="vertical-heading">
                        <h2>
                          Get <br />
                          in <strong>Touch</strong>
                        </h2>
                      </div>
                      <p>What issues do you have? We are here to help you.</p>
                      <div id="countries">
                        <div className="row">
                          <div className="col-sm-8">
                            <h4>Ghana</h4>
                            <ul className="details one">
                              <li>
                                <i
                                  className="fa fa-mobile mr-3"
                                  aria-hidden="true"
                                />
                                030 396 8042
                              </li>
                              <li>
                                <i
                                  className="fa fa-envelope mr-3"
                                  aria-hidden="true"
                                />
                                <a
                                  href="mailto:info@resourcegsr.com"
                                  style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                  }}
                                >
                                  info@resourcegsr.com
                                </a>
                              </li>
                              <li>
                                <i
                                  className="fa fa-map-marker mr-3"
                                  aria-hidden="true"
                                />
                                <span>Accra, Ghana</span>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-4"></div>
                        </div>
                      </div>
                      <ul className="list-inline" id="horizontal-list">
                        <li>
                          <a
                            href="https://www.facebook.com/kokrokooad/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://twitter.com/kokrokooad?s=09"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://instagram.com/kokrokooad?igshid=1sxxfctr88krt"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.youtube.com/channel/UC-zQqCcXEi3tMLFEKl3jm0g"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa fa-youtube" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/company/kokrokoo-advertising-partners-webapp"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="right-section" id="form-elements">
                      <form onSubmit={handleFormSubmit}>
                        <h4>Let's Talk</h4>
                        <p>We will provide you with the support you want.</p>
                        <div className="row">
                          <div className="col-md-12 center">
                            <div id="result" />{" "}
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Your Name"
                                required="required"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Email Address"
                                required="required"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Phone No."
                                required="required"
                                name="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Subject"
                                required="required"
                                name="subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            placeholder="Message"
                            required="required"
                            id="message"
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                          />
                        </div>
                        <button
                          type="submit"
                          className="btn button"
                          style={{ color: "white", backgroundColor: "#17d0cf" }}
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div class="loader">
            <div id="cssload-pgloading">
              <div class="cssload-loadingwrap">
                <ul class="cssload-bokeh">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>

            <div class="cssload-loadingwrap">
              <ul class="cssload-bokeh">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
          <AuthFooter />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
