import React, { lazy } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Protectdash } from "./Protectdash";
import { Suspense } from "react";
import Loading from "./Loading";

const Login = lazy(() => import("./Login"));
const Dashboard = lazy(() => import("./Dashboard"));
const Register = lazy(() => import("./Register"));
// const Protectdash = lazy(() => import("./Protectdash"));

function App() {
  return (
    <div className="App">
      <h1>User Authentacation,Private and Public Route</h1>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Protectdash exact path="/dashboard" component={Dashboard} />
          <Route exact path="*" component={() => "404 Page Not Found"} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
