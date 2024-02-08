// Write your code here
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import TeamMatches from '../TeamMatches'

class MatchCard extends Component {
  render() {
    return (
      <div>
        <LatestMatch />
        <TeamMatches />
      </div>
    )
  }
}

export default MatchCard
