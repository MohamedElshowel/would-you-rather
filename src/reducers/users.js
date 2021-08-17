import { RECEIVE_USERS } from "../actions/users";
import { SAVE_ANSWER } from "../actions/questions";

export default function usersReducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return { ...state, ...action.users };
    case SAVE_ANSWER:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.id]: action.selectedOption,
          },
        },
      };
    default:
      return state;
  }
}
