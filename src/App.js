import React from 'react'
import Info from './components/InfoPanel/InfoPanel';
import ConversationView from './components/Conversation/Conversation';
import styles from './App.module.css'

const App= () => {

      return (
        <div className={styles.main_container}>
          <Info />
          <ConversationView />
        </div>
      )
}

export default App;
