import React, { useEffect } from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './Components/Login';
import Sign_up from './Components/Sign_up';
import Dashboard from './Components/Dashboard';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { auth } from './firebase';
import { login, logout } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // User is signed in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          }),
        );
      } else {
        // User is signed out
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>
        <Route exact path="/login">
          {user ? <Redirect to="/dashboard" /> : <Login />}
        </Route>
        <Route exact path="/signup">
          <Sign_up />
        </Route>
        <Route exact path="/dashboard">
          {!user ? <Redirect to="/login" /> : <Dashboard />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
