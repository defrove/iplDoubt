import {Route, Switch} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import MatchCard from './components/MatchCard'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="team-matches/:id" component={MatchCard} />
  </Switch>
)

export default App
