import piggy from '../porco.png'
import React from 'react'

class Nav extends React.Component {

		render(){
			return (
				<div className="navWrapper">
					<span className="headerText">Hogwarts</span>
					<div className="TwirlyPig">
						<img src={piggy} className="App-logo" alt="piggy" />
						<span className="normalText">A React App for County Fair Hog Fans</span>
						{this.props.navBar}
						</div>
				</div>
			)
		}
}

export default Nav
