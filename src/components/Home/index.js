// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {list: [], isloading: true}
  componentDidMount = () => {
    this.teamDetails()
  }
  teamDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')

    const data = await response.json()
    const teams = data.teams

    const updated = teams.map(i => ({
      name: i.name,
      id: i.id,
      teamImageUrl: i.team_image_url,
    }))

    this.setState({list: updated, isloading: false})
  }
  render() {
    const {list, isloading} = this.state

    return (
      <div className="bgcon">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1>IPL Dashboard</h1>
        </Link>
        <ul className="listee">
          {list.map(i => (
            <TeamCard team={i} key={i.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
