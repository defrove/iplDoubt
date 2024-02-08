// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'

class TeamMatches extends Component {
  state = {matchList: {}}
  componentDidMount = () => {
    this.matchDetails()
  }
  matchDetails = async () => {
    console.log(this.props)
    const {match} = this.props
    const {params} = match
    const {id} = params

    const res = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await res.json()

    const details = data.recent_matches

    const update = {
      umpires: details.umpires,
      result: details.result,
      manOfTheMatch: details.man_of_the_match,
      id: details.id,
      date: details.date,
      venue: details.venue,
      competingTeam: details.competing_team,
      competingTeamLogo: details.competing_team_logo,
      firstInnings: details.first_innings,
      secondInnings: details.second_innings,
      matchStatus: details.match_status,
    }
    this.setState({matchList: update})
  }
  render() {
    const {matchList} = this.state
    return (
      <div>
        <Link to={`/team-matches/${matchList.id}`}>
          <img src={matchList.competingTeamLogo} />
          <p>{matchList.competingTeam}</p>
          <p>{matchList.result}</p>
          <p>{matchList.matchStatus}</p>
        </Link>
      </div>
    )
  }
}

export default TeamMatches
