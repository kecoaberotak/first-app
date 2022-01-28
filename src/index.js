import React from "react";
import  ReactDOM  from "react-dom";


// ini pakai arrow function
const App = () => {
	// di jsx bisa memanggil apa saja, bahkan object
	const buttonText = {text: 'submit'};
	const style = {backgroundColor: 'red', color: 'white'};

	return(
		<div>
			{/* pada JSX, class diganti className */}
			<label htmlFor="name" className="label">enter e-mail</label>
			<input id="name" type="text"/>

			{/* pakai dua untuk menerapkan inline style, pakai dua kurung kurawal */}
			{/* kurung paling luar untuk menandakan penulisan nilai dalam JSX */}
			{/* dan yg didalam untuk menandakan javascript object */}
			{/* penulisan menggunakan camelCase */}
			{/* double quote untuk menandakan string, dan sisanya pakai single quote */}
			<button style={{backgroundColor: 'red', color: 'white'}}>{buttonText.text}</button>

			{/* bisa juga seperti ini untuk inline style*/}
			<button style={style}>{buttonText.text}</button>
		</div>
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