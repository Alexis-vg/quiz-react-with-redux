import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  checkAnswersPage: {
    height: "100%",
    paddingTop: "45px",
    paddingBottom: "45px",
    backgroundColor: "#3f51b5",
  },
  title: { padding: "25px" },
  answersContainer: {
    display: "block",
    padding: "25px",
  },
  /*  checkAnswersContainer: {
    marginTop: "45px",
  }, */
  button: {
    marginTop: "20px",
    background:
      "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,75,1) 35%, rgba(0,212,255,1) 100%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
  formContainer: {
    marginTop: "45px",
  },
  radioGroup: {
    padding: "15px",
  },
  answers: {
    padding: "5px 15px",
  },
  corrects: {
    display: "flex",
    justifyContent: "flex-end",
    height: "45px",
    paddingRight: "25px",
    paddingLeft: "25px",
    marginBottom: "30px",
  },
  buttons: {
    margin: "15px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
});

export default useStyles;
