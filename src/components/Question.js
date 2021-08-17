import { Button } from "antd";
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
    <div className="question">
      <h4>{author.name} asks: </h4>
      <div>
        <img
          src={author.avatarURL}
          className="avatar"
          alt={`${author.name}'s avatar`}
        />
        <h5>Would you rather</h5>
        <ul>
          <li>{data.optionOne.text}</li>
          <li>{data.optionTwo.text}</li>
        </ul>
        <Button type="default" onClick={navigateToPoll}>View Poll</Button>
      </div>
    </div>
  );
}

export default Question;
