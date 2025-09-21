import { ScrollTrigger, SplitText } from 'gsap/all';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger, SplitText);
import Navbar from './components/navbar';
import Hero from './components/hero';
import Cocktail from './components/cocktail';
// import About from './components/about';
import React from 'react'

const App = () => {
  return (
 <main>
<Navbar/>
<Hero/>
<Cocktail/>
{/* <About/> */}
 </main>
  )
}

export default App
