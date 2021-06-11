import React, {Fragment} from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";

import {
    Row, Col,
    Card, CardBody, Button
} from 'reactstrap';

import ReactTable from "react-table";
import EditCard from "./edit";


// const CreateRow = (props) => {
//     return (
//         <tr>
//             <td>{props.title}</td>
//             <td>{props.location}</td>
//         </tr>
//     )
// }

class TableData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataTable: [],
            modal: false,
            idPro : 0,
            dataEdit :[]
        };
        this.toggle = this.toggle.bind(this);
    }

    componentDidMount() {
        this.getAllData()
    }

    getAllData(){
        axios.get("http://localhost:1616/data")
            .then(res => {
                this.setState({dataTable: res.data})
                console.log(res)
            })
    }

    toggle(sesuatu){
        console.log(sesuatu)
        this.setState({
            modal: !this.state.modal,
            idPro: sesuatu.id
        });

        axios.get("http://localhost:1616/data/" + sesuatu)
            .then(res=>{
                this.setState({
                    dataEdit:res.data
                })
            })
            .catch()
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     this.getAllData()
    // }


    render() {
        const {dataTable} = this.state;
        // console.log("ini data", data);
        return (
            <Fragment>
                <CSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>

                    <Row>
                        <Col md="12">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <ReactTable
                                        data={dataTable}
                                        filterable
                                        columns=
                                            {[{
                                                columns: [
                                                    {
                                                        Header: "Title",
                                                        accessor: "title"
                                                    },
                                                    {
                                                        Header: "Location",
                                                        accessor: "location"
                                                    },
                                                    {
                                                        Header: "Date",
                                                        accessor: "date"
                                                    },
                                                    {
                                                        Header: "Participant",
                                                        accessor: "participant"
                                                    },
                                                    {
                                                        Header: "Note",
                                                        accessor: "note"
                                                    }
                                                ]
                                            },
                                                {
                                                    columns: [
                                                        {
                                                            Header: "Action",
                                                            accessor: "action",
                                                            filterable: false,
                                                            Cell: row => (
                                                                <div className="d-block w-100 text-center">
                                                                    <Button outline className="mt-1" color="primary" onClick={()=>this.toggle(row.original.id)} style={{margin:"5px"}} ><FontAwesomeIcon icon={faEdit}/></Button>
                                                                    <Button outline className="mt-1" color="danger" style={{margin:"5px"}} ><FontAwesomeIcon icon={faTrash}/></Button>
                                                                </div>
                                                            )
                                                        }
                                                    ]
                                                }
                                            ]}
                                        defaultPageSize={10}
                                        className="-striped -highlight"
                                    />
                                </CardBody>
                            </Card>
                            <EditCard toggle={this.toggle} modal = {this.state.modal} id={this.state.idPro} data={this.state.dataEdit}/>
                        </Col>
                    </Row>
                </CSSTransitionGroup>
            </Fragment>
        )
    }
}

export default TableData;