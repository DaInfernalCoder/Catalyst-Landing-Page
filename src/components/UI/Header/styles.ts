'use client';
import Link from 'next/link';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  padding: 1rem 0;
  border-bottom: 0.5px solid #3d3d3d;

  @media (max-width: 768px) {
    padding: 0.75rem 0;
  }
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const LogoContainer = styled.div`
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

export const BurgerMenu = styled.div`
  display: none;
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.75rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  a {
    color: var(--link-color);
    font-size: 1rem;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    position: static;
    transform: none;
    gap: 1.5rem;
    margin-left: auto;

    a {
      font-size: 0.9rem;
      font-weight: 500;
      color: var(--link-color);
      text-decoration: none;
    }
  }
`;

export const AbsoluteLinks = styled(Link)`
  position: absolute;
  top: 40px;
  color: var(--link-color);
  font-size: 1rem;
  font-weight: 400;
`;

export const CallToActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  div {
    span {
      color: var(--white);
      font-size: 1rem;
      font-weight: 600;
    }
  }

  @media (max-width: 768px) {
    div {
      span {
        color: var(--white);
        font-size: 0.9rem;
        font-weight: 600;
      }
    }
  }
`;
