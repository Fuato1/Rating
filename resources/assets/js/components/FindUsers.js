import React, { Component } from 'react'
import axios from 'axios'
import Loader from './Loader/Loader'

export default class FindUsers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            hasUsers: false
        }
    }

    getUsers() {
        const token = document.cookie
        
        axios.get('/getUsers', {
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
                users: users,
                hasUsers: true
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    componentDidMount() {
        setTimeout(() => {
            this.getUsers()
        }, 300)
        clearTimeout()
    }

    follow(userId) {
        const users = this.state.users
        
        users.map( (user) => {
            switch (user.id) {
                case userId:
                user.isFriend = "fa fa-star"
                axios.post('/saveFriend', {
                  id: user.id
                })
                .then(res => {
                    this.getUsers()
                })
                .catch(err => {
                })
                break;
            }  
        })

        this.setState({
            users: users
        })
    }

    render() {
        if(!this.state.hasUsers) {
            return <Loader />
        }
        else {
            return (
                <div className="container">
                    <div className="col-md-12 d-flex justify-content-center p-3">
                        <h1 className="text-center">Encuentra amigos</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-12 d-flex justify-content-center alert-primary">
                            <ul className="list-group p-3">
                                {this.state.users.map( 
                                    (user) => 
                                    <span key={user.id} className="list-group-item m-2">
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
}