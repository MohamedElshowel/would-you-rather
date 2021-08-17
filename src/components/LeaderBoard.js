import React from "react";
import { useSelector } from "react-redux";
import { Card } from "antd";

function LeaderBoard() {
  const users = useSelector((state) => state.users);

  const achievementsBoard = Object.keys(users).map((userId) => ({
    id: userId,
    answersCount: Object.keys(users[userId].answers).length,
    questionsCount: users[userId].questions.length,
  }));

  return (
    <div className="center">
      <ul>
        {achievementsBoard
          .sort(
            (a, b) =>
              b.answersCount +
              b.questionsCount -
              (a.answersCount + a.questionsCount)
          )
          .map((item) => (
            <li key={item.id}>
              <Card
                title={
                  <>
                    <img
                      className="avatar"
                      src={users[item.id].avatarURL}
                      alt={`${users[item.id].name}'s avatar`}
                    />
                    <span><b>{users[item.id].name}</b></span>
                  </>
                }
                headStyle={{ backgroundColor: "#eeeeee" }}
              >
                <div>{`Answered Questions: ${item.answersCount}`} </div>
                <div>{`Created Questions: ${item.questionsCount}`}</div>
                <div>
                  <b>{`Total Score: ${
                    item.answersCount + item.questionsCount
                  }`}</b>
                </div>
              </Card>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default LeaderBoard;
