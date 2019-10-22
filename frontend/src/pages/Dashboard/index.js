import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
import api from '~/services/api';

import { Container, Meetup, Date } from './styles';

export default function Dashboard() {
    const [mymeetups, setMymeetups] = useState([]);

    useEffect(() => {
        async function loadMeetups() {
            const response = await api.get('mymeetups');

            const data = response.data.map(meetup => ({
                ...meetup,
                dateFormatted: format(
                    parseISO(meetup.date),
                    "dd 'de' MMMM', às' H'h'",
                    {
                        locale: pt,
                    }
                ),
            }));

            setMymeetups(data);
        }

        loadMeetups();
    }, []);

    return (
        <Container>
            <header>
                <h1>My Meetups</h1>
                <Link to="/create">
                    <button type="button">
                        <MdAddCircleOutline size={20} color="#fff" />
                        <span>New meetup</span>
                    </button>
                </Link>
            </header>
            <ul>
                {mymeetups.length ? (
                    mymeetups.map(meetup => (
                        <Link to={`details/${meetup.id}`} key={meetup.id}>
                            <Meetup>
                                <strong>{meetup.title}</strong>
                                <Date>
                                    <span>{meetup.dateFormatted}</span>
                                    <MdChevronRight size={24} color="#fff" />
                                </Date>
                            </Meetup>
                        </Link>
                    ))
                ) : (
                    <p
                        style={{
                            marginTop: 20,
                            background: 'rgba(0,0,0,0.2)',
                            borderRadius: '4px',
                            padding: 15,
                            display: 'flex',
                            justifyContent: 'center',
                            color: 'rgba(255,255,255,0.6)',
                        }}
                    >
                        No meetups found...
                    </p>
                )}
            </ul>
        </Container>
    );
}
