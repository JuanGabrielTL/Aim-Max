import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Apex from './pages/Apex';
import Cod from './pages/Cod';
import Csgo from './pages/Csgo';
import Exercises from './pages/Exercises';
import Fortnite from './pages/Fortnite';
import Guides from './pages/Guides';
import Home from './pages/Home';
import Overwatch from './pages/Overwatch';
import ReactionTime from './pages/ReactionTime';
import SearchNumber from './pages/SearchNumber';
import SearchColor from './pages/SearchColor';
import Six from './pages/Six';
import Skills from './pages/Skills';
import Valorant from './pages/Valorant';
import './styles/app.css';
import ColoredText from './pages/ColoredText';
import CaptureColor from './pages/CaptureColor';
import FigureChange from './pages/FigureChange';
import SoundReaction from './pages/SoundReaction';
import SchulteTable from './pages/SchulteTable';
import VisualMemory from './pages/VisualMemory';
import PressKey from './pages/PressKey';
import LongestLine from './pages/LongestLine';
import ClickLimit from './pages/ClickLimit';
import TypingTest from './pages/TypingTest';
import TargetShoot from './pages/TargetShoot';
import FindImpostor from './pages/FindImpostor';
import TrafficLights from './pages/TrafficLights';
import LeaderBoard from './pages/LeaderBoard';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/exercises' component={Exercises}/>
      <Route exact path='/skills' component={Skills}/>
      <Route exact path='/guides' component={Guides}/>
      <Route exact path='/leaderboard' component={LeaderBoard}/>
      <Route exact path='/valorant' component={Valorant}/>
      <Route exact path='/overwatch' component={Overwatch}/>
      <Route exact path='/apex' component={Apex}/>
      <Route exact path='/csgo' component={Csgo}/>
      <Route exact path='/fortnite' component={Fortnite}/>
      <Route exact path='/cod' component={Cod}/>
      <Route exact path='/six' component={Six}/>

      <Route exact path='/exercises/reactionTime' component={ReactionTime}/>
      <Route exact path='/exercises/searchNumber' component={SearchNumber}/>
      <Route exact path='/exercises/findImpostor' component={FindImpostor}/>
      <Route exact path='/exercises/searchColor' component={SearchColor}/>
      <Route exact path='/exercises/coloredText' component={ColoredText}/>
      <Route exact path='/exercises/captureColor' component={CaptureColor}/>
      <Route exact path='/exercises/figureChange' component={FigureChange}/>
      <Route exact path='/exercises/soundReaction' component={SoundReaction}/>
      <Route exact path='/exercises/schulteTable' component={SchulteTable}/>
      <Route exact path='/exercises/visualMemory' component={VisualMemory}/>
      <Route exact path='/exercises/trafficLights' component={TrafficLights}/>
      <Route exact path='/exercises/pressKey' component={PressKey}/>
      <Route exact path='/exercises/longestLine' component={LongestLine}/>
      <Route exact path='/exercises/clickLimit' component={ClickLimit}/>
      <Route exact path='/exercises/typingTest' component={TypingTest}/>
      <Route exact path='/exercises/targetShoot' component={TargetShoot}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
