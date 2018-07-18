import React, { Component } from 'react';
import './App.css';
import HeroList from './HeroComponents/HeroList'
import TeamsList from './TeamComponents/teamsList'
import NavBar from './navbar';
import Login from './Login/Login';


class App extends Component {

  constructor() {
    super();

    this.state = {
      heroList: [],
      teamList: [],
      currentTeam: {},
      loggedIn: false,
    }
  }

  componentDidMount() {
    this.fetchHeroList();
    this.fetchTeamList();
  }

  fetchHeroList() {
    fetch('http://localhost:3001/api/v1/heroes')
    .then(resp => resp.json())
    .then(heroList => {
      console.log(heroList);
      
      // this.setState({
      //   heroList
      // })
    })
  }

  fetchTeamList() {
    fetch('http://localhost:3000/api/v1/teams')
    .then(resp => resp.json())
    .then(teams => {
      this.setState({
        teamList: teams
      })
    })
  }
  


  addHeroToTeam = (hero) => {
    if(this.state.currentTeam.includes(hero)) {
      alert('Hero is already in your team!');
    } else {
      this.setState({
        currentTeam: [...this.state.currentTeam, hero]
      })
    }
  }

  removeHeroFromTeam = (teamHero) => {
    let index = this.state.currentTeam.indexOf(teamHero);
    let newTeam = this.state.currentTeam
    newTeam.splice(index, 1);
    this.setState({
      currentTeam: [...newTeam]
    })
  }

  render() {
    console.log("Team List");
    console.log(this.state.teamList);
    
   if (this.state.loggedIn === false) {
     return (
       <div className="row">
         <div className="col-4">
         <NavBar teamLogout={this.teamLogout} loggedIn={this.state.loggedIn} />
         <Login teamLogin={this.teamLogin} />
         </div>
       </div>
     )
     } else {
     return (
       <div>
         <div>
           <NavBar teamLogout={this.teamLogout} loggedIn={this.state.loggedIn} />
         </div>
         <div className="row">
           <div className="col-4">
             <HeroList heroes={this.state.heroList} addHeroToTeam={this.addHeroToTeam}/>
           </div>
           <div className="col-8">
             <TeamsList teams={this.state.teamList} currentTeam={this.state.currentTeam} removeHeroFromTeam={this.removeHeroFromTeam}/>
           </div>
         </div>
       </div>
       )
     }
    }
}

export default App;




// render() {
//   return (
//     <div className="row">
//       <div className="col-4">
//         <HeroList heroes={this.state.heroList} addHeroToTeam={this.addHeroToTeam}/>
//       </div>
//       <div className="col-8">
//         <TeamsList teams={this.state.teamList} currentTeam={this.state.team} removeHeroFromTeam={this.removeHeroFromTeam}/>
//       </div>
//     </div>
//   );
// }
