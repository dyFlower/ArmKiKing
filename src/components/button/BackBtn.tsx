import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Btn = styled.button`
  background-color: var(--black);
  color: white;
  border-radius: 5px;
  margin: 20px;
  padding: 10px 20px;
  font-size: 16px;
  text-align: center;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: all 0.2s ease;
  cursor: pointer;
  &:hover {
    background-color: var(--red);
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
      뒤로가기
    </Btn>
  );
};
