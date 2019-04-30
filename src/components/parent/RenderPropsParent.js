import React, { Component } from 'react';
import ChildA from '../Child/ChildA';
class RenderPropsParent extends Component {
    ChildA = ChildA
    render() {
        return (
            <>
                {this.props.children}
            </>
        )
    }
}

export default RenderPropsParent;
