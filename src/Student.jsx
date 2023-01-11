import { Component } from "react";
import Scores from "./Scores";

export default class Student extends Component {
    
    render() {
        
        return(
            <>
            <div>
                <h1>{this.props.name}</h1>
                <p>{this.props.bio}</p>
                <Scores 
                scores={this.props.scores}
                />
            </div>
            </>
        )
    }
}