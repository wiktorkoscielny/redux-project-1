# I'm getting to know with REDUX

## You can check that simple tutorial project [here](https://wiktorkoscielny.github.io/redux-project-1/)
## Check redux dev tool!

1. Create react app
2. Install __redux__ `install redux react-redux` to connect react and redux together
3. Installed redux-devtools-extension

__STORE__ - holds data of application

__ACTION__ - describes what I'm gonna do

__REDUCER__ - describes how actions transform the sate into the next state

* ACTION is going to be called => REDUCER is going to check which action have been done and based on that action it's going to modify => STORE

* DISPATCH - way to actually execute actions e.g. dispatch that action to reducer

__PROVIDER__ - connects global states at store to entire app

* useSelector

* useDispatch - gives ability to dispatch an action
