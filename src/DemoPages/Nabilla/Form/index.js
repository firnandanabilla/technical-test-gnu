import React, {Component, Fragment} from "react";
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import axios from "axios";

import {
    Button,
    Card,
    CardBody,
    CardTitle,
    Col,
    Container, CustomInput,
    Form,
    FormGroup,
    FormText,
    Input,
    Label,
    Row
} from "reactstrap";

function NamaLabel(props) {
    return <label>{props.name}</label>;
}

class FormUtama extends Component {

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    componentDidMount() {
        axios.get("http://localhost:1616/data")
            .then(res => {
                this.setState({
                    id: res.data.id,
                    title: res.data.title,
                    location: res.data.location,
                    date: res.data.date,
                    participant: res.data.participant,
                    note: res.data.note,
                    file: res.data.file
                })
            })
    }

    onSubmit = (e) => {
        const dataInput = {
            id: this.data.id,
            title: this.data.title,
            location: this.data.location,
            date: this.data.date,
            participant: this.data.participant,
            note: this.data.note,
            file: this.data.file
        }
        axios.post("http://localhost:1616/data", dataInput)
            .then(res => console.log(res.data))
    }

    render() {
        return (
            <Fragment>
                <CSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>

                    {/*<div className="app-main">*/}
                    {/*    <div className="app-main__inner">*/}
                    <Container fluid>
                        <Row>
                            <Col md="12">
                                <Card className="main-card mb-3">
                                    <CardBody>
                                        <CardTitle><h5>Event</h5></CardTitle>
                                        <Form>
                                            <input id="idPengirim" name="idPengirim" type="hidden"/>
                                            <FormGroup>
                                                <NamaLabel name="Title :"/>
                                                <Input type="text" name="title" id="title"
                                                       onChange={this.handleChange}/>
                                            </FormGroup>
                                            <FormGroup>
                                                <NamaLabel name="Location :"/>
                                                <Input type="text" name="location" id="location"
                                                       placeholder="location placeholder"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <NamaLabel name="Participant :"/>
                                                <Input type="text" name="participant" id="participant"
                                                       placeholder="participant placeholder"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <NamaLabel name="Date :"/>
                                                <Input type="date" name="date" id="date"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <NamaLabel name="Note :"/>
                                                <Input type="textarea" name="note" id="note"
                                                       placeholder="note placeholder"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <NamaLabel name="Upload Picture :"/>
                                                <Input type="file" name="picture" id="picture"/>
                                            </FormGroup>
                                            <Button className="mb-2 mr-2 btn-icon" color="info">
                                                <i className="pe-7s-science btn-icon-wrapper"> </i>
                                                Save
                                            </Button>
                                        </Form>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                    {/*    </div>*/}
                    {/*</div>*/}
                </CSSTransitionGroup>
            </Fragment>
        )
    }
}

export default FormUtama;