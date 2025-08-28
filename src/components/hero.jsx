import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import  SplitText  from 'gsap/SplitText';
import { useMediaQuery } from 'react-responsive';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(SplitText, ScrollTrigger);

const Hero = () => {
  const videoRef = useRef(null);
  const videoTimelineRef = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 760 });

  useGSAP(() => {
    // Title + subtitle animations
    const heroSplit = new SplitText('.title', { type: 'chars, words' });
    const paragraphSplit = new SplitText('.subtitle', { type: 'lines' });

    heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.06,
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      y: 50,
      duration: 1.2,
      delay: 1,
      ease: 'power3.out',
      stagger: 0.1,
    });

    // Leaves animation
    gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    })
    .to('.right-leaf', { y: 300 }, 0)
    .to('.left-leaf', { y: -300 }, 0);

    // Video scroll timeline
    const startValue = isMobile ? 'top 50%' : 'center 60%';
    const endValue = isMobile ? '120% top' : 'bottom top';



    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: videoRef.current,
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
      },
    });
    videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current, {
        currentTime: videoRef.current.duration,
        ease: 'none',
      });
    };
  }, []);

  return (
    <>
      <section id="hero" className="noisy relative">
        <h1 className="title">Tequila</h1>

        {/* Leaves */}
        <img src="/images/hero-left-leaf.png" alt="left leaf" className="left-leaf" />
        <img src="/images/hero-right-leaf.png" alt="right leaf" className="right-leaf" />

        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>cool. crisp. classic.</p>
              <p className="subtitle">
                Sip the spirit<br /> of summer
              </p>
            </div>
            <div className="view-cocktails">
              <p className="subtitle">
                Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes — designed to delight your senses.
              </p>
              <a href="#cocktails">View Cocktails</a>
            </div>
          </div>
        </div>
      </section>

      {/* Background Video */}
      <div className="video absolute inset-0">
        <video
          ref={videoRef}
          src="/videos/output.mp4"
          muted
          playsInline
          preload="auto"
        />
      </div>
    </>
  );
};

export default Hero;
