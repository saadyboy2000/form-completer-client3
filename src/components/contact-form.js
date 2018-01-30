import React from 'react';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import { Control } from 'react-redux-form';
import Input from './input';
import {required, nonEmpty, email} from '../validators';
import Select from './select';
import NavigationBar from './NavigationBar';
//control from react-redux-form documentation:
//https://davidkpiano.github.io/react-redux-form/docs/api/Control.html
//react-redux form documentation
//https://www.npmjs.com/package/react-redux-form
//ask about field, where you can find that documentation, also how to just have a label
//when do I use select?

export class ContactForm extends React.Component {
    onSubmit(values) {
        return fetch('/api/messages', {
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
            .then(() => console.log('Submitted with values', values))
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

     handleChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })

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
            <div className = "container">
                <NavigationBar />
                {this.props.children}
            
            <form
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {successMessage}
                {errorMessage}
                <Field
                    name="name"
                    type="text"
                    component={Input}
                    label="What is your name?"
                    validate={[required, nonEmpty]}
                />
                <Field
                    name="email"
                    type="email"
                    component={Input}
                    label="please enter your email address"
                    validate={[required, nonEmpty, email]}
                />
                   <Field
                    name="interpreter"
                    type="text"
                    component={Input}
                    label="If you're using an interpreter, please enter their name and agency"
                />
                <div>
        <label htmlFor="user.gender">What is your gender?:</label>
        <select name="gender" id="gender" onChange= {this.handleChange.bind(this)}>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
                </div>
                   <Field
                    name="Main medical issue"
                    element="textarea"
                    component={Input}
                    label="Please describe your main medical issue"
                    validate={[required, nonEmpty]}
                />
                   <Field
                    name="Present Illness"
                    element="textarea"
                    component={Input}
                    label="Please describe any present Illness"
                />
                   <div>
        <label htmlFor="user.tobacco">Do you use tobacco?:</label>
        <select name="tobacco" id="tobacco" onChange= {this.handleChange.bind(this)}>
          <option value="yes">yes</option>
          <option value="no">no</option>
        </select>
                </div>

                 <div>
        <label htmlFor="user.drugs">Do you use non-prescription drugs?:</label>
        <select name="drugs" id="drugs"onChange= {this.handleChange.bind(this)}>
          <option value="yes">yes</option>
          <option value="no">no</option>
        </select>
                </div>

                 <div>
        <label htmlFor="user.alcohol">Do you consume alcohol?:</label>
        <select name="alcohol" id="alcohol" onChange= {this.handleChange.bind(this)}>
          <option value="yes">yes</option>
          <option value="no">no</option>
        </select>
                </div>

                  <div>
        <label htmlFor="user.vd">Do you have any form of vinerial disease?:</label>
        <select name="vd" id="user.vd" onChange= {this.handleChange.bind(this)}>
          <option value="yes">yes</option>
          <option value="no">no</option>
        </select>
                </div>

                <Field
                    name="Past History"
                    element="textarea"
                    component={Input}
                    label="Please describe your past medical history"
                />
              
                <Field
                    name="Family History diabetes"
                    type="text"
                    component={Input}
                    label="Has anyone in your family had diabetes? Ex: Grandma"
                />

                 <Field
                    name="Family History tb"
                    type="text"
                    component={Input}
                    label="Has anyone in your family had TB?(tubercle bacillus)"
                />
                   <Field
                    name="Family History heart disease"
                    type="text"
                    component={Input}
                    label="Has anyone in your family had heart disease?"
                />

                 <Field
                    name="Family History heart Cancer"
                    type="text"
                    component={Input}
                    label="Has anyone in your family had Cancer?"
                />

                <Field
                    name="Other family history"
                    element="textarea"
                    component={Input}
                    label="Are there any other major diseases any family members have had?"
                />

                <Field
                    name="Disability Begin"
                    type="text"
                    component={Input}
                    label="When did your disability begin?(date)"
                />

                 <div>
        <label htmlFor="user.origin">What is the origin of your major disability?:</label>
        <select name="origin" id="origin"onChange= {this.handleChange.bind(this)}>
          <option value="injury">Injury</option>
          <option value="Congenital">Congenital</option>
          <option value="Hereditary">Hereditary</option>
          <option value="Birth trauma">Birth trauma</option>
          <option value="Other">Other</option>
          <option value="Unknown">Unknown</option>
        </select>
                </div>

                <Field
                    name="Medications"
                    element="textarea"
                    component={Input}
                    label="Please list any medicines you're currently taking"
                    validate={[required, nonEmpty]}

                />


                <button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Send message
                </button>
            </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'contact',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('contact', Object.keys(errors)[0]))
})(ContactForm);
