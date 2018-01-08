import React, { Component } from 'react'
import Loader from './Loader/Loader'

export default class RateUsers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            friends: [],
            hasFriends: false,
            rating: 0,
            starsId: [1, 2, 3, 4, 5],
            mouseOn: false
        }

        this.mouseOverStar = this.mouseOverStar.bind(this)
    }

    getUserFriends() {
        const token = document.cookie
        
        axios.get('/getUserFriends', {
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
        })
        .catch(err => {
        })
    }

    componentDidMount() {
        setTimeout(() => {
            this.getUserFriends()
        }, 300)
        clearTimeout()
    }

    rateFriend(friendId) {
        console.log(friendId)
    }

    mouseOverStar(starId) {
        const id = starId

        const star1 = document.getElementById(1)
        const star2 = document.getElementById(2)
        const star3 = document.getElementById(3)
        const star4 = document.getElementById(4)
        const star5 = document.getElementById(5)

        switch (id) {
            case 1:
                if (!this.state.mouseOn) {
                    star1.style.color = "yellow"
                    star2.style.color = "#004085"
                    star3.style.color = "#004085"
                    star4.style.color = "#004085"
                    star5.style.color = "#004085"
                    
                    this.setState({
                        mouseOn: true
                    })
                }
                else {
                    star1.style.color = "#004085"
                    this.setState({
                        mouseOn: false
                    })
                }
                break;  
            case 2:
                if (!this.state.mouseOn) {
                    star1.style.color = "yellow"
                    star2.style.color = "yellow"
                    this.setState({
                        mouseOn: true
                    })
                }
                else {
                    star1.style.color = "#004085"
                    star2.style.color = "#004085"
                    this.setState({
                        mouseOn: false
                    })
                }
                break;
            case 3:
                if (!this.state.mouseOn) {
                    star1.style.color = "yellow"
                    star2.style.color = "yellow"
                    star3.style.color = "yellow"
                    this.setState({
                        mouseOn: true
                    })
                }
                else {
                    star1.style.color = "#004085"
                    star2.style.color = "#004085"
                    star3.style.color = "#004085"
                    this.setState({
                        mouseOn: false
                    })
                }
                break;
            case 4:
                if (!this.state.mouseOn) {
                    star1.style.color = "yellow"
                    star2.style.color = "yellow"
                    star3.style.color = "yellow"
                    star4.style.color = "yellow"
                    this.setState({
                        mouseOn: true
                    })
                }
                else {
                    star1.style.color = "#004085"
                    star2.style.color = "#004085"
                    star3.style.color = "#004085"
                    star4.style.color = "#004085"
                    this.setState({
                        mouseOn: false
                    })
                }
                break;
            case 5:
                if (!this.state.mouseOn) {
                    star1.style.color = "yellow"
                    star2.style.color = "yellow"
                    star3.style.color = "yellow"
                    star4.style.color = "yellow"
                    star5.style.color = "yellow"
                    this.setState({
                        mouseOn: true
                    })
                }
                else {
                    star1.style.color = "#004085"
                    star2.style.color = "#004085"
                    star3.style.color = "#004085"
                    star4.style.color = "#004085"
                    star5.style.color = "#004085"
                    this.setState({
                        mouseOn: false
                    })
                }
                break;
            default:
                break;
        }
    }

    render() {
        if(!this.state.hasFriends) {
            return <Loader />
        }
        else {
            return (
                <div className="container">
                    <div className="row mt-3">
                        <div className="col-md-4 d-flex justify-content-center mb-3">
                            <ul className="list-group alert-primary">
                                <h3 className="text-center p-5">Califica a tus Amigos</h3>
                                <br/>
    
                                {this.state.friends.map( 
                                    (friend, index) =>  
                                    <span key={index} className="list-group-item m-2">
                                        {friend.name}
                                        <a onClick={ () => this.rateFriend(friend.id)} className="float-right ml-5">
                                            <i className="fa fa-star" style={{color: "yellow"}} aria-hidden="true"></i>
                                        </a>           
                                    </span>
                                )}
                            </ul>
                        </div>
                        <div className="col-md-8 alert-primary">
                            <h1>Califica a ...</h1>
                            <hr/>
    
                            <div className="row mt-5 p-2 d-flex justify-content-center">
                                {this.state.starsId.map( (starId, index) => 
                                    <h4 key={index} id={starId} className="p-3">
                                        <i 
                                            onMouseOver={() => this.mouseOverStar(starId)}
                                            onMouseLeave={() => this.mouseOverStar(starId)}
                                            className="fa fa-star" aria-hidden="true"
                                        ></i>
                                    </h4>
                                )}
                                
                            </div>
    
                            <p className="mt-5">Solo puedes calificar a tus amigos solo una vez por dia.</p>
                            <p>Al calificar personas conseguiras puntos que iran incrementando y que podras ver en tu perfil.</p>
                        </div>
                    </div>
                </div>
            )
        }
    }
}