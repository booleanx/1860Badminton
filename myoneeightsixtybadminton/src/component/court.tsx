import { Component } from "react";
import CourtArea from "./courtarea";
import './court.css';
// https://codepen.io/_bri/pen/BQbovJ 
interface Court{
    courtlayoutid: string | number;
}
class Court extends Component<any>{
    constructor(props: any) {
        super(props);
        this.state={ 
            courtlayoutid: 1, 
            courtlayout: 12,
            selectedPosition: {
                x: 0,
                y: 0
            }
         }
    
    }

    render(){
        return(
        <div>
            <h1>Court</h1> 
            <div className="selected">
                <div className="selected-x">{this.props.selectedPosition.x}</div>
                <div className="selected-y">{this.props.selectedPosition.y}</div>
            </div>
            <div className="court"> 
                <CourtArea courtlayoutid="1"/>
                <CourtArea courtlayoutid="2"/>
                <CourtArea courtlayoutid="3"/>
                <CourtArea courtlayoutid="4"/>
                <CourtArea courtlayoutid="5"/>
                <CourtArea courtlayoutid="6"/>
                <CourtArea courtlayoutid="7"/>
                <CourtArea courtlayoutid="8"/>
                <CourtArea courtlayoutid="9"/>
                <CourtArea courtlayoutid="10"/>
                <CourtArea courtlayoutid="11"/>
                <CourtArea courtlayoutid="12"/>
                <CourtArea courtlayoutid="13"/>
                <CourtArea courtlayoutid="14"/>
                <CourtArea courtlayoutid="15"/>
                <CourtArea courtlayoutid="16"  />
                <CourtArea courtlayoutid="17"  />
                <CourtArea courtlayoutid="18"  />
                <CourtArea courtlayoutid="19"  />
                <CourtArea courtlayoutid="20"  />
                <CourtArea courtlayoutid="21"  />
                <CourtArea courtlayoutid="22"   />
            </div>
        </div>
        )
    }
}
export default Court