'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.footer`
  padding-bottom: 3.5rem;
`;

export const Inner = styled.main`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.75rem;

  @media (max-width: 768px) {
    gap: 2.5rem;
  }
`;

export const FooterLogo = styled.div`
  width: 16rem;
  height: 6.72rem;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    width: 13.2rem;
    height: 5.6rem;
  }
`;

export const FooterMainContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3.75rem 0 3.25rem;
  border-top: 0.0625rem solid #3d3d3d;
  gap: 3.25rem;
`;

export const FooterMiddle = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 3.5rem;
  }
`;


export const FooterNavigation = styled.div`
  display: flex;
  gap: 4rem;

  @media (max-width: 768px) {
    gap: 3rem;
  }
`;

export const GridColumn = styled.div`
  display: flex;
  min-width: 12.5rem;
  width: auto;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  @media (max-width: 768px) {
    min-width: auto;
  }
`;

export const LinksContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  li {
    color: #efefef;
    font-size: 1rem;
    font-weight: 400;
    cursor: pointer;
    position: relative;

    &::after {
      position: absolute;
      content: '';
      width: 100%;
      height: 1px;
      background-color: #efefef;
      left: 0;
      bottom: -5px;
      transform: scaleX(0);
      transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
      transform-origin: center;
    }

    &:hover {
      &::after {
        width: 100%;
        transform: scaleX(1);
      }
    }
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Translator = styled.div`
  display: flex;
  align-items: center;
  gap: 1.12rem;
  cursor: pointer;
  position: relative;

  h3 {
    font-size: 1.5rem;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    gap: 0.5rem;

    h3 {
      font-size: 0.875rem;
    }
  }
`;

export const LanguageDropdown = styled.div`
  position: absolute;
  top: -200px;
  left: 0;
  background: #1a1a1a;
  border: 1px solid #3d3d3d;
  border-radius: 0.5rem;
  min-width: 200px;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
`;

export const LanguageOption = styled.div<{ $isSelected: boolean }>`
  padding: 0.75rem 1rem;
  font-size: 1rem;
  color: ${props => props.$isSelected ? '#10B981' : '#efefef'};
  background: ${props => props.$isSelected ? 'rgba(16, 185, 129, 0.1)' : 'transparent'};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(16, 185, 129, 0.1);
    color: #10B981;
  }

  &:first-child {
    border-radius: 0.5rem 0.5rem 0 0;
  }

  &:last-child {
    border-radius: 0 0 0.5rem 0.5rem;
  }
`;

export const CopyRight = styled.div`
  font-size: 1rem;
  font-weight: 400;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 0.875rem;
    gap: 0.25rem;
  }
`;
