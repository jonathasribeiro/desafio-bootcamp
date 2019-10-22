import produce from 'immer';

const INITIAL_STATE = {
    loading: false,
};

export default function subscription(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@subscription/SUBSCRIBE_REQUEST': {
                draft.loading = true;
                break;
            }
            case '@subscription/SUBSCRIBE_SUCCESS':
            case '@subscription/SUBSCRIBE_CANCEL_SUCCESS':
            case '@subscription/SUBSCRIBE_FAILURE': {
                draft.loading = false;
                break;
            }
            default:
        }
    });
}
