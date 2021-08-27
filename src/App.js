import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Info from './components/InfoPanel/InfoPanel';
import ConversationView from './components/Conversation/Conversation';
import AllUsers from './components/NewLogin/NewLogin'
import NewConversation from './components/NewConversation/NewConversation';
import styles from './App.module.css'

const App= () => {

      return (
        <div className={styles.main_container}>
          <Router>

            <Switch>
          
              <Route exact path='/'>
                <Info />
                <ConversationView />
              </Route>
          
              <Route path='/users'>
                <AllUsers />
              </Route>
          
              <Route path='/newconvo'>
                <NewConversation />
              </Route>
          
            </Switch> 
          
          </Router>
        </div>
      )
}

export default App;
