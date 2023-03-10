import { Route, Routes } from 'react-router-dom';
import Login from '../pages/auth/Login';
import SignUp from '../pages/auth/SignUp';
import Community from '../pages/Community';
import Home from '../pages/Home';
import Sentence from '../pages/Sentence';
import Word from '../pages/word/Word';

const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/word' element={<Word />} />
      <Route path='/sentence' element={<Sentence />} />
      {/* <Route path='mystudy' element={} /> */}
      <Route path='/community' element={<Community />} />
    </Routes>
  );
};

export default Routing;
