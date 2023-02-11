import { auth } from '../../firebase-config';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';
import { LoginInput } from '../../components/input/loginInputStyle';
import LoginWrapper from '../../components/wrapper/loginPage/LoginWrapper';
import InputWrapper from '../../components/wrapper/loginPage/InputWrapper';
import CommonBtn from '../../components/button/CommonBtn';

const Login = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPaswword, setLoginPaswword] = useState('');
  const [user, setUser] = useState<any>({});

  onAuthStateChanged(auth, (currentUser: any) => {
    setUser(currentUser);
  });

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPaswword);
      console.log(user);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <LoginWrapper>
      <InputWrapper>
        <label htmlFor='id' style={{ marginRight: 'auto', color: 'gray' }}>
          ID
        </label>
        <LoginInput
          type='text'
          id='id'
          onChange={(e) => {
            setLoginEmail(e.target.value);
          }}
        />
        <label htmlFor='password' style={{ marginRight: 'auto', color: 'gray' }}>
          비밀번호
        </label>
        <LoginInput
          type='password'
          id='password'
          onChange={(e) => {
            setLoginPaswword(e.target.value);
          }}
        />
        <CommonBtn type='button' style={{ marginTop: '20px' }} onClick={login}>
          로그인
        </CommonBtn>
        {/* <button type='button' onClick={logout}>
          로그아웃
        </button> */}
      </InputWrapper>

      <div>{user?.email}</div>
      {/* 로그인 상태일때 홈화면에서 보여주는게 좋을 것 같다. */}
    </LoginWrapper>
  );
};

export default Login;
