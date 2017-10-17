import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from './Home'
import Friends from './Friends/Friends'
import FindUsers from './FindUsers'
import RateUsers from './RateUsers'

export default class Main extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Router>
                <div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xs-12 navbar navbar-dark bg-dark">
                        <span className="ml-1">
                            <Link className="btn btn-primary" to="/home">
                                <i className="fa fa-home" aria-hidden="true"></i>
                            </Link>
                        </span>
                        <div className="row ml-1 mr-1">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xs-12">
                                <Link className="btn btn-primary mr-1 ml-1" to="/friends">
                                    <i className="fa fa-users" aria-hidden="true"></i>
                                </Link>
                                <Link className="btn btn-primary mr-1 ml-1" to="/findUsers">
                                    <i className="fa fa-search" aria-hidden="true"></i>
                                </Link>
                                <Link className="btn btn-primary ml-1" to="/rate">
                                    CU
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <Route path="/home" component={Home}/>
                                <Route path="/friends" component={Friends}/>
                                <Route path="/findUsers" component={FindUsers}/>
                                <Route path="/rate" component={RateUsers} />
                            </div>
                        </div>
                    </div>
                </div>
            </Router>  
        )
    }
}

ReactDOM.render(
    <Main />, 
    document.getElementById('root')
)