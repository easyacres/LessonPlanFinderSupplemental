import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LessonsMain from "./pages/LessonsMain";
// modif^^                 ^^^
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
    render () 
    {
      return(
    <Router>
  
        <Nav />
        <Switch>
          <Route exact path={["/", "/lessonmain"]}>
            <LessonsMain />
          </Route>
          {/* <Route exact path="/books/:id">
            <Detail />
          </Route>
          <Route>
            <NoMatch />
          </Route> */}
        </Switch>
  
    </Router>
      )
        }
      
}

export default App;
