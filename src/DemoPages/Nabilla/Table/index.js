import React, {Fragment} from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import axios from "axios";

import {
    Row, Col,
    Card, CardBody
} from 'reactstrap';

import ReactTable from "react-table";

import {makeData} from "./utils";

export default class DataTableBasic extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        };
    }

    getData(){
        axios.get(`http://localhost:1616/data`)
            .then(res => {
                this.setState({data:res.data})
            })
    }

    componentDidMount() {
        this.getData()
    }

    render() {

        const {data} = this.state;
        console.log("ini data", data);
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
                                        data={data}
                                        columns={[
                                            {
                                                Header: "Name",
                                                columns: [
                                                    {
                                                        Header: "Title",
                                                        accessor: "firstName"
                                                    },
                                                    {
                                                        Header: "Location",
                                                        id: "lastName",
                                                        accessor: d => d.lastName
                                                    }
                                                ]
                                            },
                                            {
                                                Header: "Info",
                                                columns: [
                                                    {
                                                        Header: "Date",
                                                        accessor: "age"
                                                    },
                                                    {
                                                        Header: "Participant",
                                                        accessor: "status"
                                                    }
                                                ]
                                            },
                                            {
                                                Header: 'Stats',
                                                columns: [
                                                    {
                                                        Header: "Note",
                                                        accessor: "visits"
                                                    }
                                                ]
                                            }
                                        ]}
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