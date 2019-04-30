import React, { Component } from 'react';
import Joi from 'joi-browser';
export default class Form_Practice extends Component {
    state = {
        logindetails: {
            uid: '',
            pwd: ''
        },
        schema: {
            uid: Joi.string().alphanum().min(3).max(6).required(),
            pwd: Joi.string().alphanum().min(5).max(9).required()
        },
        errors: {}
    }

    btnSubmitEventHandler = (e) => {
        e.preventDefault();
        const data = { ...this.state };
        data.errors = {}
        const validate = Joi.validate(data.logindetails, data.schema, { abortEarly: false })
        if (validate.error !== null) {
            const { details } = validate.error;
            if (details.length > 0) {
                for (let index = 0; index < details.length; index++) {
                    if (!data.errors[details[index].context.key])
                        data.errors[details[index].context.key] = details[index].message;
                }
            }
            //console.log(data.errors)
        }
        this.setState(data)

    }

    txtChangeHandler = ({ target: { id, value } }) => {
        const data = { ...this.state };
        data.logindetails[id] = value
        data.errors = {}
        const _schema = {
            [id]: data.schema[id]
        }
        console.log(data.logindetails, "--", _schema)

        const validate = Joi.validate({ [id]: value }, _schema);
        console.log(validate)
        if (validate.error !== null) {
            const details = validate.error.details;
            if (details.length > 0) {
                data.errors[details[0].context.key] = details[0].message
            }
        }
        this.setState(data)
    }
    render() {
        const { logindetails, errors } = this.state;
        return (
            <>
                <form>
                    <label htmlFor="uid">
                        UserName: &nbsp; <input id="uid" name="uid" value={logindetails.uid} onChange={(e) => this.txtChangeHandler(e)} />
                    </label>
                    {errors.uid}<br />
                    <label>
                        Password: &nbsp; <input id="pwd" name="pwd" value={logindetails.pwd} onChange={(e) => this.txtChangeHandler(e)} />
                    </label>
                    {errors.pwd}<br />
                    <button type="submit" onClick={(e) => this.btnSubmitEventHandler(e)}>Submit</button>
                    <button type="reset">Reset</button>

                </form>
            </>
        )
    }
}