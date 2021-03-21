import React from 'react'

//Styles
import styles from '../styles/Home.module.css'

//Components
import Head from './head/Head'
import Header from './header/Header'
import Contents from './contents/Contents'
import Footer from './footer/Footer'

//Link

export default () => {
  return (
    <div className={styles.container}>
      <Head title='Home | Gerar Link de contato whats zap' />
      <Header/>
      <Contents/>
      <Footer />
    </div>
  )
}
