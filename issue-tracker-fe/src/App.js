import './App.css';
import { Switch, Route } from 'react-router-dom'
import IssuesList from './components/issues/IssuesList'

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/api/v1/issues">
          <IssuesList />
        </Route>
      </Switch>
    </div>

  )

}

export default App;
