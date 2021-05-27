import React, {Fragment} from "react";
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

// function NamaLabel(props) {
//     return <label>{props.name}</label>;
// }

class FormUtama extends React.Component {

    constructor() {
        super();
        this.state = {

        }
    }

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
        console.log(this.state)
        const dataInput = {
            id: this.state.id,
            title: this.state.title,
            location: this.state.location,
            date: this.state.date,
            participant: this.state.participant,
            note: this.state.note,
            file: this.state.file
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
                                            <FormGroup>
                                                <Label>Name : </Label>
                                                <Input type="text" name="title" id="title"
                                                       onChange={this.handleChange}/>
                                            </FormGroup>
                                            <FormGroup>
                                                {/*<NamaLabel name="Location :"/>*/}
                                                <Label>Location : </Label>
                                                <Input type="text" name="location" id="location"
                                                       onChange={this.handleChange}/>
                                            </FormGroup>
                                            <FormGroup>
                                                {/*<NamaLabel name="Participant :"/>*/}
                                                <Label>Participant : </Label>
                                                <Input type="text" name="participant" id="participant"
                                                       onChange={this.handleChange}/>
                                            </FormGroup>
                                            <FormGroup>
                                                {/*<NamaLabel name="Date :"/>*/}
                                                <Label>Date : </Label>
                                                <Input type="date" name="date" id="date" onChange={this.handleChange}/>
                                            </FormGroup>
                                            <FormGroup>
                                                {/*<NamaLabel name="Note :"/>*/}
                                                <Label>Note : </Label>
                                                <Input type="textarea" name="note" id="note"
                                                       onChange={this.handleChange}/>
                                            </FormGroup>
                                            <FormGroup>
                                                {/*<NamaLabel name="Upload Picture :"/>*/}
                                                <Label>Upload Picture : </Label>
                                                <Input type="text" name="file" id="file" onChange={this.handleChange}/>
                                            </FormGroup>
                                            <Button className="mb-2 mr-2 btn-icon" color="info" onClick={this.onSubmit}>
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