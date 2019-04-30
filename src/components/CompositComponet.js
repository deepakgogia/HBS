import React, { Component } from 'react';
import ChildA from './Child/ChildA';
import ChildB from './Child/ChildB';

export default class CompositComponent extends Component {
    static A = (itemProps) => <><ChildA child={itemProps} /></>
    static B = (props) => <><ChildB /></>
    render() {
        return (this.props.children)
    }
}