import { Component } from "react";
import Student from './Student'


export default class Roster extends Component {
    render() {
        const studentArray = []
        this.props.students.forEach((student, idx) => {
            studentArray.push(
                <Student
                name={student.name}
                bio={student.bio}
                scores={student.scores}

                key={idx}
                />
            )
        });
        return(
            <>
            {studentArray}
            </>
        )
    }
}