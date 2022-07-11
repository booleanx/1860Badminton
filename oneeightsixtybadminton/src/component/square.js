
import React from 'react';

function Square(props) {
    console.log(props); 
    return (
      <div 
      id ={props.id.toString()}
      className={"square " + (props.isWinning ? "square--winning" : null)} 
      onClick={props.onClick}>
        {props.value}
      </div>
    );
  }
export default Square;


// class Square extends React.Component { 
//   render() {
//     return (
//       <button 
//       className="square" 
//       onClick={() => this.props.onClick()}
//       >
//         {this.props.value}
//       </button>
//     );
//   }
// }