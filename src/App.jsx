import { ScrollTrigger, SplitText } from 'gsap/all';
import gsap from 'gsap';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Cocktail from './components/cocktail';
gsap.registerPlugin(ScrollTrigger, SplitText);
import React from 'react'

const App = () => {
  return (
 <main>
<Navbar/>
<Hero/>
<Cocktail/>
 </main>
  )
}

export default App
