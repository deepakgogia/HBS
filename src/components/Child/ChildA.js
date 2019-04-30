import React from 'react';
const ChildA = (props) => {
    console.log(props.child)
    return (
        <>
            <h6>ChildA</h6>
            <h6>{props.child}</h6>
        </>
    )
}
export default ChildA;