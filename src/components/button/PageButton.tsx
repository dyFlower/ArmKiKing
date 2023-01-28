import { useNavigate } from 'react-router-dom';
import { Title } from '../../types/props';

const PageButton = ({ props }: { props: Title }) => {
  const navigate = useNavigate();
  const routeTest = () => {
    navigate(`/${props.address}`);
  };
  return (
    <button
      onClick={() => {
        routeTest();
      }}
    >
      <p>{props.title}</p>
    </button>
  );
};

export default PageButton;
