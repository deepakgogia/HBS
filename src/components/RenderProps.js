import React, { Component } from 'react';
import ChildA from './Child/ChildA';
import ChildB from './Child/ChildB';


export default class RenderProps extends Component {
    render() {
        return this.props.children({
            A: ChildA,
            B: ChildB
        })
    }
}

