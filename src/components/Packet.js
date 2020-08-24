// K-10-7 1 2
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Packet.css'
import articles from '../fixtures'

//import './components/Packet.css'
// K-11-4 2
function Packet(props){
	
	let arr=articles[0]["articles"];
	
	return (
	<div className="Packet">
		<div className="Packet-data">
			<h2>c {arr[props.id].meat}</h2>
			<div className="Packet-dataInsert" />
			<div className="Packet-dataWeight">				
				<p>{arr[props.id].numberPortion} порций</p>
				<p>{arr[props.id].mouseText}</p>
				<p>{arr[props.id].komment}</p>
			</div>
		</div>
		
	</div>
		)	
}
/*
class Packet extends React.Component{
	constructor(props){
		super(props);
		const {article}=props
	}
	render(){
		return (
		<div className="Packet">
			<div className="Packet-data">
				<h2>c {props.text}</h2>
				<div className="Packet-dataInsert" />
				<div className="Packet-dataWeight">				
					<p>10 порций</p>
					<p>мышь в подарок</p>
					<p>заказчик доволен</p>
				</div>
			</div>
			
		</div>
			)
		
	}
}
*/
// K-9-15 2
export default Packet