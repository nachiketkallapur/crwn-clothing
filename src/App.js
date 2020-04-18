import React from 'react';
import HomePage from './pages/homepage.component'
import './App.css';

const TopicsList = ()=>{
  return <h1>TOPICS LIST</h1>
}
const TopicsDetail = () =>{
  return <h1>TOPICS DETAIL</h1>
}

function App() {
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
