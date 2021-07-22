export const type = "findCorrectAnswer";
const findCorrectAnswer = (index) => {
  return { type, payload: { index } };
};
export default findCorrectAnswer;
