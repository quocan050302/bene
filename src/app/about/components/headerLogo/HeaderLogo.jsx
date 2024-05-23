'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import './headerlogo.scss';

function HeaderLogo() {
    const svgLeft = useRef(null);
    const svgCenter = useRef(null);
    const svgRight = useRef(null);

    useEffect(() => {
        const svgElements = [svgLeft.current, svgCenter.current, svgRight.current];

        gsap.set(svgLeft.current, {
            scale: 0.1215,
            x: 0,
            y: 0,
            transformOrigin: '0% 50%',
        });
        gsap.set(svgCenter.current, {
            scale: 0.1161,
            x: 0,
            y: 0,
            transformOrigin: '-90% 50%',
        });
        gsap.set(svgRight.current, {
            scale: 0.1215,
            x: 0,
            y: 0,
            transformOrigin: '100% 50%',
        });

        const svgResponsive = gsap.matchMedia();
        const logoResponsive = gsap.matchMedia();

        svgResponsive.add('(max-width: 1200px)', () => {
            gsap.to(svgLeft.current, {
                scale: 0.307,
                x: 0,
                y: 0,
                transformOrigin: '0% 50%',
            });
            gsap.to(svgCenter.current, {
                scale: 0.3138,
                x: 0,
                y: 0,
                transformOrigin: '-120% 50%',
            });
            gsap.to(svgRight.current, {
                scale: 0.3068,
                x: 0,
                y: 0,
                transformOrigin: '100% 50%',
            });
        });

        const scrollTriggers = [];

        logoResponsive.add('(max-width: 1200px)', () => {
            const tBot1 = gsap.timeline({
                scrollTrigger: {
                    trigger: '.about-diversity',
                    start: 'top-=100 50%',
                    end: 'top 50%',
                    scrub: 2,
                },
            });

            tBot1
                .to(svgLeft.current, {
                    transformOrigin: '0% 50%',
                    x: 0,
                    y: '45.5vh',
                }, 'key0')
                .to(svgCenter.current, {
                    transformOrigin: '-120% 50%',
                    x: 0,
                    y: '45.5vh',
                }, 'key0')
                .to(svgRight.current, {
                    transformOrigin: '100% 50%',
                    x: 0,
                    y: '45.5vh',
                }, 'key0')
                .to(svgLeft.current, {
                    transformOrigin: '0% 50%',
                    x: 0,
                    y: '45.5vh',
                    scale: 1,
                }, 'key1')
                .to(svgCenter.current, {
                    transformOrigin: '-90% 50%',
                    x: 0,
                    y: '45.5vh',
                    scale: 1,
                }, 'key1')
                .to(svgRight.current, {
                    transformOrigin: '100% 50%',
                    x: 0,
                    y: '45.5vh',
                    scale: 1,
                }, 'key1');

            scrollTriggers.push(tBot1.scrollTrigger);
        });

        const heroLogoColors = gsap.utils.toArray('.header-logo');
        const t1 = gsap.timeline({
            scrollTrigger: {
                trigger: '.home-about',
                start: 'top bottom',
                scrub: true,
                onEnter: () => {
                    heroLogoColors.forEach((heroLogoColor) => {
                        heroLogoColor.classList.add('disable');
                    });
                },
                onLeaveBack: () => {
                    heroLogoColors.forEach((heroLogoColor) => {
                        heroLogoColor.classList.remove('disable');
                    });
                },
            },
        });

        scrollTriggers.push(t1.scrollTrigger);

        const tBot2 = gsap.timeline({
            scrollTrigger: {
                trigger: '.about-diversity',
                start: 'bottom-=100 50%',
                end: 'bottom bottom',
                scrub: 2,
            },
        });

        tBot2
            .to(svgLeft.current, {
                transformOrigin: '0% 50%',
                x: 0,
                y: '38vh',
            }, 'key0')
            .to(svgCenter.current, {
                transformOrigin: '-90% 50%',
                x: 0,
                y: '38vh',
            }, 'key0')
            .to(svgRight.current, {
                transformOrigin: '100% 50%',
                x: 0,
                y: '38vh',
            }, 'key0')
            .to(svgLeft.current, {
                transformOrigin: '0% 50%',
                x: 0,
                y: '38vh',
                scale: 1,
            }, 'key1')
            .to(svgCenter.current, {
                transformOrigin: '-100% 50%',
                x: 0,
                y: '38vh',
                scale: 1,
            }, 'key1')
            .to(svgRight.current, {
                transformOrigin: '100% 50%',
                x: 0,
                y: '38vh',
                scale: 1,
            }, 'key1');

        scrollTriggers.push(tBot2.scrollTrigger);

        return () => {
            scrollTriggers.forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div className="header-logo nuxt-link-exact-active nuxt-link-active">
            <div className="header-logo__svg header-logo__svg--left" ref={svgLeft}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1037 180" className="header-logo-mover">
                    <path d="M0 179.636V0h71.925c13.215 0 24.238 1.959 33.068 5.877 8.829 3.918 15.466 9.356 19.91 16.314 4.445 6.9 6.667 14.853 6.667 23.858 0 7.017-1.404 13.187-4.211 18.508-2.806 5.263-6.666 9.59-11.578 12.981-4.853 3.333-10.408 5.702-16.665 7.105v1.754c6.841.293 13.244 2.222 19.209 5.79 6.023 3.566 10.906 8.566 14.648 14.998 3.742 6.374 5.614 13.976 5.614 22.806 0 9.531-2.369 18.039-7.105 25.524-4.678 7.427-11.607 13.303-20.788 17.631-9.181 4.327-20.496 6.49-33.945 6.49H0Zm37.98-31.05h30.962c10.585 0 18.303-2.017 23.157-6.052 4.853-4.094 7.28-9.532 7.28-16.315 0-4.97-1.199-9.356-3.596-13.157-2.398-3.801-5.819-6.783-10.263-8.947-4.385-2.163-9.619-3.245-15.7-3.245H37.98v47.716Zm0-73.416h28.156c5.204 0 9.824-.906 13.858-2.719 4.094-1.871 7.31-4.503 9.649-7.894 2.397-3.392 3.596-7.456 3.596-12.192 0-6.491-2.31-11.725-6.93-15.7-4.56-3.977-11.051-5.965-19.472-5.965H37.98v44.47Z"></path>
                    <path d="M146.01 179.636V0h121.044v31.314H183.99v42.804h76.836v31.313H183.99v42.892h83.415v31.313H146.01Z" className="bennett__letter"></path>
                    <path d="M430.212 0v179.636h-32.805L319.254 66.574h-1.315v113.062h-37.98V0h33.331l77.538 112.974h1.579V0h37.805Z" className="bennett__letter"></path>
                    <path d="M594.553 146.794H505.03l-20.351 32.842H444.29L535.632 0h40.878l91.342 179.636h-40.388l-32.91-32.842Zm-15.087-28.724L549.83 57.214l-29.724 60.856h59.36Z" className="bennett__letter"></path>
                    <path d="M665.197 179.636V0h37.98v148.322H772.9v31.314H665.197Z"></path>
                </svg>
            </div>
            <div className="header-logo__svg header-logo__svg--center" ref={svgCenter}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 115" className="header-logo-mover">
                    <path d="M.2 0h33.31v86.24H100.6v28.98H.2V0Z" className="bennett__letter"></path>
                    <path d="M111.21 0h34.61l53.42 85.55h.51V0h31.7v115h-33.86l-53.83-85.84h-.51v85.84h-31.04V0Z" className="bennett__letter"></path>
                    <path d="M238.48 115V0h96.5v28.86h-63.19v14.72h57.2v27.59h-57.2v15.97h64.23v27.86h-97.54Z"></path>
                    <path d="M336.57 0h34.31v86.24H403.97v28.98H336.57V0Z"></path>
                    <path d="M418.67 0H453.3l53.42 85.55h.51V0h31.7v115h-33.85l-53.84-85.84h-.51v85.84h-31.04V0Z" className="bennett__letter"></path>
                    <path d="M590.39 93.23v21.77h-98.01V0h96.5v28.86h-63.19v14.72h57.2v27.59h-57.2v22.06h64.23Z"></path>
                    <path d="M601.6 0h34.3v86.24h33.87v28.98H601.6V0Z" className="bennett__letter"></path>
                    <path d="M708.17 112.83h-37.78l47.56-56.56-45.83-56.27h39.14l26.05 34.24h.51V0h31.04v34.6l25.8-34.6h38.53l-45.8 56.12 47.82 56.71h-40.24l-27.59-36.13h-.52v36.13h-31.02V76.6h.51l-27.08 36.23Z"></path>
                </svg>
            </div>
            <div className="header-logo__svg header-logo__svg--right" ref={svgRight}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1174 180" className="header-logo-mover">
                    <path d="M365.858 127.22h-35.243L316.03 179.58h-38.916l50.593-179.58h40.221l50.698 179.58h-39.527l-7.241-52.36Zm-31.116-27.981h26.622l-13.311-96.31-13.311 96.31Z" className="bennett__letter"></path>
                    <path d="M453.176 179.636V0h37.98v148.322H560.865v31.314H453.176Z"></path>
                    <path d="M601.514 0v179.636h-37.805V0H601.514Z" className="bennett__letter"></path>
                    <path d="M774.963 93.23v21.77h-98.01V0h96.5v28.86h-63.19v14.72h57.2v27.59h-57.2v22.06h64.23Z"></path>
                    <path d="M786.173 0h34.3v86.24h33.87v28.98h-68.17V0Z" className="bennett__letter"></path>
                    <path d="M957.544 0v27.69h-58.346V54.3h52.595v27.64h-52.595v42.7h-37.98V0h96.326Z"></path>
                    <path d="M1015.58 0h37.98v93.06c0 6.469-1.255 12.48-3.765 18.035-2.51 5.504-5.932 10.296-10.263 14.374-4.332 4.027-9.541 7.215-15.625 9.565-6.034 2.298-12.825 3.448-20.373 3.448-7.548 0-14.34-1.15-20.373-3.448-6.085-2.35-11.294-5.538-15.625-9.565-4.332-4.078-7.754-8.87-10.264-14.374-2.51-5.554-3.765-11.566-3.765-18.035V0h37.98v93.06c0 2.784.628 5.196 1.882 7.237 1.254 2.04 2.923 3.667 5.007 4.878 2.083 1.162 4.5 1.744 7.253 1.744s5.171-.582 7.254-1.744c2.084-1.211 3.753-2.837 5.007-4.878 1.254-2.04 1.882-4.453 1.882-7.237V0Z"></path>
                    <path d="M1174.6 115.09c0 7.548-1.204 14.599-3.613 21.154-2.41 6.555-5.75 12.261-10.02 17.117-4.272 4.807-9.312 8.571-15.125 11.29-5.813 2.718-12.26 4.078-19.341 4.078s-13.529-1.36-19.342-4.078c-5.812-2.719-10.852-6.483-15.124-11.29-4.272-4.856-7.611-10.562-10.02-17.117-2.41-6.555-3.613-13.606-3.613-21.154 0-7.548 1.203-14.599 3.613-21.154 2.409-6.555 5.748-12.261 10.02-17.117 4.272-4.807 9.312-8.571 15.124-11.29 5.813-2.718 12.26-4.078 19.342-4.078s13.528 1.36 19.341 4.078c5.813 2.719 10.853 6.483 15.125 11.29 4.27 4.856 7.61 10.562 10.02 17.117 2.409 6.555 3.613 13.606 3.613 21.154Zm-39.004 0c0-4.468-1.005-8.513-3.015-12.134-2.01-3.621-4.742-6.528-8.197-8.719-3.455-2.19-7.352-3.285-11.691-3.285-4.339 0-8.237 1.095-11.691 3.285-3.455 2.191-6.187 5.098-8.197 8.719-2.01 3.621-3.015 7.666-3.015 12.134s1.005 8.513 3.015 12.134c2.01 3.621 4.742 6.528 8.197 8.719 3.454 2.191 7.352 3.285 11.691 3.285 4.339 0 8.236-1.094 11.691-3.285 3.455-2.191 6.187-5.098 8.197-8.719 2.01-3.621 3.015-7.666 3.015-12.134Z"></path>
                </svg>
            </div>
        </div>
    );
}
export default HeaderLogo;
