import React from 'react'
import Info from './components/InfoPanel/InfoPanel';
import Hero from './components/Hero/Hero';
import styles from './App.module.css'

const App= () => {

      return (
        <div className={styles.main_container}>
          <Info />
          <Hero />
        </div>
      )
}

export default App;
