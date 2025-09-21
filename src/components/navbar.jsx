import React from "react";
import { navLinks } from "../../constants/index.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Navbar = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("nav", {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      backdropFilter: "blur(10px)",
      duration: 0.5,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom top",
        toggleActions: "play none reverse none",
        onEnter: () =>
          gsap.to("nav", {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(10px)",
          }),
        onLeaveBack: () =>
          gsap.to("nav", {
            backgroundColor: "transparent",
            backdropFilter: "blur(0px)",
          }),
      },
    });
  }, []);

  return (
    <nav className="flex justify-between items-center p-4 fixed top-0 w-full z-50 transition-colors">
      {/* Logo / Brand */}
      <a href="#home" className="flex items-center gap-2">
        <img
          src="/images/logo.png"
          alt="logo"
          className="h-8 w-auto"
        />
        <p className="font-bold text-lg text-white">Velvet Pour</p>
      </a>

      {/* Navigation Links */}
      <ul className="flex gap-6">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className="text-white hover:text-yellow-500 transition-colors"
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
