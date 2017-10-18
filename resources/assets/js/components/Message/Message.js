import React, { Component } from 'react'

export default class Message extends Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: []
        }
    }

    getUserMessages() {
        axios.get('/getUserMessages')
        .then(res => {
            const messages = res.data
            this.setState({
                messages: messages
            })
        })
        .catch(err => {
        })
    }

    componentDidMount() {
        this.getUserMessages()
    }

    deleteMessage(messageId) {
        axios.post('/deleteMessage', {
            id: messageId
        })
        .then(res => {
            this.getUserMessages()
        })
        .catch(err => {
        })
    }

    render() {
        return (
            <ul className="list-group">
                <div className="row">
                    <div className="col-md-12">
                        {this.state.messages.map( 
                            (message, index, messages) => 
                            <div className="list-group-item" key={message.id}>
                                {message.message}
                                <a className="float-right ml-5" onClick={ () => this.deleteMessage(message.id) }>
                                    <i className="fa fa-trash text-danger" aria-hidden="true"></i>
                                </a>
                            </div> 
                        )}
                    </div>
                </div>
            </ul>
        )
    }
}