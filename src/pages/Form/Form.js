import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
//redux
import { connect } from "react-redux";
//actions
import fetchAnswers from "../../redux/actions/fetchAnswers";
import findCorrectAnswer from "../../redux/actions/findCorrectAnswer";
import findQuestion from "../../redux/actions/findQuestion";
import groupAnswers from "../../redux/actions/groupAnswers";
import addEachAnswer from "../../redux/actions/addEachAnswer";
import incrementNumberOfAnswer from "../../redux/actions/incrementNumberOfAnswer";
//material ui
import {
  Button,
  Card,
  CircularProgress,
  Container,
  CssBaseline,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles";
//toastify
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import ReactLoading from "react-loading";
const Form = (props) => {
  const {
    fetchAnswers,
    answers,
    groupAllAnswers,
    question,
    addEachAnswer,
    numberOfAnswer,
    incrementNumberOfAnswer,
    loading,
  } = props;
  const [indexOfAnswer, setIndexOfAnswer] = useState(0);
  const [value, setValue] = useState("");
  const [disabled, setDisabled] = useState(true);
  console.log(props);
  const history = useHistory();
  const classes = useStyles();
  useEffect(() => {
    if (answers.length === 0 || indexOfAnswer < answers.length) {
      fetchAnswers(indexOfAnswer);
    } else {
      history.push("/check-answers");
    }
  }, [indexOfAnswer, fetchAnswers, history, answers.length]);
  useEffect(() => {
    const interval = setInterval(() => {
      setDisabled(false);
    }, 2000);
    return () => clearInterval(interval);
  }, [numberOfAnswer, setDisabled]);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setDisabled(true);
    if (!value) {
      toast.dark("⚠️ Please select an answer");
    } else {
      addEachAnswer(value);
      setIndexOfAnswer(indexOfAnswer + 1);
      setValue("");
      if (numberOfAnswer < answers.length) {
        incrementNumberOfAnswer();
      }
    }
  };
  if (loading) {
    return (
      <div className={classes.spinnerContainer}>
        <Typography variant="body2" paragraph>
          Please, give me a moment to fetch the API
        </Typography>
        <CircularProgress />
      </div>
    );
  }
  return (
    <div className={classes.quizContainer}>
      <CssBaseline />
      <Container className={classes.formContainer} maxWidth="md">
        <Card>
          <Typography className={classes.counter} variant="h4">
            {numberOfAnswer}/{answers.length}
          </Typography>
          <form onSubmit={handleSubmit}>
            <FormControl fullWidth align="center" component="fieldset">
              <Typography
                variant="h5"
                className={classes.formLabel}
                component="legend"
              >
                {question}
              </Typography>
              <RadioGroup
                className={classes.radioGroup}
                aria-label="gender"
                name="gender1"
                value={value}
                onChange={handleChange}
              >
                {groupAllAnswers.map((eachOne, index) => (
                  <FormControlLabel
                    key={index}
                    value={eachOne}
                    control={<Radio />}
                    label={eachOne}
                  />
                ))}
              </RadioGroup>
              <div style={{ position: "relative", marginTop: "20px" }}>
                <Button
                  className={classes.button}
                  size="large"
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={disabled}
                >
                  Next
                </Button>
                <div className={classes.circularProgressContainer}>
                  {disabled && (
                    <ReactLoading
                      type={"spinningBubbles"}
                      color={"#046D5D"}
                      height={"30px"}
                      width={"30px"}
                    />
                  )}
                </div>
              </div>
            </FormControl>
          </form>
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </Card>
      </Container>
    </div>
  );
};
const mapStateToProps = (state) => {
  const { answers, loading, error, correctAnswer, groupAllAnswers, question } =
    state.fetchAnswersReducer;
  const { numberOfAnswer } = state.numberOfAnswerReducer;
  return {
    answers,
    loading,
    error,
    correctAnswer,
    groupAllAnswers,
    question,
    numberOfAnswer,
  };
};
const mapDispatchToProps = {
  fetchAnswers,
  findCorrectAnswer,
  findQuestion,
  groupAnswers,
  addEachAnswer,
  incrementNumberOfAnswer,
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);
