import React from "react";
import { useSelector } from "react-redux";
import { Tabs } from "antd";
import Question from "./Question";

function Home() {
  const { TabPane } = Tabs;
  const questions = useSelector((state) => state.questions);
  const users = useSelector((state) => state.users);
  const authedUser = useSelector((state) => state.authedUser);
  const answeredQuestions = users[authedUser].answers;

  return (
    <div style={{ width: "50vw", margin: "auto" }}>
      <Tabs defaultActiveKey="1" type="card" size="large">
        <TabPane tab="Unanswered Questions" key="1">
          <ul className="center">
            {Object.keys(questions)
              .filter((item) => !Object.keys(answeredQuestions).includes(item))
              .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
              .map((qid) => (
                <li key={qid}>
                  <Question id={qid} />
                </li>
              ))}
          </ul>
        </TabPane>

        <TabPane tab="Answered Questions" key="2">
          <ul className="center">
            {Object.keys(answeredQuestions)
              .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
              .map((qid) => (
                <li key={qid}>
                  <Question id={qid} />
                </li>
              ))}
          </ul>
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Home;
