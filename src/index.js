import React from "react";
import  ReactDOM  from "react-dom";

// ini pakai arrow function
const App = () => {
	return(
		<div>Hi There!</div>
	)
}

// ini pakai function biasa
// function App() {
// 	return(
// 		<div>Hi There!</div>
// 	)
// }

// Dua cara render ini sama aja
// ReactDOM.render(<App/>, document.getElementById('root'))
ReactDOM.render(<App/>, document.querySelector('#root'))