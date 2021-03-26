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
  Button,
  Col,
  Row
 
} from "reactstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';
//images
import client1 from '../assets/img/brand/client1.jpeg';
import client2 from '../assets/img/brand/client2.jpeg';
import client3 from '../assets/img/brand/client3.jpeg';
import client4 from '../assets/img/brand/client4.jpeg';
import logo from '../assets/img/brand/logo.png';
import slider1 from '../assets/img/brand/s-1.jpg';
import slider2 from '../assets/img/brand/s-3.jpg';
import slider3 from '../assets/img/brand/s-4.jpg';
import about from 'assets/img/brand/aboutus.jpg';
import manager from 'assets/img/brand/manager.jpg';
import leader from 'assets/img/brand/leader.jpg';
import leader2 from 'assets/img/brand/leader2.jpg';
import productive from 'assets/img/brand/productive.jpg';
import senior from 'assets/img/brand/senior.jpg';
import logo1 from 'assets/img/brand/logo-1.jpg';
//components
import Slider from "react-slick";

var settings = {
  dots: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay:true,
  dots:false,
  responsive:[
      {
        breakpoint:450,
        settings:{
            centerMode:true,
            slidesToShow:1
        }
      }
    ]
};

function LandingPage(){
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [color, setColor] = React.useState('white')
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [registerCollpase, setRegisterCollapse] = React.useState(false);
  const [LoginOpen, setLoginOpen] = React.useState(false);
  const [loginCollapse, setLoginCollapse] = React.useState(false);

  const [name, setName]=React.useState("");
  const [email, setEmail]=React.useState("");
  const [phone, setPhone]=React.useState("");
  const [subject, setSubject]=React.useState("");
  const [message, setMessage]=React.useState("");

  const newItems=[
    {
      id:1,
      img:client1,
    },
    {
      id:2,
      img:client2,
    },
    {
      id:3,
      img:client3,
    },
    {
      id:4,
      img:client4,
    },
    {
      id:5,
      img:client2,
    }
    
  ]



  React.useEffect(() => {
    AOS.init({
      duration : 2000
    });

    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("info");
        setColor('black')
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
        setColor('white')
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  },[]);

  const handleAppClick=()=>{
    if(collapseOpen === true){
      document.documentElement.classList.toggle("nav-open");
      setCollapseOpen(false)
    }
  }

      return (
        <div>
          <div id="app">
          
            {/*Home Start */}
          <h1 className="sr-only">Home section</h1>
          <Navbar className={"fixed-top " + navbarColor} expand="lg" >
          <Container>
          <div className="navbar-translate">
            <NavbarBrand
            data-placement="bottom"
            >
            <a href="/auth/landing-page">
            <h3 className={color} style={{fontWeight:300, textDecoration:"none", textTransform:"capitalize", fontSize:"30px"}}>
            {/* <img alt="Course App" src={logo1} style={{height:"55px", width:"auto"}}/> */} <span style={{fontWeight:700}}>GRS</span> Consulting
            
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
            <i className="fa fa-bars" style={{color:"#17d0cf"}}/>
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
      
      <div 
            onClick={()=>handleAppClick()}>
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
                      >
                        {/* MAIN IMAGE */}
                        <img
                          src={slider1}
                          alt="cover"
                          style={{width:"auto", height:"120px"}}
                          className="image-filter"
                        />
                        {/* LAYER NR. 1 */}
                        <h1
                         className="tp-caption News-Title text-center"
                        data-x="middle" data-hoffset=""
                        data-y="middle" data-voffset=""
                        data-whitespace="normal"
                        data-transform_idle="o:1;"
                        data-transform_in="y:-50px;opacity:0;s:1500;e:Power3.easeOut;"
                        data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"
                        data-start="1000" data-fontsize="65"
                        >
                          solution
                        </h1>
                        <h1
                         className="tp-caption News-Title  text-center middleman"
                        data-x="middle" data-hoffset=""
                        data-y="middle" data-voffset="70"
                        data-whitespace="normal"
                        data-transform_idle="o:1;"
                        data-transform_in="x:-50px;opacity:0;s:2000;e:Power3.easeOut;"
                        data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"
                        data-start="1500" data-width="670" data-fontsize="65"
                        >
                          for <span>education</span>
                        </h1>
                        <p
                          className="tp-caption News-Title  text-center news-liner"
                        data-x="middle" data-hoffset=""
                        data-y="middle" data-voffset="125"
                        data-whitespace="normal"
                        data-transform_in="z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;s:1000;e:Power2.easeOut;"
                        data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"
                        data-start="2200" data-width="870" 
                        >
                          providing an advanced way of linking you to advertising
                          media outlets with limited human intervention.
                        </p>
                        {/* <div
                          className="tp-caption  News-Title tp-resizeme"
                          data-x="middle"
                          data-y="middle"
                          data-voffset="200"
                          data-hoffset="['-80','-00','-150','-200']"
                          data-transform_idle="o:1;"
                          data-transform_in="z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;s:1000;e:Power2.easeOut;"
                          data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"
                          data-start="3000"
                        >
                          <a href="#about-us" className="btn button first scroll" style={{borderRadius:"20px", marginLeft:"30px"}}>
                            Start Now
                          </a>
                        </div> */}
                      </li>
                      <li
                        data-transition="slideup"
                        data-title="02"
                        data-delay="5000"
                      >
                        {/* MAIN IMAGE */}
                        <img
                          src={slider2}
                          alt="cover"
                          style={{height:1280, width:1920}}
                        />
                        {/* LAYER NR. 1 */}
                        <h1
                            className="tp-caption News-Title text-center"
                        data-x="middle" data-hoffset=""
                        data-y="middle" data-voffset=""
                        data-whitespace="normal"
                        data-transform_idle="o:1;"
                        data-transform_in="y:-50px;opacity:0;s:1500;e:Power3.easeOut;"
                        data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"
                        data-start="1000" data-fontsize="65"
                        >
                          Track
                        </h1>
                        <h1
                          className="tp-caption News-Title  text-center middleman"
                        data-x="middle" data-hoffset=""
                        data-y="middle" data-voffset="70"
                        data-whitespace="normal"
                        data-transform_idle="o:1;"
                        data-transform_in="x:-50px;opacity:0;s:2000;e:Power3.easeOut;"
                        data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"
                        data-start="1500" data-width="670" data-fontsize="65"
                        >
                          your <span>Progress</span>
                        </h1>
                        <p
                          className="tp-caption News-Title  text-center news-liner"
                       data-x="middle" data-hoffset=""
                       data-y="middle" data-voffset="125"
                       data-whitespace="normal"
                       data-transform_in="z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;s:1000;e:Power2.easeOut;"
                       data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"
                       data-start="2200" data-width="870" 
                        >
                          Tracking of ad campaigns while sitting at the comfort
                          of your homes and offices.
                        </p>
                        {/* <div
                          className="tp-caption  News-Title tp-resizeme"
                          data-x="middle"
                          data-y="middle"
                          data-voffset="200"
                          data-hoffset="['-80','-80','-150','-200']"
                          data-transform_idle="o:1;"
                          data-transform_in="z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;s:1000;e:Power2.easeOut;"
                          data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"
                          data-start="3000"
                        >
                          <a href="#about-us" className="btn button first scroll" style={{borderRadius:"20px"}}>
                            Start Now
                          </a>
                        </div> */}
                      </li>
                      <li
                        data-transition="slideup"
                        data-title="03"
                        data-delay="5000"
                      >
                        {/* MAIN IMAGE */}
                        <img
                          src={slider3}
                          alt="cover"
                          style={{height:1280, width:1920}}
                        />
                        {/* LAYER NR. 1 */}
                        <h1
                          className="tp-caption News-Title text-center"
                        data-x="middle" data-hoffset=""
                        data-y="middle" data-voffset=""
                        data-whitespace="normal"
                        data-transform_idle="o:1;"
                        data-transform_in="y:-50px;opacity:0;s:1500;e:Power3.easeOut;"
                        data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"
                        data-start="1000" data-fontsize="60"
                        >
                          Growing
                        </h1>
                        <h1
                          className="tp-caption News-Title  text-center middleman"
                        data-x="middle" data-hoffset=""
                        data-y="middle" data-voffset="70"
                        data-whitespace="normal"
                        data-transform_idle="o:1;"
                        data-transform_in="x:-50px;opacity:0;s:2000;e:Power3.easeOut;"
                        data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"
                        data-start="1500" data-width="670" data-fontsize="60"
                        >
                          {" "}
                          Your <span>Knowledge</span>
                          {" "}
                        </h1>
                        <p
                        className="tp-caption News-Title  text-center news-liner"
                       data-x="middle" data-hoffset=""
                       data-y="middle" data-voffset="125"
                       data-whitespace="normal"
                       data-transform_in="z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;s:1000;e:Power2.easeOut;"
                       data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"
                       data-start="2200" data-width="870" 
                        >
                          Ensuring better accountability on the part of
                          advertising media outlets and your marketing teams.
                        </p>
                        {/* <div
                          className="tp-caption  News-Title tp-resizeme"
                          data-x="middle"
                          data-y="middle"
                          data-voffset="200"
                          data-hoffset="['-80','-80','-150','-200']"
                          data-transform_idle="o:1;"
                          data-transform_in="z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;s:1000;e:Power2.easeOut;"
                          data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"
                          data-start="3000"
                        > 
                          <a href="#about-us" className="btn button first scroll" style={{borderRadius:"20px"}}>
                            Start Now
                          </a>
                        </div> */}
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
                            src={about}
                            width={542}
                            height={470}
                            style={{objectFit:"cover"}}
                            alt="pineapple"
                            className="element-center"
                          />
                        </div>
                    </div>
                    <div className="col-sm-6" >
                      <div className="right-section">
                      <h4 className="head-subtitle">About Us</h4>
                      <h2 className="big-text" style={{marginLeft:"0px"}}>
                        We Are <strong>GRS </strong>Consulting
                        
                        </h2>
                        <hr />
                        <p>
                        Welcome to our site! We’re excited you’re exploring our service offerings. For more than a decade, our Company has been a key industry player in management and leadership development training and consulting. 
                        </p>
                        
                        <h4>Our Passion</h4>
                        <p>We take a great delight in seeing organizations become efficient and deliver results through the deployment of well-developed.
                        </p>
                        <h4>Our Vision</h4>
                        <p>We exist to deliver affordable, quality and relevant management and leadership training and consultancy solutions, employing modern adult learning tools and methods</p>
                        <h4>Our Mission</h4>
                        <p>To be Africa’s leading provider of high-impact, leadership and management training and consultancy services</p>
                      </div>
                    </div>
                      </div>
                </div>
              </div>
              </section>
              <section id="services" style={{marginTop:"-70px"}}>
              {/*  service-1 start */}
              {/* <div id="service-1" className="big-padding">
                <div className="container">
                  <div className="row">
                    <div className="col-xs-12 col-sm-6  wow slideInDown">
                        <div className="left-section">
                          <img
                            src={about}
                            style={{overflow:"hidden",height:"auto", width:"500px"}}
                            alt="laptop"
                          />
                        </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="right-section wow slideInRight">
                        <h4 className="head-subtitle">Our Services</h4>
                        <h2 className="big-text" style={{marginLeft:"0px"}}>What We <strong>Do</strong></h2>
                      <hr/>
                        <div className="feature">
                              <h4>The Success-Prone Manager (Management Development Training)</h4>
                              <p>
                                Have all your ads played seamlessly
                                by your preferred radio stations just by the click of a button.
                              </p>
                        </div>
                        <div className="feature middle">
                              <h4>The Turbulence-Proof Leader (Leadership Development Training)</h4>
                              <p>
                                At your own comfort, we link you to all our
                                TV station partners for production of your ads
                              </p>
                        </div>
                        <div className="feature middle">
                              <h4>General Capacity & Productivity Enhancement Training</h4>
                              <p>
                                At your own comfort, we link you to all our
                                TV station partners for production of your ads
                              </p>
                        </div>
                        <div className="feature middle">
                              <h4>Senior-Level Public Leadership Program </h4>
                              <p>
                                At your own comfort, we link you to all our
                                TV station partners for production of your ads
                              </p>
                        </div>
                      </div>
                      <div className="feature">
                        <div className="row"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/*  service-1 end */}
              {/*  service-2 start */}
              <div id="service-2" className="big-padding">
                <div className="container">
                      <h4 className="head-subtitle">Our Services</h4>
                      <h2 className="big-text" style={{marginLeft:"0px"}}>What We <strong>Do</strong></h2>
                        <hr/>
                      {/* <div className="wow slideInLeft">
                        <h4 className="head-subtitle">Our Services</h4>
                        <h2 className="big-text" style={{marginLeft:"0px"}}>What We <strong>Do</strong></h2>
                      <hr/>
                      </div> */}
                <div id="responsiveTabsDemo">
                  <ul className="text-center">
                    <li>
                      <a href="#tab-1"><strong>Success-Prone</strong> Manager</a>
                    </li>
                    <li>
                      <a href="#tab-2"><strong>Turbulence-Proof</strong> Leader</a>
                    </li>
                    <li>
                      <a href="#tab-3">General <strong>Capacity & Productivity Enhancement</strong></a>
                    </li>
                    <li>  
                      <a href="#tab-4"><strong>Senior-Level Public</strong></a>
                    </li>
                  </ul>
                  <div id="tab-1">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6">
                          <img
                            src={manager}
                            width={542}
                            height={470}
                            alt="pineapple"
                            className="element-center"
                            style={{objectFit:'cover'}}
                          />
                        </div>
                        <div className="col-md-6">
                          <div className="tabs-bg">
                            <h3>The Success-Prone Manager (Management Development Training)</h3>
                            <div className="list">
                            <ul>
                              <li><p>Entry Level Mastery (Team Leaders and New Managers)</p> </li>
                              <li><p>Intermediate Level Mastery (Middle Managers) </p> </li>
                              <li><p>Advanced Level Mastery (Senior Managers)</p> </li>
                              <li><p>Director Level Mastery (HODs, Directors & Deputy Directors)</p> </li>
                              <li><p>Management/CEO Level Mastery (CEOs, MDs, GMs, DGs & Chief Directors)</p> </li>
                              <li><p>Board Level Mastery (Board Members)</p> </li>
                            </ul>
                            </div>
                            <a
                              style={{borderRadius:"20px", color:"white"}}
                              role="button"
                              href="#contact-us2"
                              className="btn button hvr-shutter-out-horizontal scroll"
                            >
                              Get In Touch
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="tab-2">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6">
                          <img
                            src={leader2}
                            width={542}
                            height={470}
                            style={{objectFit:"cover"}}
                            alt="pineapple"
                            className="element-center"
                          />
                        </div>
                        <div className="col-md-6">
                          <div className="tabs-bg">
                            <h3>The Turbulence-Proof Leader (Leadership Development Training)</h3>
                            <div className="list">
                              <ul>
                                <li><p>Entry Level Mastery (Team Leaders and New Managers)</p></li>
                                <li><p>Intermediate Level Mastery (Middle Managers)</p></li>
                                <li><p>Advanced Level Mastery (Senior Managers)</p></li>
                                <li><p>Director Level Mastery (HODs, Directors & Deputy Directors)</p></li>
                                <li><p>Management/CEO Level Mastery (CEOs, MDs, GMs, DGs & Chief Directors)</p></li>
                                <li><p>Board Level Mastery (Board Members)</p></li>
                              </ul>
                            </div>
                            <a
                              role="button"
                              href="#contact-us2"
                              className="btn button hvr-shutter-out-horizontal scroll"
                              style={{borderRadius:"20px", color:"white"}}
                            >
                              Get In Touch
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="tab-3">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6">
                          <img
                            src={productive}
                            width={542}
                            height={470}
                            style={{objectFit:"cover"}}
                            alt="pineapple"
                            className="element-center"
                          />
                        </div>
                        <div className="col-md-6">
                          <div className="tabs-bg">
                            <h3>General Capacity & Productivity Enhancement Training</h3>
                            <div className="list">
                              <ul>
                                <li><p> Maximizing Value for the HR Function</p></li>
                                <li><p>Train the Trainer Course for Training Facilitators</p></li>
                                <li><p>Becoming a High-Performing Employee</p></li>
                                <li><p>Office, Administrative and ICT skills for Receptionists, Secretaries and Personal Assistants </p></li>
                                <li><p>Problem solving Skills for Managers and Supervisors</p></li>
                                <li><p>Essential work Attitudes Training</p></li>
                                <li><p>How to Successfully Manage Change Projects </p></li>
                              </ul>
                            </div>
                            <a
                              role="button"
                              href="#contact-us2"
                              className="btn button hvr-shutter-out-horizontal scroll"
                              style={{borderRadius:"20px", color:"white"}}
                            >
                              Get In Touch
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="tab-4">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6">
                          <img
                            src={senior}
                            width={542}
                            height={470}
                            style={{objectFit:"cover"}}
                            alt="pineapple"
                            className="element-center"
                          />
                        </div>
                        <div className="col-md-6">
                          <div className="tabs-bg">
                            {/* <h2>04</h2> */}
                            <h3>
                            Senior-Level Public Leadership Program 
                            </h3>
                            <p>
                              Do you aim at targeting larger audiences from Kokrokoo's
                              TV Stations partners?  Our software
                              which hosts numerous TV stations allows you to transfer ads
                              for advertisement.
                            </p>
                            <a
                              role="button"
                              href="#contact-us2"
                              className="btn button hvr-shutter-out-horizontal scroll"
                              style={{borderRadius:"20px", color:"white"}}
                            >
                              Get In Touch
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/*  service-2 end */}
              {/* service-2 start */}
              <div id="service-3" className="mid-level-padding">
                <div className="container">
                          <h4 className="head-subtitle">Our Clients</h4>
                          <h2 className="big-text" style={{marginLeft:0, color:"black"}}><strong>Excellence</strong> Services
                        </h2>
                        <hr/>
                  <div className="row wow fadeInUp" data-wow-duration="2s">
                    <div className="col-sm-12">
                      <div className="bottom-section text-center">
                        <Row>
                          <Col md="12" >
                        <Slider {...settings} infinite={newItems.length>4}>
                          {newItems.map((value,key)=>(
                          <div className="col-sm-3 col-xs-6" key={key}>
                            <div style={{textAlign:"center"}}>
                              <img src={value.img}  style={{width:"200px", height:"200px", objectFit:"cover"}}/>
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
            {/* <section id="portfolio">
              <div id="portfolio3" className="mid-level-padding">
                <div className="container">
                  <div className="row text-center">
                    <div className="col-xs-12">
                      <div className="section-top-heading">
                        <h2 className="big-text">How it works</h2>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4 wow fadeInLeft">
                      <div className="pricing-table">
                        <div className="type">
                          <h4>Step one</h4>
                        </div>
                        <div className="price">
                          <div className="row" style={{marginRight:"10px", marginLeft:"10px"}}>
                            <div className="col-xs-4 col-md-4">
                              <span className="fa fa-user fa-2x" />
                            </div>
                            <div className="col-xs-8 col-md-8">
                              <p>
                              Upload ad
                              </p>
                            </div>
                          </div>
                        </div>
                        <ul className="packages">
                          <li>
                            <i className="fa fa-check" aria-hidden="true" />
                            Provide personal or organization details
                          </li>
                          <li>
                            <i className="fa fa-check" aria-hidden="true" />
                            Make sure personal details are valid
                          </li>
                          <li>
                            <i className="fa fa-check" aria-hidden="true" />
                            Upload the required documents
                          </li>
                          <li>
                            <i className="fa fa-check" aria-hidden="true" />
                            Submit details
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-sm-4 wow fadeInUp" data-wow-duration="3s">
                      <div className="pricing-table black">
                        <div className="type">
                          <h4>Step two</h4>
                        </div>
                        <div className="price">
                          <div className="row" style={{marginRight:"10px", marginLeft:"10px"}}>
                            <div className="col-xs-4 col-md-4">
                              <span className="fa fa-sign-in fa-2x" />
                            </div>
                            <div className="col-xs-8 col-md-8">
                              <p>Log into your kokrokoo account</p>
                            </div>
                          </div>
                        </div>
                        <ul className="packages">
                          <li>
                            <i className="fa fa-check" aria-hidden="true" />
                            Click "create campaign" button{" "}
                          </li>
                          <li>
                            <i className="fa fa-check" aria-hidden="true" />
                             Select a media house and upload ad file.
                          </li>
                          <li>
                            <i className="fa fa-check" aria-hidden="true" />
                            Schedule ad production times
                          </li>
                          <li>
                            <i className="fa fa-check" aria-hidden="true" />
                            Make payment.
                          </li>
                          <li>
                            <i className="fa fa-check" aria-hidden="true" />
                            Submit ad
                          </li>
                        </ul>
                        <a
                          href="/auth/login-page"
                          className="btn button btn-block text-uppercase"
                          style={{borderRadius:"20px"}}
                        >
                          Get Started
                        </a>
                      </div>
                    </div>
                    <div className="col-sm-4 wow fadeInRight">
                      <div className="pricing-table">
                        <div className="type">
                          <h4>Step three</h4>
                        </div>
                        <div className="price">
                          <div className="row" style={{marginRight:"10px", marginLeft:"10px"}}>
                            <div className="col-xs-4 col-md-4">
                              <span className="fa fa-envelope fa-2x" />
                            </div>
                            <div className="col-xs-8 col-md-8">
                              <p>
                                Selected media house will send a confirmation
                                email/sms for approval.
                              </p>
                            </div>
                          </div>
                        </div>
                        <ul className="packages">
                          
                          <li>
                            <i className="fa fa-check" aria-hidden="true" />
                            Ad is reviewed by media house
                          </li>
                          <li>
                            <i className="fa fa-check" aria-hidden="true" />
                            Confirmation email and sms is sent to you
                          </li>
                          <li>
                            <i className="fa fa-check" aria-hidden="true" />
                            Ad is published live
                          </li>
                          <li>
                            <i className="fa fa-check" aria-hidden="true" />
                            Track your ad anytime
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}
            {/* payment */}
           {/*  <div id="service-3" className="mid-level-padding">
                <div className="container">
                  <div className="row">
                    <div className="col-xs-12 wow slideInLeft">
                      <div className="top-section vertical-heading">
                        <span>Payment</span>
                        <h2
                          className="big-text"
                          style={{color:"black"}}
                        >
                          Payment <strong>Options</strong>
                          <br />
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="row wow fadeInUp" data-wow-duration="2s" style={{marginTop:"50px"}}>
                    <div className="col-sm-12">
                      <div className="bottom-section text-center">
                        <div className="row">
                          <div className="col-sm-3 col-xs-6">
                          <img 
                              src={require("assets/img/brand/Visa-MasterCard.jpg")}
                              alt="visa-master"
                            />
                          </div>
                          <div className="col-sm-3 col-xs-6">
                            <img 
                              src={require("assets/img/brand/mtn.png")}
                              alt="mtn"
                            />
                          </div>
                          <div className="col-sm-3 col-xs-6">
                          <img 
                              src={require("assets/img/brand/voda.jpeg")}
                              alt="voda"
                            />
                          </div>
                          <div className="col-sm-3 col-xs-6">
                          <img 
                              src={require("assets/img/brand/AirtelTigo.jpeg")}
                              alt="airtel"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            {/* contact us start */}
            <section id="contact-us">
              {/*contact-us-1 start */}
              {/* <div id="contact-us1">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-6 padding wow slideInLeft">
                      <div className="left-section">
                        <div className="hovereffect">
                          <a href="https://www.linkedin.com/company/kokrokoo-advertising-partners-webapp" target="_blank" rel="noopener noreferrer">
                            <img
                              src="https://www.themesindustry.com/html/riwa/images/insta1.jpg"
                              alt="social"
                            />
                            <i className="fa fa-linkedin" aria-hidden="true" />
                          </a>
                          <div className="overlay">
                            <a className="social" href="https://www.facebook.com/kokrokooad/" target="_blank" rel="noopener noreferrer">
                              <div>
                                <i className="fa fa-facebook mr-2"/>
                                <span style={{fontSize:"14px", fontWeight:700}}>
                                  Follow Us
                                </span>
                              </div>
                              <div>
                                <p style={{marginLeft:"10px", color:"white"}}>Kokrokoo is coming soon! </p>
                                <div className="subscriber">
                                  <span className="btn button" style={{borderRadius:"20px"}}>
                                    visit page
                                  </span>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 padding wow slideInRight">
                      <div className="right-section">
                        <a className="social" href="https://twitter.com/kokrokooad?s=09" target="_blank" rel="noopener noreferrer">
                          <div>
                            <i
                              className="fa fa-twitter mr-2"
                            />
                            <span style={{fontSize:"14px", fontWeight:700}}>Follow Us</span>
                          </div>
                          <div>
                            <p style={{color:"white"}}>Kokrokoo is coming soon.</p>
                            <div className="subscriber">
                              <span className="btn  button" style={{borderRadius:"20px"}}>visit page</span>
                            </div>
                          </div>
                        </a>
                        <a
                          className="insta-2-3"
                          href="https://instagram.com/kokrokooad?igshid=1sxxfctr88krt"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="pull-left left">
                            <img
                              src="https://www.themesindustry.com/html/riwa/images/insta2.jpg"
                              className="pull-left"
                              alt="social"
                            />
                          </div>
                          <div className="pull-right right">
                            <img
                              src="https://www.themesindustry.com/html/riwa/images/insta3.jpg"
                              className="pull-right"
                              alt="social"
                            />
                          </div>
                          <i className="fa fa-instagram" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/*contact-us-1 end*/}
              {/* contact-us2 start */}
              <div id="contact-us2" className="mid-level-padding">
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
                        <p>
                          What issues do you have? We are here to help
                          you.
                        </p>
                        <div id="countries">
                          <div className="row">
                            <div className="col-sm-8">
                              <h4>Ghana</h4>
                              <ul className="details one">
                                <li>
                                  <i
                                    className="fa fa-mobile"
                                    aria-hidden="true"
                                  />
                                   +233 248 355 387 / +233 547 338 008 

                                </li>
                                <li>
                                  <i
                                    className="fa fa-envelope"
                                    aria-hidden="true"
                                  />
                                  <a href="mailto:enquiries@strategicresourcers.com" style={{textDecoration:"none", color:"inherit"}}>
                                    enquiries@strategicresourcers.com</a>
                                  
                                </li>
                                <li>
                                  <i
                                    className="fa fa-map-marker"
                                    aria-hidden="true"
                                  />
                                  <span>
                                    Accra, Ghana
                                  </span>
                                </li>
                              </ul>
                            </div>
                            <div className="col-sm-4"></div>
                          </div>
                        </div>
                        <ul className="list-inline" id="horizontal-list">
                          <li>
                            <a href="https://www.facebook.com/kokrokooad/" target="_blank" rel="noopener noreferrer">
                              <i className="fa fa-facebook" />
                            </a>
                          </li>
                          <li>
                            <a href="https://twitter.com/kokrokooad?s=09" target="_blank" rel="noopener noreferrer">
                              <i className="fa fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="https://instagram.com/kokrokooad?igshid=1sxxfctr88krt" target="_blank" rel="noopener noreferrer">
                              <i className="fa fa-instagram" />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.youtube.com/channel/UC-zQqCcXEi3tMLFEKl3jm0g" target="_blank" rel="noopener noreferrer">
                              <i className="fa fa-youtube" />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.linkedin.com/company/kokrokoo-advertising-partners-webapp" target="_blank" rel="noopener noreferrer">
                              <i className="fa fa-linkedin" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="right-section" id="form-elements">
                        <form>
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
                                  onChange={(e)=>setName(e.target.value)}
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
                                  onChange={e=>setEmail(e.target.value)}
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
                                  onChange={e=>setPhone(e.target.value)}
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
                                  onChange={e=>setSubject(e.target.value)}
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
                              onChange={e=>setMessage(e.target.value)}
                            />
                          </div>
                          <button
                            type="submit"
                            className="btn button"
                            style={{borderRadius:"20px"}}
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
  };

  export default LandingPage;
  