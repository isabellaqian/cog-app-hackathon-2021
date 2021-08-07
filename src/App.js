import "./App.css";
import FileUploadButton from "./components/fileuploadbutton";
import NavBar from "./components/navbar.jsx";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Page1 from "./components/page1.jsx";
import Page2 from "./components/page2.jsx";
import Page3 from "./components/page3.jsx";
import Title from "./components/title.jsx";

function App() {
  return (
    <div className="App">
      <div className="content">
        <NavBar />
        <Link to="/">{Title}</Link>
        <Link to="/browse">{Page1}</Link>
        <Link to="/upload">{Page2}</Link>
        <Link to="/play">{Page3}</Link>

        <Switch>
          <Route path="/browse">
            <Page1 />
          </Route>
          <Route path="/upload">
            <Page2 />
          </Route>
          <Route path="/play">
            <Page3 />
          </Route>
          <Route path="/">
            <Title />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
//  <React.Fragment>
//       <NavBar />
//       <FileUploadButton />
//     </React.Fragment>

export default App;
