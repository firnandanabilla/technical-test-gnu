import React, {Fragment} from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import axios from "axios";

import {
    Row, Col,
    Card, CardBody
} from 'reactstrap';

import ReactTable from "react-table";

import {makeData} from "./utils";

const CreateRow = (props) => {
    return (
        <tr>
            <td>{props.title}</td>
            <td>{props.location}</td>
        </tr>
    )
}

class TableData extends React.Component {
    constructor() {
        super();
        this.state = {
            dataTable: []
        };
    }

    componentDidMount() {
        axios.get("http://localhost:1616/data")
            .then(res => {
                this.setState({dataTable: res.data})
                console.log(res)
            })
    }

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
                                                        id: "location"
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
                                            }]}
                                        defaultPageSize={10}
                                        className="-striped -highlight"
                                    />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </CSSTransitionGroup>
            </Fragment>
        )
    }
}

export default TableData;