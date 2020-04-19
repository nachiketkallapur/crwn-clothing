import React from 'react';
import HomePage from './pages/homepage.component'
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';


const HatsPage = (props) => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  )
};
const TopicsList = (props) => {
  console.log(props)
  return (
    <div>
      <h1>TOPICS LIST</h1>
      <Link to={`${props.match.url}/nachiket`}>To TopicId 12</Link>
    </div>
  )
};
const TopicsDetail = (props) => {
  console.log(props)
  return (
    <div>
      <h1>TOPICS DETAIL{props.match.params.topicId}</h1>
    </div>
  )
};

const TopicsList = ()=>{
  return <h1>TOPICS LIST</h1>
}
const TopicsDetail = () =>{
  return <h1>TOPICS DETAIL</h1>
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path="/" component={HomePage} />
        <Route exact={true} path="/topics" component={TopicsList} />
        <Route path="/topics/:topicId" component={TopicsDetail} />
      </Switch>
    </div>
  );
}

export default App;
