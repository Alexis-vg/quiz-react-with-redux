export const type = "addEachAnswer";
const addEachAnswer = (answer) => {
  return { type, payload: answer };
};
export default addEachAnswer;
