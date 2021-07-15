import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
	// had to remove strictmode because material-ui devs not keeping up with react
	// <React.StrictMode>
	<>
		<App />
		{/* </React.StrictMode>, */}
	</>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
