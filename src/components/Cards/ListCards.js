import React from 'react';
import {
    Col,
    Row,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardText
} from 'reactstrap';

export default function ListCard(props){
    return(
        <Card>
            <Row>
                <Col>
                    <CardImg width="100%" src={props.image} alt="Card image cap" />
                </Col>
                <Col>
                    <CardBody>
                        <CardTitle tag="h5">Card Title</CardTitle>
                        <CardText>This is a wider card with supporting text below </CardText>
                        <CardText>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </CardText>
                    </CardBody>
                </Col>
            </Row>
        </Card>
    )
}