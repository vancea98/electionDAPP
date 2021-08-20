import React, {useState} from "react";
import { DrizzleContext } from "@drizzle/react-plugin";
import { Drizzle } from "@drizzle/store";
import drizzleOptions from "./drizzleOptions";
import MyComponent from "./MyComponent";
import Dashbord from "./Dashbord";
import { BrowserRouter as Router , Switch, Route,Routes, Link } from "react-router-dom";
import "./App.css";
import SignInSide from "./SignIn";
import ElectionsDashboard from './ElectionsDashboard';
import VotersDashboard from "./VotersDashboard";


const drizzle = new Drizzle(drizzleOptions);

const App = () => {
  

  const [show, setShow] = useState('dashboard');
    // useEffect(() => {
  //   Axios.get('').then(() => {

  //   })
  // }, [show])

  // onClick={props.setShow('dashboard')}
  return (
    <DrizzleContext.Provider drizzle={drizzle}>
      <DrizzleContext.Consumer>
        {drizzleContext => {
          const { drizzle, drizzleState, initialized } = drizzleContext;

          if (!initialized) {
            return "Loading..."
          }
          
          if (show === 'dashboard')  {
            return (
              <Dashbord drizzle={drizzle} drizzleState={drizzleState} setShow={(e) => setShow(e)} />
            );
          } else if (show === 'signIn') {
            return (
              <SignInSide setShow={(e) => setShow(e)} />
            );
          } else if (show === 'electionsDashboard') {
            return (
              <ElectionsDashboard drizzle={drizzle} drizzleState={drizzleState} setShow={(e) => setShow(e)} />
            );
          } else if (show === 'votersDashboard') {
            return (
              <VotersDashboard drizzle={drizzle} drizzleState={drizzleState} setShow={(e) => setShow(e)} />
            );
          }
        }}
      </DrizzleContext.Consumer>
    </DrizzleContext.Provider>
  );
}

export default App;
