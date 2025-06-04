'use client';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.section`
  margin-top: 8.56rem;
  background: var(--emerald);
`;

export const Inner = styled.div`
  display: flex;
  padding: 6.25rem 0;
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.header`
  text-align: center;
  max-width: 48.5rem;
  margin: 0 auto 4rem;
  h1 {
    color: var(--Background, #070606);
    font-size: 4.75rem;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
    h1 {
      font-size: 2rem;
    }
  }
`;

export const FormContainer = styled(motion.div)<{ $isSuccess?: boolean }>`
  position: relative;
  width: 100%;
  max-width: 42rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 1.5rem;
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  ${props => props.$isSuccess && `
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 
      0 0 0 1px rgba(255, 255, 255, 0.1),
      0 8px 32px rgba(0, 0, 0, 0.1),
      0 0 60px rgba(255, 255, 255, 0.1);
  `}

  @media (max-width: 768px) {
    padding: 2rem;
    border-radius: 1rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FormField = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  color: var(--Background, #070606);
  font-size: 1rem;
  font-weight: 500;
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
`;

export const Input = styled.input`
  padding: 1rem 1.25rem;
  border: 2px solid rgba(7, 6, 6, 0.2);
  border-radius: 0.75rem;
  background: rgba(255, 255, 255, 0.9);
  color: var(--Background, #070606);
  font-size: 1rem;
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(7, 6, 6, 0.5);
  }

  &:focus {
    outline: none;
    border-color: var(--Background, #070606);
    background: rgba(255, 255, 255, 1);
  }

  &.error {
    border-color: #ef4444;
  }

  @media (max-width: 768px) {
    padding: 0.875rem 1rem;
    font-size: 0.875rem;
  }
`;

export const Select = styled.select`
  padding: 1rem 1.25rem;
  border: 2px solid rgba(7, 6, 6, 0.2);
  border-radius: 0.75rem;
  background: rgba(255, 255, 255, 0.9);
  color: var(--Background, #070606);
  font-size: 1rem;
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
  transition: all 0.3s ease;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: var(--Background, #070606);
    background: rgba(255, 255, 255, 1);
  }

  &.error {
    border-color: #ef4444;
  }

  @media (max-width: 768px) {
    padding: 0.875rem 1rem;
    font-size: 0.875rem;
  }
`;

export const TextArea = styled.textarea`
  padding: 1rem 1.25rem;
  border: 2px solid rgba(7, 6, 6, 0.2);
  border-radius: 0.75rem;
  background: rgba(255, 255, 255, 0.9);
  color: var(--Background, #070606);
  font-size: 1rem;
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
  transition: all 0.3s ease;
  resize: vertical;
  min-height: 6rem;

  &::placeholder {
    color: rgba(7, 6, 6, 0.5);
  }

  &:focus {
    outline: none;
    border-color: var(--Background, #070606);
    background: rgba(255, 255, 255, 1);
  }

  &.error {
    border-color: #ef4444;
  }

  @media (max-width: 768px) {
    padding: 0.875rem 1rem;
    font-size: 0.875rem;
    min-height: 5rem;
  }
`;

export const ErrorMessage = styled(motion.span)`
  color: #ef4444;
  font-size: 0.875rem;
  font-weight: 500;
  margin-top: 0.25rem;
`;

export const SubmitButton = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.25rem 2rem;
  border: none;
  border-radius: 6.25rem;
  background: var(--Background, #070606);
  color: var(--white);
  font-size: 1.125rem;
  font-weight: 600;
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  position: relative;
  overflow: hidden;

  &:hover {
    background: rgba(7, 6, 6, 0.8);
    transform: translateY(-2px);
  }

  &:disabled {
    background: rgba(7, 6, 6, 0.5);
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
    font-size: 1rem;
  }
`;

export const LoadingSpinner = styled(motion.div)`
  width: 1.5rem;
  height: 1.5rem;
  border: 2px solid transparent;
  border-top: 2px solid var(--white);
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const SuccessMessage = styled(motion.div)`
  text-align: center;
  padding: 3rem 2rem;
  color: var(--Background, #070606);
  position: relative;
  overflow: hidden;
  
  h3 {
    font-size: 1.75rem;
    font-weight: 600;
    margin-bottom: 1rem;
    font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
  }
  
  p {
    font-size: 1.125rem;
    line-height: 1.6;
    opacity: 0.8;
    max-width: 28rem;
    margin: 0 auto;
    font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    
    h3 {
      font-size: 1.5rem;
    }
    
    p {
      font-size: 1rem;
    }
  }
`;

export const CheckIconContainer = styled(motion.div)`
  width: 5rem;
  height: 5rem;
  margin: 0 auto 2rem;
  background: var(--Background, #070606);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: var(--Background, #070606);
    opacity: 0.1;
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    width: 4rem;
    height: 4rem;
    margin-bottom: 1.5rem;
  }
`;

export const CheckIcon = styled(motion.svg)`
  width: 2rem;
  height: 2rem;
  color: var(--white);
  
  @media (max-width: 768px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;



export const SuccessButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  margin-top: 2rem;
  border: 2px solid var(--Background, #070606);
  border-radius: 6.25rem;
  background: transparent;
  color: var(--Background, #070606);
  font-size: 1rem;
  font-weight: 600;
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    background: var(--Background, #070606);
    color: var(--white);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1.25rem;
    font-size: 0.875rem;
    margin-top: 1.5rem;
  }
`;

export const RevealCover = styled(motion.div)`
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--emerald);
  z-index: 10;
  border-radius: 1.5rem;

  @media (max-width: 768px) {
    border-radius: 1rem;
  }
`;
