import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { handleSavingAnswer } from "../actions/questions";
import { Button, Card, Radio } from "antd";

function Poll() {
  const id = useParams().id;
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions);
  const users = useSelector((state) => state.users);
  const authedUser = useSelector((state) => state.authedUser);
  const [selectedOption, setSelectedOption] = useState("optionOne");

  const data = questions[id];
  const author = users[data.author];
  const answeredQuestions = users[authedUser].answers;

  const onSubmitAnswer = (evt) => {
    evt.preventDefault();
    dispatch(handleSavingAnswer({ id, authedUser, selectedOption }));
  };

  const optionOneVotesCount = data.optionOne.votes.length;
  const optionTwoVotesCount = data.optionTwo.votes.length;
  const totalVotesCount = optionOneVotesCount + optionTwoVotesCount;

  if (!data) {
    return (
      <div className="center">
        <h2>Error 404: Poll is not found!</h2>
      </div>
    );
  }

  return (
    <div className="center">
      <Card
        title={
          <div className="center">
            <h3>Would You Rather App</h3>
          </div>
        }
        headStyle={{ backgroundColor: "#eeeeee" }}
      >
        <div>
          <img
            src={author.avatarURL}
            className="avatar"
            alt={`${author.name}'s avatar`}
          />

          {answeredQuestions[id] ? (
            <div className="center">
              <h2>Results:</h2>
              <ul>
                <li>
                  <b>{data.optionOne.text}: </b>
                  {`${optionOneVotesCount} out of ${totalVotesCount} votes (${Math.round(
                    (optionOneVotesCount / totalVotesCount) * 100
                  )}%)`}
                  {answeredQuestions[id] === "optionOne" && <span> ✅</span>}
                </li>
                <li>
                  <b>{data.optionTwo.text}: </b>
                  {`${optionTwoVotesCount} out of ${totalVotesCount} votes (${Math.round(
                    (optionTwoVotesCount / totalVotesCount) * 100
                  )}%)`}
                  {answeredQuestions[id] === "optionTwo" && <span> ✅</span>}
                </li>
              </ul>
            </div>
          ) : (
            <div className="center">
              <h2>Would You Rather ...</h2>
              <Radio.Group
                name="answerOptions"
                defaultValue={selectedOption}
                onChange={(evt) => setSelectedOption(evt.target.value)}
              >
                <Radio value="optionOne">{data.optionOne.text}</Radio>
                <Radio value="optionTwo">{data.optionTwo.text}</Radio>
              </Radio.Group>
              <br />
              <br />
              <Button
                type="primary"
                onClick={onSubmitAnswer}
                style={{ width: "30%" }}
              >
                Submit
              </Button>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}

export default Poll;
