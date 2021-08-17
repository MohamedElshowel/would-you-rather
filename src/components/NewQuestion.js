import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { handleAddQuestion } from "../actions/questions";
import { Button, Input } from "antd";

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
    <div className="center" style={{ width: "40%", margin: "auto" }}>
      <h1>Create New Question</h1>
      <hr />
      <form>
        <span>Complete the question: </span>
        <h4>Would you rather ...</h4>
        <Input
          type="text"
          ref={optionOneRef}
          placeholder="Enter Option One Text Here"
        />
        <div>OR</div>
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
          style={{ width: "100%" }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default NewQuestion;
