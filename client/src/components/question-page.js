import React from 'react';
import * as Cookies from 'js-cookie';

export default class QuestionPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: []
        };
    }

    componentDidMount() {
        const accessToken = Cookies.get('accessToken');
        fetch('/api/questions', {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            }).then(res => {
                console.log(res);
            if (!res.ok) {
                throw new Error(res.statusText);
            }
            return res.json();
        }).then(questions =>
           { console.log(questions)
            this.setState({
                questions
            })}
        );
    }

    render() {
        const questions = this.state.questions.map((question, index) =>
            <li key={index}>{question}</li>
        );

        return (
            <ul className="question-list">
                <li>Hello world</li>
            </ul>
        );
    }
}