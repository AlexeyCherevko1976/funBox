// K-10-7 1 2
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Packet.css'
import articles from '../fixtures'
import Cyrcle from './Cyrcle'

//import './components/Packet.css'
// K-11-4 2
//function Packet(props){
//K-11-7
class Packet extends React.Component{
constructor(props){
	super(props);
	const {meat}=this.props;
	const {exist}=this.props;
	const opacity=exist ? 1 : 0.5;
	const stylePacket={opacity: opacity, border: "0px solid black"} 
	//console.log(articles[0]["articles"][meat]);

	this.state={data: articles[0]["articles"][meat],
		exist: exist, stylePacket: stylePacket,
		isClick: false};
	this.handleClick=handleClick.bind(this); //16-40
	//console.log(this.state.data);
}

	
  componentDidMount() {
	//let arr=articles[0]["articles"];
	//this.setState.arr=[4,5,7];

	}

	
	//;
	render(){



	return (
	<div className="Packet" style={this.state.exist ? this.state.stylePacket : {opacity: 0.5, border: "0px solid black"}} onClick={this.handleClick} >
	
		<div className="Packet-data">
		<div>
				<h2>c {this.state.data.meat} </h2>
			</div>
			<div className="Packet-dataInsert" />
			<div className="Packet-dataWeight">				
				<p>{this.state.data.numberPortion} порций</p>
				<p>{this.state.data.mouseText}</p>
				<p>{this.state.data.komment}</p>
				
			</div>
		</div>
	<Cyrcle cyrcle={this.state.data.weight} cyrcleColor={this.state.data.cyrcleColor} />	

	</div>

		)
		}	
}

function handleClick(e){
	e.preventDefault();
	let stylePacketIs={opacity: 1, border: "4px solid red"} 
	let stylePacketNot={opacity: 1, border: "0px solid red"} 

	this.setState({
		isClick: !this.state.isClick,
		stylePacket: this.state.isClick ? stylePacketIs : stylePacketNot
	})
	console.log("----","click");

}

export default Packet

/*			<div>
				<h2>c {this.state.data.meat} </h2>
			</div>
			<div className="Packet-dataInsert" />
			<div className="Packet-dataWeight">				
				<p>{this.state.data.numberPortion} порций</p>
				<p>{this.state.data.mouseText}</p>
				<p>{this.state.data.komment}</p>
				
			</div>

	<Cyrcle cyrcle={this.state.data.weight} cyrcleColor={this.state.data.cyrcleColor} />	



			*/