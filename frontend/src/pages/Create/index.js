import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Input } from '@rocketseat/unform';
import DatePicker from 'react-datepicker';
import { parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import * as Yup from 'yup';
import { MdAddCircleOutline } from 'react-icons/md';

import api from '~/services/api';
import BannerInput from './BannerInput';
import { Container } from './styles';

import { addRequest, editRequest } from '~/store/modules/meetup/actions';

const schema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    location: Yup.string().required('Location is required'),
    banner_id: Yup.number().required('Banner is required'),
});

export default function Create({ match }) {
    const { id } = match.params;
    const [meetup, setMeetup] = useState({});
    const [newDate, setNewDate] = useState(new Date());
    const dispatch = useDispatch();

    function handleSubmit({ title, description, location, banner_id }) {
        if (!id) {
            dispatch(
                addRequest(title, description, newDate, location, banner_id)
            );
        } else {
            dispatch(
                editRequest(
                    title,
                    description,
                    newDate,
                    location,
                    banner_id,
                    id
                )
            );
        }
    }

    function handleChange(selectedDate) {
        setNewDate(selectedDate);
    }

    useEffect(() => {
        if (!id) return;
        async function getMeetup() {
            const response = await api.get(`mymeetups/${id}`);

            setMeetup({
                ...response.data,
                banner_id: response.data.banner.id,
                url: response.data.banner.url,
            });

            setNewDate(parseISO(response.data.date));
        }

        getMeetup();
    }, [id]);

    return (
        <Container>
            <Form initialData={meetup} schema={schema} onSubmit={handleSubmit}>
                <BannerInput
                    imageURL={meetup.url}
                    imageID={meetup.banner_id}
                    name="banner_id"
                />

                <Input name="title" placeholder="Meetup title" />
                <Input
                    name="description"
                    multiline
                    defaultValue={meetup.description}
                    placeholder="Meetup description"
                />
                <DatePicker
                    autoComplete="off"
                    name="date"
                    todayButton="Hoje"
                    selected={newDate}
                    onChange={handleChange}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    dateFormat="dd/MM/yyyy HH:mm"
                    timeCaption="Horário"
                    placeholderText="Meetup date"
                    locale={pt}
                    style={{ width: '100%' }}
                />

                <Input name="location" placeholder="Meetup location" />
                <button type="submit">
                    <MdAddCircleOutline size={20} color="#fff" />
                    Save
                </button>
            </Form>
        </Container>
    );
}

Create.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string,
        }),
    }),
};
