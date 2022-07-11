import React from 'react';
import './App.css';
import Board from './component/board';
import calculateWinner from './logic/calculateWinner';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
      isDescending: true,
      gamestarted: false,
      gameduration:0,
      gametimer: "",
      status:"",
      winner:[],
    };

  }

  handleClick(i) {
 
    const locations = [
      [1, 1],
      [2, 1],
      [3, 1],
      [1, 2],
      [2, 2],
      [3, 2],
      [1, 3],
      [2, 3],
      [3, 3],
      [1, 4],
      [2, 4],
      [3, 4],
      [1, 5],
      [2, 5],
      [3, 5],
      [1, 6],
      [2, 6],
      [3, 6],
      [1, 7],
      [2, 7],
      [3, 7],
      [1, 8],
    ];
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    // if (calculateWinner(squares) || squares[i]) {
    //   return;
    // }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
        location: locations[i]
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    }); 
    console.log(this.state);
    console.log(this.props);
    let winner = this.gameStatus(history,current);
    console.log('winner:',winner);
    
  }

  jumpTo(step) {

    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  sortHistory() {
    this.setState({
      isDescending: !this.state.isDescending
    });
  }
  gameTime(start){
    console.log('gametime:',start);
    if(start){
      this.setState( {
        gamestarted: start,
        gameduration:0,
        gametimer: ""
      });
      this.startGameTime()
    }else{
      this.stopGameTime()
      this.setState( {
        gamestarted: false, 
        gametimer: "",   
      });
    }
  }
  startGameTime(){ 
    const intervalId= setInterval(() =>
      this.setState({
          gameduration: this.state.gameduration + 1
        })
      , 1000);

    //this.setState({gametimer : interval});
    this.setState({gametimer :intervalId}); 
  }
  stopGameTime(){

    if (this.state.gametimer !== "") {
      clearInterval(this.state.gametimer);
    }
  }
  gameMode() {
    if(this.state.gamestart===false){
      return 'Start Game'
    }else{
      return 'Stop Game'
    }
  }
  showMove(histories){
    if(histories.length===1){
    return 'waiting for player to move';
  }
   return histories.map((step, move) => {
      if(move===0){
        return null;
      }
      const desc = move ?
        'Go to move #' + move + ' @ ' + histories[move].location
        :'Start';
      return (
          <li key={move}>
              <button onClick={() => this.jumpTo(move)}>
                  {move === this.state.stepNumber ? <b>{desc}</b> : desc}
              </button>
          </li>
      );
    });
  }
  gameStatus(history, current){
    console.log('gamestatus');
    console.log(history);
    console.log(current);
    const winner = calculateWinner(current.squares);
    console.log(winner);
    let status;
    if(history.length>6){
      if (winner) {
        status = 'Winner: ' + winner.player + ' at ' + winner.line;
      } else  if (!current.squares.includes(null)) {
        status = "draw";
      }else{
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      }
    }else{
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    this.setState({'winner': winner ? winner.line : [], 'status': status});
    return winner;
  }
  
  componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
        this.setState({
          gamestarted: false,
          gameduration:0,
          gametimer: "",
          status:""
        });
      } 
  }
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const moves = this.showMove(history);

    //only check for winner if history length is more then 6
    // if(history.length>6){
    //   if (winner) {
    //     status = 'Winner: ' + winner.player + ' at ' + winner.line;
    //   } else  if (!current.squares.includes(null)) {
    //     status = "draw";
    //   }else{
    //     status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    //   }
    // }else{
    //   status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    // }

    return (
      <div className="game">
        <div>
          {
          this.state.gamestarted ?
            <button onClick={()=> this.gameTime(false)}>Stop Game</button>
            :
            <button onClick={()=> this.gameTime(true)}>Start Game</button>
          }
          <div>Duration: {this.state.gameduration}</div>
        </div>
        <div className="court">
          <Board
              winningSquares={this.state.winner}
              squares={current.squares}
              onClick={(i) => this.handleClick(i)}
            />
        </div>
        <div className="game-info">

          <div>{this.state.status}</div>
          <ol>{this.state.isDescending ? moves : moves.reverse()}</ol>
          <button onClick={() => this.sortHistory()}>
            Sort by: {this.state.isDescending ? "Descending" : "Asending"}
          </button>
        </div>
      </div>
    );
  }
}
export default App;
