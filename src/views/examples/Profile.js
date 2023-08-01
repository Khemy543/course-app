/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import data from "../../data.js";

const Profile = (props) => {
  const [trainer, setTrainer] = React.useState(null);

  React.useEffect(() => {
    const user = data.trainers.find(
      (usr) => usr.name === props.match.params.name
    );

    setTrainer(user);
  }, [props.match.params.name]);

  return (
    <>
      <UserHeader trainer={trainer} />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className=" mb-5 mb-xl-0" xl="12">
            <Card className="card-profile shadow">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    {trainer &&
                    (
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="rounded-circle"
                          src={
                            require(`../../assets/img/trainers/${trainer.image}`)
                              .default
                          }
                          style={{ width: "200px", height: "200px", objectFit: "cover" }}
                        />
                      </a>
                    )}
                  </div>
                </Col>
              </Row>
              <CardBody className="pt-0 pt-md-7">
                {/* <Row>
                  <div className="col">
                    <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                      <div>
                        <span className="heading">22</span>
                        <span className="description">Friends</span>
                      </div>
                      <div>
                        <span className="heading">10</span>
                        <span className="description">Photos</span>
                      </div>
                      <div>
                        <span className="heading">89</span>
                        <span className="description">Comments</span>
                      </div>
                    </div>
                  </div>
                </Row> */}
                <div className="text-center mt-6">
                  <h3>
                    { trainer && trainer.name }
                  </h3>
                  <div className="h5 font-weight-300">
                    <i className="ni location_pin mr-2" />
                    Ghana, Accra
                  </div>
                  <div className="h5 mt-4">
                    <i className="ni business_briefcase-24 mr-2" />
                    { trainer && trainer.position }
                  </div>
                  <hr className="my-4" />
                  <div dangerouslySetInnerHTML={{ __html: trainer && trainer.content }}></div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
