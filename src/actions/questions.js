import { hideLoading, showLoading } from "react-redux-loading";
import { saveQuestion, saveQuestionAnswer } from "../utils/api";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const SAVE_ANSWER = "SAVE_ANSWER";
export const REMOVE_ANSWER = "REMOVE_ANSWER";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddQuestion({ optionOneText, optionTwoText }) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());

    return saveQuestion({ optionOneText, optionTwoText, author: authedUser })
      .then((question) => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()));
  };
}

function answerQuestion({ id, authedUser, selectedOption }) {
  return {
    type: SAVE_ANSWER,
    id,
    authedUser,
    selectedOption,
  };
}

function removeAnswer({ id, authedUser, selectedOption }) {
  return {
    type: REMOVE_ANSWER,
    id,
    authedUser,
    selectedOption,
  };
}

export function handleSavingAnswer(info) {
  return (dispatch) => {
    dispatch(answerQuestion(info));

    return saveQuestionAnswer(info).catch((err) => {
      console.warn("Error in answering a question ..", err);
      dispatch(removeAnswer(info));
      alert(
        "There is an error happened while saving your answer. Please try again."
      );
    });
  };
}
