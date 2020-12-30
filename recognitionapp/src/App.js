import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";


function App() {
  return (
    <div className="App">
          <Router>
              <div>
                {/* <Navbar auth={authProps} /> */}
                <Navbar /> 

                <Switch>
                  <Route
                    exact
                    path="/"
                    render={(props) => <Home {...props} />}
                  />
                  </Switch>
                  </div>
                  </Router>
    </div>
  );
}

export default App;
