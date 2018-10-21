import React, { Component } from "react";
// import styled from 'react-emotion';

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  };

class Questions extends Component {

    questions = this.props.questions.map((question, i) => {
        const incorrectAnswers = question.incorrect_answers.map(answer => ({ text: answer, value: 'wrong', selected: false }))
        const correctAnswer = { text: question.correct_answer, value: 'correct', selected: false }
        
        const answers = [...incorrectAnswers, correctAnswer]
        answers.sort((a, b) => 0.5 - Math.random())
        
        question.answers = answers
        return question
    })

  render() {

    return (
        <form  style={formStyle} onSubmit={this.props.handleSubmit}>
            <h1>Score: { this.props.score }</h1>
            {
                this.questions.map((question, i) => (
                    <label key={i}>
                        <h4>{i + 1}: <span dangerouslySetInnerHTML={{ __html: question.question }} /></h4>
                        <select onChange={this.props.handleChange}>
                            <option value='default'>Select Answer</option>
                            {
                                question.answers.map((answer, idx) => (
                                    <option key={ idx } name={`q${i + 1}`} value={ answer.value } dangerouslySetInnerHTML={{ __html: answer.text }} />
                                ))
                            }
                        </select>
                    </label>
                ))
            }
        </form>
    )
  }
};

export default Questions;
