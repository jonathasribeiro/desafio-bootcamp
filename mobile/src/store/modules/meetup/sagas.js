import { Alert } from 'react-native';
import { takeLatest, call, all } from 'redux-saga/effects';

import api from '~/services/api';

export function* addMeetup({ payload }) {
    try {
        const { title, description, date, location, banner_id } = payload;

        yield call(api.post, 'meetups', {
            title,
            description,
            date,
            location,
            banner_id,
        });

        // history.push('/dashboard');
    } catch (error) {
        Alert.alert('Failed', 'Check your data.');
    }
}

export function* cancelMeetup({ payload }) {
    try {
        const { id } = payload;

        yield call(api.delete, `mymeetups/${id}`);

        Alert.alert('Success', 'Meetup was deleted.');

        // history.push('/dashboard');
    } catch (error) {
        Alert.alert('Failed', 'Delete meetup failed.');
    }
}

export function* editMeetup({ payload }) {
    try {
        const { title, description, date, location, banner_id, id } = payload;

        yield call(api.put, `mymeetups/${id}`, {
            title,
            description,
            date,
            location,
            banner_id,
        });

        Alert.alert('Success', 'Meetup updated success!');

        // history.push(`/details/${id}`);
    } catch (error) {
        Alert.alert('Failed', 'Update meetup failed.');
    }
}

export default all([
    takeLatest('@meetup/ADD_REQUEST', addMeetup),
    takeLatest('@meetup/EDIT_REQUEST', editMeetup),
    takeLatest('@meetup/CANCEL_REQUEST', cancelMeetup),
]);
