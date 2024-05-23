'use client'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "../../../../../public/assets/libs/SplitText3.min.js"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from '@studio-freight/lenis'; 
gsap.registerPlugin(SplitText)
gsap.registerPlugin(ScrollTrigger);
import './hero.scss';

function Hero() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // GSAP Animations
        ScrollTrigger.defaults({
            scrub: true
        });

        const lines = gsap.utils.toArray(".about-hero__line");
        const timelines = [];

        lines.forEach((line) => {
            let mySplitText = new SplitText(line, {type: "chars", charsClass: "about-hero__char"});
            let chars = mySplitText.chars;

            // Calculate the midpoint for each line
            const midpoint = Math.ceil(chars.length / 2);

            // Loop through chars and assign classes for each line
            chars.forEach((char, index) => {
                if (index < midpoint) {
                    char.classList.add('left');
                } else {
                    char.classList.add('right');
                }
            });

            const tlLeft = gsap.timeline({
                scrollTrigger: {
                    trigger: line,
                    start: "-50% 50%",
                    end: "300% 50%",
                    // markers: true,
                }
            });

            const tlRight = gsap.timeline({
                scrollTrigger: {
                    trigger: line,
                    start: "-50% 50%",
                    end: "300% 50%",
                    // markers: true,
                }
            });

            tlLeft
                .to(line.querySelectorAll('.left'), {
                    x: -50
                })
                .to(line.querySelectorAll('.left'), {
                    x: 0
                });

            tlRight
                .to(line.querySelectorAll('.right'), {
                    x: 50
                })
                .to(line.querySelectorAll('.right'), {
                    x: 0
                });

            timelines.push(tlLeft, tlRight);
        });

        // Clean up function
        return () => {
            timelines.forEach(tl => tl.kill());
            lenis.destroy(); // Ensure to clean up Lenis if needed
        };
    }, []);
    return (
        <div className='about-hero about-trigger is-visible'>
            <h1 className='about-hero__title'>WHY US</h1>
            <div className="about-hero__copy h3">
                <div className="text-splitter text-splitter--splitted">
                    <div className="text-splitter--splitted-inner">
                        <div className="about-hero__line">
                            Theres a reason why you refer to your
                        </div>
                        <div className="about-hero__line">
                            idea as your baby. Because thats
                        </div>
						<div className="about-hero__line">
							how much you care about it and
                        </div>
						<div className="about-hero__line">
							believe in its potential.
                        </div>
                    </div>
                    <div className="text-splitter--splitted-inner">
                        <div className="about-hero__line">
                            But like all babies, it takes surrounding
                        </div>
                        <div className="about-hero__line">
                            it with the right people to help this
                        </div>
						<div className="about-hero__line">
                            incredible idea of yours become
                        </div>
						<div className="about-hero__line">
                            everything its supposed to be.
                        </div>
                        <div className="about-hero__line">
                            Someone who understands the unique
                        </div>
                        <div className="about-hero__line">
                            ins and outs of your project, with the
                        </div>
						<div className="about-hero__line">
                            instincts and know-how to provide
                        </div>
						<div className="about-hero__line">
                            exactly what it needs and when.
                        </div>
                    </div>
                    <div className="text-splitter--splitted-inner">
                        <div className="about-hero__line">
                            At Bennett & Clive, we call this
                        </div>
                        <div className="about-hero__line">
                            approach creative empathy. And its
                        </div>
						<div className="about-hero__line">
                            the reason why the biggest names in
                        </div>
						<div className="about-hero__line">
                            beauty, fashion and fine goods come
                        </div>
                        <div className="about-hero__line">
                            back to us again and again.
                        </div>
                    </div>
                    <div className="text-splitter--splitted-inner">
                        <div className="about-hero__line">
                            Were connectors, problem-solvers
                        </div>
                        <div className="about-hero__line">
                            and forward-thinkers, able to impact
                        </div>
						<div className="about-hero__line">
                            every step of the process with
                        </div>
						<div className="about-hero__line">
                            excellence. Not just production and
                        </div>
                        <div className="about-hero__line">
                            post but brand ID and creative
                        </div>
                        <div className="about-hero__line">
                            development. With offices in New
                        </div>
                        <div className="about-hero__line">
                            York, Los Angeles and Miami and a
                        </div>
						<div className="about-hero__line">
                            global network of the best of the best
                        </div>
						<div className="about-hero__line">
                            Bennett & Clive is poised to tap into
                        </div>
                        <div className="about-hero__line">
                            whatever it takes to turn what-if into
                        </div>
                        <div className="about-hero__line">
                            oh-wow.
                        </div>
                    </div>
                    <div className="text-splitter--splitted-inner">
                        <div className="about-hero__line">
                            Theres no greater joy than seeing an
                        </div>
                        <div className="about-hero__line">
                            idea come to life. This is your baby.
                        </div>
						<div className="about-hero__line">
                            Wed love to help you raise it.
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Hero;
