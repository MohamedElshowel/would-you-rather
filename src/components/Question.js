import { Button, Card } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Question({ id }) {
  const history = useHistory();
  const questions = useSelector((state) => state.questions);
  const users = useSelector((state) => state.users);

  const data = questions[id];
  const author = users[data.author];

  const navigateToPoll = () => {
    history.push(`/questions/${id}`);
  };

  return (
    <Card
      title={`${author.name} asks:`}
      className="card"
      headStyle={{ backgroundColor: "#eeeeee" }}
    >
      <div className="center">
        <img
          src={author.avatarURL}
          className="avatar"
          alt={`${author.name}'s avatar`}
        />
        <div>Would you rather</div>
        <ul>
          <b>{data.optionOne.text}</b>
          <span> vs. </span>
          <b>{data.optionTwo.text}</b>
        </ul>
        <br />
        <Button type="default" onClick={navigateToPoll}>
          View Poll
        </Button>
      </div>
    </Card>
  );
}

export default Question;
