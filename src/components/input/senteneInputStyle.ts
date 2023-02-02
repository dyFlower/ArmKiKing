import styled from 'styled-components';

export const ParaInput = styled.textarea`
  width: 100%;
  font-size: 24px;
  overflow: visible;
  padding: 5px;
  min-height: 200px;
  overflow: hidden;
`;
export const AnswerInput = styled.div`
  border: 1px solid black;
  height: 40px;
  line-height: 40px;
  overflow: hidden;
  font-family: var(--font);
`;
export const ShowInput = styled.div`
  margin-top: 10px;
  width: 100%;
  overflow-wrap: break-word;
  border: 1px solid black;
  font-family: var(--font);
  padding: 5px;
  min-height: 200px;
`;
