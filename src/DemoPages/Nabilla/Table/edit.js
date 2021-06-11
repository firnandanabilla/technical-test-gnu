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

    const [title, setTitle] = useState(null)
    const [location, setLocation] = useState(null)
    const [participant, setParticipant] = useState(null)
    const [date, setDate] = useState(null)
    const [note, setNote] = useState(null)

    useEffect(() => {
            axios.get("http://localhost:1616/data/" + props.id).then(res => {
                setDataaa(res.data)
                console.log(dataaa)
            })
        }, []
    )

    useEffect(() => {
            console.log(dataaa)
        }, []
    )

    const onSubmit = (e) => {
        const formData = new FormData();
        const json = JSON.stringify({
            "id": props.data.id,
            "title": title == null ? props.data.title : title,
            "location": location == null ? props.data.location : location,
            "participant": participant == null ? props.data.participant : participant,
            "date": date == null ? props.data.date : date,
            "note": note == null ? props.data.note : note
        });
        const blobDoc = new Blob([json], {
            type: 'application/json'
        });

        // formData.append("file", file)
        formData.append('data', blobDoc)
        // const config = {
        //     headers: {
        //         'content-type': 'multipart/mixed'
        //     }
        // }
        axios.post("http://localhost:1616/data/save", formData)
            .then(res => console.log(res.data))
    }

    return (
        <>
            <span className="d-inline-block mb-2 mr-2">
                 <Modal isOpen={props.modal} toggle={props.toggle} className={props.className}>
                        <ModalHeader toggle={props.toggle}><IoIosSettings size={20}/>Edit Card</ModalHeader>
                        <ModalBody>
                            <Form>
                                <FormGroup>
                                    <Label>Title :{props.data.title}</Label>
                                    <Input type="text" name="title" id="title" placeholder="Your Title"
                                           onChange={(e) => {
                                               setTitle(e.target.value)
                                           }}/>
                                    {/*<Input type="text" name="title" id="title" placeholder="Your Title" />*/}
                                </FormGroup>
                                <FormGroup>
                                    <Label>Location :{props.data.location}</Label>
                                    <Input type="text" name="location" id="location" placeholder="Your Location"
                                           onChange={(e) => {
                                               setLocation(e.target.value)
                                           }}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Date :{props.data.date}</Label>
                                    <Input type="date" name="date" id="date" onChange={(e) => {
                                        setDate(e.target.value)
                                    }}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Participant :{props.data.participant}</Label>
                                    <Input type="text" name="participant" id="participant"
                                           placeholder="Your Participant" onChange={(e) => {
                                        setParticipant(e.target.value)
                                    }}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Note :{props.data.note}</Label>
                                    <Input type="textarea" name="note" id="note" placeholder="Your Note"
                                           onChange={(e) => {
                                               setNote(e.target.value)
                                           }}/>
                                </FormGroup>
                                {/*<FormGroup>*/}
                                {/*    <Label>Upload Picture :{props.data.file} </Label>*/}
                                {/*    <Input type="file" name="file" id="file" />*/}
                                {/*</FormGroup>*/}

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
                                {/*<Button color="primary" className="mt-1">Submit</Button>*/}
                                        </Form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="link" onClick={props.toggle}>Cancel</Button>
                            <Button color="primary" onClick={()=>{onSubmit()}}>Save</Button>
                        </ModalFooter>
                    </Modal>
            </span>
        </>
    )
}

export default EditCard;