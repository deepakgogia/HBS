import React, { Component } from 'react';
import { connect } from 'react-redux'
class Redux extends Component {
    state = {}
    render() {
        console.log(this.props)
        return (<><h6>Test</h6></>);
    }
}
const mapStateToProps = (state) => {
    return { ...state }
}

export default connect(mapStateToProps)(Redux);