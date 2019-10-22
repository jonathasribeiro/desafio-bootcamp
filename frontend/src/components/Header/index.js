import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
    const profile = useSelector(state => state.user.profile);

    const dispatch = useDispatch();

    function handleSignOut() {
        dispatch(signOut());
    }

    return (
        <Container>
            <Content>
                <nav>
                    <Link to="/dashboard">
                        <img src={logo} alt="Meetapp Logo" />
                    </Link>
                </nav>

                <aside>
                    <Profile>
                        <div>
                            <strong>{profile.name}</strong>
                            <Link to="/profile">My profile</Link>
                        </div>
                        <button type="button" onClick={handleSignOut}>
                            Logout
                        </button>
                    </Profile>
                </aside>
            </Content>
        </Container>
    );
}
