import { type as incrementNumberOfAnswerType } from "../actions/incrementNumberOfAnswer";
const defaultState = {
  numberOfAnswer: 1,
};
function fetchAnswers(state = defaultState, { type, payload }) {
  switch (type) {
    case incrementNumberOfAnswerType:
      return { ...state, numberOfAnswer: state.numberOfAnswer + 1 };

    default:
      return state;
  }
}

export default fetchAnswers;
