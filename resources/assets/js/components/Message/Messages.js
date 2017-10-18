import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import NewMessage from './NewMessage'
import Message from './Message'

export default class Messages extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container">
                <div className="row mt-3">
                    <div className="col-md-12 alert-primary">
                        <h3 className="text-center p-3">
                            Mensajes
                            <Link className="btn btn-primary float-right" to="/newMessage">
                                <i className="fa fa-plus" aria-hidden="true"></i>
                            </Link>
                        </h3>
                        <br/>

                        <div className="row d-flex justify-content-center p-2">
                            <Message />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}