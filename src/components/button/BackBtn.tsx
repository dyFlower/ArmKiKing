import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Btn = styled.button`
  position: absolute;
  left: 15px;
  top: 33px;
  padding: 5px 10px;
  font-size: 20px;
  color: white;
  background-color: var(--black);
  border-radius: 5px;
  text-align: center;
  transition: all 0.2s ease;
  cursor: pointer;
  &:hover {
    background-color: #007f3f;
  }
`;

export const BackBtn = () => {
  const navigate = useNavigate();

  return (
    <Btn
      type='button'
      onClick={() => {
        navigate('/');
      }}
    >
      &#60; &#60;
    </Btn>
  );
};
