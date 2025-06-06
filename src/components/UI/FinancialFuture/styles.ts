'use client';
import { styled } from 'styled-components';
import card_grid from '../../../../public/images/card_grid.png';

export const Wrapper = styled.section`
  padding-top: 7.75rem;
`;

export const Inner = styled.div`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 95%;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 56rem;
  margin-bottom: 6.25rem;

  h1 {
    font-size: 4.75rem;
    font-weight: 400;
  }

  p {
    max-width: 41.75rem;
    color: var(--link-color);
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.75rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.25rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    width: 100%;
  }
`;

export const Card = styled.div`
  height: 41.875rem;
  border-radius: 0.75rem;
  border: 1px solid var(--stroke, rgba(255, 255, 255, 0.04));
  background: #131313;

  @media (max-width: 768px) {
    height: 27.5rem;
    width: 100%;
    box-sizing: border-box;
  }
`;

export const TextCtn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 32.25rem;
  margin: 3.25rem 3.25rem 2.94rem 3.25rem;

  h3 {
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.75rem;
  }

  p {
    color: var(--link-color);
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.75rem;
  }

  @media (max-width: 768px) {
    margin: 1.5rem 1rem 1.75rem 1rem;
    max-width: none;

    h3 {
      font-size: 1.5rem;
      line-height: 1.75rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;

export const SVGCtn = styled.div`
  background: url(${card_grid.src});
  height: 24.55rem;
  display: grid;
  place-items: center;

  @media (max-width: 768px) {
    height: 15.28219rem;
    background-position: center center;
    background-size: contain;

    img {
      width: 7.5rem;
      height: 7.5rem;
    }
  }
`;

export const Stats = styled.div`
  margin: 6.25rem auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 768px) {
    margin: 3.75rem auto;
    gap: 0.5rem;
  }
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.75rem;
  flex: 1;
  min-width: 0;

  h1 {
    font-size: 4.25rem;
    font-weight: 600;
    line-height: 1;
  }

  p {
    color: var(--link-color);
    font-size: 1rem;
    font-weight: 500;
    text-transform: uppercase;
    line-height: 1.2;
    word-wrap: break-word;
    hyphens: auto;
  }

  @media (max-width: 768px) {
    gap: 0.5rem;
    
    h1 {
      font-size: 1.25rem;
    }

    p {
      font-size: 0.75rem;
    }
  }
`;

// export const Number = styled.h1`
//   font-size: 5rem;
//   font-weight: 600;
// `;

// export const SubTitle = styled.p`
//   color: var(--link-color);
//   font-size: 1.125rem;
//   font-weight: 500;
//   text-transform: uppercase;
// `;

export const Banner = styled.div`
  height: 45rem;
  width: 100%;
  position: relative;
  border-radius: 0.75rem;
  overflow: hidden;

  img {
    object-fit: cover;
    border-radius: 0.75rem;
  }

  @media (max-width: 768px) {
    height: 25rem;
    width: calc(100% - 4rem);
    border-radius: 1rem;
    margin: 0 auto;
    
    img {
      object-fit: cover;
      object-position: center;
      border-radius: 1rem;
    }
  }
`;
