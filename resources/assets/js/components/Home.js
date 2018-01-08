import React, { Component } from 'react'
import axios from 'axios'
import Loader from './Loader/Loader'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {},
            hasUser: false
        }
    }

    getUserInfo() {
        const token = document.cookie
        
        axios.get('/getUserInfo', {
            headers: {
                'Authorization': token
            }
        })
        .then(res => {
            const user = res.data
            this.setState({
                user: user,
                hasUser: true
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
    
    componentDidMount() {
        setTimeout(() => {
            this.getUserInfo()
        }, 300)
        clearTimeout()
    }

    render() {
        if(!this.state.hasUser) {
            return <Loader />
        }
        else {
            return (
                <div className="container">
                    <div className="col-md-12 d-flex justify-content-center p-3">
                        <h1 className="text-center">Bienvenido {this.state.user.name}</h1>
                    </div>
                    <div className="row jumbotron">
                        <div className="col-md-12 d-flex justify-content-center">
                            <div className="col-md-12 d-flex justify-content-center">
                                <h1><i className="fa fa-user" aria-hidden="true"></i></h1>
                            </div>
                        </div>
                        <div className="col-md-12 d-flex justify-content-center">
                            <h1>Rating {this.state.user.rating}</h1>
                        </div>
    
                        <div className="col-md-12 d-flex justify-content-center">
                            <h1>Points {this.state.user.points}</h1>
                        </div>
                    </div>
                </div>  
            )
        }
    }
}