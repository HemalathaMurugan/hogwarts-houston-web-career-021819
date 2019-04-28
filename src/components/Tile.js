import React from 'react';


class Tile extends React.Component {
    
    state = {
        showDetails: false,
        deleteButtonClicked: false
    }

    displayDetails() {
        return(
            <div class="extra content">
            <a>
                <i class = "user icon"></i>
                <h4 name="speciality">Speciality: {this.props.hog.specialty}</h4>
                <h4 name="weight">Weight: {this.props.hog.weight}</h4>
                <h4 name="greased">Greased:{this.props.hog.greased == true ? "YES" : "NO"}</h4>
                <h4 name="highest medal achieved">Highest Medal: {this.props.hog["highest medal achieved"]}</h4>
            </a>
            </div>
        )
    }

    //For some reason, the greased(boolean) value could not be displayed. So I have a ternary in the above function. Yet to find why
    
    displayNameImage() {
        return(
            <div className="ui card">
                <div className="image">
                    <img src={this.props.hog.image} onClick={ () => this.setState({
                            showDetails: this.state.showDetails == true ? false : true
                            })} 
                    />
                </div>
                <div class="content">
                    <button name="remove" onClick={ () => {this.displayDecision()} }>Delete Hog</button>
                    <h1 name= {this.props.hog.name}/>{this.props.hog.name}<h1/>
                </div>
            </div>
        )
    }

    displayDecision = () => {
        this.setState({
            deleteButtonClicked: true
        })
    }

    render(){
        return (
        <div>
            { this.state.deleteButtonClicked ?  null : this.displayNameImage()}
            
            { this.state.showDetails ? this.displayDetails() : null }
        </div>
        )
    }
}

export default Tile
