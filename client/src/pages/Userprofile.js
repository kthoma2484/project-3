import React, { Component } from 'react';
import styled from 'react-emotion';
import Game from '../components/Gameplay/Game';
import Categories from "../components/Gameplay/Categories";
import SingleTriviaSearch from "../components/Gameplay/SingleTriviaSearch";
import MultiTriviaSearch from "../components/Gameplay/MultiTriviaSearch";
import TriviaGame from "../components/Gameplay/TriviaGame";
import API from "../utils/API";

const UserWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'justify',
    fontSize: '18',
    margin: "0 auto",
    maxWidth: "800px",
});

const divStyle = {
    margin: '20px',
    overflow: 'auto',
    height: '600px'
};

const userWelcome = {
    textAlign: 'left',
    fontSize: '12px'
};

const buttonStyle = {
    color: 'darkblue',
    margin: 15,
};

class Userprofile extends Component {
    constructor(props) {
        super(props);
        this.gameCreated = false
        this.state = {
          username: "",
          categories: [
            {"id": 9, "name": "General Knowledge"},
            {"id": 10, "name": "Entertainment: Books"},
            {"id": 11, "name": "Entertainment: Film"},
            {"id": 12, "name": "Entertainment: Music"},
            {"id": 13, "name": "Entertainment: Musicals & Theatres"},
            {"id": 14, "name": "Entertainment: Television"}, 
            {"id": 15, "name": "Entertainment: Video Games"}, 
            {"id": 16, "name": "Entertainment: Board Games"}, 
            {"id": 17, "name": "Science & Nature"}, 
            {"id": 18, "name": "Science: Computers"}, 
            {"id": 19, "name": "Science: Mathematics"}, 
            {"id": 20, "name": "Mythology"}, 
            {"id": 21, "name": "Sports"}, 
            {"id": 22, "name": "Geography"}, 
            {"id": 23, "name": "History"}, 
            {"id": 24, "name": "Politics"}, 
            {"id": 25, "name": "Art"}, 
            {"id": 26, "name": "Celebrities"}, 
            {"id": 27, "name": "Animals"}, 
            {"id": 28, "name": "Vehicles"}, 
            {"id": 29, "name": "Entertainment: Comics"}, 
            {"id": 30, "name": "Science: Gadgets"}, 
            {"id": 31, "name": "Entertainment: Japanese Anime & Manga"}, 
            {"id": 32, "name": "Entertainment: Cartoon & Animations"}, 
          ],
          categoryPick: '',
          questions: [],
          mode: '',
          level: '',
          playerNum: '',
          score: 0,
          key: '',
        };
      };

    // Changes state based on selections and runs functions after state changed
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
        [name]: value
        });

        // Sets state player mode on selection
        if (event.target.id === 'mode') {
            this.setState({mode: event.target.value});
            this.showMode(value);
        }
        // Sets state difficulty level on selection
        if (event.target.id === 's-level') {
            this.setState({level: event.target.value});
            this.showCategories(value);
        }
        // Sets number of players in multiplyer mode on selection
        if (event.target.id === 'playerNum') {
            this.setState({playerNum: event.target.value});
            // this.showPlayerNum(value);
        }
        // Sets category pick for trivia search with easy level selection
        if (event.target.className === 'category') {
            this.setState({categoryPick: event.target.value});
        }

    };
    
    // Displays category dropdown if normal level selected
    showCategories= level => {
        if (level === 'default') {
          console.log("No difficutly level choosen");
        };
        if (level === 'hard') {
          console.log("You have choosen difficulty level: " + level);
        };
        if (level === 'insanity') {
          console.log("You have choosen difficutly level: " + level);
        };
        if (level === 'normal') { 
          console.log("!!!!!You have choosen difficulty level normal - now choose your category");
          return <Categories level={this.state.level} categories={this.state.categories} categoryPick={this.state.categoryPick} handleChange={this.handleChange}/>
        };
    };
    
    // Displays mode options based on mode selected
    showMode = mode => {
        if (mode === 'default') {
          console.log("No mode choosen");
        };
        if (mode === 'singleMode') {
          console.log("You chose single mode");
          return <SingleTriviaSearch categories={this.props.categories} questions={this.props.questions} mode={this.props.mode} level={this.props.level} playerNum={this.props.playerNum} categoryPick={this.props.categoryPick} handleChange={this.handleChange} showMode={this.showMode} showCategories={this.showCategories} handleSubmit={this.handleSubmit}/>
        };
        if (mode === 'multiMode') {
          console.log("You chose multiplayer mode");
          return <MultiTriviaSearch categories={this.props.categories} questions={this.props.questions}mode={this.props.mode} level={this.props.level} playerNum={this.props.playerNum} categoryPick={this.props.categoryPick} handleChange={this.handleChange} showMode={this.showMode} showCategories={this.showCategories} handleSubmit={this.handleSubmit}/>
        };
    };
    
    // showPlayerNum= playerNum => {
    //     if (playerNum === 'default') {
    //       console.log("No number selected for players");
    //     };
    //     if (playerNum === 'four') {
    //       console.log("Four players selected");
    //       return <div>
    //       <div id="player2-cat">
    //         <p>Player 2 Category</p>
    //         <Categories categories={this.props.categories} categoryPick={this.props.categoryPick} handleChange={this.handleChange} id="player2-select"/>
    //       </div>
    //       <div id="player3-cat">
    //         <p>Player 3 Category</p>
    //         <Categories categories={this.props.categories} categoryPick={this.props.categoryPick2} handleChange={this.handleChange} id="player3-select"/>
    //       </div>
    //       <div id="player4-cat">
    //         <p>Player 4 Category</p>
    //         <Categories categories={this.props.categories} categoryPick={this.props.categoryPick3} handleChange={this.handleChange} id="player4-select"/>
    //       </div>
    //       </div>
    //     };
    //     if (playerNum === 'three') {
    //       console.log("Three players selected");
    //       return <div>
    //       <div id="player2-cat">
    //         <p>Player 2 Category</p>
    //         <Categories categories={this.props.categories} categoryPick={this.props.categoryPick} handleChange={this.handleChange} id="player2-select"/>
    //       </div>
    //       <div id="player3-cat">
    //         <p>Player 3 Category</p>
    //         <Categories categories={this.props.categories} categoryPick={this.props.categoryPick} handleChange={this.handleChange} id="player3-select"/>
    //       </div>
    //       </div>
    //     };
    //     if (playerNum === 'two') {
    //       console.log("Three players selected");
    //       return <div>
    //       <div id="player2-cat">
    //         <p>Player 2 Category</p>
    //         <Categories categories={this.props.categories} categoryPick={this.props.categoryPick} handleChange={this.handleChange} key="player2-select"/>
    //       </div>
    //       </div>
    //     };
    // };
    
    
    handleSubmit = event => {
    // Runs trivia search function on submit
        event.preventDefault();
        console.log(this.state.mode);
        console.log(this.state.level);
    
        // Trivia search runs on submit
        this.searchTrivia();
        console.log(this.state.questions);
        this.gameCreated = true;
        console.log(this.gameCreated);
    };  

    // The trivia API search will run a specific search based on the mode and difficulty level submitted
    searchTrivia = () => {
        var query = "";

        if (this.state.level === "normal") {
          //test
          query = ".php?amount=20&category=" + "10" + "&difficulty=easy&type=multiple";

          // query = ".php?amount=20&category=" + this.state.categoryPick + "&difficulty=easy";
          API.searchTriviaApi(query)
            .then(res => this.setState({questions: res.data.results}))
            .catch(err => console.log(err));
        }
        if (this.state.level === "hard") {
          query = ".php?amount=20&difficulty=medium&type=multiple";
          API.searchTriviaApi(query)
            .then(res => this.setState({questions: res.data.results}))
            .catch(err => console.log(err));
        }
        if (this.state.level === "insanity") {
          query = ".php?amount=20&difficulty=hard&type=multiple"
          API.searchTriviaApi(query)
            .then(res => this.setState({questions: res.data.results}))
            .catch(err => console.log(err));
        }
    };

    updateScore = isCorrect => this.setState({
        score: isCorrect
            ? this.state.score + 1
            : this.state.score === 0
                ? 0
                : this.state.score - 1 })
    
      // When this component mounts, search the trivia categories
    componentDidMount = () => {
        // this.searchTrivia();
        // this.handleFormSubmit();
    };  

    componentDidUpdate = () => {
        console.log(this.state);
    };

    render() {
        return (
            <div style={divStyle}>
                <div style={userWelcome}>
                    <h4> 
                    Welcome User 
                    {this.state.username}
                    !
                    <a style={buttonStyle} href="/" className="btn-default btn-sm">Logout</a>
                    </h4>
                </div>
                <UserWrapper> 
                  {this.gameCreated ? 
                    <TriviaGame categories={this.state.categories} questions={this.state.questions} mode={this.state.mode} level={this.state.level} playerNum={this.state.playerNum} categoryPick={this.state.categoryPick} handleChange={this.handleChange} showMode={this.showMode} showCategories={this.showCategories} score={this.state.score} updateScore={this.updateScore} handleSubmit={this.handleSubmit}/>
                    :
                    <Game categories={this.state.categories} questions={this.state.questions} mode={this.state.mode} level={this.state.level} playerNum={this.state.playerNum} categoryPick={this.state.categoryPick} handleChange={this.handleChange} showMode={this.showMode} showCategories={this.showCategories} handleSubmit={this.handleSubmit}/>
                  }
                </UserWrapper>
            </div>
        );
      }
    }
    
export default Userprofile