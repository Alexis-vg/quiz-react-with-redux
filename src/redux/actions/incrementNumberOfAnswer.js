export const type = "incrementNumberOfAnswer";
const findQuestion = (numberOfAns) => {
  return { type, payload: numberOfAns };
};
export default findQuestion;
