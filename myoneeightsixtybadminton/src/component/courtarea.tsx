import React, { Component } from "react";

interface iCourtAreaLayout{
    courtlayoutid: string | number;
}
class CourtArea extends Component <iCourtAreaLayout, any>{
    
    constructor(props: iCourtAreaLayout) {
        super(props);
        this.state = {
            selectedPosition: {x: 0, y: 0}, 
        }
        console.log(this.props);
        console.log(this.state.selectedPosition.x);
        console.log(this.state.selectedPosition.y);

    }

    //for all click event in the div, 
    //identify the div id and set the selectedPosition of x and y screen coordinates of the click event
    //to the state of the component
    //display the output in the element
    handleClick=(e: any)=>{
        console.log(e.target.id);
        this.setState({
            selectedPosition: {
                x: e.screenX,
                y: e.screenY,
                id: e.target.id
            }
        });
        
        console.log(this.state);
        console.log(this.state.selectedPosition.x);
        console.log(this.state.selectedPosition.y);
    }; 
    
    render(){   
        return(
            <div id={this.props.courtlayoutid.toString()} key={this.props.courtlayoutid} onClick={(e)=>this.handleClick(e)}  ></div>
        )
    }
}
export default CourtArea;