import React from "react";
import {connect} from 'react-redux';
import { logIn } from '../../actions/notes.actions';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import './Login.scss';

const LoginSchema = Yup.object().shape({
    firstName: Yup.string()
        .required("First name required"),
    userEmail: Yup.string()
        .email("Invalid email")
        .required("Required")
});

const Login = (logIn) => {
    return (
        <div className="Login-form">
            <Formik
                initialValues={{
                    firstName: '',
                    userEmail: ''
                }}
                validationSchema={LoginSchema}
                onSubmit={values => {
                    logIn(values.firstName, values.userEmail);
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className="input-wrap">
                            <Field name="firstName" placeholder="First name" className="input" />
                            {errors.firstName && touched.firstName ? <div className="error">{errors.firstName}</div> : null}
                        </div>

                        <div className="input-wrap">
                            <Field name="userEmail" placeholder="E-mail" className="input" />
                            {errors.userEmail && touched.userEmail ? <div className="error">{errors.userEmail}</div> : null}
                        </div>

                        <button className="submit-btn" type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

const mapDispatchToProps = {
    logIn
};

export default connect(mapDispatchToProps)(Login);