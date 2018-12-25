import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// loading in pages
import { Home } from './components/pages/home'
import { CreateNote } from './components/pages/create-note';

class App extends Component {
  render() {
    return (
      <Router>

        <div className="App" style={{background:'#0E1111'}}>

          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/create-note' component={CreateNote} />
            <Route exact path='/create-notebook' component={Home} />
            <Route exact path='/notebooks/:notebookID' component={Home} />
            <Route exact path='/note/:noteID' component={Home}/>
            <Route exact path='/notebooks' component={Home} />
          </Switch>


        </div>

      </Router>
    );
  }
}

export default App;
