import React from "react";
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


const EditProduct = (props) => {
    return (
        <>
            <span className="d-inline-block mb-2 mr-2">
                 <Modal isOpen={props.modal} toggle={props.toggle} className={props.className}>
                        <ModalHeader toggle={props.toggle}><IoIosSettings size={20}/>Edit Product</ModalHeader>
                        <ModalBody>
                            <Form>
                                            <FormGroup>

                                                <Input type="text" name="name" id="name"
                                                       placeholder="Your Name"/>
                                            </FormGroup>
                                            <FormGroup>

                                                <Input type="date" name="birthdate" id="birthdate"
                                                       placeholder="password placeholder"
                                                />
                                            </FormGroup>
                                            <FormGroup>

                                                <Input type="email" name="email" id="email"
                                                       placeholder="Your E-Mail" />
                                            </FormGroup>
                                            <FormGroup>

                                                <CustomInput type="select" id="exampleReligion"
                                                             name="religion" value="1">
                                                    <option>Select</option>
                                                    <option>Moslem</option>
                                                    <option>Protestant</option>
                                                    <option>Catholic</option>
                                                    <option>Hindu</option>
                                                    <option>Buddha</option>
                                                    <option>Konghucu</option>
                                                </CustomInput>
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

export default EditProduct;