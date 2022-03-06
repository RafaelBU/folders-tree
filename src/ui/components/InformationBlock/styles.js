import styled from "styled-components";

export const InformationContainer = styled.div`
  background-color: #dceaee;
  border-radius: 12px;
  padding: 10px;
  width: 90%;
  margin: 4px 0;
  text-align: center;

  @media (min-width: 768px) {
    width: 25%;
  }
`;

export const Label = styled.p`
  font-weight: 500;
`;

export const Value = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const FileType = styled.span`
  color: white;
`;
