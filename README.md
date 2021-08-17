# Would You Rather App

"Would You Rather?" is a web app that lets the user play the “Would You Rather?” game.

The game goes like this: a user is asked a question in the form: “Would you rather _[option A]_ or _[option B]_?”. Answering "neither" or "both" is against the rules.

---

This app is bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and it uses as app's dependencies:
- [React](https://reactjs.org/)
- [React Router DOM](https://reactrouter.com/web/guides/quick-start)
- [Redux](https://redux.js.org/)
- [React Redux](https://react-redux.js.org/)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)
- [React Redux Loading Bar](https://www.npmjs.com/package/react-redux-loading)
- [Ant Design](https://ant.design/)

---
## How To Use:
* Install all project dependencies with `npm install`.
* Start the development server with `npm start`.
* Build code for production: `npm run build`.

---
## Folder Structure
```bash
├── README.md - This file.
├── package.json # npm package manager file.
├── .gitignore   # To Ignore useless files/folder from git tracking.
├── public
│   ├── favicon.ico # React Icon.
│   └── index.html # Index HTML file
└── src
    ├── components/ # App components.
    ├── actions/         # Redux actions.
    ├── middleware/      # Redux Middleware.
    ├── reducers/        # Redux Reducers.
    ├── utils/           # Fake API and its helpers.
    ├── index.css         # Global styles.
    └── index.js          # Index file used for React rendering on the DOM.
```
