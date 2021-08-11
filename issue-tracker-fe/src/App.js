import './App.css';
import { Switch, Route } from 'react-router-dom'
import IssuesList from './components/issues/IssuesList'

function App() {

  return (
    <div className="App">
      <h1>Issue Tracker</h1>
      <IssuesList />
    </div>

  )

}

export default App;
