// Write your code here
import {Component} from 'react'

class LatestMatch extends Component {
  state = {matchList: {}}
  componentDidMount = () => {
    this.matchDetails()
  }
  matchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const res = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await res.json()
    console.log(data)

    const details = data.latest_match_details

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
        <h1>{matchList.competingTeam}</h1>
        <h1>{matchList.date}</h1>
        <p>{matchList.venue}</p>
        <p>{matchList.result}</p>
        <hr />
        <p>First Innings</p>
        <p>{matchList.firstInnings}</p>
        <p>Second Innings</p>
        <p>{matchList.secondInnings}</p>
        <p>Man Of The Match</p>
        <p>{matchList.manOfTheMatch}</p>
        <p>Umpires</p>
        <p>{matchList.umpires}</p>
      </div>
    )
  }
}

export default LatestMatch
