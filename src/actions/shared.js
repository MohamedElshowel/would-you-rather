import { getInitialData } from "../utils/api";
import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";
import { showLoading, hideLoading } from "react-redux-loading";


export const handleInitialData = () => (dispatch) => {
  dispatch(showLoading());
  getInitialData().then(({ users, questions }) => {
    dispatch(receiveUsers(users));
    dispatch(receiveQuestions(questions));
    dispatch(hideLoading());
  });
}
