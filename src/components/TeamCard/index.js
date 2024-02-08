// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {team} = props
  const {name, teamImageUrl, id} = team
  return (
    <Link to={`/team-matches/${id}`} className="team-link">
      <li className="list1">
        <img src={teamImageUrl} alt={name} className="img1" />
        <p>{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
