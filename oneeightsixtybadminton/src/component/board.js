

import React from 'react';
import Square from './square';

export default class Board extends React.Component {

    renderSquare(i) {
      console.log(i);
      return  (
        <Square
          isWinning={this.props.winningSquares.includes(i)}
          key={"square " + i.toString()}
          id ={i.toString()}
          value={this.props.squares[i]}
          onClick={() => this.props.onClick(i)}
        />
      );
    }
  
    renderSquares(n, limit=2  ) {
      let squares = [];
      for (let i = n; i < n + limit; i++) {
        squares.push(this.renderSquare(i));
      }
      return squares;
    }
    
    renderRows(i) {
      return <>{this.renderSquares(i)}</>;
    }
    render() {   
      return (
          <>
          {this.renderRows(0)}
          {this.renderRows(1)}
          {this.renderRows(2)}
          {this.renderRows(3,1)}
          {this.renderRows(5,1 )}
          {this.renderRows(6)}
          {this.renderRows(7)}
          {this.renderRows(8)}
          {/* {this.renderRows(3)}
          {this.renderRows(12)} 
          {this.renderRows(18)} 
          {this.renderRows(22)}  */}
          {/* {this.renderRows(15)}  
          {this.renderRows(18)}  
          {this.renderRows(21)}   */}
          </>
      );
    }
  }