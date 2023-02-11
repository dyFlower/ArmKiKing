import { signOut } from 'firebase/auth';
import { auth } from '../../firebase-config';

const LogoutBtn = () => {
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <button
      style={{ fontSize: '23px', backgroundColor: '#f0e18b', padding: '5px', borderRadius: '10px', boxShadow: '2px 5px 15px lightgray' }}
      type='button'
      onClick={() => {
        logout();
      }}
    >
      로그아웃
    </button>
  );
};

export default LogoutBtn;
