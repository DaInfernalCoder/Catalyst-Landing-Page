"use client";
import Image from "next/image";
import { Wrapper, Inner, Pill, HeroTextContainer } from "./styles";
import ic_chevron_right from "../../../../public/svgs/ic_chevron_right.svg";
import { GetStartedButton } from "@/components";
import MaskText from "@/components/Common/MaskText";
import { useIsMobile } from "../../../../libs/useIsMobile";
import {
  mobileParagraphPhrases,
  mobilePhrases,
  paragraphPhrases,
  phrases,
} from "./constants";

const HeroSection = () => {
  const isMobile = useIsMobile();

  const scrollToJoinSection = () => {
    const element = document.getElementById("join");
    if (element) {
      const headerOffset = 100; // Offset to account for fixed header
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Wrapper>
      <Inner>
        <Pill onClick={scrollToJoinSection}>
          <span>Join the Catalyst Community</span>
          <Image src={ic_chevron_right} alt="chevron-right" />
        </Pill>
        <HeroTextContainer>
          {isMobile ? (
            <>
              <MaskText phrases={mobilePhrases} tag="h1" />
              <MaskText phrases={mobileParagraphPhrases} tag="p" />
            </>
          ) : (
            <>
              <MaskText phrases={phrases} tag="h1" />
              <MaskText phrases={paragraphPhrases} tag="p" />
            </>
          )}
        </HeroTextContainer>
        <GetStartedButton padding="1rem 2rem" />
      </Inner>
    </Wrapper>
  );
};

export default HeroSection;
