import './Scss/index.scss'
import { darkLogo } from './Apis/api'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={darkLogo} className="" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  )
}

export default App
