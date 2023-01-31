import { useNavigate } from 'react-router-dom';

export const BackBtn = () => {
  const navigate = useNavigate();

  return (
    <button
      type='button'
      onClick={() => {
        navigate(-1);
      }}
    >
      뒤로가기
    </button>
  );
};
