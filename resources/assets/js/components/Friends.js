import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Friends.css'

export default class Friends extends Component {
    constructor(props) {
        super(props)
        this.state = {
            friends: [],
            hasFriends: false
        }
    }

    getUserFriends() {
        const token = document.cookie
        
        axios.get('http://192.168.1.43/getUserFriends', {
            headers: {
                'Authorization': token
            }
        })
        .then(res => {
            if (res.data != "") {
                const friends = res.data
                this.setState({
                    friends: friends,
                    hasFriends: true
                })
            }
            else {
                this.setState({
                    hasFriends: false
                })
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    componentDidMount() {
        this.getUserFriends()
    }

    deleteFriend(friendId) {
        axios.post('http://192.168.1.43/deleteFriend', {
            friendId: friendId
        })
        .then(res => {
            this.getUserFriends()
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        if (this.state.hasFriends) {
            return (
                <div className="containe ml-1">
                    <div className="col-md-12 d-flex justify-content-center p-3">
                        <h1>Amigos</h1>
                    </div>
                    <div className="row jumbotron">
                        <div className="col-md-12 d-flex justify-content-center">
                            <ul className="list-group">
                                {this.state.friends.map( 
                                    (friend, index) =>  
                                    <span key={index} className="list-group-item">
                                        {friend.name}
                                        <a onClick={ () => this.deleteFriend(friend.id)} className="float-right ml-5">
                                            <i className="fa fa-times deleteFriend" aria-hidden="true"></i>
                                        </a>           
                                    </span>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>  
            )  
        } 
        else {
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
    }
}