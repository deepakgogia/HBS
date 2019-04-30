import React, { Component } from 'react';

class InputPage extends Component {

    inputref = React.createRef();
    btnclick(e) {
        //console.log("--", this.inputref.current.value)
        this.setState({ val: this.inputref.current.value })
    }
    render() {
        console.log("render - input")
        return (<>
            <input ref={this.inputref} />
            <button type="submit" onClick={(e) => this.props.btnClickEvent(this.inputref.current.value)}>Submit</button>
        </>)
    }
}

export default InputPage;