import React from "react";
import { navLinks } from "../../constants/index.js";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Navbar = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('nav', {
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Use rgba for transparency
      backdropFilter: 'blur(10px)',
      duration: 0.5,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: "body", // Use a trigger that encompasses the entire page
        start: "top top", // When the top of the body hits the top of the viewport
        end: "bottom top",
        toggleActions: "play none reverse none", // play on scroll down, reverse on scroll up
        onEnter: () => gsap.to('nav', {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(10px)',
        }),
        onLeaveBack: () => gsap.to('nav', {
          backgroundColor: 'transparent',
          backdropFilter: 'blur(0px)',
        })
      },
    });
  }, []);

  return (
    <nav className="flex justify-between items-center p-4 fixed top-0 w-full">
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