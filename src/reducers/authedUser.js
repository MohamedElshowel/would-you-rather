import { SET_AUTHED_USER } from "../actions/authedUser";

export default function authedUserReducer(state = null, { type, id }) {
    switch (type) {
        case SET_AUTHED_USER:
            return id;
        default:
            return state;
    }
}
