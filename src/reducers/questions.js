import {
  ADD_QUESTION,
  RECEIVE_QUESTIONS,
  REMOVE_ANSWER,
  SAVE_ANSWER,
} from "../actions/questions";

export default function questionsReducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return { ...state, ...action.questions };

    case ADD_QUESTION:
      return { ...state, [action.question.id]: action.question };

    case SAVE_ANSWER:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          [action.selectedOption]: {
            ...state[action.id][action.selectedOption],
            votes: state[action.id][action.selectedOption].votes.concat([
              action.authedUser,
            ]),
          },
        },
      };

    case REMOVE_ANSWER:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          [action.selectedOption]: {
            ...state[action.id][action.selectedOption],
            votes: state[action.id][action.selectedOption].votes.filter(
              (votedUsers) => votedUsers !== action.authedUser
            ),
          },
        },
      };

    default:
      return state;
  }
}
