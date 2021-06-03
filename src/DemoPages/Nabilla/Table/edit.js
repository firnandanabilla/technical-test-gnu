import React, {useState, useEffect} from "react";

import {
    Button,
    CustomInput, Form,
    FormGroup,
    Input,
    Label,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Table
} from "reactstrap";
import {IoIosCart, IoIosSettings} from "react-icons/io";
import axios from "axios";


const EditCard = (props) => {
    const [dataaa, setDataaa] = useState([])

    useEffect(() => {
            axios.get("http://localhost:1616/data/" + props.id).then(res => {
                setDataaa(res.data)

                console.log(res.data.title)
            })
        }
    )
    return (
        <>
            <span className="d-inline-block mb-2 mr-2">
                 <Modal isOpen={props.modal} toggle={props.toggle} className={props.className}>
                        <ModalHeader toggle={props.toggle}><IoIosSettings size={20}/>Edit Card</ModalHeader>
                        <ModalBody>
                            <Form>
                                <FormGroup>
                                    <Label>Title :</Label>
                                    <Input type="text" name="title" id="title" placeholder="Your Title" value={dataaa.title}/>
                                    {/*<Input type="text" name="title" id="title" placeholder="Your Title" />*/}
                                </FormGroup>
                                <FormGroup>
                                    <Label>Location :</Label>
                                    <Input type="text" name="location" id="location" placeholder="Your Location" value={dataaa.location}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Date :</Label>
                                    <Input type="date" name="date" id="date" value={dataaa.date}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Participant :</Label>
                                    <Input type="text" name="participant" id="participant"
                                           placeholder="Your Participant" value={dataaa.participant}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Note :</Label>
                                    <Input type="textarea" name="note" id="note" placeholder="Your Note" value={dataaa.note}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Upload Picture : </Label>
                                    <Input type="file" name="file" id="file"/>
                                </FormGroup>

                                {/*<FormGroup>*/}
                                {/*    <label>Gender</label>*/}
                                {/*    <div>*/}
                                {/*        <CustomInput type="radio" id="exampleCustomRadio" name="customRadio"*/}
                                {/*                     label="Male" checked={this.state.gender === 'Male'}/>*/}
                                {/*        <CustomInput type="radio" id="exampleCustomRadio2"*/}
                                {/*                     name="customRadio"*/}
                                {/*                     label="Female"*/}
                                {/*                     checked={this.state.gender === 'Female'}/>*/}
                                {/*    </div>*/}
                                {/*</FormGroup>*/}
                                {/*<FormGroup>*/}
                                {/*    <Label for="exampleText">Address</Label>*/}
                                {/*    <Input type="textarea" name="text" id="exampleText"*/}
                                {/*           value={this.state.address}/>*/}
                                {/*</FormGroup>*/}
                                <Button color="primary" className="mt-1">Submit</Button>
                                        </Form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="link" onClick={props.toggle}>Cancel</Button>
                            <Button color="primary" onClick={props.toggle}>Save</Button>
                        </ModalFooter>
                    </Modal>
            </span>
        </>
    )
}

export default EditCard;