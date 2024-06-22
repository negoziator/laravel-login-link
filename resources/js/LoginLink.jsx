import React from 'react';
import { router } from '@inertiajs/react'

const LoginLink = ({
    className = 'underline',
    email = null,
    guard = null,
    keyId = null,
    label = 'Login',
    redirectUrl = null,
    userAttributes = null,
}) => {
    const submit = (event) => {
        event.preventDefault();
        router.post(route('loginLinkLogin'), {
            email: email,
            key: keyId,
            redirect_url: redirectUrl,
            guard: guard,
            user_attributes: userAttributes,
        });
    };

    return (
        <form onSubmit={submit}>
            <button className={className} type="submit">
                {label}
            </button>
        </form>
    );
};

export default LoginLink;
