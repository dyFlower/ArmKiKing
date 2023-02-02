import styled from 'styled-components';

const CommonBtn = styled.div`
  background-color: var(--black);
  color: white;
  padding: 12px 32px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 25px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--red);
  }
`;

export default CommonBtn;
