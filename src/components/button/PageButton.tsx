import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Title } from '../../types/props';

const CategoryBtn = styled.button`
  width: 20%;
  height: 260px;
  padding: 5%;
  margin: 0 10px;
  font-size: 2rem;
  border-radius: 10px;
  background-color: var(--green);
`;

const PageButton = ({ props }: { props: Title }) => {
  const navigate = useNavigate();
  const routeTest = () => {
    navigate(`/${props.address}`);
  };
  return (
    <CategoryBtn
      onClick={() => {
        routeTest();
      }}
    >
      <p>{props.title}</p>
    </CategoryBtn>
  );
};

export default PageButton;
