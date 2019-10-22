import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { FaSpinner } from 'react-icons/fa';

import logo from '~/assets/logo.svg';

import { signInRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
    email: Yup.string()
        .email('Enter a valid e-mail')
        .required('E-mail is required'),
    password: Yup.string().required('Password is required'),
});

export default function SignIn() {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.auth.loading);

    function handleSubmit({ email, password }) {
        dispatch(signInRequest(email, password));
    }

    return (
        <>
            <img src={logo} alt="Meetapp Logo" />

            <Form schema={schema} onSubmit={handleSubmit}>
                <Input name="email" type="email" placeholder="Your e-mail" />
                <Input
                    name="password"
                    type="password"
                    placeholder="Your password"
                />

                <button type="submit" disabled={loading ? 1 : 0}>
                    {loading ? <FaSpinner size={20} color="#fff" /> : 'Log in'}
                </button>
                <Link to="/register">Create your free account</Link>
            </Form>
        </>
    );
}
