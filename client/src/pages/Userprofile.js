import React, { Component } from 'react';
import styled from 'react-emotion';
import Game from '../components/Gameplay/Game';
import Categories from "../components/Gameplay/Categories";
import SingleTriviaSearch from "../components/Gameplay/SingleTriviaSearch";
import MultiTriviaSearch from "../components/Gameplay/MultiTriviaSearch";
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
        this.state = {
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
          key: ''    
        };
      };


    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
        [name]: value
        });

        console.log(event.target.id);

        if (event.target.id === 'mode') {
            this.setState({mode: event.target.value});
            this.showMode(value);
        }
        if (event.target.id === 's-level' || event.target.id === 'm-level') {
            this.setState({level: event.target.value});
            this.showCategories(value);
        }
        if (event.target.id === 'playerNum') {
            this.setState({playerNum: event.target.value});
            this.showPlayerNum(value);
        }
        if (event.target.id === 'category') {
            this.setState({categoryPick: event.target.value});
        }

    };
    
    showCategories= level => {
        if (level === 'default') {
          console.log("No difficutly level choosen");
        };
        if (level === 'hard') {
          console.log("You have choosen difficulty level: " + level);
        };
        if (level === 'insanity') {
          console.log("You have choosen difficutly level: " + level);
        }
        if (level === 'normal') {
          console.log("You have choosen difficulty level normal - now choose your category");
          return  <Categories categories={this.props.categories} categoryPick={this.props.categoryPick} handleChange={this.handleChange}/>
        };
    };
    
    showMode = mode => {
        if (mode === 'default') {
          console.log("No mode choosen");
        };
        if (mode === 'singleMode') {
          console.log("You chose single mode");
          return <SingleTriviaSearch value={this.props.value} categories={this.props.categories} questions={this.props.questions} mode={this.props.mode} level={this.props.level} playerNum={this.props.playerNum} categoryPick={this.props.categoryPick} handleChange={this.handleChange} showMode={this.showMode} showCategories={this.showCategories}/>
        };
        if (mode === 'multiMode') {
          console.log("You chose multiplayer mode");
          return <MultiTriviaSearch value={this.props.value} categories={this.props.categories} questions={this.props.questions}mode={this.props.mode} level={this.props.level} playerNum={this.props.playerNum} categoryPick={this.props.categoryPick} handleChange={this.handleChange} showMode={this.showMode} showCategories={this.showCategories}/>
        };
    };
    
    showPlayerNum= playerNum => {
        if (playerNum === 'default') {
          console.log("No number selected for players");
        };
        if (playerNum === 'four') {
          console.log("Four players selected");
          return <div>
          <div id="player2-cat">
            <p>Player 2 Category</p>
            <Categories categories={this.props.categories} categoryPick={this.props.categoryPick} handleChange={this.handleChange} id="player2-select"/>
          </div>
          <div id="player3-cat">
            <p>Player 3 Category</p>
            <Categories categories={this.props.categories} categoryPick={this.props.categoryPick} handleChange={this.handleChange} id="player3-select"/>
          </div>
          <div id="player4-cat">
            <p>Player 4 Category</p>
            <Categories categories={this.props.categories} categoryPick={this.props.categoryPick} handleChange={this.handleChange} id="player4-select"/>
          </div>
          </div>
        };
        if (playerNum === 'three') {
          console.log("Three players selected");
          return <div>
          <div id="player2-cat">
            <p>Player 2 Category</p>
            <Categories categories={this.props.categories} categoryPick={this.props.categoryPick} handleChange={this.handleChange} id="player2-select"/>
          </div>
          <div id="player3-cat">
            <p>Player 3 Category</p>
            <Categories categories={this.props.categories} categoryPick={this.props.categoryPick} handleChange={this.handleChange} id="player3-select"/>
          </div>
          </div>
        };
        if (playerNum === 'two') {
          console.log("Three players selected");
          return <div>
          <div id="player2-cat">
            <p>Player 2 Category</p>
            <Categories categories={this.props.categories} categoryPick={this.props.categoryPick} handleChange={this.handleChange} key="player2-select"/>
          </div>
          </div>
        };
    };

    // When the form is submitted, search the Giphy API for `this.state.search`
    handleFormSubmit = event => {
        event.preventDefault();
        // this.searchTrivia(this.state.search);
        // this.state.mode = "single";
        console.log(this.state.mode);
    
        // this.state.level= "hard";
        console.log(this.state.level);
    
        this.searchTrivia();
        console.log(this.state.questions);
        this.searchTrivia();

    };  
    
    searchTrivia = () => {
        
        if (this.state.mode === "single" && this.state.level === "hard") {
          var query = ".php?amount=20&difficulty=medium"
          API.searchSingleHard(query)
            .then(res => this.setState({ questions: res.data.results}))
            .catch(err => console.log(err));
        }
    };
    
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
                    {/* {this.props.username} */}
                    !
                    <a style={buttonStyle} href="/" className="btn-default btn-sm">Logout</a>
                    </h4>
                </div>
                <UserWrapper column>
                    <Game value={this.state.value} categories={this.state.categories} questions={this.state.questions} mode={this.state.mode} level={this.state.level} playerNum={this.state.playerNum} categoryPick={this.state.categoryPick} handleChange={this.handleChange} showMode={this.showMode} showCategories={this.showCategories}/>
                </UserWrapper>
            </div>
        );
      }
    }
    
export default Userprofile