import React from 'react'
import ReactDOM from 'react-dom'

const App: React.FC = () => {
  return (
    <div>
      <span>Hello enterprise</span>
    </div>
  )
}
console.log('abc')

ReactDOM.render(<App />, document.getElementById('app'))
