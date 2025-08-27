import { ScrollTrigger, SplitText } from 'gsap/all';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger, SplitText);
import React from 'react'

const App = () => {
  return (
    <div>
      <h1 className="text-3xl">hi</h1>
    </div>
  )
}

export default App