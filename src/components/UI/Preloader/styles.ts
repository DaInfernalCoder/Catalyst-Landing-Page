'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.div`
  background: var(--Background);
  color: var(--white);
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 9999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const Inner = styled.div`
  display: flex;
  gap: 2em;
  align-items: center;
  padding: 0 2em;
  overflow: hidden;
  height: 20em;

  img {
    width: 25em;
    height: 25em;
  }

  div {
    overflow: hidden;
    display: flex;
    align-items: center;

    div {
      font-weight: 600;
      font-size: 16em;
    }
  }

  @media (max-width: 768px) {
    gap: 1rem;
    height: 13rem;
    img {
      width: 5rem;
      height: 5rem;
    }

    div {
      div {
        font-size: 3.5rem;
      }
    }
  }
`;

export const SecondOverlay = styled.div`
  background: var(--emerald);
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 9990;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  opacity: 0.7;
  transition: opacity 0.3s ease;
  z-index: 10000;

  span {
    font-size: 0.9rem;
    font-weight: 400;
    color: var(--light-gray);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .scroll-icon {
    font-size: 1.2rem;
    color: var(--emerald);
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-5px);
    }
    60% {
      transform: translateY(-3px);
    }
  }

  @media (max-width: 768px) {
    bottom: 1rem;
    left: 1rem;
    
    span {
      font-size: 0.8rem;
    }
    
    .scroll-icon {
      font-size: 1rem;
    }
  }
`;
