import React from 'react'

import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar } from './components/Navbar';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
    </div>
  )
}

export default App;