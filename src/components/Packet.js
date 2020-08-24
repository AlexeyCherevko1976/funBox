// K-10-7 1 2
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Packet.css'
import articles from '../fixtures'

//import './components/Packet.css'
// K-11-4 2
function Packet(props){
	
	let arr=articles[0]["articles"];
	function analiz(nameId){
		if (arr[arr.length-1].length==1){
			//return arr[arr.length-1][0] //если адрес уже найден, то он уже внесен в конце массива
		}
		for(let i=0; i<arr.length; i++){
			if(arr[i].id==nameId){
				arr.push([i])
			 return i}
		}
		return arr.length-1  // возврат "нулевого массива" стоящего в конце (если данного id нет в списке)
	}
	//;
	return (
	<div className="Packet">
		<div className="Packet-data">
			<h2>c {arr[analiz(props.id)].meat}</h2>
			<div className="Packet-dataInsert" />
			<div className="Packet-dataWeight">				
				<p>{arr[analiz(props.id)].numberPortion} порций</p>
				<p>{arr[analiz(props.id)].mouseText}</p>
				<p>{arr[analiz(props.id)].komment}</p>
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