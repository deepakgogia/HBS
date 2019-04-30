import React, { PureComponent, Component } from 'react';
class PureComp extends Component {
    state = {}
    componentDidMount() {
        console.log("mount");
    }
    componentDidCatch() {
        console.log("error")
    }
    render() {
        console.log("render")
        return (<><h5>Demo</h5></>);
    }
}

export default PureComp;