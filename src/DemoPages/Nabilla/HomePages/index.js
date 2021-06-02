import React, {Fragment, useEffect, useState} from "react";
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import AppHeader from "../../../Layout/AppHeader/";
import {Row} from "reactstrap";

import CardNya from "../Card";
import Index from "../CardData";
import axios from "axios";
import {useSelector} from "react-redux";
// 'use strict';

const HomePage = () => {
    const [dataCard, setDataCard] = useState([])
    let imageArrayPath = [];

    useEffect(() => {
        axios.get("http://localhost:1616/data").then(res => {
            setDataCard(res.data)
        })
    }, [])

    // useEffect(() => {
    //     dataCard.map((data,index ) => {
    //         axios.get("http://localhost:1616/data/getFoto/" + data.id).then(res => {
    //             imageArrayPath.push(res.data)
    //             console.log(imageArrayPath[index])
    //         })
    //     })
    // })

    return (
        <Fragment>
            <CSSTransitionGroup
                component="div"
                transitionName="TabsAnimation"
                transitionAppear={true}
                transitionAppearTimeout={0}
                transitionEnter={false}
                transitionLeave={false}>
                <AppHeader/>
                {/*<div className="app-main">*/}
                {/*    <div className="app-main__inner">*/}
                <Row>
                    {dataCard.map((x, index) => (
                        <CardNya key={index} title={x.title} location={x.location} participant={x.participant}
                                 date={x.date} note={x.note} id={x.id}/>
                    ))}
                </Row>

                {/*    </div>*/}
                {/*</div>*/}
            </CSSTransitionGroup>
        </Fragment>
    )
}
export default HomePage;
