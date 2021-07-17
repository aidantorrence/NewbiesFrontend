import React from "react";
import Quiz from './Components/Quiz/Quiz.js';
import Login from './Components/Credentials/Login.js';
import LoginForm from './Components/Credentials/LoginForm.js';
import Profile from './Components/Profile.js';
import Leaderboard from './Components/Leaderboard.js';
import Navigation from './Components/CSS/Navigation.css';
import LoginCSS from './Components/CSS/LoginForm.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";






function App() {
  return (
      <Router>
        <div>
          <nav className="navigation">
          <div className="wrapper"><ul>
                <li className="companyName">
                  <Link to="/">TechED</Link>
                </li>
                <li>
                  <Link to="/">Quiz</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/leaderboard">Leadeboard</Link>
                </li>
                <li>
                  <Link to="/login">login</Link>
                </li>
              </ul>
            </div>
          </nav>


          <Switch>
          <Route path="/techED">
              <Quiz />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/leaderboard">
              <Leaderboard />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/">
              <Quiz style={{justifyContent: 'center'}}/>
            </Route>
          </Switch>
        </div>
      </Router>
  );
}


export default App;
