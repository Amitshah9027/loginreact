import './App.css';
import Login from './component/login';
import Das from './component/Das';
import useHistory from "use-history";
import { Router ,Route, BrowserRouter } from "react-router-dom";
import Switch from "react-switch";
function App() {
  return (
    <div>
  <Router>
        <Route exact path="/login" >
        <Login/>
        </Route>
		<Route exact path="/" >
      <Das/>
      </Route>
      </Router>
   
  </div>
  );
}

export default App;
