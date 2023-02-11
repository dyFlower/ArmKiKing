import { useNavigate } from 'react-router-dom';

const LoginBtn = () => {
  const navigate = useNavigate();

  return (
    <button
      style={{ fontSize: '23px', backgroundColor: '#f0e18b', padding: '5px', borderRadius: '10px', boxShadow: '2px 5px 15px lightgray' }}
      type='button'
      onClick={() => {
        navigate('/login');
      }}
    >
      로그인
    </button>
  );
};

export default LoginBtn;
