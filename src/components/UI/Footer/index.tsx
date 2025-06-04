"use client";

import Image from "next/image";
import { useState } from "react";
import catalyst_footer_logo from "../../../../public/svgs/catalyst_footer_logo.svg";
import ic_chevron_down from "../../../../public/svgs/ic_chevron_down.svg";
import ic_copyright from "../../../../public/svgs/ic_copyright.svg";

const linksArr = [
  {
    title: "Get Started",
    links: [{ text: "Start a Chapter", action: "waitlist" }],
  },
];

const languages = [
  "English (United States)",
  "Spanish (España)",
  "French (France)",
  "German (Deutschland)",
  "Portuguese (Brasil)",
];

import {
  Wrapper,
  Inner,
  FooterLogo,
  FooterMainContent,
  FooterMiddle,
  FooterNavigation,
  GridColumn,
  LinksContainer,
  FooterBottom,
  Translator,
  CopyRight,
  LanguageDropdown,
  LanguageOption,
} from "./styles";

const Footer = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
  };

  return (
    <Wrapper>
      <Inner>
        <FooterLogo>
          <Image src={catalyst_footer_logo} alt="catalyst_footer_logo" />
        </FooterLogo>
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
            <Translator onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <h3>{selectedLanguage}</h3>
              <Image
                src={ic_chevron_down}
                alt="chevron down"
                style={{
                  transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
              />
              {isDropdownOpen && (
                <LanguageDropdown>
                  {languages.map((language, i) => (
                    <LanguageOption
                      key={i}
                      onClick={(e: React.MouseEvent) => {
                        e.stopPropagation();
                        handleLanguageSelect(language);
                      }}
                      $isSelected={language === selectedLanguage}
                    >
                      {language}
                    </LanguageOption>
                  ))}
                </LanguageDropdown>
              )}
            </Translator>
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
