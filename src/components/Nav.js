import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Nav() {
  const users = useSelector((state) => state.users);
  const authedUser = useSelector((state) => state.authedUser);

  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/home" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/add" exact activeClassName="active">
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink to="/leaderBoard" exact activeClassName="active">
            Leader Board
          </NavLink>
        </li>
        <li>
          {authedUser && (
            <>
              <span>{`Hello, ${users[authedUser].name}`}</span>
              <img
                src={users[authedUser].avatarURL}
                className="avatar"
                style={{ height: 25 }}
                alt={`${users[authedUser].name}'s avatar`}
              />
            </>
          )}
        </li>
        {authedUser && (
          <li>
            <NavLink to="/login" exact>
              Logout
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Nav;
