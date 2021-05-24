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
                    <CardSubtitle>{props.subtitle}</CardSubtitle>
                </CardBody>
                <CardFooter>
                    <div className="align-content-center">
                        <p>Note : Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus aliquam autem, dolores eius eligendi est eum iusto laudantium
                            molestiae nam nesciunt nostrum quasi repellat reprehenderit sint sit velit
                            voluptatem voluptatibus?</p>
                    </div>
                </CardFooter>
            </Card>
        </Col>
    </Fragment>
);

export default CardNya;