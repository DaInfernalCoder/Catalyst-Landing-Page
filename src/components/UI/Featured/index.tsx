"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import big_banner from "../../../../public/images/big_banner.png";
import featured_mobile_banner from "../../../../public/images/featured_mobile_banner.png";
import ParallaxText from "@/components/Common/ParallaxImages";
import universities_image from "../../../../public/images/universities.svg";
import { Wrapper, Inner, ImageContainer, ParallaxImages, Div } from "./styles";
import RevealCover from "@/components/Common/RevealCover";
import { useIsMobile } from "../../../../libs/useIsMobile";
export const imageVariants = {
  hidden: {
    scale: 1.6,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 1.4,
      ease: [0.6, 0.01, 0.05, 0.95],
      delay: 0.2,
    },
  },
};

const Featured = () => {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <Wrapper>
        <Inner>
          <h2>This program was created by alumni from top universities</h2>
          <ParallaxImages>
            <ParallaxText baseVelocity={-4}>
              <Image
                src={universities_image}
                alt="top universities and institutions"
              />
            </ParallaxText>
          </ParallaxImages>
        </Inner>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Inner>
        {!isMobile && (
          <ImageContainer>
            <RevealCover />
            <Div
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.25, once: true }}
            >
              <Image src={big_banner} alt="big_banner" fill />
            </Div>
          </ImageContainer>
        )}
        <h2>This program was created by alumni from top universities</h2>
        <ParallaxImages>
          <ParallaxText baseVelocity={-4}>
            <Image
              src={universities_image}
              alt="top universities and institutions"
            />
          </ParallaxText>
        </ParallaxImages>
      </Inner>
    </Wrapper>
  );
};

export default Featured;
