import styled, { keyframes } from "styled-components";

const loadAnimation = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const BounceAnimation = keyframes`
  0% { 
    margin-bottom: 0; 
  }

  50% { 
    margin-bottom: 1rem;
  }

  100% { 
    margin-bottom: 0;
  }
`;

export const Content = styled.div`
  margin: 20px;
  animation: ${loadAnimation} 1.5s ease-in;
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 140px);
`;

export const LoadingMessage = styled.h3`
  color: #81c5db;
  margin-right: 5px; ;
`;

export const Dot = styled.div`
  background-color: #81c5db;
  border-radius: 50%;
  width: 0.75rem;
  height: 0.75rem;
  margin: 0 0.25rem;
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${(props) => props.delay};
`;

export const BlockContainer = styled.div`
  border: 1px solid #81c5db;
  border-radius: 12px;
  padding: 10px;
  margin: 20px 0;
`;

export const FilesTitle = styled.p`
  text-align: center;
  color: #1a88ab;
  font-weight: 500;
`;

export const FilesRowContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const MainInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
