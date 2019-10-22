import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

import logo from '~/assets/logo.png';

import Background from '~/components/Background';
import { updateProfileRequest } from '~/store/modules/user/actions';
import { signOut } from '~/store/modules/auth/actions';

import {
    Container,
    Header,
    Separator,
    Form,
    FormInput,
    SubmitButton,
    LogoutButton,
} from './styles';

export default function Profile() {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.user.profile);

    const emailRef = useRef();
    const oldPasswordRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    const [name, setName] = useState(profile.name);
    const [email, setEmail] = useState(profile.email);
    const [oldPassword, setOldPassword] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        setOldPassword('');
        setPassword('');
        setConfirmPassword('');
    }, [profile]);

    function handleSubmit() {
        dispatch(
            updateProfileRequest({
                name,
                email,
                oldPassword,
                password,
                confirmPassword,
            })
        );
    }

    function handleLogout() {
        dispatch(signOut());
    }

    return (
        <Background>
            <Container>
                <Header>
                    <Image source={logo} style={{ width: 24, height: 24 }} />
                </Header>
                <Form>
                    <FormInput
                        icon="person-outline"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Full name"
                        onSubmitEditing={() => emailRef.current.focus()}
                        value={name}
                        onChangeText={setName}
                    />

                    <FormInput
                        icon="mail-outline"
                        keyboardType="email-address"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="E-mail"
                        ref={emailRef}
                        returnKeyType="next"
                        onSubmitEditing={() => oldPasswordRef.current.focus()}
                        value={email}
                        onChangeText={setEmail}
                    />

                    <Separator />

                    <FormInput
                        icon="lock-outline"
                        secureTextEntry
                        placeholder="Type your current password"
                        ref={oldPasswordRef}
                        returnKeyType="next"
                        onSubmitEditing={() => passwordRef.current.focus()}
                        value={oldPassword}
                        onChangeText={setOldPassword}
                    />
                    <FormInput
                        icon="lock-outline"
                        secureTextEntry
                        placeholder="Type your new password"
                        ref={passwordRef}
                        returnKeyType="next"
                        onSubmitEditing={() =>
                            confirmPasswordRef.current.focus()
                        }
                        value={password}
                        onChangeText={setPassword}
                    />
                    <FormInput
                        icon="lock-outline"
                        secureTextEntry
                        placeholder="Confirm your password"
                        ref={confirmPasswordRef}
                        returnKeyType="send"
                        onSubmitEditing={handleSubmit}
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                    />

                    <SubmitButton onPress={handleSubmit}>
                        Update profile
                    </SubmitButton>
                    <LogoutButton onPress={handleLogout}>Logout</LogoutButton>
                </Form>
            </Container>
        </Background>
    );
}

const tabBarIcon = ({ tintColor }) => (
    <Icon name="person" size={20} color={tintColor} />
);

tabBarIcon.propTypes = {
    tintColor: PropTypes.string.isRequired,
};

Profile.navigationOptions = {
    tabBarLabel: 'My Profile',
    tabBarIcon,
};
