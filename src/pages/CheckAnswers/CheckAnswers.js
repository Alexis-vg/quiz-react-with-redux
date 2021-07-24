import React, { useEffect } from "react";
import {
  Button,
  Card,
  Container,
  CssBaseline,
  Grid,
  Typography,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import useStyles from "./styles";
import { ToastContainer } from "react-toastify";
import { connect } from "react-redux";
import qualifyAnswers from "../../redux/actions/qualifyAnswers";

const CheckAnswers = (props) => {
  const { allUserAnswers, qualifyAnswers, answers, califications } = props;
  console.log(props);
  const classes = useStyles();
  const history = useHistory();
  useEffect(() => {
    if (!allUserAnswers.length && !answers.length) {
      history.push("/");
    }
  }, [allUserAnswers.length, answers.length, history]);
  const correctAnswers = allUserAnswers.filter(
    (item) => item.calification === "correct"
  );
  const qualify = () => {
    window.scrollTo(0, 0);
    if (!answers.length || !allUserAnswers.length) {
      history.push("/");
      window.location.reload();
    } else {
      qualifyAnswers();
    }
  };
  const goBack = () => {
    history.push("/");
    window.location.reload();
  };
  return (
    <div className={classes.checkAnswersPage}>
      <CssBaseline />
      <Container className={classes.checkAnswersContainer} maxWidth="md">
        <Card>
          <Typography className={classes.title} variant="h2">
            Tus Respuestas
          </Typography>
          <Grid className={classes.answersContainer} container spacing={3}>
            <Typography className={classes.corrects} variant="h5">
              {califications.length === 0
                ? null
                : `Tuviste ${correctAnswers.length} /  ${answers.length} respuestas correctas`}
            </Typography>

            {allUserAnswers.map((item, index) => {
              const { question, answer, calification } = item;
              return (
                <Grid key={index} item>
                  <Card className={classes.answers}>
                    <Typography variant="h5">{question}</Typography>
                    <Typography variant="body1">{answer}</Typography>
                  </Card>
                  <div
                    style={{
                      borderBottom: `${
                        calification === "" || calification === undefined
                          ? "3px transparent solid"
                          : calification === "correct"
                          ? "3px #4caf50 solid"
                          : "3px #f44336 solid"
                      }`,
                    }}
                  ></div>
                </Grid>
              );
            })}
            <div className={classes.buttons}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={qualify}
              >
                Calificar!
              </Button>
              <Link
                style={{ textDecoration: "none", marginTop: "20px" }}
                to="/"
              >
                <Button
                  fullWidth
                  onClick={goBack}
                  variant="outlined"
                  color="secondary"
                  size="large"
                >
                  Volver al principio!
                </Button>
              </Link>
            </div>
          </Grid>
        </Card>
        <ToastContainer />
      </Container>
    </div>
  );
};
const mapStateToProps = (state) => {
  const { allUserAnswers, answers, califications } = state.fetchAnswersReducer;
  const { numberOfAnswer } = state.numberOfAnswerReducer;
  return { allUserAnswers, answers, numberOfAnswer, califications };
};
const mapDispatchToProps = {
  qualifyAnswers,
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckAnswers);
