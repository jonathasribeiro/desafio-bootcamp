export function addRequest(title, description, date, location, banner_id) {
    return {
        type: '@meetup/ADD_REQUEST',
        payload: { title, description, date, location, banner_id },
    };
}

export function editRequest(title, description, date, location, banner_id, id) {
    return {
        type: '@meetup/EDIT_REQUEST',
        payload: { title, description, date, location, banner_id, id },
    };
}

export function cancelRequest(id) {
    return {
        type: '@meetup/CANCEL_REQUEST',
        payload: { id },
    };
}
