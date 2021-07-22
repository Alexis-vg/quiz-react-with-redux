export const type = "groupAnswers";
const groupAnswers = (index) => {
  return { type, payload: { index } };
};
export default groupAnswers;
