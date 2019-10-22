export function subscribeRequest(meetup_id) {
    return {
        type: '@subscription/SUBSCRIBE_REQUEST',
        payload: { meetup_id },
    };
}

export function subscribeSuccess() {
    return { type: '@subscription/SUBSCRIBE_SUCCESS' };
}

export function subscribeFailure() {
    return { type: '@subscription/SUBSCRIBE_FAILURE' };
}

export function cancelSubscribeSuccess() {
    return { type: '@subscription/SUBSCRIBE_CANCEL_SUCCESS' };
}

export function cancelSubscribe(id) {
    return {
        type: '@subscription/SUBSCRIBE_CANCEL_REQUEST',
        payload: { id },
    };
}
