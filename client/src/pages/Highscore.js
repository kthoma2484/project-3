import React from 'react';
import styled from 'react-emotion';
import { Table } from 'react-bootstrap';


const HighScoreWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'justify',
    margin: "0 auto",
    maxWidth: "1200px",
    fontSize: "30px",
    '@media (max-width:1020px)': {
      fontSize: '28px',
    },
    '@media (max-width:920px)': {
      fontSize: '22px',
    },
    '@media (max-width:740px)': {
      fontSize: '18px',
    },
    '@media (max-width:580px)': {
      fontSize: '12px',
    }
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
      <div>
      <p>Single Player High Scores</p>
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
      <p>Multi-Player High Scores</p>
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