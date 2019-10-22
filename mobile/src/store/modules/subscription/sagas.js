import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import {
    subscribeFailure,
    subscribeSuccess,
    cancelSubscribeSuccess,
} from './actions';

export function* subscribe({ payload }) {
    try {
        const { meetup_id } = payload;

        yield call(api.post, 'subscriptions', {
            meetup_id,
        });

        Alert.alert('Success', 'Subscription done!');

        yield put(subscribeSuccess());
    } catch (error) {
        Alert.alert('Failed.', error.response.data.error);
        yield put(subscribeFailure());
    }
}

export function* cancelSubscribe({ payload }) {
    try {
        const { id } = payload;

        yield call(api.delete, `subscriptions/${id}`);

        Alert.alert('Success', 'Subscription canceled.');

        yield put(cancelSubscribeSuccess());
    } catch (error) {
        Alert.alert('Failed', error.response.data.error);
        yield put(subscribeFailure());
    }
}

export default all([
    takeLatest('@subscription/SUBSCRIBE_REQUEST', subscribe),
    takeLatest('@subscription/SUBSCRIBE_CANCEL_REQUEST', cancelSubscribe),
]);
