"use client";

import Image from "next/image";

import ic_copyright from "../../../../public/svgs/ic_copyright.svg";

const linksArr = [
  {
    title: "Get Started",
    links: [{ text: "Start a Chapter", action: "waitlist" }],
  },
];

import {
  Wrapper,
  Inner,
  FooterMainContent,
  FooterMiddle,
  FooterNavigation,
  GridColumn,
  LinksContainer,
  FooterBottom,
  CopyRight,
} from "./styles";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleLinkClick = (action: string) => {
    if (action === "waitlist") {
      scrollToSection("join");
    }
  };

  return (
    <Wrapper>
      <Inner>
        <FooterMainContent>
          <FooterMiddle>
            <FooterNavigation>
              {linksArr.map((section, i) => (
                <GridColumn key={i}>
                  <h3>{section.title}</h3>
                  <LinksContainer>
                    {section.links.map((link, j) => (
                      <li
                        key={j}
                        onClick={() => handleLinkClick(link.action)}
                        style={{ cursor: "pointer" }}
                      >
                        {link.text}
                      </li>
                    ))}
                  </LinksContainer>
                </GridColumn>
              ))}
            </FooterNavigation>
          </FooterMiddle>
          <FooterBottom>
            <CopyRight>
              <Image src={ic_copyright} alt="copyright svg" />
              Catalyst Entrepreneurship Club
            </CopyRight>
          </FooterBottom>
        </FooterMainContent>
      </Inner>
    </Wrapper>
  );
};

export default Footer;
