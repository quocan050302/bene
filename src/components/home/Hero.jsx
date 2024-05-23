'use client'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import './hero.scss';
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const triggers = Array(6).fill(null);

    const brands = ['Adidas', 'Calvin Klein', 'Hourglass', 'Eilish', 'The Outset', 'MAC'];
    const brandsTwo = ['Calvin Klein', 'Hourglass', 'Eilish', 'The Outset', 'MAC'];
    const videoSources = [
        "./home/video-01.mp4",
        "./home/video-02.mp4",
        "./home/video-03.mp4",
        "./home/video-04.mp4",
        "./home/video-05.mp4",
        "./home/video-06.mp4"
    ];

    const refHero = useRef(null)

    // Create refs for brands and inactive brands
    const HeroRefs = brands.map(() => refHero);
    const InActiveRefs = brandsTwo.map(() => refHero);

    // Create refs for video assets and figures
    const assetRefs = Array.from({ length: 6 }, () => ({
        asset: refHero,
        fig: refHero
    }));

    useEffect(() => {
        // Your animation code here
    }, []);

    return (
        <div className="home-hero">
            <div className="home-hero__wrapper">
                <div className="home-hero-triggers">
                    {triggers.map((_, index) => (
                        <div className="home-hero-trigger" key={index}></div>
                    ))}
                </div>
                <div className="home-hero__inner">
                    <div className="home-hero__sticky">
                        <div className="home-hero-titles is-visible">
                            <div className="home-hero-titles__container">
                                <div className="home-hero-titles__wrapper">
                                    {brands.map((brand, index) => (
                                        <div className={`home-hero-titles__title ${index > 0 ? 'home-hero-titles__title-pri' : ''}`}
                                            ref={HeroRefs[index]}
                                            key={brand}
                                            >
                                            <Link href="#" className="ttu h1">
                                                {brand}
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="home-hero-inactive-titles">
                            <div className="home-hero-inactive-titles__list">
                                {brandsTwo.map((brand, index) => (
                                    <div className="home-hero-inactive-titles__item ttu h1"
                                        ref={InActiveRefs[index]}
                                        key={brand}
                                    >
                                        {brand}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="home-hero-assets is-visible">
                            {videoSources.map((src, index) => (
                                <div className="home-hero-asset oh" ref={assetRefs[index].asset} key={index}>
                                    <div className="home-hero-asset__fig" ref={assetRefs[index].fig}>
                                        <div className={`base-video base-video--fit ${index === 0 ? 'base-video--loaded' : ''}`}>
                                            <video width="1920" height="1080" autoPlay muted loop>
                                                <source src={src} type="video/mp4" />
                                            </video>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
