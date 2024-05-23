
'use client'
import { gsap } from "gsap";
import Hero from "./components/hero/Hero";
import History from "./components/history/History";
import HeaderLogo from "./components/headerLogo/HeaderLogo";
import TitleFixed from "./components/titleFixed/TitleFixed";
import Sustainability from "./components/sustainability/Sustainability";
import Diversity from "./components/diversity/Diversity";
import { useEffect, useRef } from "react";
const About = () => {
    const titleTwo = useRef(null);

    return (
        <div className="About">
			<HeaderLogo />
            <TitleFixed />
			<Hero />
            <History ref={titleTwo}/>
            <Sustainability />
            <Diversity />
		</div>
    );
};

export default About;
