import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: {
    background:
      "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,75,1) 35%, rgba(0,212,255,1) 100%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    width: "100%",
  },
  counter: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "15px 30px 15px 0",
  },
  formContainer: {
    marginTop: "45px",
  },
  formLabel: {
    padding: "10px",
  },
  radioGroup: {
    padding: "25px",
  },
  quizContainer: {
    backgroundColor: "#3f51b5",
    padding: "50.7px 0",
    height: "100vh",
  },
  circularProgressContainer: {
    position: "absolute",
    top: "calc(50% - 15px)",
    right: "calc(50% - 70px)",
    transition: "all 0.3s linear",
  },
});

export default useStyles;
