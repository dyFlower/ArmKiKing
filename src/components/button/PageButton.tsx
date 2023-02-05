import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Title } from '../../types/props';
import postit1 from '../../assets/images/postit1.png';
import postit2 from '../../assets/images/postit2.png';
import postit3 from '../../assets/images/postit3.png';
import postit4 from '../../assets/images/postit4.png';

const CategoryBtn = styled.button`
  width: 100%;
  font-size: 2.5rem;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0 auto;
  font-family: 'FlowerSalt';
  cursor: pointer;
  &:hover {
    font-size: 3rem;
  }
`;

const postBg = [postit1, postit2, postit3, postit4];

const PageButton = ({ props }: { props: Title }) => {
  const navigate = useNavigate();
  const routeTest = () => {
    navigate(`/${props.address}`);
  };
  return (
    <CategoryBtn
      style={{ backgroundImage: `url(${postBg[props.num]})` }}
      onClick={() => {
        routeTest();
      }}
    >
      <p>{props.title}</p>
    </CategoryBtn>
  );
};

export default PageButton;
