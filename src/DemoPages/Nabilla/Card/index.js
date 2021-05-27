import React,{Fragment} from "react";
import {Card, CardBody, CardImg, CardSubtitle, CardTitle, Col, CardFooter} from "reactstrap";

const CardNya =(props) => (
    <Fragment>
        <Col md="3">
            <Card className="main-card mb-3">
                <CardImg top width="25%"
                         src={props.image}
                         alt="Card image cap"/>
                <CardBody>
                    <CardTitle>{props.title}</CardTitle>
                    <CardSubtitle>{props.location}</CardSubtitle>
                    <CardSubtitle>{props.date}</CardSubtitle>
                    <CardSubtitle>{props.participant}</CardSubtitle>
                </CardBody>
                <CardFooter>
                    <div className="align-content-center">
                        <p>{props.note}</p>
                    </div>
                </CardFooter>
            </Card>
        </Col>
    </Fragment>
);

export default CardNya;