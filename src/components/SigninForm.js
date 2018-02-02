import React from 'react';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import Input from './input';
import {required, nonEmpty, email} from '../validators';
import {LOGIN_SENT} from '../actions/loginAction';
//import NavigationBar from './NavigationBar';
//control from react-redux-form documentation:
//https://davidkpiano.github.io/react-redux-form/docs/api/Control.html
//react-redux form documentation
//https://www.npmjs.com/package/react-redux-form
//ask about field, where you can find that documentation, also how to just have a label
//when do I use select?

export class SigninForm extends React.Component {
    onSubmit(values) {
        return fetch('api/auth/login', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (!res.ok) {
                    if (
                        res.headers.has('content-type') &&
                        res.headers
                            .get('content-type')
                            .startsWith('application/json')
                    ) {
                        // It's a nice JSON error returned by us, so decode it
                        return res.json().then(err => Promise.reject(err));
                    }
                    // It's a less informative error returned by express
                    return Promise.reject({
                        code: res.status,
                        message: res.statusText
                    });
                }
                return;
            })
            .then(() => {
                this.props.dispatch(LOGIN_SENT, values)
            })//console.log('Submitted with values', values))
            .catch(err => { 
                const {reason, message, location} = err;
                if (reason === 'ValidationError') {
                    // Convert ValidationErrors into SubmissionErrors for Redux Form
                    return Promise.reject(
                        new SubmissionError({
                            [location]: message
                        })
                    );
                }
                return Promise.reject(
                    new SubmissionError({
                        _error: 'Error submitting message'
                    })
                );
            });
    }



    render() {
        let successMessage;
        if (this.props.submitSucceeded) {
            successMessage = (
                <div className="message message-success">
                    Message submitted successfully
                </div>
            );
        }

        let errorMessage;
        if (this.props.error) {
            errorMessage = (
                <div className="message message-error">{this.props.error}</div>
            );
        }

        return (
<div className= "row">
     <div className = "col-md-4 col-md-offset-4">
                
            
            <form
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {successMessage}
                {errorMessage}
               
                <Field
                    name="email"
                    type="email"
                    component={Input}
                    label="Email Address"
                    validate={[required, nonEmpty, email]}
                />
                   <Field
                    name="password"
                    type="password"
                    component={Input}
                    label="Password"
                    validate={[required, nonEmpty]}
                />
                  

                <button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Send message
                </button>
            </form>
    </div>
</div>
        );
    }
}

export default reduxForm({
    form: 'signin',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('signin', Object.keys(errors)[0]))
})(SigninForm);