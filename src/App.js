
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import StartPage from "./StartPageFolder/StartPage";
import UserPage from './UserPageFolder/userPage';


function App() {
  return (
  <Router>
      <div className="App">
      <Switch>
          <Route exact path="/">
                    <StartPage />
          </Route> 
          <Route path="/user">
                    <UserPage />
          </Route> 
      </Switch>
      </div>
  </Router>
    
  );
}

export default App;
