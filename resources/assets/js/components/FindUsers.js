import React, { Component } from 'react'
import axios from 'axios'

export default class FindUsers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    getUsers() {
        const token = document.cookie
        
        axios.get('http://192.168.1.43/getUsers', {
            headers: {
                'Authorization': token
            }
        })
        .then(res => {
            const users = res.data
            users.map( 
                (user, index) => user.isFriend = "fa fa-star-o"
            )
            this.setState({
                users: users
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    componentDidMount() {
        this.getUsers()
    }

    follow(userId) {
        const users = this.state.users
        
        users.map( (user) => {
            switch (user.id) {
                case userId:
                user.isFriend = "fa fa-star"
                axios.post('/saveFriend', {
                  id: user.id,
                  isFriend: true
                })
                .then(res => {
                    console.log(res)
                    this.getUsers()
                })
                .catch(err => {
                    console.log(err)
                })
                break;
            }  
        })

        this.setState({
            users: users
        })
    }

    render() {
        return (
            <div className="container">
                <div className="col-md-12 d-flex justify-content-center p-3">
                    <h1 className="text-center">Encuentra amigos</h1>
                </div>
                <div className="row jumbotron">
                    <div className="col-md-12 d-flex justify-content-center">
                        <ul className="list-group">
                            {this.state.users.map( 
                                (user) => 
                                <span key={user.id} className="list-group-item">
                                    {user.name}
                                    <a onClick={() => this.follow(user.id) } className="ml-5 float-right">
                                        <i className={user.isFriend} aria-hidden="true"></i>
                                    </a>
                                </span>
                            )}
                        </ul>
                    </div>
                </div>
            </div>  
        )
    }
}