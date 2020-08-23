// K-10-7 1 2
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//import './components/Pocket.css'
//import './components/Packet.css'
// K-11-4 2
class Packet extends React.Component{
	render(){
		const packets={
			background: '#ffffff',
			width: '325px',
			height: '475px',
			margin: '30px'
			// border: '4px solid black'
		};
		return (
		<div style={packets}>
			<h1>Hello is compos !</h1>
		</div>
			)
		
	}
}

// K-9-15 2
export default Packet