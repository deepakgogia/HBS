import React, { Component } from 'react';
class Rtest extends Component {
    state = {
        uid: '',
        pwd: ''
    }
    uidTxtChange = ({ target }) => {
        this.setState({ uid: target.value }, () => console.log("uid"))
    }

    pwdTxtChange = ({ target }) => {
        this.setState({ pwd: target.value }, () => console.log("pwd"))
    }
    render() {
        return (
            <>
                <input value={this.state.uid} onChange={(e) => this.uidTxtChange(e)} />
                <input value={this.state.pwd} onChange={(e) => this.pwdTxtChange(e)} />
            </>
        );
    }
}
export default Rtest;