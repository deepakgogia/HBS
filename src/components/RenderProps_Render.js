import React, { Component } from 'react';
import ChildA from './Child/ChildA';
import ChildB from './Child/ChildB';

export default class RenderProps_Render extends Component {
    static C = () => <><h6>ChildC-Static</h6></>
    render() {
        return this.props.render({
            A: ChildA,
            B: ChildB,
            C: <RenderProps_Render.C />
        })
    }
}

