import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';

import {
    Container,
    Banner,
    Title,
    InfoContainer,
    Info,
    InfoText,
    CancelSubscribeButton,
} from './styles';

export default function Subscription({ data, onCancel }) {
    const loading = useSelector(state => state.subscription.loading);

    const dateFormatted = useMemo(() => {
        return formatRelative(parseISO(data.date), new Date(), {
            locale: pt,
            addSuffix: true,
        });
    }, [data.date]);

    return (
        <Container>
            <Banner
                source={{
                    uri: data.banner.url
                        ? data.banner.url
                        : 'https://camunda.com/img/events/meetup-example.jpg',
                }}
            />
            <Title>{data.title}</Title>
            <InfoContainer>
                <Info>
                    <Icon name="event" size={18} color="#999" />
                    <InfoText>{dateFormatted}</InfoText>
                </Info>
                <Info>
                    <Icon name="place" size={18} color="#999" />
                    <InfoText>{data.location}</InfoText>
                </Info>
                <Info>
                    <Icon name="person" size={18} color="#999" />
                    <InfoText>Organizador: {data.user.name}</InfoText>
                </Info>
            </InfoContainer>
            <CancelSubscribeButton loading={loading} onPress={onCancel}>
                Cancel subscribe
            </CancelSubscribeButton>
        </Container>
    );
}

Subscription.propTypes = {
    data: PropTypes.shape({
        user: PropTypes.shape({
            name: PropTypes.string.isRequired,
        }),
        banner: PropTypes.shape({
            url: PropTypes.string.isRequired,
        }),
        title: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
    }),
    onCancel: PropTypes.func.isRequired,
};

Subscription.defaultProps = {
    data: {},
};
