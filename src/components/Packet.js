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

	}
	

	//;
	render(){
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

	return (
	<div className="Packet">
		<div className="Packet-data">
			<div>
				<h2>c {arr[analiz(this.props.id)].meat}</h2>
			</div>
			<div className="Packet-dataInsert" />
			<div className="Packet-dataWeight">				
				<p>{arr[analiz(this.props.id)].numberPortion} порций</p>
				<p>{arr[analiz(this.props.id)].mouseText}</p>
				<p>{arr[analiz(this.props.id)].komment}</p>
				
			</div>
		</div>
	<Cyrcle cyrcle={arr[analiz(this.props.id)].weight} cyrcleColor={arr[analiz(this.props.id)].cyrcleColor} />	
	</div>

		)
		}	
}

export default Packet