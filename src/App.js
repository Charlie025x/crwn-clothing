import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import './sass/App.scss';

// import HomePage from './pages/homepage/homepage.component';

const HomePage = (props) => {
  console.log(props)
  return (
    <div>
      <button onClick={() => props.history.push('/topics')}>Topics</button>
      <h1>Home Page</h1>
    </div>
  )
}

const TopicsList = (props) => {
  console.log(props)
  return (
    <div>
      <h1>TOPIC LIST PAGE</h1>
      <Link to={`${props.match.url}/13`} >TO TOPIC 13</Link><br/>
      <Link to={`${props.match.url}/17`} >TO TOPIC 17</Link><br/>
      <Link to={`${props.match.url}/21`} >TO TOPIC 21</Link>
    </div>
  )
}

const TopicDetail = (props) => {
  console.log(props)
  return (
    <div>
      <h1>TOPIC DETAIL PAGE: { props.match.params.topicId} </h1>
    </div>
  )
}

function App() {
  return (
    <div>
      {/* <Switch> */}
        <Route path='/' component={HomePage} />
        <Route path='/topics' component={TopicsList} />
        <Route path='/topics/:topicId' component={TopicDetail} />
      {/* </Switch> */}
    </div>
  );
}

// function App() {
//   return (
//     <div>
//       <Switch>
//         <Route exact path='/' component={HomePage} />
//         <Route path='/hats' component={HatsPage} />
//       </Switch>
//     </div>
//   );
// }

export default App;
