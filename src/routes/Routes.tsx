import { Route, Routes } from 'react-router-dom';
import Community from '../pages/Community';
import Home from '../pages/Home';
import Sentence from '../pages/Sentence';
import Word from '../pages/Word';

const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/word' element={<Word />} />
      <Route path='/sentence' element={<Sentence />} />
      {/* <Route path='mystudy' element={} /> */}
      <Route path='/community' element={<Community />} />
    </Routes>
  );
};

export default Routing;
