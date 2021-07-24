import {
  fetchFailure,
  fetchRequest,
  fetchSuccess,
} from "../actions/fetchAnswers";
import { type as findCorrectAnswerType } from "../actions/findCorrectAnswer";
import { type as findQuestionType } from "../actions/findQuestion";
import { type as groupAnswersType } from "../actions/groupAnswers";
import { type as addEachAnswerType } from "../actions/addEachAnswer";
import { type as qualifyAnswersType } from "../actions/qualifyAnswers";
const defaultState = {
  loading: true,
  error: "",
  question: null,
  answers: [],
  correctAnswer: "",
  groupAllAnswers: [],
  allUserAnswers: [],
  califications: [],
};
function fetchAnswers(state = defaultState, { type, payload }) {
  switch (type) {
    case fetchRequest:
      return { ...state, loading: true };
    case fetchSuccess:
      return { ...state, answers: payload, loading: false, error: "" };
    case fetchFailure:
      return { ...state, answers: [], loading: false, error: payload };
    case findQuestionType:
      const question = state.answers[payload.index].question;
      return { ...state, question };
    case findCorrectAnswerType:
      const correctAnswer = state.answers[payload.index].correct_answer.answer;
      return { ...state, correctAnswer };
    case groupAnswersType:
      const groupAllAnswers = state.answers[payload.index].incorrect_answers
        .map((incorrect_ans) => incorrect_ans.answer)
        .concat(state.correctAnswer)
        .sort(function () {
          return Math.random() - 0.5;
        });
      return { ...state, groupAllAnswers };
    case addEachAnswerType:
      const newItem = {
        question: state.question,
        answer: payload,
        calification: "",
      };
      return { ...state, allUserAnswers: [...state.allUserAnswers, newItem] };
    case qualifyAnswersType:
      const tempQualify = [];
      for (let i = 0; i < state.answers.length; i++) {
        if (
          state.answers[i].correct_answer.answer !==
          state.allUserAnswers[i].answer
        ) {
          tempQualify.push("incorrect");
        } else {
          tempQualify.push("correct");
        }
      }
      const tempAllUserAnswers = state.allUserAnswers.map((ans, ansIndex) => {
        return {
          ...ans,
          calification: tempQualify[ansIndex],
        };
      });
      return {
        ...state,
        califications: tempQualify,
        allUserAnswers: tempAllUserAnswers,
      };
    default:
      return state;
  }
}

export default fetchAnswers;
