import React from "react";
import { navLinks } from "../../constants/index.js";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'

const Navbar = () => {

useGSAP(() =>{
    const navTween = gsap.timeline({
        scrollTrigger: {
            trigger: "nav",
            start: "bottom top",
            scrub: true,
        },
    });
    navTween.fromTo('nav', { backgroundColor: 'transparent'},
{
    backgroundColor: '#00000050',
    duration: 1,
    backgroundFilter: 'blur(10px)',
    ease: 'power1.inOut',
    opacity: 0,
    // onComplete: () => {
    //     navTween.fromTo('nav', { backgroundColor: '#00000050'},
    //     {
    //         backgroundColor: 'transparent',
    //         duration: 1,
    //         backgroundFilter: 'blur(0px)',
    //         ease: 'power1.inOut',
    //         opacity: 1,
    //     });
    // },
    });
}, [])






  return (
    <nav className="flex justify-between items-center p-4">
      {/* Brand / Logo */}
      <a href="#home" className="flex items-center gap-2">
        <img src="/images/logo.png" alt="logo" />
        <p className="font-bold text-lg">Velvet Pour</p>
      </a>

      {/* Navigation Links */}
      <ul className="flex gap-6">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a 
              href={`#${link.id}`} 
              className="hover:text-yellow-500 transition-colors"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
