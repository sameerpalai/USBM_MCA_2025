import './App.css'
import Navbar from './components/Navbar'
import Home from "./components/Home"
import About from './components/About'
import Contact from './components/Contact'
import Blog from './components/Blog'
import ErrorPage from './components/ErrorPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <div>
       {/* <h1 className="text-4xl subpixel-antialiased	font-bold	" >React Router DOM </h1> */}
<Router>
<Navbar />
  <Routes>
    <Route path="/" element={<Home />}/>    
    <Route path="/about" element={<About />}/>   
    <Route path="/contact" element={<Contact />}/>    
    <Route path="/blog" element={<Blog />}/>   
    <Route path="*" element={<ErrorPage />}/>   

    </Routes>
</Router>

  
      </div>
     
    </>
  )
}

export default App
