import axios from "axios";
import findCorrectAnswer from "./findCorrectAnswer";
import findQuestion from "./findQuestion";
import groupAnswers from "./groupAnswers";
const url = "https://damp-escarpment-69309.herokuapp.com/questions";
export const fetchRequest = "fetchRequest";
export const fetchSuccess = "fetchSuccess";
export const fetchFailure = "fetchFailure";
export const redirectHome = "redirectHome";
export const fetchAnswersRequest = () => {
  return {
    type: fetchRequest,
  };
};
const fetchAnswersSuccess = (response) => {
  return {
    type: fetchSuccess,
    payload: response,
  };
};
const fetchAnswersFailure = (error) => {
  return {
    type: fetchFailure,
    payload: error,
  };
};
const redirectToHome = (path) => {
  return {
    type: redirectHome,
    payload: path,
  };
};
const fetchAnswers = (index) => {
  return (dispatch) => {
    dispatch(fetchAnswersRequest());
    axios.get(url).then((response) => {
      const answers = response.data;
      dispatch(fetchAnswersSuccess(answers));
      if (index > answers.length - 1) {
        dispatch(redirectToHome("/check-answers"));
      }
      dispatch(findQuestion(index));
      dispatch(findCorrectAnswer(index));
      dispatch(groupAnswers(index));
    });
    /* .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchAnswersFailure(errorMsg));
      }); */
  };
};

export default fetchAnswers;
