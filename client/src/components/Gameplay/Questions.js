import React, { Component } from "react";
// import styled from 'react-emotion';


class Questions extends Component {

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <label key="questions">
            <h4>1: {this.props.questions[0].question}</h4>
            <select key={this.props.questions[0]} value={this.props.value} onChange={this.props.handleChange}>
                <option value='default'>Select Answer</option>
                <option value="wrong">{this.props.questions[0].incorrect_answers[0]}</option>
                <option value="wrong">{this.props.questions[0].incorrect_answers[1]}</option>
                <option value="correct">{this.props.questions[0].correct_answer}</option>
                <option value="wrong">{this.props.questions[0].incorrect_answers[2]}</option>        
            </select>
            <br/>
            <h4>2: {this.props.questions[1].question}</h4>
            <select key={this.props.questions[1]} value={this.props.value} onChange={this.props.handleChange}>
                <option value='default'>Select Answer</option>
                <option value="wrong">{this.props.questions[1].incorrect_answers[0]}</option>
                <option value="wrong">{this.props.questions[1].incorrect_answers[1]}</option>
                <option value="correct">{this.props.questions[1].correct_answer}</option>
                <option value="wrong">{this.props.questions[1].incorrect_answers[2]}</option>        
            </select>
            <br/>
            <h4>3: {this.props.questions[2].question}</h4>
            <select key={this.props.questions[2]} value={this.props.value} onChange={this.props.handleChange}>
                <option value='default'>Select Answer</option>
                <option value="wrong">{this.props.questions[2].incorrect_answers[0]}</option>
                <option value="wrong">{this.props.questions[2].incorrect_answers[1]}</option>
                <option value="correct">{this.props.questions[2].correct_answer}</option>
                <option value="wrong">{this.props.questions[2].incorrect_answers[2]}</option>        
            </select>
            <br/>
            <h4>4: {this.props.questions[3].question}</h4>
            <select key={this.props.questions[3]} value={this.props.value} onChange={this.props.handleChange}>
                <option value='default'>Select Answer</option>
                <option value="wrong">{this.props.questions[3].incorrect_answers[0]}</option>
                <option value="wrong">{this.props.questions[3].incorrect_answers[1]}</option>
                <option value="correct">{this.props.questions[3].correct_answer}</option>
                <option value="wrong">{this.props.questions[3].incorrect_answers[2]}</option>        
            </select>
            <br/>
            <h4>5: {this.props.questions[4].question}</h4>
            <select key={this.props.questions[4]} value={this.props.value} onChange={this.props.handleChange}>
                <option value='default'>Select Answer</option>
                <option value="wrong">{this.props.questions[4].incorrect_answers[0]}</option>
                <option value="wrong">{this.props.questions[4].incorrect_answers[1]}</option>
                <option value="correct">{this.props.questions[4].correct_answer}</option>
                <option value="wrong">{this.props.questions[4].incorrect_answers[2]}</option>        
            </select>
            <br/>
            <h4>6: {this.props.questions[5].question}</h4>
            <select key={this.props.questions[5]} value={this.props.value} onChange={this.props.handleChange}>
                <option value='default'>Select Answer</option>
                <option value="wrong">{this.props.questions[5].incorrect_answers[0]}</option>
                <option value="wrong">{this.props.questions[5].incorrect_answers[1]}</option>
                <option value="correct">{this.props.questions[5].correct_answer}</option>
                <option value="wrong">{this.props.questions[5].incorrect_answers[2]}</option>        
            </select>
            <br/>
            <h4>7: {this.props.questions[6].question}</h4>
            <select key={this.props.questions[6]} value={this.props.value} onChange={this.props.handleChange}>
                <option value='default'>Select Answer</option>
                <option value="wrong">{this.props.questions[6].incorrect_answers[0]}</option>
                <option value="wrong">{this.props.questions[6].incorrect_answers[1]}</option>
                <option value="correct">{this.props.questions[6].correct_answer}</option>
                <option value="wrong">{this.props.questions[6].incorrect_answers[2]}</option>        
            </select>
            <br/>
            <h4>8: {this.props.questions[7].question}</h4>
            <select key={this.props.questions[7]} value={this.props.value} onChange={this.props.handleChange}>
                <option value='default'>Select Answer</option>
                <option value="wrong">{this.props.questions[7].incorrect_answers[0]}</option>
                <option value="wrong">{this.props.questions[7].incorrect_answers[1]}</option>
                <option value="correct">{this.props.questions[7].correct_answer}</option>
                <option value="wrong">{this.props.questions[7].incorrect_answers[2]}</option>        
            </select>
            <br/>
            <h4>9: {this.props.questions[8].question}</h4>
            <select key={this.props.questions[8]} value={this.props.value} onChange={this.props.handleChange}>
                <option value='default'>Select Answer</option>
                <option value="wrong">{this.props.questions[8].incorrect_answers[0]}</option>
                <option value="wrong">{this.props.questions[8].incorrect_answers[1]}</option>
                <option value="correct">{this.props.questions[8].correct_answer}</option>
                <option value="wrong">{this.props.questions[8].incorrect_answers[2]}</option>        
            </select>
            <br/>
            <h4>10: {this.props.questions[9].question}</h4>
            <select key={this.props.questions[9]} value={this.props.value} onChange={this.props.handleChange}>
                <option value='default'>Select Answer</option>
                <option value="wrong">{this.props.questions[9].incorrect_answers[0]}</option>
                <option value="wrong">{this.props.questions[9].incorrect_answers[1]}</option>
                <option value="correct">{this.props.questions[9].correct_answer}</option>
                <option value="wrong">{this.props.questions[9].incorrect_answers[2]}</option>        
            </select>
            <br/>
            <h4>11: {this.props.questions[10].question}</h4>
            <select key={this.props.questions[10]} value={this.props.value} onChange={this.props.handleChange}>
                <option value='default'>Select Answer</option>
                <option value="wrong">{this.props.questions[10].incorrect_answers[0]}</option>
                <option value="wrong">{this.props.questions[10].incorrect_answers[1]}</option>
                <option value="correct">{this.props.questions[10].correct_answer}</option>
                <option value="wrong">{this.props.questions[10].incorrect_answers[2]}</option>        
            </select>
            <br/>
            <h4>12: {this.props.questions[11].question}</h4>
            <select key={this.props.questions[11]} value={this.props.value} onChange={this.props.handleChange}>
                <option value='default'>Select Answer</option>
                <option value="wrong">{this.props.questions[11].incorrect_answers[0]}</option>
                <option value="wrong">{this.props.questions[11].incorrect_answers[1]}</option>
                <option value="correct">{this.props.questions[11].correct_answer}</option>
                <option value="wrong">{this.props.questions[11].incorrect_answers[2]}</option>        
            </select>
            <br/>
            <h4>13: {this.props.questions[12].question}</h4>
            <select key={this.props.questions[12]} value={this.props.value} onChange={this.props.handleChange}>
                <option value='default'>Select Answer</option>
                <option value="wrong">{this.props.questions[12].incorrect_answers[0]}</option>
                <option value="wrong">{this.props.questions[12].incorrect_answers[1]}</option>
                <option value="correct">{this.props.questions[12].correct_answer}</option>
                <option value="wrong">{this.props.questions[12].incorrect_answers[2]}</option>        
            </select>
            <br/>
            <h4>14: {this.props.questions[13].question}</h4>
            <select key={this.props.questions[13]} value={this.props.value} onChange={this.props.handleChange}>
                <option value='default'>Select Answer</option>
                <option value="wrong">{this.props.questions[13].incorrect_answers[0]}</option>
                <option value="wrong">{this.props.questions[13].incorrect_answers[1]}</option>
                <option value="correct">{this.props.questions[13].correct_answer}</option>
                <option value="wrong">{this.props.questions[13].incorrect_answers[2]}</option>        
            </select>
            <br/>
            <h4>15: {this.props.questions[14].question}</h4>
            <select key={this.props.questions[14]} value={this.props.value} onChange={this.props.handleChange}>
                <option value='default'>Select Answer</option>
                <option value="wrong">{this.props.questions[14].incorrect_answers[0]}</option>
                <option value="wrong">{this.props.questions[14].incorrect_answers[1]}</option>
                <option value="correct">{this.props.questions[14].correct_answer}</option>
                <option value="wrong">{this.props.questions[14].incorrect_answers[2]}</option>        
            </select>
            <br/>
            <h4>16: {this.props.questions[15].question}</h4>
            <select key={this.props.questions[15]} value={this.props.value} onChange={this.props.handleChange}>
                <option value='default'>Select Answer</option>
                <option value="wrong">{this.props.questions[15].incorrect_answers[0]}</option>
                <option value="wrong">{this.props.questions[15].incorrect_answers[1]}</option>
                <option value="correct">{this.props.questions[15].correct_answer}</option>
                <option value="wrong">{this.props.questions[15].incorrect_answers[2]}</option>        
            </select>
            <br/>
            <h4>17: {this.props.questions[16].question}</h4>
            <select key={this.props.questions[16]} value={this.props.value} onChange={this.props.handleChange}>
                <option value='default'>Select Answer</option>
                <option value="wrong">{this.props.questions[16].incorrect_answers[0]}</option>
                <option value="wrong">{this.props.questions[16].incorrect_answers[1]}</option>
                <option value="correct">{this.props.questions[16].correct_answer}</option>
                <option value="wrong">{this.props.questions[16].incorrect_answers[2]}</option>        
            </select>
            <br/>
            <h4>18: {this.props.questions[17].question}</h4>
            <select key={this.props.questions[17]} value={this.props.value} onChange={this.props.handleChange}>
                <option value='default'>Select Answer</option>
                <option value="wrong">{this.props.questions[17].incorrect_answers[0]}</option>
                <option value="wrong">{this.props.questions[17].incorrect_answers[1]}</option>
                <option value="correct">{this.props.questions[17].correct_answer}</option>
                <option value="wrong">{this.props.questions[17].incorrect_answers[2]}</option>        
            </select>
            <br/>
            <h4>19: {this.props.questions[18].question}</h4>
            <select key={this.props.questions[18]} value={this.props.value} onChange={this.props.handleChange}>
                <option value='default'>Select Answer</option>
                <option value="wrong">{this.props.questions[18].incorrect_answers[0]}</option>
                <option value="wrong">{this.props.questions[18].incorrect_answers[1]}</option>
                <option value="correct">{this.props.questions[18].correct_answer}</option>
                <option value="wrong">{this.props.questions[18].incorrect_answers[2]}</option>        
            </select>
            <br/>
            <h4>20: {this.props.questions[19].question}</h4>
            <select key={this.props.questions[19]} value={this.props.value} onChange={this.props.handleChange}>
                <option value='default'>Select Answer</option>
                <option value="wrong">{this.props.questions[19].incorrect_answers[0]}</option>
                <option value="wrong">{this.props.questions[19].incorrect_answers[1]}</option>
                <option value="correct">{this.props.questions[19].correct_answer}</option>
                <option value="wrong">{this.props.questions[19].incorrect_answers[2]}</option>        
            </select>
            <br/>
        </label>
      </form>
    )
  }
};

export default Questions;
