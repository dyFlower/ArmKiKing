import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase-config';

const SignUp = () => {
  const [signUpEmail, setsignUpEmail] = useState('');
  const [signUpPassword, setsignUpPassword] = useState('');

  const signup = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword);
      console.log(user);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <>
      <input
        placeholder='이메일'
        onChange={(e) => {
          setsignUpEmail(e.target.value);
        }}
      />
      <input
        placeholder='비밀번호'
        onChange={(e) => {
          setsignUpPassword(e.target.value);
        }}
      />
      <button onClick={signup}>회원가입</button>
    </>
  );
};

export default SignUp;
