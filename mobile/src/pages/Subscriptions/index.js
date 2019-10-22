import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Text, Image } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';

import logo from '~/assets/logo.png';

import Background from '~/components/Background';
import Subscription from '~/components/Subscription';

import { Header, Container, EmptyContainer, List } from './styles';

import { cancelSubscribe } from '~/store/modules/subscription/actions';

function Subscriptions({ isFocused }) {
    const [subscriptions, setSubscriptions] = useState([]);

    const dispatch = useDispatch();

    async function loadSubscriptions() {
        const response = await api.get('mysubscriptions');

        setSubscriptions(response.data);
    }

    useEffect(() => {
        if (isFocused) {
            loadSubscriptions();
        }
    }, [isFocused]);

    async function handleCancelSubscribe(id) {
        dispatch(cancelSubscribe(id));
    }

    return (
        <Background>
            <Header>
                <Image source={logo} style={{ width: 24, height: 24 }} />
            </Header>
            <Container>
                {subscriptions.length ? (
                    <List
                        data={subscriptions}
                        keyExtractor={item => String(item.id)}
                        renderItem={({ item }) => (
                            <Subscription
                                data={item.meetup}
                                onCancel={() => handleCancelSubscribe(item.id)}
                            />
                        )}
                    />
                ) : (
                    <EmptyContainer>
                        <Icon
                            name="sentiment-dissatisfied"
                            size={20}
                            color="#999"
                            style={{ marginRight: 5 }}
                        />
                        <Text>No Subscriptions found</Text>
                    </EmptyContainer>
                )}
            </Container>
        </Background>
    );
}

const tabBarIcon = ({ tintColor }) => (
    <Icon name="local-offer" size={20} color={tintColor} />
);

tabBarIcon.propTypes = {
    tintColor: PropTypes.string.isRequired,
};

Subscriptions.propTypes = {
    isFocused: PropTypes.bool.isRequired,
};

Subscriptions.navigationOptions = {
    tabBarLabel: 'Subscriptions',
    tabBarIcon,
};

export default withNavigationFocus(Subscriptions);
