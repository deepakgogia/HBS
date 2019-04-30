import React from 'react';

const Memo = () => {
    console.log("render")
    return (<h6>memo</h6>);
}

export default React.memo(Memo);
//export default Memo;