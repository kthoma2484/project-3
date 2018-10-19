import React from 'react';
import styled from 'react-emotion';
import { Table } from 'react-bootstrap';


const HighScoreWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'justify',
    margin: "0 auto",
    maxWidth: "800px",
    fontSize: '14'
});
  
const divStyle = {
  margin: '20px',
  overflow: 'auto',
  height: '600px'
};

const innerDiv = {
  margin: '0 40px',
  overflow: 'auto',
  flexDirection: 'column'
}

const Highscore = () => (
    <div style={divStyle}>
    <HighScoreWrapper>
      <div style={innerDiv}>
      <h3>Single Player High Scores</h3>
      <Table responsive>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Player Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1st</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>2nd</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>3rd</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>4th</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>5th</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </Table>
      </div>
      <br/>
      <div style={innerDiv}>
      <h3>Multi-Player High Scores</h3>
      <Table responsive>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Player Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1st</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>2nd</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>3rd</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>4th</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>5th</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </Table>
      </div>
    </HighScoreWrapper>
    </div>
  );
  
  export default Highscore;