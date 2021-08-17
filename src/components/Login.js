import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, Card, Dropdown, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { setAuthedUser } from "../actions/authedUser";

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const users = useSelector((state) => state.users);
  const authedUser = useSelector((state) => state.authedUser);
  const [selectedUserId, setSelectedUserId] = useState(authedUser);

  useEffect(() => {
    setSelectedUserId(null);
    dispatch(setAuthedUser(null));
  }, [dispatch]);

  const changeAuthedUser = () => {
    dispatch(setAuthedUser(selectedUserId));
    history.push("/home");
  };

  const usersMenu = (
    <Menu onClick={(evt) => setSelectedUserId(evt.key)}>
      {Object.keys(users).map((userId) => {
        const user = users[userId];
        return (
          <Menu.Item
            key={userId}
            icon={
              <img
                className="avatar"
                src={user.avatarURL}
                alt={`${user.name}'s avatar`}
              />
            }
          >
            {user.name}
          </Menu.Item>
        );
      })}
    </Menu>
  );

  return (
    <Card
      title={
        <div className="center">
          <h2>Welcome to the Would You Rather App!</h2>
          <span>Please sign in to continue</span>
        </div>
      }
      headStyle={{ backgroundColor: "#eeeeee" }}
    >
      <div className="center">
        <h3>Sign In</h3>
        <Dropdown overlay={usersMenu}>
          <Button style={{ width: "100%", height: 60 }}>
            {users[selectedUserId]?.avatarURL ? (
              <img
                className="avatar"
                src={users[selectedUserId].avatarURL}
                alt={`${users[selectedUserId].name}'s avatar`}
                style={{ height: 35 }}
              />
            ) : (
              <UserOutlined style={{ marginRight: 5 }} />
            )}
            <b>{users[selectedUserId]?.name || "Select a user"}</b>
          </Button>
        </Dropdown>
        <br />
        <br />
        <Button
          type="primary"
          style={{ width: "100%", height: 50, fontSize: 15 }}
          disabled={!selectedUserId}
          onClick={changeAuthedUser}
        >
          Login
        </Button>
      </div>
    </Card>
  );
}

export default Login;
