import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Friends.css'
import Message from '../Message/Message'
import NewMessage from '../Message/NewMessage'
import Loader from '../Loader/Loader'

export default class Friends extends Component {
    constructor(props) {
        super(props)
        this.state = {
            friends: [],
            hasFriends: false,
            messages: ''
        }
    }

    getUserFriends() {
        axios.get('http://localhost/getUserFriends')
        .then(res => {
            const friends = res.data
                
            this.setState({
                friends: friends,
                hasFriends: true
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    deleteFriend(friendId) {
        axios.post('/deleteFriend', {
            friendId: friendId
        })
        .then(res => {
            this.getUserFriends()
        })
        .catch(err => {
            console.log(err)
        })
    }

    componentDidMount() {
        setTimeout(() => {
            this.getUserFriends()
        }, 300)
        clearTimeout()
    }

    render() {
        if(!this.state.hasFriends) {
            return <Loader />
        }
        if (this.state.friends === []) {
            return (
                <div className="container">
                    <div className="col-md-12 d-flex justify-content-center p-3">
                        <h1>Amigos</h1>
                    </div>
                    <div className="row jumbotron">
                        <div className="col-md-12 d-flex justify-content-center">
                            <ul className="list-group">
                                <span className="text-center">Esta solitario por aqui...</span>
                                <b className="text-center">Busca nuevos amigos para agregarlos a tu lista</b>
                            </ul>
                        </div>
                        <div className="col-md-12 d-flex justify-content-center">
                            <button className="btn btn-success mt-3">
                                <Link className="findFriends" to="/findUsers">
                                    Buscar Amigos
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>  
            )
        } 
        else {
            return (
                <div className="container">
                    <div className="row mt-3">
                        <div className="col-md-4 d-flex justify-content-center mb-3">
                            <ul className="list-group alert-primary">
                                <h3 className="text-center">Amigos</h3>
                                <br/>
        
                                {this.state.friends.map( 
                                    (friend, index) =>  
                                    <span key={index} className="list-group-item m-2">
                                        {friend.name}
                                        <a onClick={ () => this.deleteFriend(friend.id)} className="float-right ml-5">
                                            <i className="fa fa-times text-danger" aria-hidden="true"></i>
                                        </a>           
                                    </span>
                                )}
                            </ul>
                        </div>
                        <div className="col-md-7 alert-primary">
                            <h3 className="text-center">Notificaciones</h3>
                            <br/>
        
                            <div className="row p-2">
                                
                            </div>
                            <hr/>
                        </div>
                    </div>
                </div>
            )
        }
    }
}