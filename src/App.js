import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./Header";
import Search from './Search';
import SignUp from './SignUp';
import Home from './Home';
import SearchPage from './SearchPage';

function App() {
  return (
    <Router>
       <div className="App">
      <Switch>
        <Route path="/search">
          <SearchPage/>
        </Route>
        <Route path="/payment">
          <h1>Pay</h1>
        </Route>
        <Route path="/sign-up">
          <SignUp/>
        </Route>
        <Route path="/login">
          <h1>Login</h1>
        </Route>
         {/* / is default route*/}
         <Route path="/"> 
          <Header/>
          <Search/>
          <Home/>
        </Route>
      </Switch>
      </div>
    </Router>
   
  );
}

export default App;
