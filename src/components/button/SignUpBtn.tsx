import { useNavigate } from 'react-router-dom';

const LoginBtn = () => {
  const navigate = useNavigate();

  return (
    <button
      type='button'
      onClick={() => {
        navigate('/signup');
      }}
    >
      회원가입
    </button>
  );
};

export default LoginBtn;
