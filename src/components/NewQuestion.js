import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { handleAddQuestion } from "../actions/questions";
import { Button, Card, Input } from "antd";

function NewQuestion() {
  const [redirectToHome, setRedirectToHome] = useState(false);
  const optionOneRef = useRef();
  const optionTwoRef = useRef();
  const dispatch = useDispatch();

  const onSubmitQuestion = (evt) => {
    evt.preventDefault();

    const optionOneText = optionOneRef.current.input.value;
    const optionTwoText = optionTwoRef.current.input.value;

    if (optionOneText && optionTwoText) {
      dispatch(
        handleAddQuestion({
          optionOneText,
          optionTwoText,
        })
      );
      setRedirectToHome(true);
    } else {
      alert("Please enter a valid text for the both options.");
    }
  };

  if (redirectToHome) {
    return <Redirect to="/home" />;
  }

  return (
    <Card
      title="Create New Question"
      className="card"
      headStyle={{ backgroundColor: "#eeeeee" }}
    >
      <form className="center">
        <h2>Would you rather ...</h2>
        <Input
          type="text"
          ref={optionOneRef}
          placeholder="Enter Option One Text Here"
        />
        <span>OR</span>
        <Input
          type="text"
          ref={optionTwoRef}
          placeholder="Enter Option Two Text Here"
        />
        <br />
        <br />
        <Button
          type="primary"
          onClick={onSubmitQuestion}
          style={{ width: "100%", height: 40, fontSize: 15 }}
        >
          Submit
        </Button>
      </form>
    </Card>
  );
}

export default NewQuestion;
