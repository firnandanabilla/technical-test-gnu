import React, {Fragment, useEffect, useState} from "react";
import {Card, CardBody, CardImg, CardSubtitle, CardTitle, Col, CardFooter} from "reactstrap";
import axios from "axios";


const CardNya = (props) => {
    //console.log(props.image)
    const [image, setImage] = useState("")

    useEffect(() => {

            axios.get("http://localhost:1616/data/getFoto/" + props.id).then(res => {
                setImage(res.data)
                //console.log(imageArrayPath[index])
            })
        }
    )
    return (
        <Fragment>
            <Col md="3">
                <Card className="main-card mb-3">
                    <CardImg top width="25%"
                             src={"data:image/*;base64,"+image}
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
    )
}

export default CardNya;