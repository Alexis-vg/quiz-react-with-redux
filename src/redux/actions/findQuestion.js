export const type = "findQuestion";
const findQuestion = (index) => {
  return { type, payload: { index } };
};
export default findQuestion;
