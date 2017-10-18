import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NewMessage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: "",
            message: "",
            friends: [],
            error: "",
            msj: ""
        }

        this.handleUserName = this.handleUser.bind(this, 'user')
        this.handleMessage = this.handleMessage.bind(this, 'userMessage')
        this.sendMessage = this.sendMessage.bind(this)
    }

    getUserFriends() {
        axios.get('/getUserFriends')
        .then(res => {
            if (res.data != "") {
                const friends = res.data
                this.setState({
                    friends: friends
                })
            }
        })
        .catch(err => {
        })
    }

    componentDidMount() {
        this.getUserFriends()
    }

    handleUser(user, e) {
        if (e.target.value != "") {
            this.setState({
                user: e.target.value,
            })
        }
    }

    handleMessage(userMessage, e) {
        const message = e.target.value
        if (e.target.value != "") {
            this.setState({
                message: message
            })
        } 
        else {
        }
    }

    sendMessage() {
        axios.post('/saveMessage', {
            user: this.state.user,
            message: this.state.message
        })
        .then(res => {
            if (res.status === 200) {
                this.setState({
                    msj: res.data
                })   
            }
            else {
                this.setState({
                    error: res.data
                })
            }
        })
        .catch(err => {
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row mt-3">
                    <div className="col-md-12 alert-primary">
                        <h3 className="text-center p-3">
                            <Link className="btn btn-primary float-left" to="/messages">
                                <i className="fa fa-arrow-left" aria-hidden="true"></i>
                            </Link>
                            Nuevo Mensaje
                        </h3>
                        <br/>

                        <div className="row p-2">
                            <div className="col-md-12">
                                <p className="text-success text-center">{this.state.msj}</p>
                                <p className="text-danger text-center">{this.state.error}</p>

                                <div className="d-flex justify-content-center p-3">
                                    <select onChange={this.handleUserName} className="custom-select" ref="user">
                                        <option defaultValue>Selecciona a un amigo</option>
                                        {this.state.friends.map( (friend, index, friends) => 
                                            <option key={friend.id} value={friend.id}>{friend.name}</option> 
                                        )}
                                    </select>
                                </div>
                                <div className="d-flex justify-content-center p-3">
                                    <textarea className="form-control" ref="userMessage" onChange={this.handleMessage} cols="10" rows="5"></textarea>
                                </div>
                                <div className="d-flex justify-content-center p-3">
                                    <button onClick={this.sendMessage} className="btn btn-success">Enviar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}