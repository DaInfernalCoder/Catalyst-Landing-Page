"use client";
import Image from "next/image";
import { Edge, Edges, Title } from "../FinancialFreedom/styles";
import {
  Wrapper,
  Inner,
  Header,
  HeaderMainText,
  LinkContainer,
} from "./styles";
import { MaskText } from "@/components";
import { useIsMobile } from "../../../../libs/useIsMobile";
import {
  desktopHeaderPhrase,
  desktopParagraphPhrase,
  edges,
  mobileHeaderPhrase,
  mobileParagraphPhrase,
} from "./constants";

const IntroSection = () => {
  const isMobile = useIsMobile();

  return (
    <Wrapper>
      <Inner>
        <Header>
          <h3>Introducing</h3>
          <HeaderMainText>
            {isMobile ? (
              <>
                <MaskText phrases={mobileHeaderPhrase} tag="h1" />
                <MaskText phrases={mobileParagraphPhrase} tag="p" />
              </>
            ) : (
              <>
                <MaskText phrases={desktopHeaderPhrase} tag="h1" />
                <MaskText phrases={desktopParagraphPhrase} tag="p" />
              </>
            )}
          </HeaderMainText>
        </Header>

        <LinkContainer>
          <p>Ready to start your entrepreneurship journey?</p>
          <a
            href="https://useultra.ai"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit useultra.ai
          </a>
        </LinkContainer>

        <Edges>
          {edges.map((edge, i) => (
            <Edge key={i}>
              <Title>
                <Image src={edge.icon} alt="icon" />
                <MaskText phrases={new Array(edge.point)} tag="h3" />
              </Title>
              <MaskText phrases={new Array(edge.details)} tag="p" />
            </Edge>
          ))}
        </Edges>
      </Inner>
    </Wrapper>
  );
};

export default IntroSection;
