import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MdEvent, MdPlace, MdDeleteForever, MdEdit } from 'react-icons/md';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';
import { cancelRequest } from '~/store/modules/meetup/actions';

import mask from '~/assets/mask.png';
import {
    Container,
    EditButton,
    CancelButton,
    MeetupDate,
    MeetupLocation,
} from './styles';

export default function Details({ match }) {
    const { id } = match.params;
    const [meetup, setMeetup] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        async function loadMeetup() {
            const response = await api.get(`mymeetups/${id}`);
            setMeetup({
                ...response.data,
                dateFormatted: format(
                    parseISO(response.data.date),
                    "dd 'de' MMMM', às' H'h'",
                    {
                        locale: pt,
                    }
                ),
            });
        }

        loadMeetup();
    }, [id]);

    function handleCancel() {
        dispatch(cancelRequest(id));
    }

    return (
        <Container>
            <header>
                <h1>{meetup.title}</h1>
                <div>
                    <Link to={`/edit/${id}`}>
                        <EditButton type="button">
                            <MdEdit size={20} color="fff" /> Edit
                        </EditButton>
                    </Link>
                    <CancelButton type="button" onClick={handleCancel}>
                        <MdDeleteForever size={20} color="#fff" /> Cancel
                    </CancelButton>
                </div>
            </header>
            <img
                src={meetup.banner ? meetup.banner.url : mask}
                alt="Meetup Banner"
            />
            <p>{meetup.description}</p>
            <div>
                <MeetupDate>
                    <MdEvent size={20} color="#fff" /> {meetup.dateFormatted}
                </MeetupDate>
                <MeetupLocation>
                    <MdPlace size={20} color="#fff" /> {meetup.location}
                </MeetupLocation>
            </div>
        </Container>
    );
}

Details.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string,
        }),
    }),
};
