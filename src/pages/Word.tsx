import { BackBtn } from '../components/button/BackBtn';
import WordForm from '../components/form/WordForm';

const InputForm: React.FC = () => {
  return (
    <>
      <BackBtn />
      <button>시작하기 </button>
      <WordForm />
    </>
  );
};

export default InputForm;
