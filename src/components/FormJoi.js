import React, { Component } from 'react';
import Joi from 'joi-browser'

const uidRef = React.createRef();
const pwdRef = React.createRef();
function btnCancelClick() {
    document.getElementById("uid").value = '';
}
class FormJoi extends Component {
    state = {
        logindetails: {
            uid: '',
            pwd: ''
        },
        schema: {
            uid: Joi.string().alphanum().min(3).max(6).required(),
            pwd: Joi.string().alphanum().min(3).max(6).required()
        }
        , errors: {}
    }

    btnSubmitClick = (e) => {
        e.preventDefault()

        const data = { ...this.state }
        const validate = Joi.validate(data.logindetails, data.schema, { abortEarly: false })
        console.log(validate)
        if (validate.error !== null) {
            const details = validate.error.details
            if (details.length > 0) {
                console.log(details.length)

                for (let index = 0; index < details.length; index++) {
                    console.log(details[index].context.key, "-", details[index].message)
                    data.errors[details[index].context.key] = details[index].message;
                }
            }
        }
        console.log(data.errors)
        this.setState(data)
    }

    textChangeHandler = ({ target: { id, value } }) => {
        const data = { ...this.state }
        console.log(id, "-----", value)
        console.log(data.logindetails[id])
        //data.logindetails
        console.log(data.logindetails.id, "---", data.schema[id])
        const validate = Joi.validate(data.logindetails[id], data.schema[id])
        console.log(validate)
        this.setState(data)

    }

    render() {

        return (
            <>
                <form onSubmit={(e) => this.btnSubmitClick(e)}>
                    <label htmlFor="uid">
                        User ID:
                    <input id="uid" value={this.state.logindetails.uid} onChange={(e) => this.textChangeHandler(e)} />
                    </label>
                    {this.state.errors["uid"]}<br />
                    <label htmlFor="pwd">
                        Password:
                    <input id="pwd" value={this.state.logindetails.pwd} onChange={(e) => this.textChangeHandler(e)} />
                    </label>
                    <small style={{ color: "red" }}>{this.state.errors["pwd"]}</small><br />
                    <button type="submit" >Submit</button> &nbsp;
                <button type="button" onClick={btnCancelClick}>Cancel</button>
                </form>
            </>
        )
    }
}
export default FormJoi;