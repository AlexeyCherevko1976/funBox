import React, {Component} from 'react';
//import ReactDOM from 'react-dom';
import './App.css'
import Packet from './components/Packet'
//import articles from './fixtures'


//function App() {
class App extends React.Component{


render(){

  return (
  <div>
    <div className="App-header">
        Ты сегодня покормил кота? 
    </div>
    <div className="App-kats">
        <Packet meat="foieGras" exist={true} />
        <Packet meat="fish" exist={true} />
        <Packet meat="cheecken" exist={false} />
        
    </div>
  </div>
  );
}
  
}




export default App
     /*   <Packet meat="fish"/>
        <Packet meat="cheecken"/>*/