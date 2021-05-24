import React,{Fragment} from "react";
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import AppHeader from "../../../Layout/AppHeader/";
import {Row} from "reactstrap";

import CardNya from "../Card";
import Index from "../CardData";

const HomePage = () => {
    return(
        <Fragment>
            <CSSTransitionGroup
                component="div"
                transitionName="TabsAnimation"
                transitionAppear={true}
                transitionAppearTimeout={0}
                transitionEnter={false}
                transitionLeave={false}>
                <AppHeader/>
                <div className="app-main">
                    <div className="app-main__inner">
                        <Row>
                            {Index.map((x, index)=>(
                                <CardNya key={index} title={x.title} subtitle={x.subtitle} image={x.image}/>
                            ))}
                        </Row>

                    </div>
                </div>
            </CSSTransitionGroup>
        </Fragment>
    )
}
    export default HomePage;
