import styled from 'styled-components';

const CommonBtn = styled.button`
  background-color: var(--black);
  color: white;
  padding: 10px 30px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  border-radius: 15px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;

  &:hover {
    background-color: #007f3f;
  }
`;

export default CommonBtn;
