import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Buttons from './components/Buttons';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <main>
          <Card title="User data"
          description="a boy is lived in a street"
          button="you can press here"
          image="src/download.png"
          
          
          />
         
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default App