import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
        .email('Enter a valid e-mail')
        .required('E-mail is required'),
    password: Yup.string()
        .min(6, 'Password must contain at least 6 characters')
        .required('Password is required'),
});

export default function SignUp() {
    const dispatch = useDispatch();

    function handleSubmit({ name, email, password }) {
        dispatch(signUpRequest(name, email, password));
    }

    return (
        <>
            <img src={logo} alt="Meetapp Logo" />

            <Form schema={schema} onSubmit={handleSubmit}>
                <Input name="name" placeholder="Your full name" />
                <Input name="email" type="email" placeholder="Your e-mail" />
                <Input
                    name="password"
                    type="password"
                    placeholder="Your password"
                />

                <button type="submit">Register</button>
                <Link to="/">I already have an account</Link>
            </Form>
        </>
    );
}
