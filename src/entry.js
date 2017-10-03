import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom'

import rootReducer from './reducers'

import App from './containers/App'

const middleware = [ thunk ]

if(process.env.NODE_ENV !== 'production') {
	middleware.push(createLogger())
}

const store = createStore(
	rootReducer,
	applyMiddleware(...middleware)
)

render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
)
