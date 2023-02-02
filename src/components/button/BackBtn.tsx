import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Btn = styled.button`
  background-color: var(--black); /* choose your own background color */
  color: white;
  border-radius: 5px;
  margin: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;

export const BackBtn = () => {
  const navigate = useNavigate();

  return (
    <Btn
      type='button'
      onClick={() => {
        navigate(-1);
      }}
    >
      뒤로가기
    </Btn>
  );
};
