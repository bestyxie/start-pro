import React from 'react'
import ReactDOM from 'react-dom'
import App from './src/main'
import { env } from 'config'
console.log('config ====', env)

ReactDOM.render(<App />, document.getElementById('app'))