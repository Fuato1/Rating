import React, { Component } from 'react'
import Load from 'react-loaders'

export default class Loader extends Component {
    render() {
        return(
            <Load style={{ transform: 'scale(1)', textAlign: 'center', marginTop: 250 }} color="blue" type="line-scale" active />
        )
    }
}