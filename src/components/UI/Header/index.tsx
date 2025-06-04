"use client";

import Image from "next/image";
import {
  Wrapper,
  Inner,
  LogoContainer,
  Nav,
  CallToActions,
  BurgerMenu,
} from "./styles";
import catalyst_logo from "../../../../public/svgs/catalyst_logo.svg";
import ic_bars from "../../../../public/svgs/ic_bars.svg";
import AnimatedLink from "@/components/Common/AnimatedLink";
import { useState } from "react";
import { motion } from "framer-motion";
import { links, menu } from "./constants";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100; // Offset to account for fixed header
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  const handleJoinUsClick = () => {
    scrollToSection("join");
  };

  return (
    <Wrapper>
      <Inner>
        <LogoContainer>
          <Image src={catalyst_logo} alt="catalyst_logo" priority />
          <BurgerMenu onClick={() => setIsOpen(!isOpen)}>
            <motion.div
              variants={menu}
              animate={isOpen ? "open" : "closed"}
              initial="closed"
            ></motion.div>
            <Image src={ic_bars} alt="bars" />
          </BurgerMenu>
        </LogoContainer>
        <Nav className={isOpen ? "active" : ""}>
          {links.map((link, i) => (
            <AnimatedLink
              key={i}
              title={link.linkTo}
              onClick={() => scrollToSection(link.sectionId)}
            />
          ))}
        </Nav>
        <CallToActions className={isOpen ? "active" : ""}>
          <AnimatedLink title="Join Us" onClick={handleJoinUsClick} />
        </CallToActions>
      </Inner>
    </Wrapper>
  );
};

export default Header;
